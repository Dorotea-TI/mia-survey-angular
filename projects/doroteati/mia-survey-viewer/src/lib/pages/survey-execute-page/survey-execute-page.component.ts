import { MiaSurvey, MiaSurveyService } from '@doroteati/mia-survey-core';
import { Component, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export class MiaSurveyExecutePageConfig {
  showHeader? = false;
  onlyInvitation? = false;
  buttonColor? = '#000000';
  buttonBackURL? = '';
  textColor? = '#000000';
}

@Component({
  selector: 'lib-survey-execute-page',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './survey-execute-page.component.html',
  styleUrl: './survey-execute-page.component.scss',
})
export class SurveyExecutePageComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  protected surveyService = inject(MiaSurveyService);
  protected route = inject(ActivatedRoute);

  config?: MiaSurveyExecutePageConfig;

  survey?: MiaSurvey;

  isLoading = true;

  token = '';
  duration = 0;
  timerSubs: any;
  status = 0; // 0 = Loading, 1 = Cargada, 2 = No Encontrada o Invitacion invalida, 3 = Completada

  messageError = '';

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
      .pipe(
        tap(() => (this.status = 3)),
        tap(() => (this.survey = undefined))
      )
      .subscribe({ next: () => (this.isLoading = false) });
  }

  loadTimer() {
    this.clearTimer();
    if (isPlatformBrowser(this.platformId)) {
      this.timerSubs = setInterval(() => {
        this.duration++;
      }, 1000);
    }
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
      .pipe(
        tap((params) => (this.token = params['token'])),
        map((params) => params['id']),
        switchMap((surveyId) =>
          this.surveyService.fetchWithRelation(surveyId, ['questions'])
        ),
        tap((survey) => (this.survey = survey)),
        switchMap(() => this.verifyInvitation()),
        tap(() => this.loadTimer()),
        catchError((error) => {
          this.survey = undefined;
          this.isLoading = false;
          this.status = 2;
          throw 'No se ha encontrado la encuesta';
        })
      )
      .subscribe({ next: () => (this.isLoading = false) });
  }

  loadConfig() {
    this.route.data.subscribe({
      next: (res) => (this.config = res ? res as MiaSurveyExecutePageConfig : new MiaSurveyExecutePageConfig()),
    });
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
