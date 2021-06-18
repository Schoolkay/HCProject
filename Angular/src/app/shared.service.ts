import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //Base url for api actions
  readonly APIUrl="https://localhost:44314/api/People";
  readonly ImageUrl="https://localhost:44314/Images/"

  constructor(private http:HttpClient) { }

  getPeopleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }

  getPerson(val:any){
    return this.http.get<any>(this.APIUrl+val.id,val);
  }

  updatePerson(val:any){
    return this.http.put(this.APIUrl+val.id,val);
  }

  addPerson(val:any){
    return this.http.post(this.APIUrl, val);
  }

  deletePerson(val:any){
    return this.http.delete(this.APIUrl+val.id,val);
  }

  uploadImage(val:any){
    return this.http.post(this.APIUrl+"/SaveFile",val);
  }
}
