import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { server } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public sendMail(form): Observable<any> {
    console.log('from service: ', form);
    return this.httpClient.post(server + '/send-email', form);
  }
}
