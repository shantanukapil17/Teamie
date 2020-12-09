import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private subject = new Subject<any>();

  sendClickEvent(object){
    this.subject.next();
  }

  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }
  constructor() { }

}
