import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaInterface } from 'src/app/interfaces/categoria-interface';
import { DigitValidator } from 'src/app/others/digitValidator';
import { IngresosService } from 'src/app/services/ingresos.service';
import { SalidaService } from 'src/app/services/salida.service';
import { DialogIngresosComponent } from '../../ingresos/dialog-ingresos/dialog-ingresos.component';

@Component({
  selector: 'app-dialog-salidas',
  templateUrl: './dialog-salidas.component.html',
  styleUrls: ['./dialog-salidas.component.css']
})
export class DialogSalidasComponent implements OnInit {


  salidaform!: FormGroup;
  public digitValidator = new DigitValidator();
  valido:any = true
  constructor(
    
    private salidaservice: SalidaService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogSalidasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  mensaje: any;
  showEdit: Boolean = this.data.showEdit;

  ngOnInit(): void {
    this.init();
    this.showBtnEdit();
    this.getProductos();
  }

  init() {
    console.log(this.data)
    this.salidaform = this.formBuilder.group({
      producto: [
        this.data?.ingreso?.productoId,
        Validators.required,
      ],
      cantidad: [
        this.data?.ingreso?.cantidad,
        Validators.required,
      ], 
    
    });
  }
  guardar(){
    this.dialogRef.close(
      {
        data: this.salidaform.value,
      
      });
  }

  cancel() {
    this.dialogRef.close();
  }

  showBtnEdit() {
    if (this.showEdit != false) {
      this.showEdit = true;
    } else {
      this.salidaform.disable();
    }
  }

  productos: CategoriaInterface[] = [];
  getProductos() {
    this.salidaservice.getProductos().subscribe(
      (res: any) => {
        this.productos = res
      },
      error => {
        alert('Error')
      }
    )
  }

}
