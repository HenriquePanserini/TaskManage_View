import { Component } from '@angular/core';
import { LoginModel } from '../../model/loigin.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../service/login.service';
import { error } from 'console';
import { Token } from '@angular/compiler';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    
    loginForm! : FormGroup;

    constructor(private formBuilder : FormBuilder,
                private router : Router,
                public loginService : LoginService
    ) {

    }

    ngOnInit() : void {
        this.loginForm = this.formBuilder.group(
        {
          email: ['', [Validators.required, Validators.email]],
          senha: ['', [Validators.required]]
        }  
      )
    }

    submitLogin() : void{
        debugger;
        var dadosLogin = this.loginForm.getRawValue() as LoginModel;

        /*this.loginService.LoginUsuario(dadosLogin).subscribe(
          token => {
            debugger;
            var requiredToken = Token
          },
          error => {
            debugger;
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
          }
        
      )*/

      this.router.navigate(["tarefas"])
    }
} 
