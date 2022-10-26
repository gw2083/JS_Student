const btnAdd = document.querySelector("button.add");
const inputs = document.querySelectorAll("input");
const tbodyAddr = document.querySelector("tbody.tbody_addr");
let studentList = [];

const addStudent = () => {
  const student = {
    학번: inputs[0].value,
    이름: inputs[1].value,
    학과: inputs[2].value,
    학년: inputs[3].value,
    전화번호: inputs[4].value,
    주소: inputs[5].value,
  };
  studentList.push(student);
};

const saveStudent = () => {
  if (studentList) {
    localStorage.setItem("StudentInfo", JSON.stringify(studentList));
  }
};

const printStudent = () => {
  const tr = document.createElement("TR");
  inputs.forEach((student) => {
    const td = document.createElement("TD");
    td.textContent = student.value;
    tr.appendChild(td);
  });
  tbodyAddr.appendChild(tr);
};

const loadStudent = () => {
  const load = localStorage.getItem("StudentInfo");
  if (load) {
    studentList = JSON.parse(load);
  }

  tbodyAddr.textContent = "";
  for (let i = 0; i < studentList.length; i++) {
    const list = studentList[i];
    const tr = document.createElement("TR");

    const studentValues = Object.values(list);
    for (let j = 0; j < studentValues.length; j++) {
      const td = document.createElement("TD");
      td.textContent = studentValues[j];
      tr.appendChild(td);
    }
    tbodyAddr.appendChild(tr);
  }
};
loadStudent();

btnAdd?.addEventListener("click", () => {
  addStudent();
  saveStudent();
  printStudent();
  loadStudent();
});
