import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaHistoryInvitationSurveyModalComponent } from './mia-history-invitation-survey-modal.component';

describe('MiaHistoryInvitationSurveyModalComponent', () => {
  let component: MiaHistoryInvitationSurveyModalComponent;
  let fixture: ComponentFixture<MiaHistoryInvitationSurveyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaHistoryInvitationSurveyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaHistoryInvitationSurveyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
