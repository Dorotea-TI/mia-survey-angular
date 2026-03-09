import { nil } from '@doroteati/mia-core';
import {
  MiaSurvey,
  MiaSurveyQuestion,
  MiaSurveyService,
} from '@doroteati/mia-survey-core';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { map, switchMap, tap } from 'rxjs/operators';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LinearScaleEditorComponent } from '../../components/linear-scale-editor/linear-scale-editor.component';
import { SelectorEditorComponent } from '../../components/selector-editor/selector-editor.component';

@Component({
  selector: 'mia-survey-create-page',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    LinearScaleEditorComponent,
    SelectorEditorComponent,
  ],
  templateUrl: './mia-survey-create-page.component.html',
  styleUrl: './mia-survey-create-page.component.scss',
})
export class MiaSurveyCreatePageComponent implements OnInit {
  protected route = inject(ActivatedRoute);
  protected surveyService = inject(MiaSurveyService);
  protected navigator = inject(Router);

  isLoading = false;
  survey = new MiaSurvey();
  subtypes = MiaSurveyQuestion.getSubtypes();
  isUploading = false;

  ngOnInit(): void {
    this.survey.questions = [];
    this.loadParams();
  }

  onClickSave() {
    this.surveyService
      .saveOb(this.survey)
      .subscribe({ next: (res) => this.navigator.navigateByUrl('survey/list') });
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
      .pipe(
        map((params) => (params['id'] !== undefined ? params['id'] : undefined)),
        nil(),
        tap(() => (this.isLoading = true)),
        switchMap((surveyId) =>
          this.surveyService.fetchWithRelation(surveyId as number, ['questions'])
        ),
        tap((survey) => (this.survey = survey))
      )
      .subscribe({
        next: () => (this.isLoading = false),
        error: () => this.navigator.navigateByUrl('survey/list'),
      });
  }
}
