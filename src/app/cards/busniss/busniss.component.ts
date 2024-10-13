import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CardserviceService } from 'src/app/services/cardservice.service';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-busniss',
  templateUrl: './busniss.component.html',
  styleUrls: ['./busniss.component.css']
})
export class BusnissComponent implements OnInit {
  constructor(public cards : CardserviceService, public dialog : MatDialog){}
  // readonly dialog = Inject(MatDialog);
  ngOnInit(): void {
    this.cards.getCards();
  }
  _filterText: string = '';
  
  filter(){
    this.cards.filter(this._filterText);
  }
  @ViewChild('createDialog') createDialoge !: TemplateRef<any>
  openCreateDialog(){
    this.dialog.open(this.createDialoge)
  }

  createCard : FormGroup = new FormGroup({
    name : new FormControl(''),
    gender : new FormControl(''),
    birth : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    photo : new FormControl(''),
    address : new FormControl(''),
  });
  @ViewChild('checkDialog') checkDialoge !: TemplateRef<any>

  checkData : any=[];
  openCheckDialog(){
    this.dialog.open(this.checkDialoge);
  }
  createCardService(){
    this.cards.createCard(this.createCard.value)
  }
  

  uploadImage(file:any){
    if (file.length == 0){
      return ;
    }
    let fileToUpload = <File>file[0];
    const formData = new FormData;
    formData.append('file', fileToUpload, fileToUpload.name);
    this.cards.uploadImage(formData);
  }

  @ViewChild('deleteDialog') deleteDialog !: TemplateRef<any>
    openDeleteDialog(id : number){
      const d =this.dialog.open(this.deleteDialog);
      d.afterClosed().subscribe((res)=>{
        if (res != undefined){
          if (res == 'yes'){
            this.cards.deleteCard(id);
          }
          else if (res == 'no'){
            console.log('No');
            
          }
        }
      })
    }
    updateCard : FormGroup = new FormGroup({
      id : new FormControl(''),
      name : new FormControl(''),
      gender : new FormControl(''),
      birth : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
      photo : new FormControl(''),
      address : new FormControl(''),
  
    });

    @ViewChild('updateDialog') updateDialoge !: TemplateRef<any>
    data:any={}
    openUpdateDialog(obj: any){
      this.data = obj;
      console.log("data",this.data)
     
      debugger;
      this.updateCard.controls['id'].setValue(this.data.id);
      this.cards.showImage = obj.image;
      this.dialog.open(this.updateDialoge);

    }
    updateCardBusniss(){
      this.cards.updateCard(this.data);
    }

    @ViewChild('importDialog') importDialog !: TemplateRef<any>

   openImportDialog(){
    this.dialog.open(this.importDialog);
   }

   ////////
   @ViewChild('exportDialog') exportDialog !: TemplateRef<any>

   openExportDialog(){
    this.dialog.open(this.exportDialog);
   }
   

fileSelected: any;
uploadFile(file:any){
  if (file.length == 0){
    return ;
  }
  let fileToUpload = <File>file[0];
  const formData = new FormData;
  formData.append('file', fileToUpload, fileToUpload.name);
  this.fileSelected = formData;
  console.log(this.fileSelected)
}
submitFile(extension:any){
  
  this.cards.uploadFiles(this.fileSelected,extension)
  
}

exportFile(extension: any){
  this.cards.exportFile(extension);
}

}
