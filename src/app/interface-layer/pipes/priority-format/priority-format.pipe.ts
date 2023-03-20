import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityFormat'
})
export class PriorityFormatPipe implements PipeTransform {

  transform(value: number): String {
    let priorityText: String;

    switch(Number(value)) {
      case 1: {priorityText = "None"; break;}
      case 2: {priorityText = "Low"; break;}
      case 3: {priorityText = "Medium"; break;}
      case 4: {priorityText = "High"; break;}
      default: {priorityText = "N/A"; break;}
    }

    return priorityText;
  }

}
