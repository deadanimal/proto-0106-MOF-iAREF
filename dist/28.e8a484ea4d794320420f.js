(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{YAfG:function(e,t,o){"use strict";o.r(t);var i=o("Valr"),a=o("j1ZV"),r=o("ghUt"),n=o("DUip"),l=o("TYT/"),b=function(){function e(){}return e.prototype.ngOnInit=function(){var e=document.getElementById("map-custom"),t=e.getAttribute("data-lat"),o=e.getAttribute("data-lng"),i=new google.maps.LatLng(t,o),a={zoom:12,scrollwheel:!1,center:i,mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#5e72e4"},{visibility:"on"}]}]};e=new google.maps.Map(e,a);var r=new google.maps.Marker({position:i,map:e,animation:google.maps.Animation.DROP,title:"Hello World!"}),n=new google.maps.InfoWindow({content:'<div class="info-window-content"><h2>Argon Dashboard</h2><p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>'});google.maps.event.addListener(r,"click",(function(){n.open(e,r)}))},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Kb({type:e,selectors:[["app-google"]],decls:31,vars:0,consts:[[1,"header","bg-danger","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-white","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-home"],["aria-current","page",1,"breadcrumb-item","active"],[1,"col-lg-6","col-5","text-right"],["href","javascript:void(0)",1,"btn","btn-sm","btn-neutral"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col"],[1,"card","border-0"],["data-lat","40.748817","data-lng","-73.985428","id","map-custom",1,"map-canvas",2,"height","600px"],["data-lat","40.748817","data-lng","-73.985428","id","map-default",1,"map-canvas",2,"height","600px"]],template:function(e,t){1&e&&(l.Wb(0,"div",0),l.Wb(1,"div",1),l.Wb(2,"div",2),l.Wb(3,"div",3),l.Wb(4,"div",4),l.Wb(5,"h6",5),l.Rc(6,"Google maps"),l.Vb(),l.Wb(7,"nav",6),l.Wb(8,"ol",7),l.Wb(9,"li",8),l.Wb(10,"a",9),l.Rb(11,"i",10),l.Vb(),l.Vb(),l.Wb(12,"li",8),l.Wb(13,"a",9),l.Rc(14," Maps "),l.Vb(),l.Vb(),l.Wb(15,"li",11),l.Rc(16," Google maps "),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(17,"div",12),l.Wb(18,"a",13),l.Rc(19," New "),l.Vb(),l.Wb(20,"a",13),l.Rc(21," Filters "),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(22,"div",14),l.Wb(23,"div",15),l.Wb(24,"div",16),l.Wb(25,"div",17),l.Rb(26,"div",18),l.Vb(),l.Vb(),l.Vb(),l.Wb(27,"div",15),l.Wb(28,"div",16),l.Wb(29,"div",17),l.Rb(30,"div",19),l.Vb(),l.Vb(),l.Vb(),l.Vb())},encapsulation:2}),e}(),c=o("NSr3"),d=o("VIqg"),s=Object(d.a)().domain([100,3e3]).range(["#AAAAAA","#444444"]),p={Russia:{color:s(300)},Canada:{color:s(120)},China:{color:s(1300)},"United States":{color:s(2920)},Brazil:{color:s(550)},Australia:{color:s(760)},India:{color:s(200)},Argentina:{color:s(240)},Romania:{color:s(600)},Algeria:{color:s(540)}},u=function(){function e(){}return e.prototype.getCountries=function(){return p},e.\u0275prov=l.Mb({token:e,factory:e.\u0275fac=function(t){return new(t||e)}}),e}(),m=o("2uaZ"),f=function(){return[0,0,0,0]},v=[{path:"",children:[{path:"google",component:b}]},{path:"",children:[{path:"vector",component:function(){function e(e){this.worldMap=c.world,this.countries=e.getCountries(),this.customizeTooltip=this.customizeTooltip.bind(this),this.customizeLayers=this.customizeLayers.bind(this),this.click=this.click.bind(this)}return e.prototype.customizeTooltip=function(e){return{text:e.attribute("name"),color:"#FFFFFF",fontColor:"#000"}},e.prototype.customizeLayers=function(e){var t=this;e.forEach((function(e){var o=t.countries[e.attribute("name")];e.applySettings(o?{color:o.color,hoveredColor:o.color,selectedColor:o.color}:{color:"#e4e4e4",hoveredColor:"#e4e4e4",selectedColor:"#e4e4e4"})}))},e.prototype.click=function(e){var t=e.target;t&&this.countries[t.attribute("name")]&&t.selected(!t.selected())},e.prototype.ngOnInit=function(){},e.\u0275fac=function(t){return new(t||e)(l.Qb(u))},e.\u0275cmp=l.Kb({type:e,selectors:[["app-vector"]],features:[l.Bb([u])],decls:34,vars:9,consts:[[1,"header","bg-danger","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-white","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-home"],["aria-current","page",1,"breadcrumb-item","active"],[1,"col-lg-6","col-5","text-right"],["href","javascript:void(0)",1,"btn","btn-sm","btn-neutral"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col"],[1,"card"],[1,"card-body","pt-0"],[1,"vector-map"],["id","vector-map",3,"bounds","onClick"],[3,"height","width"],[3,"enabled","customizeTooltip"],["color","#fff"],[3,"visible"],[3,"dataSource","customize"]],template:function(e,t){1&e&&(l.Wb(0,"div",0),l.Wb(1,"div",1),l.Wb(2,"div",2),l.Wb(3,"div",3),l.Wb(4,"div",4),l.Wb(5,"h6",5),l.Rc(6,"Vector maps"),l.Vb(),l.Wb(7,"nav",6),l.Wb(8,"ol",7),l.Wb(9,"li",8),l.Wb(10,"a",9),l.Rb(11,"i",10),l.Vb(),l.Vb(),l.Wb(12,"li",8),l.Wb(13,"a",9),l.Rc(14," Maps "),l.Vb(),l.Vb(),l.Wb(15,"li",11),l.Rc(16," Vector maps "),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(17,"div",12),l.Wb(18,"a",13),l.Rc(19," New "),l.Vb(),l.Wb(20,"a",13),l.Rc(21," Filters "),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Wb(22,"div",14),l.Wb(23,"div",15),l.Wb(24,"div",16),l.Wb(25,"div",17),l.Wb(26,"div",18),l.Wb(27,"div",19),l.Wb(28,"dx-vector-map",20),l.ic("onClick",(function(e){return t.click(e)})),l.Rb(29,"dxo-size",21),l.Wb(30,"dxo-tooltip",22),l.Rb(31,"dxo-font",23),l.Rb(32,"dxo-border",24),l.Vb(),l.Rb(33,"dxi-layer",25),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&e&&(l.Cb(28),l.tc("bounds",l.xc(8,f)),l.Cb(1),l.tc("height",600)("width",950),l.Cb(1),l.tc("enabled",!0)("customizeTooltip",t.customizeTooltip),l.Cb(2),l.tc("visible",!1),l.Cb(1),l.tc("dataSource",t.worldMap)("customize",t.customizeLayers))},directives:[r.a,m.q,m.v,m.j,m.f,m.a],styles:["#vector-map{min-height:220px;width:100%;display:block}  #vector-map>svg>rect{display:none}"]}),e}()}]}];o.d(t,"MapsModule",(function(){return h}));var h=function(){function e(){}return e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({factory:function(t){return new(t||e)},imports:[[i.c,n.g.forChild(v),a.a,r.b]]}),e}()}}]);