const student1 = {
  name: "Mikko",
  credits: 150,
  hasLeft: function () {
    return 240 - this.credits;
  },
};

const student2 = {
  name: "Pekka",
  credits: 185,
  hasLeft: function () {
    return 240 - this.credits;
  },
};

const student3 = {
  name: "Jaakko",
  credits: 110,
  hasLeft: function () {
    return 240 - this.credits;
  },
};

let students = [student1, student2, student3];
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
    console.log("Puuttuvia opintopisteitä: " +
        students[i].hasLeft());
}

for (let i = 0; i < students.length; i++) {
    students[i].opiskelijanumero = 261 + i;
}

for (let i = 0; i < students.length; i++) {
    console.log(
        students[i].name +
        ", opiskelijanumero: " +
        students[i].opiskelijanumero
    );
}