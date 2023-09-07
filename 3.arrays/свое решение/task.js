function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = {};
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(Sudent.marks.length === 0) {
    return
  } else {
    this.marks = [...marks];
  }
}

Student.prototype.getAverage = function () {
  if(Student.marks.length === 0) {
    return 0
  } else {
    this.average = average;
  average.reduce((acc, itens) => {
    acc + itens;
    if(index === average.length - 1) {
      return acc / average.length
    }
    return acc;
  }, 0);
  }
}

Student.prototype.exclude = function (reason) {
  delete Student.marks;
  delete Student.subject;

  this.excluded = reason;
}