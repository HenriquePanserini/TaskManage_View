import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tarefas',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent implements OnInit{

  constructor() {

  }

  listaTarefas! : Array<number>;

  ngOnInit() : void {
    var lista = new Array<number>();
    for (let index = 0; index < 12; index++){
      lista.push(index);
    }

    this.listaTarefas = lista;
  }
}
