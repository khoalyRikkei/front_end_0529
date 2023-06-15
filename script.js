if (10 > 5) {
  console.log("Chinh xac");
}

if (10 < 5) {
  console.log(" Mười bé hơn 5");
}

console.log("Hello word");

if (10) {
}

// falsy : " ", null, undefined, 0, NaN, false

// Nghịch đảo:  !falsy = truethy hoặc ngược lại

// If lồng vào nhau:

// Tìm số lớn nhất trong 3 số

const a = 50;
const b = 20;
const c = 500;

if (a < b) {
  if (b < c) {
    console.log("Kết quả số lớn nhất là", c);
  } else {
    console.log("Kết quả số lớn nhất là", b);
  }
} else {
  if (a < c) {
    console.log("Kết quả số lớn nhất là", c);
  } else {
    console.log("Kết quả số lớn nhất là", a);
  }
}

let max = a;

if (max < b) {
  max = b;
  if (max < c) {
    max = c;
  }
  //   Nếu không thỏa điều kiện trên--> max vẫn là b
} else {
  // max vẫn bằng a
  if (max < c) {
    max = c;
  }
}

console.log("Kết quả kiểm tra lần 2", max);

// Phân loại học sinh

const mark = 8;

if (mark >= 8) {
  console.log("Học sinh giỏi");
} else if (mark >= 6.5) {
  console.log("Học sinh khá");
} else if (mark >= 5) {
  console.log(" Học sinh trung bình");
} else {
  console.log("Học sinh yếu");
}

let rank = "";
if (mark >= 8) {
  rank = "Học sinh giỏi";
} else if (mark >= 6.5) {
  rank = "Học sinh khá";
} else if (mark >= 5) {
  rank = " Học sinh trung bình";
} else {
  rank = "Học sinh yếu";
}

console.log(rank); // Hiển thị cho người dùng

// Không nên dùng
if (mark >= 8) {
  console.log("Học sinh giỏi");
}

if (mark < 8 && mark >= 7) {
  console.log("Học sinh khá");
}

// Cấu trúc switch - case

function switchCase() {
  const number = Number(prompt("Nhập vào một số từ 1 đến 5"));

  switch (number) {
    case 1:
      console.log("One");
      break;
    case 2:
      console.log("Two");
      break;
    case 3:
      console.log("Three");
      break;
    case 4:
      console.log("Four");
      break;
    case 5:
      console.log("Five");
      break;
    default:
      // statement
      console.log("Vui lòng nhập số từ 1 đến 5");
  }
}

function bai_2() {
  // INPUT: weight, height

  // PROCCESS: dùng các câu điều kiện

  // OUTPUT: BMI, tình trạng

  const weightPerson = Number(prompt("Nhập vào chỉ số cân nặng (kg)"));

  const heightPerson = Number(prompt("Nhập vào chỉ số chiều cao (m)"));

  if (weightPerson <= 0 || heightPerson <= 0) {
    alert("Vui lòng nhập vào số dương");
    return;
  }

  const BMI = (weightPerson / (heightPerson * heightPerson)).toFixed(1);

  let result = "";
  let rank = "";
  if (BMI < 18.5) {
    result = "Gầy";
  } else if (BMI < 25) {
    result = "Bình thường";
  } else {
    result = "Thừa cân";
    // Phân loại các trường hợp thừa cân
    if (BMI < 30) {
      rank = "Tiền béo phì";
    } else if (BMI < 35) {
      rank = "Béo phì độ 1";
    } else if (BMI < 40) {
      rank = "Béo phì độ 2";
    } else {
      rank = "Béo phì độ 3";
    }
  }

  //   Hiển thị kết quả

  const stringRank = " có cấp độ là " + rank;

  const resultElement = document.querySelector("#result-02");
  resultElement.innerHTML =
    "Chỉ số BMI của bạn là: " +
    "<b>" +
    BMI +
    "</b> và phân loại là " +
    result +
    (rank ? stringRank : ""); // toán tử 3 ngôi để thực hiện
}

function bai_3() {
  const month = Number(prompt("Nhập vào tháng cần kiểm tra (số)"));
  let dayOfMoth = "";
  //   Xử lý dữ liệu
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dayOfMoth = "31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dayOfMoth = "30 ngày";
      break;
    case 2:
      dayOfMoth = "28 hoặc 29 ngày";
      break;
    default:
      dayOfMoth = "error";
  }

  const resultElement = document.querySelector("#result-03");
  resultElement.innerHTML =
    dayOfMoth === "error"
      ? " Vui lòng nhập đúng định dạng tháng"
      : "tháng " + month + " có " + dayOfMoth;
}
