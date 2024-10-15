import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{


    constructor(private router : Router){

    }

    ngOnInit(): void {
      
    }

    exit() : void{
        this.router.navigate(["/login"]);
    }
}
