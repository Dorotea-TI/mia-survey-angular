import { nil } from '@doroteati/mia-core';
import { MiaSurveyService } from '@dorotea/mia-survey-core';
import { MiaSurveyQuestion } from '@dorotea/mia-survey-core';
import { MiaSurvey } from '@dorotea/mia-survey-core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'mia-survey-create-page',
  templateUrl: './mia-survey-create-page.component.html',
  styleUrls: ['./mia-survey-create-page.component.scss'],
})
export class MiaSurveyCreatePageComponent implements OnInit {
  isLoading = false;

  survey = new MiaSurvey();
  subtypes = MiaSurveyQuestion.getSubtypes();

  isUploading = false;

  constructor(
    protected route: ActivatedRoute,
    protected surveyService: MiaSurveyService,
    protected navigator: Router
  ) {}

  ngOnInit(): void {
    this.survey.questions = [];
    this.loadParams();
  }

  onClickSave() {
    this.surveyService
      .saveOb(this.survey)
      .subscribe((res) => this.navigator.navigateByUrl('survey/list'));
  }

  onClickAddQuestion() {
    this.survey.questions?.push(new MiaSurveyQuestion());
  }

  onClickDuplicate(question: MiaSurveyQuestion) {}

  onClickRemoveQuestion(question: MiaSurveyQuestion) {}

  onUploadFile(data: any): void {
    this.survey.photo = data;
    this.isUploading = false;
  }

  loadParams() {
    this.route.params
      .pipe(map((params) => (params.id !== undefined ? params.id : undefined)))
      .pipe(nil())
      .pipe(tap((id) => (this.isLoading = true)))
      .pipe(
        switchMap((surveyId) =>
          this.surveyService.fetchWithRelation(surveyId as number, [
            'questions',
          ])
        )
      )
      .pipe(tap((survey) => (this.survey = survey)))
      .subscribe(
        (survey) => (this.isLoading = false),
        (error) => this.navigator.navigateByUrl('survey/list')
      );
  }
}
