import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kamus-rujukan',
  templateUrl: './kamus-rujukan.component.html',
  styleUrls: ['./kamus-rujukan.component.scss']
})
export class KamusRujukanComponent implements OnInit {

  rows:any=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  constructor() { }

  ngOnInit() {
  }

}
