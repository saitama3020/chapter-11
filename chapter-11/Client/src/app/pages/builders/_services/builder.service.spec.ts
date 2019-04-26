import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

// App imports
import { BuilderService } from './builder.service';
import { HttpHandleErrorService } from '../../shared/_services/http-handle-error.service';

describe('BuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      BuilderService,
      HttpHandleErrorService
    ]
  }));

  it('should be created', inject([BuilderService], (service: BuilderService) => {
    expect(service).toBeTruthy();
  }));
});
