# @doroteati/mia-survey-core

Core library for the Mia Survey system. Provides entities, models and services.

**Angular 21** | **Standalone** | **SSR-compatible**

## Install

```bash
npm install @doroteati/mia-survey-core
```

## Entities

- `MiaSurvey` - Survey model
- `MiaSurveyQuestion` - Question model (Boolean, Short answer, Paragraph, Linear Scale, Selector)
- `MiaSurveyInvitation` - Invitation model
- `MiaSurveyDone` - Completed survey model

## Services

- `MiaSurveyService` - CRUD service for surveys (`providedIn: 'root'`)

## Usage

```typescript
import { MiaSurvey, MiaSurveyQuestion, MiaSurveyService } from '@doroteati/mia-survey-core';
```

## Build

```bash
ng build @doroteati/mia-survey-core
```

## Peer Dependencies

- `@angular/common` >= 21.0.0
- `@angular/core` >= 21.0.0
- `@doroteati/mia-core` >= 21.0.0
