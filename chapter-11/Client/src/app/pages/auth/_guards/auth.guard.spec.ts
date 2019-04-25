import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// App imports
import { AuthGuard } from './auth.guard';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';


describe('AuthGuard', () => {
  const mockSnapshot: any = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'bikes:id'}
        ])
      ],
      providers: [AuthGuard, AuthService, HttpClient, HttpHandler, {
        provide: Router, useValue: router
      }]
    });
  }));

  it('should AuthGuard to be defined', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should AuthService to be defined', inject([AuthService], (auth: AuthService) => {
    expect(auth).toBeTruthy();
  }));

  it('should not allow user to pass', inject([AuthGuard], (guard) => {
    expect(guard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot)).toBeFalsy();
  }));


});
