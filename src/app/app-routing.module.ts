import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SalidaComponent } from './components/salida/salida.component';
import { FirstGuardGuard } from './guards/first-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'categoria',
    component: CategoriaComponent,
    canActivate:[FirstGuardGuard]
  },
  {
    path: 'producto',
    component: ProductoComponent,
    canActivate:[FirstGuardGuard]

  },
  {
    path: 'ingresos',
    component: IngresosComponent,
    canActivate:[FirstGuardGuard]
  },
  {
    path: 'salidas',
    component: SalidaComponent,
    canActivate:[FirstGuardGuard]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
