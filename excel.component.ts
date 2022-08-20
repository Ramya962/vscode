import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FileuploadService } from '../fileupload.service';
@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
  shortLink:string="";
  loading:boolean=false;
  file!:File;
  ngOnInit() {
  }
  constructor(private fileService:FileuploadService ) {}

  onChange(event:any){
    this.file=event.target.files[0];
  }

onUpload(){
  this.loading=!this.loading;
  console.log(this.file);
  this.fileService.upload(this.file).subscribe((event:any)=>{
    if(typeof(event)==='object'){
      this.shortLink=event.link;
      this.loading=false;
    }
  });
}


    



}