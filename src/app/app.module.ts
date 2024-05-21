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
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DialogCategoriaComponent } from './components/categoria/dialog-categoria/dialog-categoria.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogSuccessComponent } from './components/alert/dialog/dialog-success/dialog-success.component';
import { DialogConfirmComponent } from './components/alert/dialog/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from './components/alert/dialog/dialog-error/dialog-error.component';
import { DialogWarningComponent } from './components/alert/dialog/dialog-warning/dialog-warning.component';
import { DialogLoadingComponent } from './components/alert/dialog/dialog-loading/dialog-loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { DialogProductoComponent } from './components/producto/dialog-producto/dialog-producto.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { DialogIngresosComponent } from './components/ingresos/dialog-ingresos/dialog-ingresos.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriaComponent,
    ProductoComponent,
    MenuComponent,
    DialogCategoriaComponent, //problema en el mat-label
    DialogSuccessComponent,
    DialogLoadingComponent,
    DialogConfirmComponent,
    DialogErrorComponent,
    DialogWarningComponent,
    DialogProductoComponent,
    IngresosComponent,
    DialogIngresosComponent,
  ],
  imports: [
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserModule,
    MatDialogModule,
    HttpClientModule, 
    AppRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
