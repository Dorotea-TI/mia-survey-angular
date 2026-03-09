# MiaSurveyAngular

Monorepo workspace for the **Mia Survey** Angular libraries. Built with [Angular CLI](https://github.com/angular/angular-cli) v21.

## Libraries

| Package | Version | Description |
|---------|---------|-------------|
| `@doroteati/mia-survey-core` | 21.0.0 | Entities, models and services |
| `@doroteati/mia-survey-panel` | 21.0.0 | Admin UI for creating and managing surveys |
| `@doroteati/mia-survey-viewer` | 21.0.0 | Public UI for executing surveys |

All libraries use **standalone components** and are **SSR-compatible**.

## Requirements

- Node.js >= 20
- Angular CLI >= 21

## Development server

```bash
ng serve example
```

Navigate to `http://localhost:4200/`.

## Build libraries

```bash
ng build @doroteati/mia-survey-core
ng build @doroteati/mia-survey-panel
ng build @doroteati/mia-survey-viewer
```

Build artifacts are stored in the `dist/` directory.

## Publish to npm

```bash
npm run build2   # Build & publish mia-survey-core
npm run build3   # Build & publish mia-survey-panel
npm run build4   # Build & publish mia-survey-viewer
```

## Usage

### Install

```bash
npm install @doroteati/mia-survey-core @doroteati/mia-survey-panel @doroteati/mia-survey-viewer
```

### Import (Standalone)

```typescript
import { SurveyListPageComponent, MiaSurveyCreatePageComponent } from '@doroteati/mia-survey-panel';
import { SurveyExecutePageComponent } from '@doroteati/mia-survey-viewer';

// In your routes:
export const routes: Routes = [
  { path: 'survey/list', component: SurveyListPageComponent },
  { path: 'survey/create', component: MiaSurveyCreatePageComponent },
  { path: 'survey/edit/:id', component: MiaSurveyCreatePageComponent },
  { path: 'survey/run/:id/:token', component: SurveyExecutePageComponent },
];
```

### Bootstrap (main.ts)

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MIA_CORE_PROVIDER } from '@doroteati/mia-core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    { provide: MIA_CORE_PROVIDER, useValue: { baseUrl: 'https://your-api.com/' } },
  ],
});
```

## Further help

See the [Angular CLI documentation](https://angular.dev/tools/cli).
