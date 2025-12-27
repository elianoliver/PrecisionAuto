import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  Car,
  Droplets,
  Hammer,
  LucideAngularModule,
  MessageCircle,
  Paintbrush,
  ShieldCheck,
  Sparkle,
  Zap,
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Droplets,
        Zap,
        ShieldCheck,
        Hammer,
        Paintbrush,
        Sparkle,
        Car,
        MessageCircle,
      })
    ),
  ],
};
