import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router:Router,

  ) { }

  ngOnInit(): void {
  }
  
  exit() {
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
}
