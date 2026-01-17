import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface ContactInfo {
  iconName: string;
  title: string;
  description?: string;
  detail?: string[];
  link?: string;
  target?: string;
  rel?: string;
}

@Component({
  selector: 'app-ctafooter',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ctafooter.html', // Renomeado para clareza
})
export class CTAFooterComponent {
  // Transforme em array para facilitar o loop no template
  contactsList: ContactInfo[] = [
    {
      iconName: 'message-circle',
      title: 'Fale com um especialista',
      description: 'Clique aqui para iniciar uma conversa e obter mais informações.',
      target: '_blank',
      rel: 'noopener noreferrer',
      link: 'https://wa.me/5547999217767?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20funilaria%20e%20pintura.',
    },
    {
      iconName: 'map-pin',
      title: 'Endereço',
      detail: ['R. Geraldo Rodrigues, 34 - Votorantim, Sorocaba - SP'],
      link: 'https://maps.app.goo.gl/TCRPRbRUj1NG7KQy7',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      iconName: 'clock',
      title: 'Horário de Funcionamento',
      detail: ['Seg - Sex: 8h às 18h', 'Sábado: 9h às 13h'],
    },
    {
      iconName: 'phone',
      title: 'Telefone',
      detail: ['+55 (15) 99807-5720'],
      link: 'tel:+5515998075720',
      target: '_self',
    },
    {
      iconName: 'mail',
      title: 'Email',
      detail: ['contato@precisionauto'],
      link: 'mailto:contato@precisionauto.com.br',
      target: '_self',
    },
  ];

  // Se precisar acessar por key (ex: para botões específicos), mantenha um mapa
  contactsMap: { [key: string]: ContactInfo } = this.contactsList.reduce((acc, item) => {
    acc[item.iconName] = item; // Use iconName como key, ou ajuste para algo único
    return acc;
  }, {} as { [key: string]: ContactInfo });
}
