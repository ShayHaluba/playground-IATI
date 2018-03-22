import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentEducationService } from '../../services/content-education/content-education.service';
@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {

  isLinear = false;
  examFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public earnedSkills: any[] = [];
  private askedForSkills = false;
  constructor(
    public dialogRef: MatDialogRef<CourseContentComponent>,
    private _formBuilder: FormBuilder,
    public sanitizer: DomSanitizer,
    private contentService: ContentEducationService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }

  ngOnInit() {
    this.examFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.getSkills();
  }


  getContent() {
    let video = this.data.course.links.find(x => x.type == "video");
    if (video) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(video.url.replace("watch?v=", "embed/"));
    }
  }

  close() {
    this.dialogRef.close();
  }

  onSelectAnswer(question, i, radButton) {
    if (question.right_answer == (i + 1)) {
      question.feedback = "תשובה נכונה! כל הכבוד!";
      question.feedbackColor = "success";
    }
    else {
      question.feedback = "תשובה לא נכונה! נסה שוב!"
      question.feedbackColor = "danger";
    }
  }

  getSkills() {
    if (!this.askedForSkills) {
      this.askedForSkills = true;
      this.contentService.getSkills().then(skills => {
        console.log(this.data.course.skills_to_gain);
        this.data.course.skills_to_gain.forEach(x => {
          let skill = skills.find(y => y.skill_id == x);
          this.earnedSkills.push(skill.name);
        });
      });
    }
    else {
    }
  }

  isSuccess(question) {
    return question.feedbackColor && question.feedbackColor == "success";
  }
}
