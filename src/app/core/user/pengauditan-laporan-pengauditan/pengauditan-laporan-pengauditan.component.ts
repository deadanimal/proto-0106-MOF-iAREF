import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_frozen from "@amcharts/amcharts4/themes/frozen";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_frozen);

@Component({
  selector: 'app-pengauditan-laporan-pengauditan',
  templateUrl: './pengauditan-laporan-pengauditan.component.html',
  styleUrls: ['./pengauditan-laporan-pengauditan.component.scss']
})
export class PengauditanLaporanPengauditanComponent implements OnInit {

  chart: any
  managementType: string;

  rows:any=[
    {
      id: "6277-AS",
      name: "Laporan DAT1-230",
      date: "2020-03-13",
      status: "Memerlukan perancangan"
    },
    {
      id: "6237-AS",
      name: "Laporan DAT2-010",
      date: "2020-05-04",
      status: "Penemuan pengauditan (dalam RCM)"
    },
    {
      id: "1377-AS",
      name: "Laporan DAT3-009",
      date: "2020-01-23",
      status: "Memerlukan maklum balas"
    },
    {
      id: "3455-AS",
      name: "Laporan DAT4-110",
      date: "2019-01-11",
      status: "Memerlukan maklum balas"
    },
    {
      id: "2345-AS",
      name: "Laporan DAT5-987",
      date: "2019-05-21",
      status: "Memerlukan maklum balas"
    },
    {
      id: "7878-AS",
      name: "Laporan DAT6-119",
      date: "2019-02-21",
      status: "Penemuan pengauditan (dalam RCM)"
    },
    {
      id: "5467-AS",
      name: "Laporan DAT7-023",
      date: "2019-03-13",
      status: "Penemuan pengauditan (dalam RCM)"
    },
    {
      id: "6767-AS",
      name: "Laporan DAT8-556",
      date: "2019-05-04",
      status: "memerlukan perancangan"
    },
    {
      id: "8900-AS",
      name: "Laporan DAT9-119",
      date: "2019-01-23",
      status: "Penemuan pengauditan (dalam RCM)"
    },
  ]
  
  constructor(
    private zone: NgZone,
  ) { 
    this.managementType = "";
  }

  ngOnInit() {
    this.getCharts()
  }


  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
    })
  }

  getChart(){
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = [
      {
        category: "2015",
        value1: 1,
        value2: 5,
        value3: 3
      },
      {
        category: "2016",
        value1: 2,
        value2: 5,
        value3: 3
      },
      {
        category: "2017",
        value1: 3,
        value2: 5,
        value3: 4
      },
      {
        category: "2018",
        value1: 4,
        value2: 5,
        value3: 6
      },
      {
        category: "2019",
        value1: 3,
        value2: 5,
        value3: 4
      },
      {
        category: "2020",
        value1: 2,
        value2: 13,
        value3: 1
      }
    ];
    
    chart.colors.step = 2;
    chart.padding(30, 30, 10, 30);
    chart.legend = new am4charts.Legend();
    
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.minWidth = 50;
    
    
    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series1.name = "Memerlukan Perancangan";
    series1.dataFields.categoryX = "category";
    series1.dataFields.valueY = "value1";
    series1.dataFields.valueYShow = "totalPercent";
    series1.dataItems.template.locations.categoryX = 0.5;
    series1.stacked = true;
    series1.tooltip.pointerOrientation = "vertical";
    
    let bullet1 = series1.bullets.push(new am4charts.LabelBullet());
    bullet1.interactionsEnabled = false;
    bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet1.label.fill = am4core.color("#ffffff");
    bullet1.locationY = 0.5;
    
    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series2.name = "Memerlukan Maklum Balas";
    series2.dataFields.categoryX = "category";
    series2.dataFields.valueY = "value2";
    series2.dataFields.valueYShow = "totalPercent";
    series2.dataItems.template.locations.categoryX = 0.5;
    series2.stacked = true;
    series2.tooltip.pointerOrientation = "vertical";
    
    let bullet2 = series2.bullets.push(new am4charts.LabelBullet());
    bullet2.interactionsEnabled = false;
    bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet2.locationY = 0.5;
    bullet2.label.fill = am4core.color("#ffffff");
    
    let series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.columns.template.width = am4core.percent(80);
    series3.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series3.name = "Penemuan Pengauditan (dalam RCM)";
    series3.dataFields.categoryX = "category";
    series3.dataFields.valueY = "value3";
    series3.dataFields.valueYShow = "totalPercent";
    series3.dataItems.template.locations.categoryX = 0.5;
    series3.stacked = true;
    series3.tooltip.pointerOrientation = "vertical";
    
    let bullet3 = series3.bullets.push(new am4charts.LabelBullet());
    bullet3.interactionsEnabled = false;
    bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet3.locationY = 0.5;
    bullet3.label.fill = am4core.color("#ffffff");
    
    chart.scrollbarX = new am4core.Scrollbar();
  }


}
