import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nome'
})
export class NomePipe implements PipeTransform {

  transform(text: string): unknown {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
  }

}
