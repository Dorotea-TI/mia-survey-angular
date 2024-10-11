import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaSurveyCreatePageComponent } from './mia-survey-create-page.component';

describe('MiaSurveyCreatePageComponent', () => {
  let component: MiaSurveyCreatePageComponent;
  let fixture: ComponentFixture<MiaSurveyCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaSurveyCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaSurveyCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
