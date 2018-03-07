import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {
log: Array<Object> = [
  { person: String },
  { message: String },
  { createdAt: Date }
]
 
  constructor() { }

  getAccessLog() {
    return this.log;
  }

  addAccessItem(person, message){
    this.log.push(person, message);
  }ng 

}
