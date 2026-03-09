# @doroteati/mia-survey-viewer

Public-facing UI for executing and completing surveys.

**Angular 21** | **Standalone** | **SSR-compatible**

## Install

```bash
npm install @doroteati/mia-survey-viewer
```

## Components

- `SurveyExecutePageComponent` - Survey execution page with all question types
- `MiaSurveyExecutePageConfig` - Configuration class for customization

## Usage

```typescript
import { SurveyExecutePageComponent, MiaSurveyExecutePageConfig } from '@doroteati/mia-survey-viewer';

// In your routes:
export const routes: Routes = [
  {
    path: 'survey/run/:id/:token',
    component: SurveyExecutePageComponent,
    data: {
      onlyInvitation: true,
      buttonBackURL: '/',
      buttonColor: '#03A4B3',
      textColor: '#002A5C',
    } as MiaSurveyExecutePageConfig,
  },
];
```

## Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `showHeader` | boolean | `false` | Show survey header image |
| `onlyInvitation` | boolean | `false` | Require valid invitation token |
| `buttonColor` | string | `'#000000'` | Submit button background color |
| `buttonBackURL` | string | `''` | URL for "back" button after completion |
| `textColor` | string | `'#000000'` | Text color |

## Build

```bash
ng build @doroteati/mia-survey-viewer
```

## Peer Dependencies

- `@angular/common` >= 21.0.0
- `@angular/core` >= 21.0.0
- `@angular/material` >= 21.0.0
- `@angular/forms` >= 21.0.0
- `@doroteati/mia-survey-core` >= 21.0.0
