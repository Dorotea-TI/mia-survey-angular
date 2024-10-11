import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearScaleEditorComponent } from './linear-scale-editor.component';

describe('LinearScaleEditorComponent', () => {
  let component: LinearScaleEditorComponent;
  let fixture: ComponentFixture<LinearScaleEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearScaleEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearScaleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
