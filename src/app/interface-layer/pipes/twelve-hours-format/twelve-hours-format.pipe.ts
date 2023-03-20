import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twelveHoursFormat'
})
export class TwelveHoursFormatPipe implements PipeTransform {

  transform(value: string): String {
    return (new Date("1955-11-05T" + value + "Z")).toLocaleTimeString("bestfit", {
      timeZone: "UTC",
      hour12: !0,
      hour: "numeric",
      minute: "numeric"
    });
  }
}
