import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonepipe'
})
export class PhonepipePipe implements PipeTransform {

  transform(value: any, country: any): any {
    if (value) {
      if (country.code === 'FR') {
        let newStr = value.charAt(0) + ' ';
        let i = 0;
        for (; i < Math.floor(value.length / 2) + 1 ; i++) {
          newStr = newStr + value.substr(i * 2, 2) + ' ';
        }
        return newStr;
      } else {
        let newStr = '';
        let i = 0;
        for (; i < Math.floor(value.length / 3) - 1; i++) {
          newStr = newStr + value.substr(i * 3, 3) + '-';
        }
        return newStr + value.substr(i * 3);
      }
    }

  }

}
