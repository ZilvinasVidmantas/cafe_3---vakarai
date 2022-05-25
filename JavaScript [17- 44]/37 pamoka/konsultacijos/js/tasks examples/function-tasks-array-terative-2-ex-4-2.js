import students from './students.js';

// console.group('4. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
console.group('function-tasks-array-terative-2-ex-4-2.js');
{
  const roundNumber = (number, precision = 1) => Math.round(number * 10 ** precision) / 10 ** precision;

  const studentsElectronics = students.filter(function (student) {
    return student.faculty === 'Elektros ir elektronikos fakultetas';
  });

  const studentsModules = studentsElectronics.map(function (student) {
    return student.modules;
  });

  const studentsModulesCredits = studentsModules.map(function (studentsModules) {
    const getAllCredits = studentsModules.map(function (cr) {
      return cr.credits;
    });

    return getAllCredits;
  });


  const studentsModulesCreditsSum = studentsModulesCredits.map(function (studentCredits) {
    return studentCredits.reduce(function (sum, cr) {
      return sum + cr;
    })
  })

  const studentsModulesAverages = studentsModules.map(function (studentModules) {

    const studentModuleMarks = studentModules.map(function (studentModule) {
      return studentModule.marks;
    });

    const allMarksAvg = studentModuleMarks.map(function (marks) {
      const sum = marks.reduce(function (prevSum, mark) {
        return prevSum += mark;
      });
      const avg = sum / marks.length;

      return avg;
    });

    return allMarksAvg;
  });

  const studentAverages = studentsModulesAverages.map((studentModulesAverages, i) => {
    const studentModulesCredits = studentsModulesCredits[i];
    const studentModulesCreditsSum = studentsModulesCreditsSum[i];

    const studentsModulesWeightedAvg = studentModulesAverages.map((avg, i) => avg * studentModulesCredits[i]);
    const studentsModulesWeightedAvgSum = studentsModulesWeightedAvg.reduce((prevSum, avg) => prevSum + avg);

    return studentsModulesWeightedAvgSum / studentModulesCreditsSum;
  });

  const roundedStudentAverages = studentAverages.map(x => roundNumber(x));

  console.log(roundedStudentAverages);
}
console.groupEnd();