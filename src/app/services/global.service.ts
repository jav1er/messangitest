import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private http: HttpClient;
  private baseUrl: string =
    'https://elastic.messangi.me/raven/v2/codes/connections';
  private token: string =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZWNobmljYWwtdGVzdC1tZXNzYW5naSIsImF1dGhvcml0aWVzIjp7ImxvZ2luIjoiMSJ9LCJhdWQiOiJwcm9kIiwib3BlcmF0b3IiOiJ0ZWNobmljYWx0ZXN0QG1lc3NhbmdpLmNvbSIsImlzcyI6ImFmZDc0ZDE3LWFkZDctNDEwOC04ZGQzLWU5ZWM4ODY3NTc2MSIsImV4cCI6MTc0ODEwNzU3M30.3Zj0gKIUm2FW8zbQzssg21vVh2WDKklt7clPp40sB4E6O2QEOrpmmDruJz_ojiKrQenJYO60TeFZulzDUw6HUQ';
  constructor(http: HttpClient) {
    this.http = http;
  }

  sendMessage(msg: any): Observable<any> {
    const { email, fullname, exp, ...msgFormat } = msg;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token,
    });

    return this.http.post<any>(
      'https://elastic.messangi.me/raven/v2/messages',
      msgFormat,
      { headers }
    );
  }



}
