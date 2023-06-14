// Cú pháp: function + function_name + () + { // khối lệnh thực thi}

//   có tính chất hoisting
function bai_01() {
  // chỉ được chạy khi được gọi
  // alert("Hello world");
  const firstName = "Academy";
  const lastName = "Rikkei";
  const fullName = lastName + " " + firstName;
  console.error("Cảnh báo: ", fullName);
}

function bai_03() {
  const chemistryMark = Number(prompt("Nhập vào điểm Hóa"));
  const physicsMark = Number(prompt("Nhập vào điểm lý"));
  const biologyMark = Number(prompt("Nhập vào điểm sinh"));
  const totalMark = chemistryMark + physicsMark + biologyMark;
  const averageMark = (totalMark / 3).toFixed(1); //

  // Truy vấn tới element
  const resultElement = document.querySelector("#result-03");
  console.log("element", resultElement);
  resultElement.innerHTML =
    "Tổng điểm của 3 môn là " +
    totalMark +
    " và điểm trung bình là " +
    averageMark;
}

function bai_04() {
  const electricPower = Number(prompt("Nhập vào chỉ số điện"));

  // validate dữ liệu
  if (electricPower < 0) {
    alert("Không nhập số âm!");
    return; // chỉ sử dụng bên trong function -> Kết thúc function, trả về kết quả
  }
  if (isNaN(electricPower)) {
    alert("Phải nhập số");
    return;
  }

  // console.log(isNaN(electricPower));
  let money;
  const rank_1 = 50 * 1700;
  const rank_2 = rank_1 + 50 * 1800;
  const rank_3 = rank_2 + 100 * 1900;
  const rank_4 = rank_3 + 100 * 2000;
  const rank_5 = rank_4 + 100 * 2200;

  if (electricPower <= 50) {
    money = electricPower * 1700;
  } else if (electricPower <= 100) {
    money = (electricPower - 50) * 1800 + rank_1;
  } else if (electricPower <= 200) {
    money = (electricPower - 100) * 1900 + rank_2;
  } else if (electricPower <= 300) {
    money = (electricPower - 200) * 2000 + rank_3;
  } else if (electricPower <= 400) {
    money = (electricPower - 300) * 2200 + rank_4;
  } else {
    money = (electricPower - 400) * 2500 + rank_5;
  }
  // format
  // Truy vấn tới element
  const resultElement = document.querySelector("#result-04");

  resultElement.innerHTML =
    "Tiền điện cần phải trả là: " + money.toLocaleString() + " VND";

  // toLocalString() --> format string hiển thị

  // Chỉ khi hiển thị mới thêm đơn vị (nếu có), không sử dụng trong quá trình tính toán
}

function bai_06() {
  // Truy vấn tới element để hiệnr thị kết quả
  const resultElement = document.querySelector("#result-06");
  // setInterval( function thực thi, 1000) --> function sẽ được thực thi sau thời gian bao nhiêu mili giây

  setInterval(function () {
    resultElement.innerHTML = new Date();
  }, 1000);
  setTimeout(function () {
    console.log("Hello world");
  }, 3000);
}

let a = 10;
let d = 10;

let b = ++a + a + a++;
let c = d++ + d + d++;

console.log("test", b, c);

//   console.log(number);
//   let number_test = 10;
//
