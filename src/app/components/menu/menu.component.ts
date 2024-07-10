import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rol = localStorage.getItem("rol");

  constructor(
    private router:Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }
  
  exit() {
    this.loginService.logout();
    this.router.navigate(['/login',{}])
  }
  
  categoria() {
    this.router.navigate(['/categoria',{}])
  }

  producto() {
    this.router.navigate(['/producto',{}])
  }

  proveedor() {
    this.router.navigate(['/proveedor',{}])
  }

  trabajador() {
    this.router.navigate(['/trabajador',{}])
  }

  ingresos() {
    this.router.navigate(['/ingresos',{}])
  }
  salidas() {
    this.router.navigate(['/salidas',{}])
  }
  kardex() {
    this.router.navigate(['/kardex',{}])
  }
  usuarios() {
    this.router.navigate(['/usuarios',{}])
  }
}
