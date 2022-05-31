import Person from './Person.js';

class EmployeeEC extends Person {
  salary;
  startDate;
  daysOff;

  constructor(identityCode, name, surname, salary, startDate) {
    super(identityCode, name, surname);
    this.salary = salary;
    this.startDate = startDate;
    this.daysOff = [];
  }

  setDayOff(year, month, day) {
    this.daysOff.push({ year, month, day });
  }

  calcPay(year, month) {
    const lastDayOfMonth = new Date(year, month, 0);

    if (lastDayOfMonth > this.startDate) {
      let dayOffsCount = 0;
      this.daysOff.forEach((dayOff) => {
        if (dayOff.year === year && dayOff.month === month) {
          dayOffsCount++;
        }
      });
      if (this.startDate.getFullYear() === year && this.startDate.getMonth() + 1 === month) {
        console.log('Skaičiuojamas mėnesis, kurį buvo pradėta dirbti');
        const monthDayStarted = this.startDate.getDate();

        for (let monthDay = monthDayStarted - 1; monthDay >= 1; monthDay--) {
          const monthDayDate = new Date(year, month - 1, monthDay);
          if ([1, 2, 3, 4, 5].includes(monthDayDate.getDay())) {
            dayOffsCount++;
          }
        }
      }

      if (dayOffsCount === 0) {
        return this.salary;
      }
      const dayOffLoss = this.salary / 21;
      return this.salary - dayOffsCount * dayOffLoss;

    } else {
      return 0;
    }

  }
}

export default EmployeeEC;

