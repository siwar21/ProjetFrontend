import { Pipe, PipeTransform } from '@angular/core';
//import { AppComponent } from './app.component';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(users: string[], searchInput: string): any[]{     
        if(!searchInput) {
            return  [];
        }
searchInput = searchInput.toLowerCase();
       return users.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
}