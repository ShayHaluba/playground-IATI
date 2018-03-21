import { Component, OnInit } from '@angular/core';
import { ContentEducationService } from '../../services/content-education/content-education.service';
import { ContentEducation } from '../../models/content-education/content-education';
// tslint:disable-next-line:max-line-length
import { ContentEducationRecommendationService } from '../../services/content-education-recommendation/content-education-recommendation.service';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.scss']
})
export class ContentPanelComponent implements OnInit {

  public courses: ContentEducation[] = [];

  public searchText: string;

  constructor(private _contentEducationRecommendationService: ContentEducationRecommendationService,
    private _studentService: StudentService) {
    // this.courses = [
    //   {
    //     name: 'חקלאות',
    //     image: "http://qasum.co.il/he/wp-content/uploads/2014/04/slide-02.jpg"
    //   },
    //   {
    //     name: 'מתמטיקה',
    //     image: "https://www.japantimes.co.jp/wp-content/uploads/2016/11/n-math-a-20161130-870x580.jpg"
    //   },
    //   {
    //     name: 'הדברה',
    //     image: "http://www.3144.co.il/Content/UserFiles/externinator2%20s.jpg"
    //   },
    //   {
    //     name: 'אנגלית',
    //     image: "http://pop.education.gov.il/remote.axd?http://meyda.education.gov.il/files/pop/1459/banner_english_847x348-1.jpg?anchor=center&mode=crop&width=1140&height=550&rnd=131259414710000000"
    //   },
    // ]
  }

  ngOnInit() {
    this._contentEducationRecommendationService.getContentRecommendations().then(contents => {
      this.courses = contents;
    });
  }

  getStudentName() {
    return this._studentService.getLoggedInStudentName();
  }

  getCourses() {
    return this.searchText ? this.courses.filter(x => x.title.indexOf(this.searchText) > -1) : this.courses;
  }
}
