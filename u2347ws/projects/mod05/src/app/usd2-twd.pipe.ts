import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USD2TWD'
})
export class USD2TWDPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value *32;
  }

}
