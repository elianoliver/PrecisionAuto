import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './hero-section.html',
})
export class HeroSectionComponent {
  imageUrl: string =
    'https://images.unsplash.com/photo-1712129009070-97da6756d55b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
}
