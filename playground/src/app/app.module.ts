import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Angular Material Modules
import {
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule,
  MatDialogRef, 
  MAT_DIALOG_DATA,
  MatDialogContainer,
  MatListModule,
  MatButtonModule,
  MatStepperModule
} from '@angular/material';

// App Components
import { AppComponent } from './app.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';

// App Services
import { StudentService } from './services/student/student.service';
import { ContentPanelComponent } from './components/content-panel/content-panel.component';
import { ContentEducationService } from './services/content-education/content-education.service';
// tslint:disable-next-line:max-line-length
import { ContentEducationRecommendationService } from './services/content-education-recommendation/content-education-recommendation.service';
import { LoginComponent, DialogOverviewExampleDialog } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentProfileComponent,
    ContentPanelComponent,
    LoginComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    MatStepperModule
  ],
  providers: [
    StudentService,
    ContentEducationService,
    ContentEducationRecommendationService
  ],
  entryComponents: [DialogOverviewExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
