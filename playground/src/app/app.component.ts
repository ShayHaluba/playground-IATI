import { Component } from '@angular/core';
import { StudentService } from './services/student/student.service';
import { ContentEducationRecommendationService } from './services/content-education-recommendation/content-education-recommendation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showProfile = false;
  constructor(
    private _studentService: StudentService,
  private _contentEducationRecommendationService: ContentEducationRecommendationService) {
    }
  getStudentName() {
    return this._studentService.getLoggedInStudentName();
  }

  starClicked() {
    this._contentEducationRecommendationService.starClick.emit();
  }

  searchClicked() {
    this._contentEducationRecommendationService.searchClick.emit();
  }
}
