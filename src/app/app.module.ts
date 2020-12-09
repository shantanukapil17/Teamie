import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubricComponent } from './rubric/rubric.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatInputModule } from '@angular/material/';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker'  
import { MatNativeDateModule } from '@angular/material/core'  
import { MatFormFieldModule } from '@angular/material/form-field'  
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { KeyboardShortcutsModule }     from 'ng-keyboard-shortcuts';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MainService } from './service/main.service';
import { FormsModule  } from '@angular/forms';
@NgModule({
  exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatNativeDateModule,
    MatSortModule,
    MatTableModule,
    PortalModule,
    ScrollingModule,
    
  ],
  declarations: [
    AppComponent,
    RubricComponent,
    HighchartsComponent        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatBottomSheetModule,
    MatDatepickerModule,  
    MatNativeDateModule,
    SatDatepickerModule,
    SatNativeDateModule,
    HighchartsChartModule,
    KeyboardShortcutsModule.forRoot()
  ],
  entryComponents: [
],
  providers: [ MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
