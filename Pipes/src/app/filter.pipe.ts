import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterstring: string,PropName:string): any {
    if(value.lenght===0 || filterstring==''){
      return value;
    }
   const resultArray=[];
    for(const item of value){
      console.log(item);
      if(item[PropName]===filterstring){
        resultArray.push(item)
      }
    }
    return resultArray;

  }

}
