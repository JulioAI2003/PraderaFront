import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../interfaces/PageResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  controlChanges = new Subject<Data<any>>();
  private url = `${environment.API}`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  public authenticate(datos: any): Observable<any>{
    return this.http.post(`${this.url}login/authenticate`, datos, this.httpOptions);
  }

}
