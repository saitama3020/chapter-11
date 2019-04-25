import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// App imports
import { Bike } from '../bike';
import { BikeService } from '../_services/bike.service';
import { AuthService } from '../../auth/_services/auth.service';
import { User } from './../../auth/user';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss']
})
export class BikeDetailComponent implements OnInit {

  bike: Bike;
  isLoading: Boolean = false;
  userVote: number;
  builders: Array<Object> = [
    {id: 1, name: 'Diamond Atelier'},
    {id: 2, name: 'Deus Ex Machina\'s'},
    {id: 3, name: 'Rough Crafts'},
    {id: 4, name: 'Roldand Sands'},
    {id: 5, name: 'Chopper Dave'}
  ];

  constructor(
    private bikeService: BikeService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.getBikeDetail();
  }

  getBikeDetail(): void {
    this.isLoading = true;
    const id =  +this.route.snapshot.paramMap.get('id');
    this.bikeService.getBikeDetail(id)
      .subscribe(bike => {
        this.isLoading = false;
        this.bike = bike['data'];
      });
  }

  onVote(rating: number, id: number): void {
    if (this.checkUserVote(this.bike.ratings)) {
      alert('you already vote on this bike');
      return;
    }
    id = +this.route.snapshot.paramMap.get('id');
    this.bikeService.voteOnBike(rating, id)
      .subscribe(
        (response) => {
          this.userVote = response.data.rating;
          this.bike['average_rating'] = response.data.averate_rating;
          this.bike.ratings.push(response.data);
        }
      );
  }

  checkUserVote(ratings: any[]): Boolean {
    const currentUserId = this.auth.currentUser.id;
    let ratingUserId: number;
    Object.keys(ratings).forEach( (i) => {
      ratingUserId = ratings[i].user_id;
    });
    if (currentUserId === ratingUserId) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit(bike) {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.bikeService.updateBike(id, bike.value)
    .subscribe(response => {
      this.isLoading = false;
      this.bike = response['data'];
    });
  }

  checkBikeOwner(): Boolean {
    if (this.auth.currentUser.id === this.bike.user.id) {
      return true;
    } else {
      return false;
    }
  }


}
