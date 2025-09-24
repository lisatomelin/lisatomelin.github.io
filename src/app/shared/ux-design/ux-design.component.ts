import { Component } from '@angular/core';

@Component({
    selector: 'app-ux-design',
    templateUrl: './ux-design.component.html',
    styleUrls: ['./ux-design.component.scss'],
    standalone: false
})
export class UxDesignComponent {

 
  habilidadesUX = [
  {
    titulo: 'Pesquisa com Usuários',
    descricao: 'Entrevistas, questionários e testes para entender o comportamento dos usuários.',
    icone: 'bi bi-search'
  },
  {
    titulo: 'Arquitetura da Informação',
    descricao: 'Estruturação lógica e navegável do conteúdo digital.',
    icone: 'bi bi-diagram-3'
  },
  {
    titulo: 'Wireframes e Protótipos',
    descricao: 'Desenho de interfaces com ferramentas como Figma ou Adobe XD.',
    icone: 'bi bi-vector-pen'
  },
  {
    titulo: 'Design Centrado no Usuário',
    descricao: 'Processos focados na empatia e nas reais necessidades dos usuários.',
    icone: 'bi bi-person-heart'
  },
  {
    titulo: 'Testes de Usabilidade',
    descricao: 'Avaliações práticas com usuários para validar soluções.',
    icone: 'bi bi-clipboard-check'
  },
  {
    titulo: 'Acessibilidade',
    descricao: 'Criação de interfaces inclusivas e acessíveis.',
    icone: 'bi bi-universal-access-circle'
  }
];
  habilidadesUI = [
    {
      titulo: 'Design Visual',
      descricao: 'Criação de interfaces atraentes e funcionais.',
      icone: 'bi bi-palette'
    },
    {
      titulo: 'Tipografia',
      descricao: 'Seleção de fontes que melhorem a legibilidade.',
      icone: 'bi bi-fonts'
    },
    {
      titulo: 'Cores e Paletas',
      descricao: 'Uso estratégico de cores para guiar a experiência do usuário.',
      icone: 'bi bi-brush-fill'
    },
    {
      titulo: 'Componentes UI',
      descricao: 'Desenvolvimento de botões, formulários e outros elementos interativos.',
      icone: 'bi bi-box-seam'
    },
    {
      titulo: 'Design Responsivo',
      descricao: 'Criação de layouts adaptáveis para diferentes dispositivos.',
      icone: 'bi bi-phone-landscape'
    },
    {
      titulo: 'Ferramentas de Design',
      descricao: 'Domínio de ferramentas como Figma, Sketch e Adobe XD.',
      icone: 'bi bi-tools'
    }
  ];

}
