import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import swal from 'sweetalert2';

@Component({
  selector: 'app-maklumbalas',
  templateUrl: './maklumbalas.component.html',
  styleUrls: ['./maklumbalas.component.scss']
})
export class MaklumbalasComponent implements OnInit {


  img1 = "assets/img/theme/feedback.png";
  img2 = "assets/img/theme/article.png";
  img3 = "assets/img/theme/ticket.png";

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog"
  };
  showModal: boolean;
  main: boolean = true;
  ticketRequest: boolean = false;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  openModal() {
    this.showModal=true;
  }


  closeModal() {
    this.showModal=false;
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to submit this ticket?",
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
      text: "Successfully submitted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
      }
    })
  }

  openTicketRequest(){
    this.ticketRequest=true;
    this.main=false;
  }

  back(){
    this.ticketRequest=false;
    this.main=true;
  }
}
