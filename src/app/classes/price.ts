export class Price {
  id: number;
  base: number = 0;
  additional: number = 0;
  tax: number = 0;
  total: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
