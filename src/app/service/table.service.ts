import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http:HttpClient) { }

 

  getData():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
  }

  deleteData(id:number):Observable<any>
  {
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/comments/${id}`)
  }
}
