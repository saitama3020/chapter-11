import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// App imports
import { BuilderDetailComponent } from './builder-detail.component';
import { HttpHandleErrorService } from '../../shared/_services/http-handle-error.service';

describe('BuilderDetailComponent', () => {
  let component: BuilderDetailComponent;
  let fixture: ComponentFixture<BuilderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ BuilderDetailComponent ],
      providers: [HttpHandleErrorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
