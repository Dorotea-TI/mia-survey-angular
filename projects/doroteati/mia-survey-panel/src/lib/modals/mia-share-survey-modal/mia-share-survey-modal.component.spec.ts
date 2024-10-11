import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaShareSurveyModalComponent } from './mia-share-survey-modal.component';

describe('MiaShareSurveyModalComponent', () => {
  let component: MiaShareSurveyModalComponent;
  let fixture: ComponentFixture<MiaShareSurveyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaShareSurveyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaShareSurveyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
