import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-saa-pelupusan-dokumen',
  templateUrl: './saa-pelupusan-dokumen.component.html',
  styleUrls: ['./saa-pelupusan-dokumen.component.scss']
})
export class SaaPelupusanDokumenComponent implements OnInit {

  selectedFile: File;
  filename:any =[];

  constructor() { 
  }

  ngOnInit() {
  
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to submit these documents?",
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
      text: "The documents has been submitted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }

  

  private onUpload(imageFor) {
    const fd = new FormData();
    fd.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.filename[imageFor]=this.selectedFile.name;
    // console.log(this.filename[imageFor]);
    // console.log(this.filename);
  }

  onFileSelected(event, imageFor) {
    this.selectedFile = <File>event.target.files[0];
    this.onUpload(imageFor);
    // console.log(imageFor);
    // console.log(this.selectedFile);
  }

}
