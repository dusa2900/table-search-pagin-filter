import { Component, OnInit } from '@angular/core';
import { TableService } from '../service/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  p:number=1
  pricetype: string="All";
  eachStudent:any;
  isBooleanValue!:boolean;
  searchText: any;
  counter=0;

  students:any;
  constructor(private service:TableService) {
    this.getStudents();
   }

  ngOnInit(): void { 

  }

  getStudents()
  {
    this.service.getData().subscribe( res=>this.students=res)
  }

  deleteStudentById(x:number)
  {
    this.service.deleteData(x).subscribe(res=>{
      console.log("delete",res);
      this.getStudents();
    })
  }



popBox(x:number)
{
  this.isBooleanValue=true;
  console.log("number",x)
  this.service.getData().subscribe( res=>
    {
      res.map((item:any)=>{
        if(item.id === x)
        {
         this.eachStudent=item;
         console.log("eachstudent",this.eachStudent)
        }
      })
      });
}



close()
{
  this.isBooleanValue=false;
}







filterall(value:any){
  if(value.target.value==="All"){
    this.students=[];
    this.getStudents()
  }
  console.log(value.target.value)
}




}
