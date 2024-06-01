import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      titulo: 'Carmilla',
      resumo: 'A obra é narrada por Laura, jovem que vive isolada com o pai em um castelo na Estíria...',
      codEditora: 1,
      autores: ['Sheridan le fanu']
    },
    {
      codigo: 2,
      titulo: 'Jurassic Park',
      resumo: 'A trama usa a teoria do caos e suas implicações filosóficas para...',
      codEditora: 2,
      autores: ['Michael Crichton ']
    },
    {
      codigo: 3,
      titulo: 'Livro C',
      resumo: 'Resumo do Livro C',
      codEditora: 3,
      autores: ['Autor C1']
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro>{
    return this.livros;    
  }

  incluir(livro: Livro): void {
    let maxCodigo = Math.max(...this.livros.map(l => l.codigo));
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    let index = this.livros.findIndex(l => l.codigo === codigo)
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
