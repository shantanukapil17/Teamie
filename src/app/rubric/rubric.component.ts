import { Component, OnInit, ViewChild, AfterViewInit, Inject, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatSort, MatSortable} from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import {Sort} from '@angular/material/sort';
import { ShortcutInput, ShortcutEventOutput, KeyboardShortcutsComponent } from "ng-keyboard-shortcuts";  
import {MainService} from './../service/main.service';
import { element } from 'protractor';

export interface PeriodicElement {
  uid:number;
  username:string;
  image: string;
  fullname: string;
  twubric: any;
  join_date: number;
}

export interface SatDatepickerRangeValue<D> {
  begin: D | null;
  end: D | null;
}

@Component({
  selector: 'app-rubric',
  templateUrl: './rubric.component.html',
  styleUrls: ['./rubric.component.css'],
})

export class RubricComponent implements OnInit  {
  public userData: any=[];
  displayedColumns: string[] = ['fullname','joindate','twubric.total',
  'twubric.friends', 'twubric.influence', 'twubric.chirpiness', 'action'];
  dataSource;
  dateValue: any;

  @ViewChild('input') input: ElementRef;
 
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private httpClient: HttpClient,
    private mainService: MainService
    )
  { }
  
  ngOnInit() {
    localStorage.removeItem('newData');
     this.fetchUserData();
  }

  public ogData : any;
  fetchUserData(){
    this.httpClient.get("assets/data.json").subscribe((data:any) =>{
      localStorage.setItem('data',JSON.stringify(data));
      if(!data){
        return;
      }
      const ELEMENT_DATA: PeriodicElement[] = data;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch(property) {
          case 'twubric.total': return item.twubric.total;
          case 'twubric.friends': return item.twubric.friends;
          case 'twubric.influence': return item.twubric.influence;
          case 'twubric.chirpiness': return item.twubric.chirpiness;
          default: return item[property];
        }
      };
      this.dataSource.sort = this.sort;
      this.ogData = [...ELEMENT_DATA]
    })
  }

  removeUser(uid:any) {
    const index = this.dataSource.data.findIndex((element: any) => element.uid === uid);
    if (index !== -1) {
     this.dataSource.data.splice(index, 1);
     this.dataSource._updateChangeSubscription();
     localStorage.setItem('newData',JSON.stringify(this.dataSource.data));
     this.mainService.sendClickEvent(this.dataSource.data);
    }
  }

  refreshData(){
    window.location.reload();
  }

  dateChange(event){
    let startDate =( this.dateValue.begin).getTime();
    let startDay = ( this.dateValue.begin).getDate();
    let startMonth = ( this.dateValue.begin).getMonth() + 1;
    let startYear = ( this.dateValue.begin).getFullYear();
    let endDate =( this.dateValue.end).getTime();
    let endDay = ( this.dateValue.end).getDate();
    let endMonth = ( this.dateValue.end).getMonth() + 1;
    let endYear = ( this.dateValue.end).getFullYear();
    this.dataSource.data =  this.ogData.filter((element:any) => {
     let date = new Date(element.join_date);
       let joinDate = (date).getTime();
       let joinDay = (date).getDate();
      let joinMonth = (date).getMonth() + 1;
      let joinYear = ( date).getFullYear();
      if(startYear >= joinYear &&  startMonth >= joinMonth && startDay <= joinDay  ){
      if(endYear <= joinYear &&  endMonth <= joinMonth && endDay >= joinDay  ){
        return element
      }}
    })
  }
  }
