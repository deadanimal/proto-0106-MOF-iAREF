
import { SaaPelupusanDokumenComponent } from './saa-pelupusan-dokumen/saa-pelupusan-dokumen.component';
import { SaaAssessmentFormComponent } from './saa-assessment-form/saa-assessment-form.component';
import { ReportComponent } from './report/report.component';
import { PengauditanMaklumbalasPengauditanComponent } from './pengauditan-maklumbalas-pengauditan/pengauditan-maklumbalas-pengauditan.component';
import { PengauditanLaporanPengauditanComponent } from './pengauditan-laporan-pengauditan/pengauditan-laporan-pengauditan.component';
import { PengauditanComponent } from './pengauditan/pengauditan.component';
import { CalendarModule } from './../../examples/calendar/calendar.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
} from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { TagInputModule } from "ngx-chips";

import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routing";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { OrgChartModule } from "angular-org-chart";
import { NgxStarRatingModule } from 'ngx-star-rating';

import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaklumbalasComponent } from './maklumbalas/maklumbalas.component';
import { PengauditanSemakanDatComponent } from './pengauditan-semakan-dat/pengauditan-semakan-dat.component';
import { PengauditanPerancanganPengauditanComponent } from './pengauditan-perancangan-pengauditan/pengauditan-perancangan-pengauditan.component';
import { SaaComponent } from './saa/saa.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MaklumbalasComponent,
    PengauditanComponent,
    PengauditanLaporanPengauditanComponent,
    PengauditanMaklumbalasPengauditanComponent,
    PengauditanPerancanganPengauditanComponent,
    PengauditanSemakanDatComponent,
    ReportComponent,
    SaaComponent,
    SaaAssessmentFormComponent,
    SaaPelupusanDokumenComponent,



    
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes),
    QuillModule.forRoot(),
    NgxDropzoneModule,
    TagInputModule,
    OrgChartModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    NgbModule,
    CalendarModule,
    NgxStarRatingModule
  ],
})
export class UserModule {}
