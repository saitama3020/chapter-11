import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

// App imports
import { BikeService } from './bike.service';
import { HttpHandleErrorService } from '../../shared/_services/http-handle-error.service';

describe('BikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      BikeService,
      HttpHandleErrorService
    ]
  }));

  it('should be created', inject([BikeService], (service: BikeService) => {
    expect(service).toBeTruthy();
  }));
});
