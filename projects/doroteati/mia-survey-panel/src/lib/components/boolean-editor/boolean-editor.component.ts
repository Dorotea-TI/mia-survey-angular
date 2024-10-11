import { Component, OnInit } from '@angular/core';
import { ItemBaseEditorComponent } from '../item-base-editor.component';

@Component({
  selector: 'survey-boolean-editor',
  templateUrl: './boolean-editor.component.html',
  styleUrls: ['./boolean-editor.component.css']
})
export class BooleanEditorComponent extends ItemBaseEditorComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
