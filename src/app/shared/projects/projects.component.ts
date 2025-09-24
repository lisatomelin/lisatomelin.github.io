import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent {
  projetos = [
    {
      nome: 'e-Agenda Médica',
      descricao: 'Projeto criado para facilitar o agendamento de consultas e cirurgias.',
      imagem: './assets/eagenda.png',
      link: 'https://github.com/lisatomelin/eAgenda-Medica'
    },
    {
      nome: 'APMDB Cinema 2.0',
      descricao: 'Site que exibe lançamentos de filmes utilizando a API do TMDB.',
      imagem: './assets/filmes.png',
      link: 'https://cinema-angular.onrender.com'
    },
     {
      nome: 'Pousada 2.0',
      descricao: 'Projeto para construção de um sistema para controle de reservas.',
      imagem: './assets/pousada.png',
      link: 'https://github.com/lisatomelin/pousada2.0-master'
    },

  ];

  projetosUxDesign = [
    {
       nome: 'EM CONSTRUÇÃO',
      descricao: '',
      imagem: './assets/UnderConstruction.png',
      link: ''
    },
    {
       nome: 'EM CONSTRUÇÃO',
      descricao: '',
      imagem: './assets/UnderConstruction.png',
      link: '',

    },
     {
      nome: 'EM CONSTRUÇÃO',
      descricao: '',
      imagem: './assets/UnderConstruction.png',
      link: ''
    },

  ];
}
