import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const today = new Date();

    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();

    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    const dateTime = date + ' ' + time;

    return `Hello BMSTU students. Today is ${dateTime}`;
  }
}
