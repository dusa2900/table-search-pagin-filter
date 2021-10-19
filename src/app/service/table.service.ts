import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http:HttpClient) { }

  public apiUrl:string=" http://localhost:4000/info";

  getData():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  deleteData(id:number):Observable<any>
  {
    return this.http.delete(`http://localhost:4000/info/${id}`)
  }
}
