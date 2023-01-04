import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Agency Coda
import { MiaLayoutModule } from '@agencycoda/mia-layout';
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaTableModule } from '@agencycoda/mia-table';
import { MiaFormModule } from '@agencycoda/mia-form';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// Modals
import { MiaShareSurveyModalComponent } from './modals/mia-share-survey-modal/mia-share-survey-modal.component';
import { MiaHistoryInvitationSurveyModalComponent } from './modals/mia-history-invitation-survey-modal/mia-history-invitation-survey-modal.component';

// Pages
import { SurveyListPageComponent } from './pages/survey-list-page/survey-list-page.component';
import { MiaSurveyCreatePageComponent } from './pages/mia-survey-create-page/mia-survey-create-page.component';
import { BooleanEditorComponent } from './components/boolean-editor/boolean-editor.component';
import { LinearScaleEditorComponent } from './components/linear-scale-editor/linear-scale-editor.component';
import { SelectorEditorComponent } from './components/selector-editor/selector-editor.component';





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
    SelectorEditorComponent
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
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
	],
  exports: []
})
export class MiaSurveyPanelModule { }
