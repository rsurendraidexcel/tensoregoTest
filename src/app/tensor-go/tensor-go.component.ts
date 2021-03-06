import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TensorGoService } from '../tensor-go.service';
import { TensorgoUserModel } from './model/tensogo-user.model';

@Component({
  selector: 'app-tensor-go',
  templateUrl: './tensor-go.component.html',
  styleUrls: ['./tensor-go.component.scss']
})
export class TensorGoComponent implements OnInit {

  tensonGoUeser: TensorgoUserModel[];
  viewMode: string;
  editData: TensorgoUserModel;
  tensonrGoForm: FormGroup;

  constructor(private userTensogoService: TensorGoService) { 
    this.viewMode='view';
    this.tensonGoFormInit();
  
  }

  ngOnInit(): void {
    this.getUserTensorngo();
  }
  
  tensonGoFormInit(){
    this.tensonrGoForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      status: new FormControl(''),
      gender: new FormControl('')
    });
  }
  fillDataTensonGoForm(){
    this.tensonrGoForm.patchValue(this.editData);
  }

  getUserTensorngo(){
    let url='https://gorest.co.in/public-api/users';
    this.userTensogoService.getTensorGoUser(url).subscribe(resdata => {
      this.tensonGoUeser = resdata.data as TensorgoUserModel[];
      this.viewMode ='view';
    });

  }

  editUserTensorgo(){
    let url=`https://gorest.co.in/public-api/users/${this.editData.id}`;
    let model= {
      "name": this.tensonrGoForm.get('name').value,
      "email":this.tensonrGoForm.get('email').value,
      "gender":this.tensonrGoForm.get('gender').value,
      "status":this.tensonrGoForm.get('status').value
    };
    this.userTensogoService.putTensorGoUser(url, model).subscribe(resdata => {
      this.getUserTensorngo();
    });
  }
getEmptyTensonGoForm(){
  this.tensonrGoForm.get('name').setValue('');
  this.tensonrGoForm.get('email').setValue('');
  this.tensonrGoForm.get('gender').setValue('');
  this.tensonrGoForm.get('status').setValue('');
}


  editAction(id: number){
    this.viewMode ='edit';
    let temdata:TensorgoUserModel;
    this.tensonGoUeser.filter( data => {
      if(data.id===id){
       temdata = data;
      }
    });
    this.editData = temdata;
    console.log("edit Data:",this.editData );
    this.fillDataTensonGoForm();
  }

  doUpdate(){
    this.viewMode ='view';
    this.editUserTensorgo();
  }
  
  addNewAction(){
    this.viewMode ='add';
    this.getEmptyTensonGoForm();
  }
  saveNewRecord(){
    let url=`https://gorest.co.in/public-api/users`;
    let model= {
      "name": this.tensonrGoForm.get('name').value,
      "email": this.tensonrGoForm.get('email').value,
      "gender": this.tensonrGoForm.get('gender').value,
      "status": this.tensonrGoForm.get('status').value
    };
    this.userTensogoService.postTensorGoUser(url, model).subscribe(resdata => {
      console.log("addedd", resdata.code);
      this.getUserTensorngo();
    });
  
  }
}
