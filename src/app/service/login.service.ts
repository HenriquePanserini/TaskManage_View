import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly baseUrl = environment["endPoint"];

  constructor(private httpCliente : HttpClient) { }

  LoginUsuario(objeto: any) {
      return this.httpCliente.post<any>(`${this.baseUrl}/AdicionaUsuarioIdentity/`, objeto);
    
  }

}
