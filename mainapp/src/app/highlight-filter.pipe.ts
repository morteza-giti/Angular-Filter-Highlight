import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightFilter'
})
export class HighlightFilterPipe implements PipeTransform {

  transform(value: string, filter: string): string {
    if (filter.length === 0) {
      return value;
    }
    const search = RegExp(filter, 'ig');
    return value.replace(search, (match) =>
    {
      return `<span class="highligh-text">${match}</span>`
    });
  }

}
