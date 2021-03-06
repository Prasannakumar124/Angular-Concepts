import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name:'short'
})

export class ShortenPipes implements PipeTransform{
    // transform(value:any){
    //     if(value.length>10){
    //         return value.substr(0,10) + '...';
    //     }
    //     return value;
    // }

    transform(value:any,limit:number){
        if(value.length>limit){
            return value.substr(0,limit) + '...';
        }
        return value;
    }
}