import { Component, OnInit } from '@angular/core';
import { Chart, plugins } from 'chart.js';
import { UserdataService } from '../_services';
import { ajax, css } from "jquery";
import * as $ from "jquery";
// import 'chartjs-plugin-streaming';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  chart = [];
  data: any;

  constructor(private _userData: UserdataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {

    var canvas : any = document.getElementById("overviewChart");
    var ctx = canvas.getContext("2d");

    this._userData.get()
    .subscribe(res => {
      
      let day_data = res.map(res => res.daily);
      let day_count = day_data[0].map(d => d.user_count);
      let login_date = day_data[0].map(dl => dl.login_date);

      let month_count = res.map(res => res.user_count);
      let login_month = res.map(res => res.month);   
    
      // console.log(res);
      // console.log(day_data);


      var config = {
        type: 'bar',
        data: {
          labels: login_date,
          datasets: [
            {
              data: day_count,
              backgroundColor: '#3cba9f',
              barThickness: 20,
              fill:false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "User Activities This Month",
            fontSize: 20
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              type: 'time',
              distribution: 'series',
              offset: true,
              time: {
                unit: 'day'
              },
              realtime: {
                refresh: 1000
              },
              display: true
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false
              },
              display: true,
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 5,
                callback: function(value) {if (value % 1 === 0) {return value;}}
              },
            }]
          },

          plugins: {
            streaming: true
          }
        }
      } 

      var overview_chart = new Chart(ctx, config);

      // var myLineChart = new Chart(ctx).Line(data, options);

      // setInterval(function() {
      //   setData(data.datasets[0].data);
      //   setData(data.datasets[1].data);
      //   setLabels(data.labels);
    
      //   var myLineChart = new Chart(ctx).Line(data, options);
      // }, 2000);

      // $("#today").click(function() {
      //   var chart_labels = login_time;
      //   var dataset = time_count;
      //   var data = overview_chart.config.data;
      //   data.datasets[0].data = dataset;
      //   data.datasets[0].barThickness = 40;
      //   data.datasets[0].fill = true;
      //   data.labels = chart_labels;
      //   var time_unit = config.options;
      //   time_unit.scales.xAxes[0].type = 'realtime';
      //   time_unit.scales.xAxes[0].realtime.duration = 'realtime';

      //   time_unit.scales.yAxes[0].ticks.max = 5;
      //   time_unit.title.text = "User Activities Today";

      //   overview_chart.update();
      // });

      $("#monthly").click(function() {
        var chart_labels = login_date;
        var dataset = day_count;
        var data = overview_chart.config.data;
        data.datasets[0].data = dataset;
        data.datasets[0].barThickness = 40;
        data.labels = chart_labels;

        var time_unit = config.options;
        // time_unit.plugins.streaming = false;
        time_unit.scales.xAxes[0].type = 'time';
        time_unit.scales.xAxes[0].time.unit = 'day';
        time_unit.scales.yAxes[0].ticks.max = 5;

        // time_unit.scales.xAxes[0] = {
        //   type: 'time',
        //   distribution: 'series',
        //   offset: true,
        //   time: {
        //     unit: 'day'
        //   }
        // };
        time_unit.plugins.streaming = false;
        time_unit.title.text = "User Activities This Month";

        overview_chart.update();
      });

      $("#yearly").click(function() {
        var chart_labels = login_month;
        var dataset = month_count;
        var data = overview_chart.config.data;
        data.datasets[0].data = dataset;
        data.datasets[0].barThickness = 100;
        data.labels = chart_labels;

        var time_unit = overview_chart.config.options;
        time_unit.plugins.streaming = false;
        time_unit.scales.xAxes[0].type = 'time';
        time_unit.scales.xAxes[0].time.unit = 'month';
        time_unit.scales.yAxes[0].ticks.max = 15;
        time_unit.title.text = "User Activities This Year";
        time_unit.plugins.streaming = false;
        // time_unit.plugins.streaming.pause = true;

        // time_unit.scales.xAxes[0] = {
        //   type: 'time',
        //   distribution: 'series',
        //   offset: true,
        //   time: {
        //     unit: 'month'
        //   }
        // };

        overview_chart.update();
      });
    })

    

    
  }

}
