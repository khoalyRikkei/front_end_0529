// Tìm các cặp số có tổng bằng 10

function bai_03() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = [];
  let result_2 = "";
  for (let i = 0; i < arr.length; i++) {
    for (let m = i + 1; m < arr.length; m++) {
      const sum = arr[i] + arr[m];
      if (sum === 10) {
        result.push([arr[i], arr[m]]);
        result_2 += `[${arr[i]}, ${arr[m]}] `;
      }
    }
  }
  console.log(result);
  console.log(result_2);
}

// function bai_03_2() {
//   const arr = [
//     [1, 9],
//     [3, 7],
//     [7, 3],
//     [4, 6],
//     [9, 1],
//   ];
//   const result = [];
//   let result_2 = "";

//   console.log(result);
//   console.log(result_2);
// }

function bai_04() {
  const text = prompt("Nhập vào một chuỗi số");
  const convertArr = text.split("");
  console.log(1111, convertArr);
  let result = "";

  for (let i = 0; i < convertArr.length; i++) {
    let count = 1;
    for (let m = i + 1; m < convertArr.length; m++) {
      if (convertArr[m] === convertArr[i]) {
        count++;
        convertArr.splice(m, 1); // xóa phần tử trùng nhau --> không cần đếm lại trong vòng lặp tiếp theo
        m--; // Khi array giảm xuống --> m phải giảm theo để không sót phần tử
      }
    }

    console.log("Ký tự: ", convertArr[i], "được lặp ", count);
    result += `<p>Ký tự <strong>${convertArr[i]}</strong> được lặp lại <strong>${count}</strong> lần</p>`;
  }
  console.log(22222, convertArr);
  const resultElement = document.querySelector("#result-04");
  resultElement.innerHTML = result;
}

function bai_05() {
  const numberString = prompt("Nhập 1 chuỗi số ngăn cách nhau bởi dấu phẩy");
  const convertArray = numberString.split(",");
  const newData = convertArray.map((number) => Number(number));
  for (let i = 0; i < newData.length; i++) {
    for (let m = 0; m < newData.length; m++) {
      if (newData[m] > newData[m + 1]) {
        const x = newData[m];
        newData[m] = newData[m + 1];
        newData[m + 1] = x;
      }
    }
  }

  console.log(newData);
}

const numbers = [1, 2, 3];
numbers.forEach((number) => {
  console.log(number);
});

//
const imageUrl = [
  "https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/15/08/05/bee-8064761_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/15/02/38/fauna-8064270_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/08/04/49/cat-8048688_640.jpg",
  "https://cdn.pixabay.com/photo/2023/05/10/04/31/eurasian-whimbrel-7982937_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/15/11/04/huddle-of-walrus-8065100_640.jpg",
  "https://cdn.pixabay.com/photo/2023/05/24/21/56/bug-8015937_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/03/18/12/benz-8038240_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/09/18/30/ibex-8052387_640.jpg",
];

// ----------------------------------------------

const array = [1, 2, 3, 5, 6, 63, 3];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  forEachClone(element, index, array);
}

function forEachClone(item) {
  console.log(item, "test");
}
function mapClone(item) {
  console.log(item, "test");
}

const a = array.forEach((element, i, arr) => {
  console.log(111, element);
});
console.log("Kiểm tra a", a);
