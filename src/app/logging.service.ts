import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  constructor() {}

  logStatusChange(newStatus: string) {
    console.log(`A status change occured, the new is ${newStatus}`);
  }
}
