import { Component, OnInit } from '@angular/core';
import { Chart, plugins } from 'chart.js';
import { UserdataService } from '../_services';
import { ajax, css } from "jquery";
import * as $ from "jquery";
// import 'chartjs-plugin-streaming';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  chart = [];
  data: any;

  constructor(private _userData: UserdataService) { }

  ngOnInit(): void {
    // this.getData();
  }

  // getData(): void {

  //   var canvas : any = document.getElementById("todayCHart");
  //   var ctx = canvas.getContext("2d");

  //   this._userData.get()
  //   .subscribe(res => {
      
  //     let day_data = res.map(res => res.daily);
  //     let day_count = day_data[0].map(d => d.user_count);
  //     let login_date = day_data[0].map(dl => dl.login_date);

  //     let month_count = res.map(res => res.user_count);
  //     let login_month = res.map(res => res.month);   

    //   var config = {
    //     type: 'line',
    //     data: {
    //       labels: login_time,
    //       datasets: [
    //         {
    //           data: user_count,
    //           borderColor: '#3cba9f',
    //           // barThickness: 20,
    //           // fill:false
    //         }
    //       ]
    //     },
    //     options: {
    //       title: {
    //         display: true,
    //         text: "User Activities Today",
    //         fontSize: 20
    //       },
    //       legend: {
    //         display: false
    //       },
    //       scales: {
    //         xAxes: [{
    //           type: 'realtime',
    //           // distribution: 'series',
    //           // offset: true,
    //           // time: {
    //           //   unit: 'day'
    //           // },
    //           realtime: {
    //             refresh: 1000
    //           },
    //           display: true
    //         }],
    //         yAxes: [{
    //           gridLines: {
    //             drawBorder: false
    //           },
    //           display: true,
    //           ticks: {
    //             beginAtZero: true,
    //             min: 0,
    //             max: 5,
    //             callback: function(value) {if (value % 1 === 0) {return value;}}
    //           },
    //         }]
    //       },

    //       plugins: {
    //         streaming: true
    //       }
    //     }
    //   } 

    //   var today_chart = new Chart(ctx, config);

     
    // })

    

    
  // }

}
