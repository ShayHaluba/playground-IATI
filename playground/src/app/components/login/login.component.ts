import { Component, OnInit, Inject } from '@angular/core';
import { StudentService } from '../../services/student/student.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _studentService: StudentService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this._studentService.getStudents().then(studs => {

      let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: { students: studs, selected: undefined }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this._studentService.setStudent(result);
      });
    });
  }
}


@Component({
  selector: 'login-dialog',
  templateUrl: 'login-modal.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}