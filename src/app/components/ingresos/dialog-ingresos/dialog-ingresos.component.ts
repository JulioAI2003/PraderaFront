import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaInterface } from 'src/app/interfaces/categoria-interface';
import { DigitValidator } from 'src/app/others/digitValidator';
import { IngresosService } from 'src/app/services/ingresos.service';

@Component({
  selector: 'app-dialog-ingresos',
  templateUrl: './dialog-ingresos.component.html',
  styleUrls: ['./dialog-ingresos.component.css']
})
export class DialogIngresosComponent implements OnInit {

  ingresosform!: FormGroup;
  public digitValidator = new DigitValidator();
  valido:any = true
  constructor(
    
    private ingresosservice: IngresosService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogIngresosComponent>,
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
    this.ingresosform = this.formBuilder.group({
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
        data: this.ingresosform.value,
      
      });
  }

  cancel() {
    this.dialogRef.close();
  }

  showBtnEdit() {
    if (this.showEdit != false) {
      this.showEdit = true;
    } else {
      this.ingresosform.disable();
    }
  }

  productos: CategoriaInterface[] = [];
  getProductos() {
    this.ingresosservice.getProductos().subscribe(
      (res: any) => {
        this.productos = res
      },
      error => {
        alert('Error')
      }
    )
  }

}
