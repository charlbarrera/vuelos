import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VuelosComponent } from '../vuelos/vuelos.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';

export class Data {
  name: string;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  firstGroupControl: FormGroup;
  dataReservation = {reservation: this.data};

  constructor(
    private _formBuilder: FormBuilder,
    private _reservationService: ReservationService,
    public dialogRef: MatDialogRef<VuelosComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
    this.firstGroupControl = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this._reservationService.getReservation().subscribe(
      data => {
      console.log(data);
    },
    error => {
      console.log(error);
    }
    );
  }

  reservar() {
    this._reservationService.createReservation(this.dataReservation).subscribe(
      data => console.log(data)
    );
    alert('vuelo reservado con exito!');
  }

}
