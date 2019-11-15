import {Component,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialogbox.component.html',
  })
  export class DialogOverviewExampleDialog {
//   public DialogData:any;
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }