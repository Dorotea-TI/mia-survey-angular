import { Component, OnInit } from '@angular/core';
import { ItemBaseEditorComponent } from '../item-base-editor.component';

@Component({
  selector: 'survey-selector-editor',
  templateUrl: './selector-editor.component.html',
  styleUrls: ['./selector-editor.component.css']
})
export class SelectorEditorComponent extends ItemBaseEditorComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    if(this.question.data == undefined){
      this.question.data = { options: [] };
    }
    if(this.question.data.options == undefined){
      this.question.data.options = [];
    }
  }

  onAdd() {
    this.question.data.options.push({ id: 1, title: '' });
  }
}
