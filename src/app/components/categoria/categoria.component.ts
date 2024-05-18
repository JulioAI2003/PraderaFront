import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paginador } from 'src/app/interfaces/paginador';
import { CategoriaService } from 'src/app/services/categoria.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  
 @ViewChild(MatSort, { static: true }) sort!: MatSort;
 @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  public dataSource!: MatTableDataSource<any>;
  public displayedColumns: string[] = ['Categoria','acciones'];
  form!: FormGroup;
  public paginador!: Paginador;
  constructor(
    
    private categoriaService:CategoriaService,   
  ) { }

  ngOnInit(): void {
  }

  findAllRegisterByFilters(): Promise<any> {
    return new Promise((resolve, reject) => {
      var data = this.form.value;
      this.
      categoriaService.findAllbyFiltersByCategoria(data, this.paginador)
        .subscribe(
          (response) => {
            let dataSource = response.content;
            let totalElements = <number>response.totalElements;
            this.dataSource = new MatTableDataSource(dataSource);
            this.dataSource.paginator = this.paginator;
            this.paginador.totalElements = response.totalElements;
            this.categoriaService.controlChanges.next(data); //buscar
            this.dataSource.sort = this.sort;
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

}
