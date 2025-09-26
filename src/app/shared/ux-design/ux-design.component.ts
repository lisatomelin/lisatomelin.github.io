import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ux-design',
  templateUrl: './ux-design.component.html',
  styleUrls: ['./ux-design.component.scss'],
  standalone: false,
})
export class UxDesignComponent {
  @ViewChild('uxCarousel', { static: false }) uxCarousel!: ElementRef;
  @ViewChild('uiCarousel', { static: false }) uiCarousel!: ElementRef;

  habilidadesUX = [
    {
      titulo: 'Pesquisa com Usuários',
      descricao:
        'Entrevistas, questionários e testes para entender o comportamento dos usuários.',
      icone: 'bi bi-search',
    },
    {
      titulo: 'Arquitetura da Informação',
      descricao: 'Estruturação lógica e navegável do conteúdo digital.',
      icone: 'bi bi-diagram-3',
    },
    {
      titulo: 'Wireframes e Protótipos',
      descricao:
        'Desenho de interfaces com ferramentas como Figma ou Adobe XD.',
      icone: 'bi bi-vector-pen',
    },
    {
      titulo: 'Design Centrado no Usuário',
      descricao:
        'Processos focados na empatia e nas reais necessidades dos usuários.',
      icone: 'bi bi-person-heart',
    },
    {
      titulo: 'Testes de Usabilidade',
      descricao: 'Avaliações práticas com usuários para validar soluções.',
      icone: 'bi bi-clipboard-check',
    },
    {
      titulo: 'Acessibilidade',
      descricao: 'Projetando interfaces que promovem acessibilidade e inclusão para todos.',
      icone: 'bi bi-universal-access-circle',
    },
  ];
  habilidadesUI = [
    {
      titulo: 'Design Visual',
      descricao: 'Design de interfaces que aliam estética e funcionalidade.',
      icone: 'bi bi-palette',
    },
    {
      titulo: 'Tipografia',
      descricao: 'Definição tipográfica focada na melhor leitura e compreensão.',
      icone: 'bi bi-fonts',
    },
    {
      titulo: 'Cores e Paletas',
      descricao:
        'Uso estratégico de cores para guiar a experiência do usuário.',
      icone: 'bi bi-brush-fill',
    },
    {
      titulo: 'Componentes UI',
      descricao:
        'Desenvolvimento de botões, formulários e outros elementos interativos.',
      icone: 'bi bi-box-seam',
    },
    {
      titulo: 'Design Responsivo',
      descricao: 'Criação de layouts adaptáveis para diferentes dispositivos.',
      icone: 'bi bi-phone-landscape',
    },
    {
      titulo: 'Ferramentas de Design',
      descricao: 'Domínio de ferramentas como Figma, Sketch e Adobe XD.',
      icone: 'bi bi-tools',
    },
  ];

  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };



  scrollCarousel(carouselRef: string, direction: number) {
  const carousel = (this as any)[carouselRef]?.nativeElement as HTMLElement;
  if (carousel) {
    // Pega a largura do primeiro card
    const card = carousel.querySelector('.card') as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 24; // largura + gap aproximado
      const scrollAmount = cardWidth * 3; // 👈 andar 3 cards por clique
      carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  }
}

}
