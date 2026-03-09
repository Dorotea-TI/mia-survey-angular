import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { MIA_AUTH_PROVIDER } from '@doroteati/mia-auth';
import { MIA_CORE_PROVIDER } from '@doroteati/mia-core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    {
      provide: MIA_AUTH_PROVIDER,
      useValue: {
        baseUrl: 'http://localhost/',
      },
    },
    {
      provide: MIA_CORE_PROVIDER,
      useValue: {
        baseUrl: 'http://localhost/',
      },
    },
  ],
});
