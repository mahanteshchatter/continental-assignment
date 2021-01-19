import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase'
})
export class CustomUppercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const _pipeArgs = args && args[0] ? args[0] : null;
    return this.processData(value, _pipeArgs);
  }

  processData(value, pipeArgs?) {
    if(pipeArgs) {
      if(pipeArgs.isUpper) {
        value = (value as String).toUpperCase();
      }
      if(pipeArgs.action == 'button') {
        value = `<a class="btn btn-primary grid-action">${pipeArgs.name}</a>`;
      }
    }
    
    return `<span>${value}</span>`;
  }

}
