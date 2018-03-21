import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// Angular Material Modules
import {
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatToolbarModule
} from '@angular/material';

// App Components
import { AppComponent } from './app.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';

// App Services
import { StudentService } from './services/student/student.service';
import { ContentPanelComponent } from './components/content-panel/content-panel.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentProfileComponent,
    ContentPanelComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatToolbarModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
