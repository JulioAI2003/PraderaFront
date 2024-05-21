import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DigitValidator } from 'src/app/others/digitValidator';

@Component({
  selector: 'app-dialog-ingresos',
  templateUrl: './dialog-ingresos.component.html',
  styleUrls: ['./dialog-ingresos.component.css']
})
export class DialogIngresosComponent implements OnInit {


  categoriaform!: FormGroup;
  public digitValidator = new DigitValidator();
  valido:any = true
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogIngresosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  mensaje: any;
  showEdit: Boolean = this.data.showEdit;

  ngOnInit(): void {
    this.init();
    this.showBtnEdit();
  }

  init() {
    this.categoriaform = this.formBuilder.group({
      nombre: [
        this.data?.categoria?.nombre,
        Validators.required,
      ],
    
    });
  }
  guardar(){
    this.dialogRef.close(
      {
        data: this.categoriaform.value,
      
      });
  }

  cancel() {
    this.dialogRef.close();
  }

  showBtnEdit() {
    if (this.showEdit != false) {
      this.showEdit = true;
    } else {
      this.categoriaform.disable();
    }
  }

}
