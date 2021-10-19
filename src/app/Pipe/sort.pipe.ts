import { Pipe, PipeTransform } from '@angular/core';
import { student } from './../model/student';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(students:student[],type:string): any {
    console.log("pipe", students,type)
    if(type == "A-Z")
    {
      return students.sort((x, y) => x.full_name.localeCompare(y.full_name));
    }else if ( type == "Z-A")
    {
      return students.sort((x, y) => y.full_name.localeCompare(x.full_name));

    }else{
      return students
    }
  }

}
