import { MiaField, MiaFormConfig } from '@doroteati/mia-form';
import { MiaPageCrudComponent, MiaPageCrudConfig } from '@doroteati/mia-layout';
import { MiaSurveyService } from '@dorotea/mia-survey-core';
import { MiaColumn } from '@doroteati/mia-table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mia-survey-list-page',
  templateUrl: './survey-list-page.component.html',
  styleUrls: ['./survey-list-page.component.css'],
})
export class SurveyListPageComponent implements OnInit {
  @ViewChild('pageComp') pageComp!: MiaPageCrudComponent;

  config = new MiaPageCrudConfig();

  constructor(
    protected surveyService: MiaSurveyService,
    protected navigator: Router
  ) {}

  ngOnInit(): void {
    this.loadConfig();
  }

  onSearch(text: string) {
    this.config.tableConfig.query.resetWhere();
    if (text.length > 2) {
      this.config.tableConfig.query.addWhereLike('title', text);
    }
    this.pageComp.loadItems();
  }

  onAction(action: { key: string; item: any }) {
    if (action.key == 'add') {
      this.navigator.navigateByUrl('survey/create');
    } else if (action.key == 'search') {
      this.onSearch(action.item);
    } else if (action.key == 'edit') {
      this.navigator.navigateByUrl('survey/edit/' + action.item.id);
    } else if (action.key == 'remove') {
      this.pageComp.onClickRemove(action.item);
    }
  }

  loadTableConfig() {
    this.config.tableConfig.loadingColor = 'black';
    this.config.tableConfig.hasEmptyScreen = false;
    this.config.tableConfig.service = this.surveyService;
    this.config.tableConfig.columns = [
      { key: 'id', type: MiaColumn.TYPE_STRING, title: '#', field_key: 'id' },
      {
        key: 'title',
        type: MiaColumn.TYPE_STRING,
        title: 'Title',
        field_key: 'title',
      },
      {
        key: 'completed',
        type: MiaColumn.TYPE_STRING,
        title: 'Completed',
        field_key: 'completed',
      },
      {
        key: 'updated_at',
        type: MiaColumn.TYPE_DATE,
        title: 'Last Update',
        field_key: 'updated_at',
      },
      {
        key: 'more',
        type: 'more',
        title: '',
        extra: {
          actions: [
            { icon: 'visibility', title: 'Share', key: 'share' },
            { icon: 'create', title: 'Report', key: 'report' },
            { icon: 'create', title: 'List of completed', key: 'completed' },
            { icon: 'create', title: 'Edit', key: 'edit' },
            { icon: 'delete', title: 'Delete', key: 'remove' },
          ],
        },
      },
    ];
  }

  loadConfig() {
    this.config.title = 'Questionnaires and Surveys';

    this.config.buttons.push({ key: 'add', title: 'New', icon: 'edit' });

    this.loadTableConfig();
  }
}
