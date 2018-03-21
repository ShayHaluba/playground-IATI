import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.scss']
})
export class ContentPanelComponent implements OnInit {

  public courses: { name: string, image: string }[] = [];

  public searchText: string;

  constructor() {
    this.courses = [
      {
        name: 'חקלאות',
        image: "http://qasum.co.il/he/wp-content/uploads/2014/04/slide-02.jpg"
      },
      {
        name: 'מתמטיקה',
        image: "https://www.japantimes.co.jp/wp-content/uploads/2016/11/n-math-a-20161130-870x580.jpg"
      },
      {
        name: 'הדברה',
        image: "http://www.3144.co.il/Content/UserFiles/externinator2%20s.jpg"
      }

    ]
  }

  ngOnInit() {
  }

  onSearch(changeEvent) {

  }

}
