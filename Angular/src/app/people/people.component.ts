import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  personList:any=[];
  personsListWithoutFilter:any=[];
  modalTitle!:string;
  person:any;
  nameSearchFiter:string="";  
  personImagePath!:string;
  isLoading:boolean=false;

  constructor(private service:SharedService, private modalService: NgbModal, private materialMode:MaterialModule) { }

  ngOnInit(): void {
    this.RefreshPersonList();
  }

  RefreshPersonList(){
    this.service.getPeopleList().subscribe(data=>{
      this.personList=data;
      this.personsListWithoutFilter=data;
    })
  }

  AddPerson(content:any){
    //Create Empty Person
    this.person={
      id:"",
      name:"",
      age:"",
      address:"",
      interests:"",
      imageName:"anonymous.png"
    }
    //Pass in title to modal
    this.modalTitle="Add Employee";
    //Open Modal
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', size:"lg"});
  }

  async SearchFunction(){
    this.isLoading = true;
    await this.Timeout(10000);
    this.isLoading=false;
    var searchFilter = this.nameSearchFiter;
    this.personList = this.personsListWithoutFilter.filter(function(filtered:any){
      return filtered.name.toLowerCase().includes(
        searchFilter.toString().trim().toLowerCase()
      )
    });
  }

  GetPersonImage(val:any){
    return this.service.ImageUrl+val.toString();
  }

  Timeout(ms:any) { //pass a time in milliseconds to this function
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  closeClick(){
    this.RefreshPersonList();
    this.modalService.dismissAll();
  }
}
