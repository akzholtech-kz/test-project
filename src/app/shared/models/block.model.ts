export class Block {
  constructor(
    public id: number,
    public name: string,
    public functions: Function[]
  ) {}
}

export class Function {
  constructor(
    public id: string,
    public name: string,
    public contents: Content[]
  ) {}
}

export class Content {
  constructor(public id: string, public name: string) {}
}
