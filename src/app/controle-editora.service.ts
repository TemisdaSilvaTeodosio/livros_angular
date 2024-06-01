import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Darkside' },
    { codEditora: 2, nome: 'Aleph' },
    { codEditora: 3, nome: 'Martin Claret' },
    { codEditora: 4, nome: 'HarperCollins' },
    { codEditora: 5, nome: 'Arqueiro' },
  ]; 
 
 constructor() { }

 getEditoras(): Array<Editora> {
  return this.editoras;
 }

 getNomeEditoras(codEditora: number): string | undefined {
  let editora = this.editoras.filter(e => e.codEditora === +codEditora);
  return editora.length > 0 ? editora[0].nome : undefined;
 }
}
