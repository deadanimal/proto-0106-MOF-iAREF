import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-saa-assessment-form',
  templateUrl: './saa-assessment-form.component.html',
  styleUrls: ['./saa-assessment-form.component.scss']
})
export class SaaAssessmentFormComponent implements OnInit {

  main: boolean = true;
  table: boolean = false;
  saa: boolean = false;
  sulit: boolean = false;
  rating3: number;
  agency: string;

  public form: FormGroup;

  surveys:any=[
    {
      name:"Assessment ID123",
      date :"2020-03-13"
    },
    {
      name:"Assessment ID565",
      date :"2020-05-04"
    },
    {
      name:"Assessment ID220",
      date :"2020-01-23"
    },
  ]

  rows: any = [
    {
      question: "1. Adakah semua versi protokol yang disetujui IRB dalam fail (termasuk yang terkini)?",
      option1: "1",
      option2: "2",
      option3: "3",
      asnwer:"Ya"
    },
    {
      question: "2. CVs dikemaskini dalam masa dua tahun yang terkini",
      option1: "4",
      option2: "5",
      option3: "6",
      asnwer:"Tidak"
    },
    {
      question: "3. Adakah lesen perubatan yang sah untuk semua kakitangan yang diluluskan oleh IRB (contoh: jururawat)",
      option1: "7",
      option2: "8",
      option3: "9",
      asnwer:"Ya"
    },
    {
      question: "4. Adakah rancangan pemantauan keselamatan data? (DSMP)",
      option1: "10",
      option2: "11",
      option3: "12",
      asnwer:"Ya"
    },
    {
      question: "5. Adakah DSMP diikuti sesuai dengan protokol yang diluluskan oleh IRB?",
      option1: "13",
      option2: "14",
      option3: "15",
      asnwer:"Tiada"
    }
  ]

  constructor(
    private fb: FormBuilder
  ) {
    this.rating3 = 0;
    this.form = this.fb.group({
      rating1: ['', Validators.required],
    });
    this.agency = "Agency"
  }

  ngOnInit() {

  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to submit this assessment?",
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
      text: "The assessment has been submitted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }

  showTable(){
    this.main=false;
    this.table=true;
  }

  goToSAA() {
    this.saa = true;
    this.main = false;
  }

  goToSulit() {
    this.table=false;
    this.sulit = true;
    this.saa = false;
  }

  goToPrevious() {
    this.table=true;
    this.saa = true;
    this.sulit = false;
  }

}
