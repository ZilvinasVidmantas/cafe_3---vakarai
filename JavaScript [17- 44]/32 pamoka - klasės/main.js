class Student {
  constructor(name, surname, age, course) {
    if (course < 1) {
      console.error('Neteisingas kurso formatas');
    }

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.course = course;
  }

  // funkcija aprašyta viduje klasės yra vadinama metodu
  printFullName() {
    console.log(this.name, this.surname);
  }
}

const students = [
  new Student('Serbentautas', 'Bordiūras', 19, 1),
  new Student('Veranda', 'Kolidorė', 21, -5),
  new Student('Stalčius', 'Komodauskas', 22),
  new Student('Jantinga', 'Mantinka', 21, 1),
];


students.forEach(student => student.printFullName())
