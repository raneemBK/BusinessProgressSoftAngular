import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {

  constructor(private http : HttpClient) { }

  filterCard: any = [{}];
  filter(email:string){
    debugger;
    this.http.get('https://localhost:7204/api/Bcards/FilterByEmail/'+email).subscribe((res)=>{
      console.log(res)
      this.cards = res;
    },err=>{
      console.log(err)
    })
  }
  cards: any = [{}];
  getCards(){
    this.http.get('https://localhost:7204/api/Bcards/GetCard').subscribe((res) => {
      this.cards = res;
      console.log(res);
      console.log(this.cards);
    },err =>{
      console.log(err);
    })
  }

  createCard(data:any){
   data.photo = this.showImage;
   debugger;
    this.http.post('https://localhost:7204/api/Bcards/InsertCard',data).subscribe((res)=>{
      console.log(res);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },err=>{
      console.log(err);
    })
  }

  showImage:any;
  uploadImage(img: FormData){
    debugger
    this.http.post('https://localhost:7204/api/Bcards/uploadImage/', img).subscribe((res:any)=>{
      //console.log(res);
      this.showImage = res.photo;
      console.log(res)
      console.log(this.showImage)
      //debugger;
    }, err=>{
      console.log(err);
      
    })
  }

  deleteCard(id : number){
    this.http.delete('https://localhost:7204/api/Bcards/DeleteCard/'+id).subscribe((res)=>{
      console.log(res);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
     
    }, err=>{
      console.log(err);
     
    })
  }

  updateCard(obj:any){
    obj.photo =this.showImage;
    this.http.put('https://localhost:7204/api/Bcards/UpdateCard/',obj).subscribe((res)=>{
      console.log(res);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, err=>{
      console.log(err);
    })
  }

  uploadFiles(file: FormData, extension:any){
    debugger;
    let urlcsv = 'https://localhost:7204/api/Bcards/CreateCardFromCSV';
    let urlxml = 'https://localhost:7204/api/Bcards/InsertCardFromXML';
    if(extension == 'csv'){
      this.http.post(urlcsv, file).subscribe((res:any)=>{
        console.log(res)
        setTimeout(() => {
          window.location.reload();
        }, 1000);
       }, err=>{
         console.log(err);
         
       })
    }
    else if(extension == 'xml'){
      this.http.post(urlxml, file).subscribe((res:any)=>{
        console.log(res)
        setTimeout(() => {
          window.location.reload();
        }, 1000);
       }, err=>{
         console.log(err);
         
       })
    }
   
  }

  exportFile(extension: any){
    let urlcsv = 'https://localhost:7204/api/Bcards/ExportCardsToCSV';
    let urlxml = 'https://localhost:7204/api/Bcards/ExportCardsToXML';
    if(extension == 'csv'){
      this.http.get(urlcsv).subscribe((res)=>{
        console.log(res);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },err=>{
        console.log(err)
      })
    }
    else if(extension == 'xml'){
      this.http.get(urlxml).subscribe((res)=>{
        console.log(res);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },err=>{
        console.log(err)
      })
    }
  }
}

