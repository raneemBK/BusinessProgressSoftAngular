import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText: string) : any[] {
    if (!value || !filterText) {
      return value;
    }
    
    return value.filter((c) => {
      return c.email.toLowerCase().includes(filterText.toLowerCase());
    });
  }

}
