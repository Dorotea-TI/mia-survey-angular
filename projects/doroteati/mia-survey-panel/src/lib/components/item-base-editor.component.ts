import { MiaSurveyQuestion } from '@doroteati/mia-survey-core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'survey-base-item-editor',
  standalone: true,
  template: '',
})
export class ItemBaseEditorComponent {
  @Input() question!: MiaSurveyQuestion;
}
