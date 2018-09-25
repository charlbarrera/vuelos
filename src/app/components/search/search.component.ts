import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../vuelos/vuelo';
import { VuelosService } from '../../services/vuelos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pickerdate: any;
  origen: string;
  destino: string;


  cards = false;

  resultado: Vuelo;

  constructor(private _vuelosService: VuelosService) { }

  ngOnInit() {
  }

  buscar() {
    this.cards = true;
    this._vuelosService.almacenarDatosBusqueda({date: this.pickerdate, origen: this.origen, destino: this.destino});
    // this.resultado = {origen: this.origen, destino: this.destino, precio: 20000, fecha: '20/jul', hora: '7 am'};

  }

}
