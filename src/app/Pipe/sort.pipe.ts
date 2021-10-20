import { Pipe, PipeTransform } from '@angular/core';
import { student } from './../model/student';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(students:student[],type:string): any {
    //console.log("pipe", students,type)
    if(type == "A-Z")
    {
      return students.sort((x, y) => x.name.localeCompare(y.name));
    }else if ( type == "Z-A")
    {
      return students.sort((x, y) => y.name.localeCompare(x.name));

    }else{
      return students
    }
  }

}
