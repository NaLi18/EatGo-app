import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EatGoService {
  API_KEY:string ="AIzaSyCFCDqcWZryyPAnPa8h_cJVAWemz-kOhYo"
  constructor(private httpClient: HttpClient){ }

  public getRest(id:string){
    console.log("logging from service"+id);
    return this.httpClient.get<Config>('http://localhost:3000/eatgo/'+id);
  
  }
}

export interface Config{
  heroesUrl: string;
  textfile: string;
}