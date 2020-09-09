import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rg'
})
export class RgPipe implements PipeTransform {

  transform(s: string): string{
    return s.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/g,"\$1.\$2.\$3\-\$4");
  }

}
