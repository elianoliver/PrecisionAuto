import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './services-grid.html',
})
export class ServicesGridComponent {
  services = [
    {
      iconName: 'hammer',
      title: 'Funilaria',
      description:
        'Reparação estrutural com tecnologia de medição digital para alinhamento perfeito.',
      image:
        'https://images.unsplash.com/photo-1632605166776-7128669886e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gridClass: 'md:col-span-2 md:row-span-2',
    },
    {
      iconName: 'paintbrush',
      title: 'Pintura em Estufa',
      description: 'Cabine de pintura climatizada com tecnologia PPG.',
      image:
        'https://plus.unsplash.com/premium_photo-1661326333361-ab00d4853e38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
      iconName: 'sparkle',
      title: 'Polimento Técnico',
      description: 'Restauração de brilho com compostos de última geração.',
      image:
        'https://plus.unsplash.com/premium_photo-1663013309657-8b3a2a00849e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9saXIlMjBjYXJyb3xlbnwwfHwwfHx8MA%3D%3D',
      gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
      iconName: 'car',
      title: 'Micro-Reparos',
      description: 'Correção de pequenos danos sem repintura completa.',
      image:
        'https://images.unsplash.com/photo-1703632998797-a8d220ce58ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gridClass: 'md:col-span-3 md:row-span-1',
    },
  ];
}
