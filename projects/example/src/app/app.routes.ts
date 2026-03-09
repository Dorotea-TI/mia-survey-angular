import { Routes } from '@angular/router';
import {
  MiaSurveyCreatePageComponent,
  SurveyListPageComponent,
} from 'projects/doroteati/mia-survey-panel/src/public-api';
import {
  MiaSurveyExecutePageConfig,
  SurveyExecutePageComponent,
} from 'projects/doroteati/mia-survey-viewer/src/public-api';

export const routes: Routes = [
  { path: 'survey/list', component: SurveyListPageComponent },
  { path: 'survey/create', component: MiaSurveyCreatePageComponent },
  { path: 'survey/edit/:id', component: MiaSurveyCreatePageComponent },
  {
    path: 'survey/run/:id/:token',
    component: SurveyExecutePageComponent,
    data: {
      onlyInvitation: true,
      buttonBackURL: '/',
      buttonColor: '#03A4B3',
      textColor: '#002A5C',
    } as MiaSurveyExecutePageConfig,
  },
];
