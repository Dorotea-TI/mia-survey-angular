import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Agency Coda
import { MiaLayoutModule } from '@doroteati/mia-layout';
import { MiaTableModule } from '@doroteati/mia-table';
import { MiaFormModule } from '@doroteati/mia-form';

// Angular Material

// Modals
import { MiaShareSurveyModalComponent } from './modals/mia-share-survey-modal/mia-share-survey-modal.component';
import { MiaHistoryInvitationSurveyModalComponent } from './modals/mia-history-invitation-survey-modal/mia-history-invitation-survey-modal.component';

// Pages
import { SurveyListPageComponent } from './pages/survey-list-page/survey-list-page.component';
import { MiaSurveyCreatePageComponent } from './pages/mia-survey-create-page/mia-survey-create-page.component';
import { BooleanEditorComponent } from './components/boolean-editor/boolean-editor.component';
import { LinearScaleEditorComponent } from './components/linear-scale-editor/linear-scale-editor.component';
import { SelectorEditorComponent } from './components/selector-editor/selector-editor.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    // Modals
    MiaShareSurveyModalComponent,
    MiaHistoryInvitationSurveyModalComponent,

    // Pages
    SurveyListPageComponent,
    MiaSurveyCreatePageComponent,
    BooleanEditorComponent,
    LinearScaleEditorComponent,
    SelectorEditorComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Agency Coda
    MiaTableModule,
    MiaFormModule,
    MiaLayoutModule,

    // Angular Material
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [],
})
export class MiaSurveyPanelModule {}
