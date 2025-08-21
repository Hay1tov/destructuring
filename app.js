//                                                  No_1

const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
] 

function getNamesByGrade(students, grade) {
  const updatedStudents = students.map(student => {
    let studentGrade;
    if (student.percent >= 85 && student.percent <= 100) {
      studentGrade = 5;
    } else if (student.percent >= 70 && student.percent < 85) {
      studentGrade = 4;
    } else if (student.percent >= 60 && student.percent < 70) {
      studentGrade = 3;
    } else {
      studentGrade = 2;
    }
    return { ...student, grade: studentGrade };
  });

  return updatedStudents
    .filter(student => student.grade === grade)
    .map(student => student.name);
}

console.log(getNamesByGrade(students, 5))


//                                                  No_2
//                                                  No_3
//                                                  No_4
//                                                  No_5
//                                                  No_6
//                                                  No_7
//                                                  No_8
//                                                  No_9
//                                                  No_10
//                                                  No_11
//                                                  No_12
//                                                  No_13
//                                                  No_14
//                                                  No_15
//                                                  No_16
//                                                  No_17
//                                                  No_18
//                                                  No_19
//                                                  No_20