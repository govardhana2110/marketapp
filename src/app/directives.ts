import { from } from 'rxjs';
import {Directive,HostListener }from'@angular/core';



@Directive({
  selector:'[phone]',
})
export class PhoneDirective{
  constructor(){}
  @HostListener('input',['$event']) onkeyup(event:KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 10) {
      trimmed = trimmed.substr(0, 10);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 10) {
      numbers.push(trimmed.substr(i, 10));
    }

    input.value = numbers.join('');
  }
}
@Directive({
  selector:'[officephone]',
})
export class OfficePhoneDirective{
  constructor(){}
  @HostListener('input',['$event']) onkeyup(event:KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 10) {
      trimmed = trimmed.substr(0, 10);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 10) {
      numbers.push(trimmed.substr(i, 10));
    }

    input.value = numbers.join('');
  }

}
@Directive({
  selector:'[aadhar]',
})
export class AadharDirective{
  constructor(){}
  @HostListener('input',['$event']) onkeyup(event:KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 12) {
      trimmed = trimmed.substr(0, 12);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 12) {
      numbers.push(trimmed.substr(i, 12));
    }

    input.value = numbers.join(' ');
  }
}
