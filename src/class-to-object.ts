interface IPerson {
  name: string;
  age: number;
  height: number;
  hobbies: string[];
}
class Person implements IPerson {
  // name: string;
  // age: number;
  // height: number;
  // hobbies: string[];
  constructor(
    // ? these are added as class properties
    public name: string,
    public age: number,
    public height: number,
    public hobbies: string[]
  ) {}
  toJson(): IPerson {
    const { age, height, hobbies, name } = this;
    return {
      age,
      height,
      hobbies,
      name,
    };
  }
  static fromJson(data: IPerson) {
    const { age, height, hobbies, name } = data;
    return new Person(name, age, height, hobbies);
  }
  walk() {
    console.info("walking");
  }

  talk() {
    console.info("talking");
  }
}
const p1 = {
  name: "juan perez",
  age: 22,
  height: 223,
  // ,hobbies: ["football", "games", "food"]
};

const person1 = Person.fromJson(p1);
