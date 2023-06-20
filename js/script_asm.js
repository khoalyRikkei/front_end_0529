function bai_01() {
  const animals = ["Lion", "Tiger", "Wolf", "Kangaroo"];

  // Cách 1:
  let result = "";
  for (let i = 0; i < animals.length; i++) {
    if (i == animals.length - 1) {
      result += animals[i];
    } else {
      result += animals[i] + ",";
    }
  }
  console.log(result);

  //   Cách 2: toString()

  let result_2 = animals.toString();
  console.log("cách 2:", result_2);

  //   Cách 3: join()

  const result_3 = animals.join();

  console.log("cách 3:", result_3);
}

function bai_02() {
  const numberString = prompt("Nhập vào một chuỗi số ngẫu nhiên");

  // Cách 2:

  //Chuyển đổi string --> array

  //   split() --> chuyển đổi string thành array theo separator
  const convertToArray = numberString.split("");
  for (let i = 0; i < convertToArray.length; i++) {
    if (convertToArray[i] % 2 === 0 && convertToArray[i + 1] % 2 === 0) {
      convertToArray[i] = convertToArray[i] + "-";
    }
  }

  //   Chuyển đổi array thành string để hiển thị

  //   join() --> chuyển array --> string
  const convertToString = convertToArray.join("");

  const resultElement = document.querySelector("#result-02");
  resultElement.innerHTML = convertToString;
}

function bai_03() {
  const words = prompt("Nhập vào một chuỗi");
  const UPPER = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let result = "";
  for (let i = 0; i < words.length; i++) {
    // Gắn cờ để xác định chữ có in hoa hay không
    let isUpper = false;
    for (k = 0; k < UPPER.length; k++) {
      if (words[i] === UPPER[k]) {
        result += words[i].toLowerCase();
        isUpper = true;
        break;
      }
    }
    // Kiểm tra nếu chưa in hoa thì in hoa
    if (!isUpper) {
      result += words[i].toUpperCase();
    }
  }

  //   Hiển thị kết quả
  const resultElement = document.querySelector("#result-03");
  resultElement.innerHTML = result;
}

// function ex_3() {
//     let string = prompt("nhap")
//     let str = ''
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == string[i].toUpperCase()) {
//             str += string[i].toLowerCase()
//         } else {
//             str += string[i].toUpperCase()
//         }
//     }
//     console.log(str)
// }
let count = 0;

function bai_04(element) {
  // element là tham số don oninput truyền vào khi gọi function
  console.log(element);
  const string = "Xin chào các bạn";
  let result = "";
  //   result += string[count];
  //   if (count == string.length) {
  //     count = 0;
  //     result = "";
  //   } else {
  //     count++;
  //   }
  if (count == string.length) {
    count = 0;
  } else {
    count++;
  }
  for (let i = 0; i < count; i++) {
    result += string[i];
  }

  element.value = result;
}
