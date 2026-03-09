import { Component } from '@angular/core';
import { ItemBaseEditorComponent } from '../item-base-editor.component';

@Component({
  selector: 'survey-boolean-editor',
  standalone: true,
  templateUrl: './boolean-editor.component.html',
  styleUrl: './boolean-editor.component.css',
})
export class BooleanEditorComponent extends ItemBaseEditorComponent {}
