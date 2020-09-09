import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(s: string): string{
    return s.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
  }

}
