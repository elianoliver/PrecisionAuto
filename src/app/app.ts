import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BeforeAfterComponent } from './components/before-after/before-after';
import { CTAFooterComponent } from './components/ctafooter/ctafooter';
import { HeaderComponent } from './components/header/header';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { ServicesGridComponent } from './components/services-grid/services-grid';
import { TrustBadgesComponent } from './components/trust-badges/trust-badges';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroSectionComponent,
    TrustBadgesComponent,
    ServicesGridComponent,
    BeforeAfterComponent,
    CTAFooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Matt');
}
