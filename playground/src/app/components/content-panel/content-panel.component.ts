import { Component, OnInit } from '@angular/core';
import { ContentEducationService } from '../../services/content-education/content-education.service';
import { ContentEducation } from '../../models/content-education/content-education';
// tslint:disable-next-line:max-line-length
import { ContentEducationRecommendationService } from '../../services/content-education-recommendation/content-education-recommendation.service';
import { StudentService } from '../../services/student/student.service';
import { MatDialog } from '@angular/material';
import { CourseContentComponent } from '../course-content/course-content.component';
import { EducationContentRecommandetion } from '../../services/content-education-recommendation/content-grade';
import * as _ from 'lodash';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.scss']
})
export class ContentPanelComponent implements OnInit {

  public courses: EducationContentRecommandetion[] = [];

  public searchText: string;

  public isLoading = false;
  constructor(private _contentEducationRecommendationService: ContentEducationRecommendationService,
    private _studentService: StudentService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.isLoading = true;
    this._contentEducationRecommendationService.getContentRecommendations().then(contents => {
      // this.courses = _.sortBy(contents, ['isCoverPrerequisites', 'grade'], ['asc', 'desc']);
      this.courses = contents.sort(function (a, b) {
        if(a.isCoverPrerequisites && b.isCoverPrerequisites || 
           !a.isCoverPrerequisites && !b.isCoverPrerequisites) {
            if (a.grade > b.grade) {
              return -1;
            }
            else if (a.grade < b.grade) {
              return 1;
            }
            else if (a.grade === b.grade) {
              return 0;
            }
        } else if (a.isCoverPrerequisites) {
          return -1;
        } else {
          return 1;
        }
      });
      console.log("=== Sorted list", this.courses);
      this.isLoading = false;
    });
  }

  getCourses() {
    return this.searchText ? this.courses.filter(x => x.content.title.indexOf(this.searchText) > -1) : this.courses;
  }

  public showCourse(course: EducationContentRecommandetion) {
    console.log(course);

    let dialogRef = this.dialog.open(CourseContentComponent, {
      width: '90%',
      data: { course: course.content,
        skillsReward: course.skillRewards }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
