import { Component, OnInit } from '@angular/core';
import { VuelosService } from '../../services/vuelos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {

  information;
  constructor(private _vuelosService: VuelosService) { }

  ngOnInit() {
    this.information = this._vuelosService.getDataSearch();
    this.loadData();
  }
  loadData() {
    this._vuelosService.pedirDatosBusqueda().subscribe(data => {
      this.information = data;
    });
  }

}
