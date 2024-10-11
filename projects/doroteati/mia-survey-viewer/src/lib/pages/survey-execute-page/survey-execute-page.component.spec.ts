import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyExecutePageComponent } from './survey-execute-page.component';

describe('SurveyExecutePageComponent', () => {
  let component: SurveyExecutePageComponent;
  let fixture: ComponentFixture<SurveyExecutePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyExecutePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyExecutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
