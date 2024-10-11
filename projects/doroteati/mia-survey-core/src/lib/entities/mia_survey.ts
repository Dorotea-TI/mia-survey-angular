import { MiaModel } from '@doroteati/mia-core';
import { MiaSurveyQuestion } from './mia_survey_question';

export class MiaSurvey extends MiaModel {
  id: number = 0;
  creator_id: number = 0;
  title: string = '';
  caption: string = '';
  type: number = 0;
  photo: any;
  completed: number = 0;
  created_at: string = '';
  updated_at: string = '';
  deleted: number = 0;

  questions?: Array<MiaSurveyQuestion> = new Array<MiaSurveyQuestion>();
}
