'use strict';

class PseudoQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(value) {
    this.pushStack.push(value);
  }

  pop() {
    if(!this.popStack.length) {
      while(this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
  }

  return this.popStack.pop();

}
