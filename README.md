# 🚗 Cezar Funilaria e Pintura - Landing Page

> Uma landing page moderna e otimizada para conversão, desenvolvida com Angular e estilizada com Tailwind CSS. Projeto portfolio que demonstra skills em frontend performance, design responsivo e UX/UI.

[![Live Demo](https://img.shields.io/badge/Demo-Online-success?style=flat-square&logo=globe)](https://plum-flamingo-170638.hostingersite.com/)
[![Angular](https://img.shields.io/badge/Angular-18+-red?style=flat-square&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

---

## 🎯 Sobre o Projeto

PrecisionAuto é uma landing page de conversão para uma empresa de serviços automotivos (funilaria e pintura). O projeto foi desenvolvido como um case de estudo de desenvolvimento frontend, implementando boas práticas de performance, acessibilidade e responsividade.

**Objetivo Principal:** Demonstrar capacidade de criar experiências web modernas, escaláveis e otimizadas para conversão de clientes.

---

## ✨ Funcionalidades Principais

- **🎨 Design Responsivo** - Totalmente adaptável: desktop, tablet e mobile com breakpoints otimizados
- **⚡ Performance Otimizada** - Angular standalone components, lazy loading e bundle size reduzido
- **🎭 Seção Hero Impactante** - Primeira impressão com CTA (Call-To-Action) claro e estratégico
- **📋 Catálogo de Serviços** - Grade visual com descrição detalhada dos serviços
- **🖼️ Galeria Before/After** - Componente interativo para mostrar qualidade do trabalho
- **🏆 Seção de Credibilidade** - Emblemas, garantias e diferenciais competitivos
- **📞 Seção de Contato** - CTA estratégico ao final da página para conversão
- **📱 Mobile-First** - Prioridade em experiência mobile (60% do tráfego esperado)

---

## 🛠️ Stack Tecnológico

### Framework & Linguagem
- **Angular 18+** - Framework moderno com standalone components (sem NgModule)
- **TypeScript 5+** - Type safety e melhor DX
- **RxJS** - Reactive programming (se houver estados complexos)

### Estilização & Design
- **Tailwind CSS** - Utility-first CSS para desenvolvimento ágil
- **SCSS** - Pré-processador para lógica de estilos customizada
- **Lucide Angular** - Biblioteca de ícones SVG leve e customizável

### Build & Deploy
- **Angular CLI** - Tooling padrão para Angular
- **Vite** (opcional) - Alternativa para build mais rápido
- **Hostinger** - Hospedagem compartilhada (ambiente de produção atual)

---

## 🏗️ Decisões Arquiteturais

### 1. **Standalone Components**
```typescript
// Componentes sem NgModule para melhor tree-shaking
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `...`
})
```
**Benefício:** Reduz bundle size e simplifica a estrutura do projeto.

### 2. **Componentes Reutilizáveis**
- `HeroComponent` - Seção de destaque
- `ServiceCardComponent` - Card de serviço
- `GalleryComponent` - Galeria before/after
- `CTAComponent` - Call-to-action reutilizável

**Benefício:** Facilita manutenção e escalabilidade futura.

### 3. **Responsividade com Tailwind**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Responsive grid -->
</div>
```
**Benefício:** CSS semântico, breakpoints consistentes e menos CSS customizado.

### 4. **Otimizações de Performance**
- Lazy loading de imagens com `loading="lazy"`
- CSS crítico inlined
- Minificação automática do bundle
- Angular AOT (Ahead-of-Time) compilation em produção

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/elianoliver/PrecisionAuto.git
cd PrecisionAuto

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve

# Acesse em http://localhost:4200
```

### Build para Produção

```bash
# Gera build otimizado em dist/
ng build --configuration production

# Analisa o tamanho do bundle
ng build --stats-json
# Usar webpack-bundle-analyzer para visualizar
```

### Estrutura de Pastas

```
src/
├── app/
│   ├── components/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── gallery/
│   │   └── footer/
│   ├── app.component.ts
│   └── app.config.ts
├── assets/
│   ├── images/
│   └── icons/
├── styles/
│   ├── global.scss
│   └── variables.scss
└── main.ts
```

---

## 📊 Métricas & Performance

### Scores (Lighthouse)
- ⚡ **Performance:** ~90
- ♿ **Accessibility:** ~95
- 📋 **Best Practices:** ~95
- 🔍 **SEO:** ~100

### Bundle Size
- Main bundle: ~150KB (minified)
- CSS: ~40KB após Tailwind purgação

---

## 🎓 Aprendizados Principais

### 1. **Componentização Eficiente**
Aprendizado: Como estruturar componentes reutilizáveis sem repetição, facilitando manutenção futura.

### 2. **Responsive Design**
Aprendizado: Implementação de mobile-first com Tailwind, garantindo boa UX em todos os dispositivos.

### 3. **Performance & SEO**
Aprendizado: Otimizações críticas como lazy loading de imagens, CSS crítico e meta tags estruturadas.

### 4. **Tipos TypeScript**
Aprendizado: Type safety com interfaces genéricas para dados de serviços e galeria, reduzindo bugs em runtime.

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
```

### 5. **Acessibilidade Web (a11y)**
Aprendizado: Implementação de ARIA labels, contraste de cores adequado e navegação por teclado.

---

## 🔮 Possíveis Melhorias Futuras

- [ ] **Formulário de Contato Funcional** - Integração com email service (SendGrid/EmailJS)
- [ ] **Backend API** - Node.js/Express para gerenciar dados de serviços e galeria
- [ ] **Authentication** - Sistema de admin para gerenciar conteúdo
- [ ] **CMS Integration** - Strapi ou Contentful para gerenciar dados dinamicamente
- [ ] **Blog** - Seção de blog para SEO e engajamento
- [ ] **Analytics** - Google Analytics 4 e heat maps (Hotjar)
- [ ] **PWA** - Progressive Web App com service workers
- [ ] **Dark Mode** - Toggle de tema escuro/claro
- [ ] **E-commerce** - Sistema de agendamento ou compra de serviços online
- [ ] **Testes Automatizados** - Unit tests com Jasmine/Karma, E2E com Cypress

---

## 🛡️ Boas Práticas Implementadas

✅ **Code Quality**
- ESLint + Prettier para code formatting
- TypeScript strict mode
- Componentes com single responsibility

✅ **UX/UI**
- Seções bem definidas com CTAs claros
- Visual hierarchy adequada
- Feedback visual em interações (hover, active states)

✅ **SEO**
- Meta tags estruturadas
- Open Graph para compartilhamento social
- Schema.org markup (optional)

✅ **Performance**
- Lazy loading de imagens
- CSS crítico inlined
- Minificação de assets

✅ **Manutenibilidade**
- Componentes independentes e testáveis
- Variáveis CSS customizadas
- Documentação de código

---

## 📝 Licença

Este projeto está licenciado sob a MIT License - veja [LICENSE](LICENSE) para detalhes.

---

## 👤 Sobre o Desenvolvedor

Frontend Developer focado em Angular, TypeScript e boas práticas de desenvolvimento web. Apaixonado por performance, acessibilidade e user experience.

**Skills Demonstrados:**
- Arquitetura de componentes
- Responsive design
- Performance web
- TypeScript & Angular
- Tailwind CSS
- Git & Versionamento

---

## 🤝 Contribuições

Este é um projeto de portfolio. Para sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou PR!

---

**⭐ Se gostou do projeto, considere deixar uma star no repositório!**

[Voltar ao topo](#-precisionauto---landing-page-para-funilaria-e-pintura)
