import { Pipe, PipeTransform } from "@angular/core";

@Pipe( {
    name: "phone"
})

export class PhonePipe implements PipeTransform{

    transform(value: number){
        
        var string = value.toString();
        var ddd = string.slice(0,2)
        var dddSolved = '('+ ddd + ') ';

        var firstHalfNumber = string.slice(2,7)
        var lastHalfnumber = string.slice(7,11)

        var finalResult = dddSolved + firstHalfNumber + '-' + lastHalfnumber
 
        return finalResult;
    }
    
}