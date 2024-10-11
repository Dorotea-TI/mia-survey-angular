import { MiaSurvey, MiaSurveyService } from '@doroteati/mia-survey-core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

export class MiaSurveyExecutePageConfig {
  showHeader? = false;
  onlyInvitation? = false;
  buttonColor? = '#000000';
  buttonBackURL? = '';
  textColor? = '#000000';
}

@Component({
  selector: 'lib-survey-execute-page',
  templateUrl: './survey-execute-page.component.html',
  styleUrls: ['./survey-execute-page.component.scss'],
})
export class SurveyExecutePageComponent implements OnInit, OnDestroy {
  config?: MiaSurveyExecutePageConfig;

  survey?: MiaSurvey;

  isLoading = true;

  token = '';
  duration = 0;
  timerSubs: any;
  status = 0; // 0 = Loading, 1 = Cargada, 2 = No Encontrada o Invitacion invalida, 3 = Completada

  messageError = '';

  constructor(
    protected surveyService: MiaSurveyService,
    protected route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadConfig();
    this.loadParams();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  onClickSend() {
    this.messageError = '';

    if (!this.isValidAllQuestions()) {
      this.messageError = 'Debe completar todas las preguntas, muchas gracias';
      return;
    }

    this.clearTimer();
    this.isLoading = true;
    this.surveyService
      .doneWithInvitation(
        this.survey!.id,
        this.token,
        this.survey?.questions,
        this.duration
      )
      .pipe(tap((res) => (this.status = 3)))
      .pipe(tap((res) => (this.survey = undefined)))
      .subscribe((res) => (this.isLoading = false));
  }

  loadTimer() {
    this.clearTimer();
    this.timerSubs = setInterval(() => {
      this.duration++;
    }, 1000);
  }

  clearTimer() {
    if (this.timerSubs != undefined) {
      clearInterval(this.timerSubs);
      this.timerSubs = undefined;
    }
  }

  verifyInvitation(): Observable<any> {
    if (this.config?.onlyInvitation) {
      return this.surveyService.fetchByToken(this.survey!.id, this.token).pipe(
        tap((inv) => {
          if (inv.limit <= 0) {
            this.survey = undefined;
            this.isLoading = false;
            this.status = 2;
            throw 'No se ha encontrado la encuesta';
          }
        })
      );
    }

    return of(true);
  }

  loadParams() {
    this.route.params
      .pipe(tap((params) => (this.token = params['token'])))
      .pipe(map((params) => params['id']))
      .pipe(
        switchMap((surveyId) =>
          this.surveyService.fetchWithRelation(surveyId, ['questions'])
        )
      )
      .pipe(tap((survey) => (this.survey = survey)))
      .pipe(switchMap((survey) => this.verifyInvitation()))
      .pipe(tap((survey) => this.loadTimer()))
      .pipe(
        catchError((error) => {
          this.survey = undefined;
          this.isLoading = false;
          this.status = 2;
          throw 'No se ha encontrado la encuesta';
        })
      )
      .subscribe((res) => (this.isLoading = false));
  }

  loadConfig() {
    this.route.data.subscribe(
      (res) => (this.config = res ? res : new MiaSurveyExecutePageConfig())
    );
  }

  isValidAllQuestions(): boolean {
    for (const question of this.survey!.questions!) {
      if (
        question.val === undefined ||
        question.val === '' ||
        question.val === null
      ) {
        return false;
      }
    }

    return true;
  }
}
