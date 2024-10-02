import { Component } from '@angular/core';
import { LoginModel } from '../../../model/loigin.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    
    loginForm! : FormGroup;

    constructor() {

    }

    ngOnInit() : void {
      
    }
} 
