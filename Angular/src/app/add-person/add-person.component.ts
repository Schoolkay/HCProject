import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  @Input() person:any;
  personId!:string;
  personName!:string;
  personAge!:string;
  personAddress!:string;
  personInterests!:string;
  personImageName!:string;
  personImagePath!:string;
  @Output() add = new EventEmitter();

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.personName=this.person.name;
    this.personAge=this.person.age;
    this.personAddress=this.person.address;
    this.personInterests=this.person.interests;
    this.personImageName=this.person.imageName;
    this.personImagePath=this.service.ImageUrl+this.personImageName;
  }

  async AddPerson(){
    //create person to upload
    var val = {
      name:this.personName,
      age:this.personAge,
      address:this.personAddress,
      interests:this.personInterests,
      imageName:this.personImageName
    };
    console.log(val);
    //call API function
    this.service.addPerson(val).subscribe();
    await this.Timeout(100);
    //Emit event to refresh list and close modal
    this.add.emit();
  }

  UploadImage(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.uploadImage(formData).subscribe((data:any)=> {
      this.personImageName=data.toString();
      this.personImagePath=this.service.ImageUrl+this.personImageName;
    })
  }

  Timeout(ms:any) { //pass a time in milliseconds to this function
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
