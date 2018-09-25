import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  private $subject = new Subject<any>();

  datosVuelo = [];

  constructor() { }

  almacenarDatosBusqueda(data) {
    const price = Math.floor(Math.random() * (200 - 100) + 100);
    let total = 0  ;
    data.date.getDay() > 0 && data.date.getDay() < 6 ? total = price : total = price * 2;
    this.datosVuelo = [
      {date: data.date, origen: data.origen,
        destino: data.destino, totalPrice: total + 20, horario: '8:00 am'},
    {date: data.date, origen: data.origen,
        destino: data.destino, totalPrice: total, horario: '4:00 pm'},
    {date: data.date, origen: data.origen,
      destino: data.destino, totalPrice: total, horario: '4:00 pm'}
    ];
    this.$subject.next([
          {date: data.date, origen: data.origen,
             destino: data.destino, totalPrice: total + 20, horario: '8:00 am'},
         {date: data.date, origen: data.origen,
             destino: data.destino, totalPrice: total, horario: '4:00 pm'},
         {date: data.date, origen: data.origen,
           destino: data.destino, totalPrice: total, horario: '4:00 pm'}
        ]);
  }

  getDataSearch() {
    console.log(this.datosVuelo);
    return this.datosVuelo;
  }

  pedirDatosBusqueda(): Observable<any> {
    return this.$subject.asObservable();
  }

}
