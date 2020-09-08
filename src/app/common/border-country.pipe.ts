import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'borderList'
})
export class BorderListPipe implements PipeTransform {
  transform(borders: string[]): string {
    return borders.toString().split(',').join(', ') || 'Not borders';
  }
}
