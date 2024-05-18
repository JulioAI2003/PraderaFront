import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../interfaces/PageResponse';
import { Paginador } from '../interfaces/paginador';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  
  controlChanges = new Subject<Data<any>>();
  private url = `${environment.API}`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private http: HttpClient,
  ) { }


  public findAllbyFiltersByCategoria(filters: any, paginator: Paginador): Observable<any> {
    let params = new HttpParams()
    if (filters.nombre !=-1) params = params.append('nombre', filters.categoria)
    .set('page', paginator.page.toString())
    .set('size', paginator.size.toString())
   return this.http.get(`${this.url}regla/bandeja?${params}`, this.httpOptions);
  }
}
