import { Component, OnInit } from '@angular/core';
import { VuelosService } from '../../services/vuelos.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ReservationComponent } from '../reservation/reservation.component';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {

  information;
  constructor(private _vuelosService: VuelosService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.information = this._vuelosService.getDataSearch();
    this.loadData();
  }
  loadData() {
    this._vuelosService.pedirDatosBusqueda().subscribe(data => {
      this.information = data;
    });
  }

  openReserve(infoFlight) {
    const dialogRef = this.dialog.open(ReservationComponent, {
      width: '450px',
      data: infoFlight
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
  }

}
