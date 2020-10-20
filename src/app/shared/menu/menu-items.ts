export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/meja-bantuan",
    title: "Dashboard Meja Bantuan",
    type: "link",
    icontype: "fas fa-desktop text-white",
  },
  {
    path: "/admin/kamus-rujukan",
    title: "Kamus Rujukan",
    type: "link",
    icontype: "fas fa-info-circle text-white",
  },
  {
    path: "/admin/management",
    title: "Pengurusan Sistem",
    type: "sub",
    icontype: "fas fa-cog text-white",
    collapse: "management",
    isCollapsed: true,
    children: [
      { path: "users", title: "Pengguna", type: "link" },
      { path: "audit-trails", title: "Audit Trail", type: "link" },
    ],
  },
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: "/user/dashboard",
    title: "Dashboard Pemantauan",
    type: "link",
    icontype: "fas fa-home text-white",
  },
  {
    path: "/user/saa",
    title: "Self Assessment Audit (SAA)",
    type: "sub",
    icontype: "fas fa-file text-white",
    collapse: "saa",
    isCollapsed: true,
    children: [
      { path: "saa-assessment-form", title: "Self Assessment Audit", type: "link" },
      { path: "saa-pelupusan-dokumen", title: "Pelupusan Dokumen", type: "link" },
    ],
  },
  {
    path: "/user/pengauditan",
    title: "Pengurusan Pengauditan dan Naziran",
    type: "sub",
    icontype: "fas fa-folder-open text-white",
    collapse: "pengauditan",
    isCollapsed: true,
    children: [
      { path: "pengauditan-semakan-dat", title: "Semakan DAT", type: "link" },
      { path: "pengauditan-perancangan-pengauditan", title: "Perancangan Pengauditan dan Naziran", type: "link" },
      { path: "pengauditan-laporan-pengauditan", title: "Laporan Pengauditan dan Naziran", type: "link" },
      { path: "pengauditan-maklumbalas-pengauditan", title: "Maklum Balas Pengauditan dan Naziran", type: "link" },
    ],
  },
  {
    path: "/user/maklumbalas",
    title: "Pengurusan Maklum Balas Teguran Lain",
    type: "link",
    icontype: "fas fa-bullhorn text-white",
    
  },
  {
    path: "/user/report",
    title: "Pelaporan",
    type: "link",
    icontype: "fas fa-file text-white",
  },

];
