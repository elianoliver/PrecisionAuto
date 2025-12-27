import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-ctafooter',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ctafooter.html',
})

export class CTAFooterComponent {

  whatsapp = {
    iconName: 'message-circle',
    title: 'Fale Conosco via WhatsApp',
    description: 'Clique aqui para iniciar uma conversa e obter mais informações.',
    target: '_blank',
    rel: 'noopener noreferrer',
    whatsAppLink: 'https://wa.me/5547999217767?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20funilaria%20e%20pintura.'
  }
}

