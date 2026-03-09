import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemBaseEditorComponent } from '../item-base-editor.component';

@Component({
  selector: 'survey-selector-editor',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './selector-editor.component.html',
  styleUrl: './selector-editor.component.css',
})
export class SelectorEditorComponent extends ItemBaseEditorComponent implements OnInit {
  ngOnInit(): void {
    if (this.question.data == undefined) {
      this.question.data = { options: [] };
    }
    if (this.question.data.options == undefined) {
      this.question.data.options = [];
    }
  }

  onAdd() {
    this.question.data.options.push({ id: 1, title: '' });
  }
}
