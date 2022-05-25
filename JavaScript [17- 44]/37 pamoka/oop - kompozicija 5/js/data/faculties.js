import Faculty from '../entities/faculty.js';

export const infoAndMathFaculty = new Faculty('Informatikos ir matematikos fakultetas');
export const economicsAndBusinessFaculty = new Faculty('Ekonomikos ir verslo administravimo fakultetas');
export const chemistryAndGeoSciencesFaculty = new Faculty('Chemijos ir geomokslų fakultetas');
export const medicineFaculty = new Faculty('Medicinos fakultetas');
export const philosophyFaculty = new Faculty('Filosofijos fakultetas');

const faculties = [
  infoAndMathFaculty,
  economicsAndBusinessFaculty,
  chemistryAndGeoSciencesFaculty,
  medicineFaculty,
  philosophyFaculty,
];

export default faculties;
