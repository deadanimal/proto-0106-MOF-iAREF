
import { Routes } from "@angular/router";

import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";
import { MejaBantuanComponent } from './meja-bantuan/meja-bantuan.component';
import { KamusRujukanComponent } from './kamus-rujukan/kamus-rujukan.component';


export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "meja-bantuan",
        component: MejaBantuanComponent,
      },
      {
        path: "kamus-rujukan",
        component: KamusRujukanComponent,
      },
      {
        path: "management",
        children: [
          {
            path: "users",
            component: ManagementUserComponent,
          },
          {
            path: "audit-trails",
            component: ManagementAuditComponent,
          },
        ],
      },

    ],
  },


];
