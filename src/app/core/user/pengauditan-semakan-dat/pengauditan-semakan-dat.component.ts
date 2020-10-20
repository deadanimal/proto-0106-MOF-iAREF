import { Component, OnInit, TemplateRef } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pengauditan-semakan-dat',
  templateUrl: './pengauditan-semakan-dat.component.html',
  styleUrls: ['./pengauditan-semakan-dat.component.scss']
})
export class PengauditanSemakanDatComponent implements OnInit {

  managementType: string;

  main: boolean = true;
  table: boolean = false;

  rows: any = [
    {
      name: "Dokumen akuan terimaan DAT1-230",
      date: "2020-03-13"
    },
    {
      name: "Dokumen akuan terimaan DAT2-010",
      date: "2020-05-04"
    },
    {
      name: "Dokumen akuan terimaan DAT3-009",
      date: "2020-01-23"
    },
    {
      name: "Dokumen akuan terimaan DAT4-110",
      date: "2019-01-11"
    },
    {
      name: "Dokumen akuan terimaan DAT5-987",
      date: "2019-05-21"
    },
    {
      name: "Dokumen akuan terimaan DAT6-119",
      date: "2019-02-21"
    },
    {
      name: "Dokumen akuan terimaan DAT7-023",
      date: "2019-03-13"
    },
    {
      name: "Dokumen akuan terimaan DAT8-556",
      date: "2019-05-04"
    },
    {
      name: "Dokumen akuan terimaan DAT9-119",
      date: "2019-01-23"
    },
  ]

  constructor(

  ) {

    this.managementType = "";
  }

  ngOnInit() {
  }


  showTable() {
    this.main = false;
    this.table = true;
  }


  deleteData(row) {

    let modalText = row.name;

    swal.fire({
      title: "Delete Dokumen?",
      text: modalText,
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonClass: 'btn btn-danger',
      confirmButtonText: 'Yes',
      cancelButtonClass: 'btn btn-secondary'
    }).then((result) => {
      if (result.value) {
        // Show confirmation
        swal.fire({
          title: 'Deleted!',
          text: 'The record has been deleted.',
          type: 'success',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-dark'
        });
      }
    })
  }

}
