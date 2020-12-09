import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from "@angular/common/http";
import { MainService } from '../service/main.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {
  clickEventSubscription: Subscription;
  public Highcharts = Highcharts;
  public barGraphOptions: any;
  public newData: any;
  constructor(
    private httpClient: HttpClient,
    private mainService: MainService)
    { this.clickEventSubscription= this.mainService.getClickEvent().subscribe(() => {
          this.generateLineChart();
      })}

      ngOnInit() {
       this.newData = localStorage.getItem('data');
          this.generateLineChart();
      }

       generateLineChart() { 
      this.newData = localStorage.getItem('newData') ? localStorage.getItem('newData') : localStorage.getItem('data');
      let userId = [];
      let total = [];
      let chirpiness = [];
      let friends = [];
      let influence = [];
      JSON.parse(this.newData).forEach(element => {
        userId.push(element.username)
        total.push(element.twubric.total)
        chirpiness.push(element.twubric.chirpiness)
        friends.push(element.twubric.friends)
        influence.push(element.twubric.influence)
      });
      this.barGraphOptions = {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Twubric Data'
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          categories: userId,
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Rubric Score',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          },     
      },
      plotOptions: {
          bar: {
            gapWidht:15,
              dataLabels: {
                  enabled: true
              }
          },
          series: {
            pointWidth: 4,
        }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: 0,
          y: 10,
          floating: true,
          borderWidth: 2,
          backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
          shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Total',
          type:'bar',
          data: total
      }, {
          name: 'Chirpiness',
          type:'bar',
          data: chirpiness
      }, {
          name: 'Friends',
          type:'bar',
          data: friends
      }, {
          name: 'Influence',
          type:'bar',
          data: influence
      }]
    }
  }
}