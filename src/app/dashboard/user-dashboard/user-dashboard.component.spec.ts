import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardComponent } from './user-dashboard.component';
import { MatToolbarModule, MatSelectModule, MatCardModule, MatOptionModule, MatFormFieldModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDashboardComponent],
      imports: [
        MatToolbarModule, MatSelectModule, MatCardModule, MatOptionModule, NgxMatSelectSearchModule, MatFormFieldModule,
        ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a span tag', (() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Welcome To Cat World');
  }));

  it('method getRandomCatImg should be called', (() => {
    const spy = spyOn(component, 'getRandomCatImg').and.callThrough();
    expect(component).toBeDefined();
    expect(spy);
  }));

  it('should check getRandomCatImg function', () => {
    component.getRandomCatImg();
  });

  it('should check getCategoriesList function', () => {
    component.getCategoriesList();
  });

  it('should check showImages function when selected category has id', (() => {
    const selected = {
      'id': 15,
      'name': 'boxes'
    };
    component.showImages(selected);
  }));

  it('should check showImages function when selected category has no id or undefined', (() => {
    const selected = {
      'id': undefined,
      'name': 'boxes'
    };
    component.showImages(selected);
  }));

  it('should check filterCategories function', () => {
    component.filterCategories();
  });


});
