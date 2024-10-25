import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Interceptor } from './interceptor/interceptor';

const serviceAutentica = [Interceptor];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(),
    serviceAutentica,
    provideHttpClient(
        // DI-based interceptors must be explicitly enabled.
        withInterceptorsFromDi(),
      ),
      {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    
    ] 
};
