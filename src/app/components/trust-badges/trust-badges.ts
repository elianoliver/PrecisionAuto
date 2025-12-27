import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-trust-badges',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
  ],
  templateUrl: './trust-badges.html',
})
export class TrustBadgesComponent {
  badges = [
    {
      iconName: 'droplets',
      title: 'Laboratório de Tintas Próprio',
      description: 'Formulação customizada para cor perfeita',
    },
    {
      iconName: 'zap',
      title: 'Entrega Expressa',
      description: 'Prazos reduzidos sem comprometer qualidade',
    },
    {
      iconName: 'shield-check',
      title: 'Garantia de 1 Ano',
      description: 'Cobertura total de pintura e funilaria',
    },
  ];
}
