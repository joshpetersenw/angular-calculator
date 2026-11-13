import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  displayValue: string = '0';
  private expression: string = '';

  pressKey(key: string) {

    if (key === 'C') {
      this.displayValue = '0';
      this.expression = '';
      return;
    }

    if (key === '=') {
      try {
        const evalString = this.expression.replace(/x/g, '*');
        const result = new Function('return ' + evalString)();
        this.displayValue = result.toString();
        this.expression = this.displayValue;
      } catch (error) {
        this.displayValue = 'Error';
        this.expression = '';
      }
      return;
    }

    if (this.displayValue === '0' && !['+', '-', 'x', '/'].includes(key)) {
      this.displayValue = key;
    } else {
      this.displayValue += key;
    }
    this.expression = this.displayValue;
  }
}