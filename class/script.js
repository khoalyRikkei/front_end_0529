// Kiểm tra 1 số có phải số nguyên tố hay không
function bai_01() {
  // B1. Lấy được dữ liệu
  const inputValue = document.querySelector("#input-01").value;

  //   B2: Xử lý dữ liệu để có thể lấy được từng số
  const convertArray = inputValue.split(",");
  console.log(convertArray);

  let result = "";
  //   B3: Dùng vòng lặp for điểm kiểm tra và lưu kết quả
  for (let i = 0; i < convertArray.length; i++) {
    const checkIsPrime = isPrime(convertArray[i]);
    if (checkIsPrime) {
      // Số nguyên tố sẽ được thêm vào kết quả
      result += convertArray[i] + " ";
    }
  }

  const resultElement = document.querySelector("#result-01");
  resultElement.innerHTML = "Các số nguyên tố là:" + result;
}

function isPrime(number) {
  // let isPrime = true
  //   Kiểm tra có phải số hay không
  if (isNaN(number)) {
    console.log(number);
    return false;
  }

  if (number < 2) {
    console.log(11111, number);
    // isPrime = false
    return false; //-> các số bé hớn 2 không phải số nguyên tố
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      // isPrime = false
      return false; // --> có ước --> không phải số nguyên tố
    }
  }

  //   return isPrime
  return true;
}
