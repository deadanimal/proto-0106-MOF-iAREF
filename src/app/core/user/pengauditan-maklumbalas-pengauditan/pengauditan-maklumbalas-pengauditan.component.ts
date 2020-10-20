import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pengauditan-maklumbalas-pengauditan',
  templateUrl: './pengauditan-maklumbalas-pengauditan.component.html',
  styleUrls: ['./pengauditan-maklumbalas-pengauditan.component.scss']
})
export class PengauditanMaklumbalasPengauditanComponent implements OnInit {

  managementType:string;
  main:boolean=true;
  form:boolean=false;
  table:boolean=false;
  rating3: number;

  public form2: FormGroup;

  rows:any=[
    {
      id:"ID123",
      isu:"Berisiko tinggi",
      pengelasan:"Tiada Tindakan",
      notifikasi:"Sukuan",
      markah: "78%",
      rating: "5 bintang",
      date :"2020-03-13"
    },
    {
      id:"ID565",
      isu:"Berulang",
      pengelasan:"Dalam tindakan",
      notifikasi:"Lain-lain",
      markah: "80%",
      rating: "4 bintang",
      date :"2020-05-04"
    },
    {
      id:"ID220",
      isu:"Berulang",
      pengelasan:"selesai",
      notifikasi:"Bulanan",
      markah: "86%",
      rating: "3 bintang",
      date :"2020-01-23"
    },
  ]

  constructor(
    private fb: FormBuilder
  ) {
    this.rating3 = 0;
    this.form2 = this.fb.group({
      rating1: ['', Validators.required],
    });
    this.managementType="";
   }

  ngOnInit() {
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

  showTable(){
    this.table=true;
    this.main=false;
  }
  showForm(){
    this.main=false;
    this.form=true;
  }

}
