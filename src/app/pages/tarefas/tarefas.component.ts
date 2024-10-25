import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { TarefasService } from '../../service/tarefas.service';
import { Router } from '@angular/router';
import { Tarefa } from '../../model/tarefas.model';

@Component({
  selector: 'tarefas',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent implements OnInit{


  public tarefas! : any;

  constructor(private tarefasService : TarefasService,
              public router : Router
  ) {

  }

  ngOnInit() : void {
    this.ListarTarefas();
  }

  ListarTarefas(){
     this.tarefasService.listarTarefas()
        .subscribe(
        tarefas  => {
           
            this.tarefas = tarefas
        },
        error => {

          // Loga o erro para fins de depuração
          console.error('Erro ao realizar login:', error);
            
          // Verifica o status do erro e exibe uma mensagem para o usuário
          if (error.status === 400) {
              alert('Login inválido. Verifique seu email e senha.');
          } else if (error.status === 401) {
              alert('Acesso não autorizado. Verifique suas credenciais.');
          } else if (error.status === 500) {
              alert('Erro interno do servidor. Tente novamente mais tarde.');
          } else {
              alert('Ocorreu um erro desconhecido. Por favor, tente novamente.');
          }

          this.router.navigate(['/login']);
            
        }
      ) 
  }
}
