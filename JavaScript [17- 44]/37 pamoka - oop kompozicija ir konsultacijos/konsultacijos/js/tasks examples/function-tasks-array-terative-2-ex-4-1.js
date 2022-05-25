import students from './students.js';

// console.group('4. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
console.group('function-tasks-array-terative-2-ex-4-1.js');
{
  const calcModuleAvg = ({ marks }) => marks.reduce((sum, mark) => sum + mark) / marks.length;

  const calcModuleAvgWithCreditWeight = (module) => calcModuleAvg(module) * module.credits;

  const calcStudentCredits = ({ modules }) => modules.reduce((sum, { credits }) => sum + credits, 0);

  const calcStudentAvgSumWithCreditWeight = ({ modules }) => modules.reduce(
    (sum, module) => sum + calcModuleAvgWithCreditWeight(module),
    0
  );

  const calcStudentAverage = (student) => {
    const avgSumWithCreditWeight = calcStudentAvgSumWithCreditWeight(student);
    const credits = calcStudentCredits(student);

    return avgSumWithCreditWeight / credits;
  }

  const roundNumber = (number, precision = 1) => Math.round(number * 10 ** precision) / 10 ** precision;

  const isElectronisFacultyStudent = stud => stud.faculty === 'Elektros ir elektronikos fakultetas';

  const studentsOfElectronicsFaculty = students.filter(isElectronisFacultyStudent);

  const studentAverages = studentsOfElectronicsFaculty
    .map(calcStudentAverage)
    .map(x => roundNumber(x));

  console.log(studentAverages);
}
console.groupEnd();