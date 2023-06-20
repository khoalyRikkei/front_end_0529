// Khai báo một mảng (array)

// Cách 1:
const cars = ["BMW", "Toyota", "Honda", "Vinfast"];

// Cách 2:
const students = new Array(
  "Minh",
  "Hạnh",
  "Thắng",
  "Huyền",
  "Hùng",
  "Nương",
  "Tú",
  "Tài"
);

console.log("student", students);

// Kiểm tra độ dài của mảng:
const lengthStudents = students.length;

console.log("Độ dài của mảng", lengthStudents);

// Mảng rỗng

const a = [];

// falsy --> null, undefinded, NaN, false, " ", 0

// Lấy giá trị phần tử đầu tiên trong mảng

const car_1 = cars[0];
console.log("car 1", car_1);
console.log("car 4", cars[4]);

// Gán - thay thế phần tử trong mảng

cars[0] = "Madaz";
console.log("Kiểm tra xe", cars);

// Tạo 1 mảng có chiều dài 10

const numbers = new Array(10);
console.log(11111, numbers);

const numbers_100 = [];

for (let i = 0; i < 100; i++) {
  numbers_100[i] = i + 1; // gán phần tử thứ i trong mảng bằng 1 giá trị mới
}
console.log("Kiểm tra mảng số", numbers_100);

// --------- Làm việc với for in ---> lấy được chỉ số của mảng  -------// --> Phù hợp dùng trong Object

for (let index in students) {
  console.log("Học viên thứ ", index, " có tên là ", students[index]);
}

// --------- Làm việc với for of ---> lấy được phần tử trong mảng  -------// --> Phù hợp dùng trong Array

for (const student of students) {
  console.log("Kiểm tra học viên", student);
}

// Các phương thức trong mảng

// CRUD ---> create read update delete

/**
 * @create push(), unshift()
 * @read for, for in, for of, array[i]
 * @update splice(), array[i] = value
 * @delete pop(), shift(), splice()
 */

// Phương thức nối mảng --> concat()

const number_A = [1, 2, 3];
const number_B = [4, 6];
const number_C = number_A.concat(number_B);
console.log("Kiểm tra number", number_C);
const lengthCars = cars.push("Ford");
const lengthCars2 = cars.unshift("Lexus");

console.log("sau khi push()", cars, lengthCars);

// Làm quen với mảng đa chiều ---> hai chiều

const location_1 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [20, 10],
];

console.log(location_1[2][1]);
console.log("Kiểm tra mảng 2 chiều", location_1);
// chiều
console.log(location_1[2][2]);

const row = 5;
const col = 8;
const array_row = new Array(row);

for (let m = 0; m < array_row.length; m++) {
  const array_col = new Array(col);
  array_row[m] = array_col;
  for (let n = 0; n < array_col.length; n++) {
    const number = parseInt(Math.random() * 100);
    console.log("check", m, n, array_row);
    array_row[m][n] = number;
  }
}

console.log("Kiểm tra mảng 2 chiều số ngẫu nhiên", array_row);

const array_2 = [];
for (let m = 0; m < row; m++) {
  array_2[m] = [];
  for (let n = 0; n < col; n++) {
    const number = parseInt(Math.random() * 100);
    array_2[m][n] = number;
  }
}

console.log("Mảng 2 chiều 2", array_2);
