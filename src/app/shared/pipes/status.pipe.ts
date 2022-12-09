import { Pipe, PipeTransform } from "@angular/core";


@Pipe( {
    name: "status"
})
export class StatusPipe implements PipeTransform{


    transform(value: Date) {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();


        let currentDate = `${day}-${month}-${year}`

        let result = new Date(currentDate)
 
        return value<result ? "Concluído" : "Não Concluído"
    }
}
