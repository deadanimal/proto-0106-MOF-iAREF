import { ReportComponent } from './report/report.component';
import { PengauditanMaklumbalasPengauditanComponent } from './pengauditan-maklumbalas-pengauditan/pengauditan-maklumbalas-pengauditan.component';
import { PengauditanLaporanPengauditanComponent } from './pengauditan-laporan-pengauditan/pengauditan-laporan-pengauditan.component';
import { SaaPelupusanDokumenComponent } from './saa-pelupusan-dokumen/saa-pelupusan-dokumen.component';
import { SaaAssessmentFormComponent } from './saa-assessment-form/saa-assessment-form.component';

import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PengauditanSemakanDatComponent } from './pengauditan-semakan-dat/pengauditan-semakan-dat.component';
import { PengauditanPerancanganPengauditanComponent } from './pengauditan-perancangan-pengauditan/pengauditan-perancangan-pengauditan.component';
import { MaklumbalasComponent } from './maklumbalas/maklumbalas.component';
export const UserRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "saa",
        children: [
          {
            path: "saa-assessment-form",
            component: SaaAssessmentFormComponent,
          },
          {
            path: "saa-pelupusan-dokumen",
            component: SaaPelupusanDokumenComponent,
          },
        ],
      },
      {
        path: "pengauditan",
        children: [
          {
            path: "pengauditan-semakan-dat",
            component: PengauditanSemakanDatComponent,
          },
          {
            path: "pengauditan-perancangan-pengauditan",
            component: PengauditanPerancanganPengauditanComponent,
          },
          {
            path: "pengauditan-laporan-pengauditan",
            component: PengauditanLaporanPengauditanComponent,
          },
          {
            path: "pengauditan-maklumbalas-pengauditan",
            component: PengauditanMaklumbalasPengauditanComponent,
          },
        ],
      },
      {
        path: "maklumbalas",
        component:MaklumbalasComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "report",
        component: ReportComponent,
      },
      
    ]
  }


];
