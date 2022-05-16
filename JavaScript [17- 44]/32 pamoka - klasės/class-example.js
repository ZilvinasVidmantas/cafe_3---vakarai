class Student {
  constructor(name, surname, age, course) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.course = course;
    this.marks = [];
  }

  printFullName() {
    console.log(this.name, this.surname);
  }

  addMark(mark) {
    this.marks.push(mark);
  }

  calcAvg() {
    if (this.marks.length < 1) {
      return 'Nėra pažymių';
    }
    return this.marks.reduce((sum, m) => sum + m) / this.marks.length;
  }
}

const stud1 = new Student('Veranda', 'Kolidorė', 21, 2);
const stud2 = new Student('Serbentautas', 'Bordiūras', 19, 1);
const stud3 = new Student('Stalčius', 'Komodauskas', 22, 3);
const stud4 = new Student('Jantinga', 'Mantinka', 21, 1);

const students = [stud1, stud2, stud3, stud4];