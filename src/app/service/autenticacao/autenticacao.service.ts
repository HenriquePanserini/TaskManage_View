import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private Autenticado : boolean = false;

  constructor() { }

  public DefineToken(token : string){
    sessionStorage.setItem('token', token);
  }

  public ObterToken(){
    sessionStorage.getItem('token');
  }

  public LimparToken(){
    sessionStorage.removeItem('token');
  }

}
