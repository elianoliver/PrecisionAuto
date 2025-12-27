import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-before-after',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './before-after.html',
})

export class BeforeAfterComponent {
  sliderPosition = signal(50);

  stats = [
    { value: '100%', label: 'Recuperação Visual' },
    { value: '7 dias', label: 'Tempo Médio' },
    { value: 'R$ 2.500', label: 'A partir de' },
    { value: '1 Ano', label: 'Garantia' },
  ];

  handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    this.sliderPosition.set(Math.min(Math.max(percentage, 0), 100));
  }

  handleTouchMove(e: TouchEvent) {
    const touch = e.touches[0];
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    this.sliderPosition.set(Math.min(Math.max(percentage, 0), 100));
  }
}
