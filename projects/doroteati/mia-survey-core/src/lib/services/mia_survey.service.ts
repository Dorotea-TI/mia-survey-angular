import { Inject, Injectable } from '@angular/core';
import { MiaSurvey } from '../entities/mia_survey';
import {
  MiaBaseCrudHttpService,
  MiaCoreConfig,
  MIA_CORE_PROVIDER,
} from '@doroteati/mia-core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MiaSurveyInvitation } from '../entities/mia_survey_invitation';
import { MiaSurveyDone } from '../entities/mia_survey_done';

@Injectable({
  providedIn: 'root',
})
export class MiaSurveyService extends MiaBaseCrudHttpService<MiaSurvey> {
  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) {
    super(config, http);
    this.basePathUrl = config.baseUrl + 'mia-survey';
  }

  fetchPublicLink(surveyId: number): Observable<MiaSurveyInvitation> {
    return this.getOb(this.basePathUrl + '/fetch-public-link/' + surveyId);
  }

  fetchByToken(
    surveyId: number,
    token: string
  ): Observable<MiaSurveyInvitation> {
    return this.getOb(
      this.basePathUrl + '/fetch-by-token/' + surveyId + '/' + token
    );
  }

  sendInvitations(
    surveyId: number,
    invitations: Array<MiaSurveyInvitation>,
    caption: string
  ) {
    return this.postOb(this.basePathUrl + '/send-invitations', {
      survey_id: surveyId,
      invitations: invitations,
      caption: caption,
    });
  }

  doneWithInvitation(
    surveyId: number,
    token: string,
    data: any,
    duration: number
  ): Observable<MiaSurveyDone> {
    return this.postOb(this.basePathUrl + '/done/save-invitation', {
      survey_id: surveyId,
      token: token,
      data: data,
      duration: duration,
    });
  }
}
