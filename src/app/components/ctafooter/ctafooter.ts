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
  [x: string]: any;

  isArray(value: any): value is any[] {
    return Array.isArray(value);
  }

  whatsapp = {
    iconName: 'message-circle',
    title: 'Fale Conosco via WhatsApp',
    description: 'Clique aqui para iniciar uma conversa e obter mais informações.',
    target: '_blank',
    rel: 'noopener noreferrer',
    whatsAppLink:
      'https://wa.me/5547999217767?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20funilaria%20e%20pintura.',
  };

  contact = [
    {
      iconName: 'map-pin',
      title: 'Endereço',
      detail: 'Rua Exemplo, 123 - Bairro, Cidade - UF',
    },
    {
      iconName: 'clock',
      title: 'Horário de Funcionamento',
      detail: ['Seg - Sex: 8h às 18h', 'Sábado: 9h às 13h'],
    },
    {
      iconName: 'phone',
      title: 'Telefone',
      detail: '+55 (47) 99921-7767',
    },
    {
      iconName: 'mail',
      title: 'Email',
      detail: 'contato@precisionauto.com.br',
    }
  ];
}
