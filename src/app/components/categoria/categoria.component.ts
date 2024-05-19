import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paginador } from 'src/app/interfaces/paginador';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  @Output() search = new EventEmitter();
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  public datasource!: MatTableDataSource<any>;
  public displayedColumns: string[] = ['categoria', 'acciones'];
  form!: FormGroup;
  public paginador!: Paginador;
  constructor(
    // private fb:FormBuilder,
    private categoriaService: CategoriaService
  ) {
    this.paginador = new Paginador();
  }

  ngOnInit(): void {
    this.findAllRegisterByFilters();
    // this.buscar();
  }
  buscar() {
    // this.search.emit();
    // this.findAllRegisterByFilters();
  }

  findAllRegisterByFilters(){
    return new Promise((resolve, reject) => {
      // var data = this.form.value;
      var data = "";
      this.categoriaService
        .findAllbyFiltersByCategoria(data, this.paginador)
        .subscribe(
          (response) => {
            console.log(response.content.data)
            let datasource = response.content
            let totalElements = <number>response.totalElements;
            this.datasource = new MatTableDataSource(datasource);
            this.datasource.paginator = this.paginator;
            this.paginador.totalElements = response.totalElements;
            // this.categoriaService.controlChanges.next(data); //buscar
            this.datasource.sort = this.sort;
            resolve(response);
          }
        );
    });
  }

  onChangePage(event: PageEvent): void {
    this.paginador.page = event.pageIndex;
    this.paginador.size = event.pageSize;
    this.findAllRegisterByFilters();
  }
  
  onChangeNumPerpPage(event: any): void {
    this.paginador.size = event;
    this.paginador.page = 0;
    this.findAllRegisterByFilters();
  }
}
