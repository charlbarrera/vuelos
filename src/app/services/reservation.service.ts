import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '../components/reservation/reservation.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

   baseUrl = 'http://localhost:3000';
  private basePost = 'http://localhost:3000/create';
  private headers = new HttpHeaders().set('content-type', 'x-www-form-urlencoded');
  constructor(private http: HttpClient) { }

  getReservation() {
    return this.http.get(this.baseUrl + '/list', {headers: this.headers});
  }

  createReservation(data: Data) {
   return this.http.post(this.basePost, data , {headers: this.headers});
  }
}
