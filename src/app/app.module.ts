import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriaComponent,
    ProductoComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    MatTableModule,
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
