import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityFormat'
})
export class PriorityFormatPipe implements PipeTransform {

  transform(value: number): String {
    let priorityText: String;

    switch(value) {
      case 1: {priorityText = "none"; break;}
      case 2: {priorityText = "low"; break;}
      case 3: {priorityText = "medium"; break;}
      case 4: {priorityText = "high"; break;}
      default: {priorityText = "N/A"; break;}
    }

    return priorityText;
  }

}
