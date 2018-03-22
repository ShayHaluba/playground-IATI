import { Component, OnInit } from '@angular/core';
import { ContentEducationService } from '../../services/content-education/content-education.service';
import { ContentEducation } from '../../models/content-education/content-education';
// tslint:disable-next-line:max-line-length
import { ContentEducationRecommendationService } from '../../services/content-education-recommendation/content-education-recommendation.service';
import { StudentService } from '../../services/student/student.service';
import { MatDialog } from '@angular/material';
import { CourseContentComponent } from '../course-content/course-content.component';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.scss']
})
export class ContentPanelComponent implements OnInit {

  public courses: ContentEducation[] = [];

  public searchText: string;

  public isLoading = false;
  constructor(private _contentEducationRecommendationService: ContentEducationRecommendationService,
    private _studentService: StudentService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.isLoading = true;
    this._contentEducationRecommendationService.getContentRecommendations().then(contents => {
      this.courses = contents.map(content => content.content);
      this.isLoading = false;
    });
  }

  getCourses() {
    return this.searchText ? this.courses.filter(x => x.title.indexOf(this.searchText) > -1) : this.courses;
  }

  public showCourse(course) {
    console.log(course);

    let dialogRef = this.dialog.open(CourseContentComponent, {
      width: '90%',
      data: { course: course }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
