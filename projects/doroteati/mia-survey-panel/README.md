# @doroteati/mia-survey-panel

Admin UI components for creating and managing surveys.

**Angular 21** | **Standalone** | **SSR-compatible**

## Install

```bash
npm install @doroteati/mia-survey-panel
```

## Components

- `SurveyListPageComponent` - Survey list with search, edit and delete actions
- `MiaSurveyCreatePageComponent` - Create/edit survey with dynamic question types
- `BooleanEditorComponent` - Boolean question editor
- `LinearScaleEditorComponent` - Linear scale question editor
- `SelectorEditorComponent` - Selector question editor

## Usage

```typescript
import { SurveyListPageComponent, MiaSurveyCreatePageComponent } from '@doroteati/mia-survey-panel';

// In your routes:
export const routes: Routes = [
  { path: 'survey/list', component: SurveyListPageComponent },
  { path: 'survey/create', component: MiaSurveyCreatePageComponent },
  { path: 'survey/edit/:id', component: MiaSurveyCreatePageComponent },
];
```

## Build

```bash
ng build @doroteati/mia-survey-panel
```

## Peer Dependencies

- `@angular/common` >= 21.0.0
- `@angular/core` >= 21.0.0
- `@angular/material` >= 21.0.0
- `@angular/forms` >= 21.0.0
- `@angular/router` >= 21.0.0
- `@doroteati/mia-survey-core` >= 21.0.0
- `@doroteati/mia-core` >= 21.0.0
- `@doroteati/mia-layout` >= 21.1.0
- `@doroteati/mia-table` >= 21.1.0
