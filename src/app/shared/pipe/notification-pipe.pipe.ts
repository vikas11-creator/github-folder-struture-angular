import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notificationPipe'
})
export class NotificationPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "Returned by Notication Pipe";
  }

}