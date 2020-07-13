export class Range {
  min;
  max;
  static type = "rango normal";

  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  show() {
    console.log(`[${this.min} - ${this.max}]`);
  }
}
