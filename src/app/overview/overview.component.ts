import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  chart = [];

  constructor() { }
  // constructor(private: _overview: OverviewService){}

  ngOnInit(): void {

    var monthlyChart = new Chart('overviewChart', {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June',
        'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Overview Activities',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "#43BDE8"
        }]
    },
    options: {
      legends: {
        display: false,
        labels: {
          display: false
        }
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
    }
    });
  }

}
