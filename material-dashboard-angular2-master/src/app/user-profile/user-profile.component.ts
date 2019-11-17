import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InquiryService } from './inquiry.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../dialogboxes/dialogbox.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public formGroup:FormGroup
  constructor(public inquiryService:InquiryService,public dialog: MatDialog,public router:Router,public activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.formGroup=new FormGroup({
        firstName:new FormControl(null,Validators.compose([Validators.required])),
        lastName:new FormControl(),
        phoneNumber:new FormControl(null,Validators.compose([Validators.required,Validators.pattern(/^[0-9]{10}$/)])),
        email:new FormControl(null,Validators.compose([Validators.required,Validators.email])),
        address:new FormControl(),
        country:new FormControl(),
        aboutme:new FormControl()
    })
  }
  save(){
if(this.formGroup.valid){
this.inquiryService.saveInquiry(this.formGroup.getRawValue()).subscribe(
  (x:any)=>{
    if(x._id!=undefined&&x._id!=null){
            this.openDialog();
            
    }
  },
  err=>{
  
  console.log(err);
})
}else{
this.formGroup.markAllAsTouched();

}

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: this.formGroup.getRawValue()
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
      this.formGroup.reset();
      this.router.navigate(["../dashboard"],{relativeTo:this.activeroute})
    });
  }

}
