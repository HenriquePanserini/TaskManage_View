import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private readonly baseURL = environment["endPoint"];

  constructor(private httpClient : HttpClient) { }

  listarTarefas() : Observable<any> {
    return this.httpClient.get(`${this.baseURL}/List/`);
  }
  
}
