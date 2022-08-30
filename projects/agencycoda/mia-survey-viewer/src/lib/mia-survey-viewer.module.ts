import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SurveyExecutePageComponent } from './pages/survey-execute-page/survey-execute-page.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    SurveyExecutePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    // Angular Material
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SurveyExecutePageComponent
  ]
})
export class MiaSurveyViewerModule { }
