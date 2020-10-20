import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pengauditan-perancangan-pengauditan',
  templateUrl: './pengauditan-perancangan-pengauditan.component.html',
  styleUrls: ['./pengauditan-perancangan-pengauditan.component.scss']
})
export class PengauditanPerancanganPengauditanComponent implements OnInit {

  managementType: string;

  main: boolean = true;
  table:boolean=false;
  form: boolean = false;

  rows: any = [
    {
      id:"1",
      answer1:"Memerlukan perancangan",
      answer2:"Memerlukan Maklumbalas",
      answer3:"Penemuan lain-lain",
      costing:"40,000",
      start_date:"2020-01-23",
      end_date:"2020-02-23"
    },
    {
      id:"2",
      answer1:"Tidak memerlukan perancangan",
      answer2:"Tidak memerlukan Maklumbalas",
      answer3:"Penemuan Pengauditan (dalam RCM)",
      costing:"11,300",
      start_date:"2019-01-13",
      end_date:"2020-02-23"
    },
    {
      id:"3",
      answer1:"Memerlukan perancangan",
      answer2:"Tidak memerlukan Maklumbalas",
      answer3:"Penemuan lain-lain",
      costing:"450,030",
      start_date:"2018-01-23",
      end_date:"2019-05-14"
    },
  ]

  constructor(

  ) {

    this.managementType = "";
  }

  ngOnInit() {
  }

  showTable(){
    this.main=false;
    this.table = true;
  }


  showForm() {
    this.form = true;
  }


  deleteData(row) {

    let modalText = "Perancangan ID: " + row.id;

    swal.fire({
      title: "Delete Perancangan?",
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

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to submit this record?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-primary",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Success",
      text: "The record has been submitted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }
}
