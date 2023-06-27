// Xây dựng một class đối tượng hình chữ

class Rectangle {
  // Hàm tạo các thuộc tính
  constructor(a, b) {
    this.width = a;
    this.height = b;
  }

  // Có các phương thức với đối tượng
  // Tính diện tích
  getArea() {
    return this.width * this.height;
  }
  // Tính chu vi
  getPerimeter = () => {
    return (this.width + this.height) * 2;
  };

  //   Set chiều cao
  setHeight = (height) => {
    this.height = height;
  };
  //   Set chiều rộng
  setWidth = (width) => {
    this.width = width;
  };
  //   print console
  printer = () => {
    console.log("Diện tích hình chữ nhật là: ", this.getArea());
    console.log("Chu vi hình chữ nhật là: ", this.getPerimeter());
  };
}

function bai_01() {
  // Nhập thông tin height, width từ người dùng--> tương tác với người dùng ở client
  const height = Number(prompt("Nhập chiều cao hình chữ nhật"));
  const width = Number(prompt("Nhập chiều rộng hình chữ nhật"));

  //   Khai báo và khởi tạo 1 đối tượng Hình chữ nhật
  const rectangle_1 = new Rectangle(width, height);
  const area_1 = rectangle_1.getArea();
  console.log("Kiểm tra hình chữ nhật", rectangle_1);
  console.log("Diện tích hình chữ nhật là:", area_1);

  //   Không cần gọi console.log
  rectangle_1.printer();
  const setHeight = Number(prompt("Nhập vào chiều cao muôn set lại"));
  rectangle_1.setHeight(setHeight); // đối số truyền vào
  rectangle_1.printer();

  //   gọi bên ngoài
  const area_2 = getArea(width, height);
  console.log("Dùng gọi hàm bên ngoài (POP)", area_2);
}

function getArea(width, height) {
  return width * height;
}

// Bài 2
function bai_02() {
  const obj = { name: "Minh", age: 22 };
  const isEmpty = checkEmpty(obj);
  console.log(isEmpty ? " object không có thuộc tính" : "Object có thuộc tính");
  //   checkEmpty_2(obj);
}

function checkEmpty(obj) {
  let isEmpty = true;
  for (const key in obj) {
    // console.log("key", key);
    isEmpty = false;
  }
  return isEmpty;
}
// function checkEmpty_2(obj) {
//   const keys = Object.keys(obj);
//   return !keys.length
// }

function bai_03() {
  const catName = prompt("Nhập tên mèo");
  const catWeight = Number(prompt("Nhập cân năng mèo"));

  const catSpeed = Number(prompt("Nhập tốc đô mèo"));

  const cat = new Cat(catName, catWeight, catSpeed);
  console.log("Kiểm tra mèo", cat);

  const mouses = [
    new Mouse(0.5, 10, true),
    new Mouse(0.2, 15, true),
    new Mouse(0.1, 8, true),
    new Mouse(0.9, 0, false),
    new Mouse(0.3, 25, true),
  ];
  console.log("Kiểm tra đàn chuột", mouses);

  cat.catchMouse(mouses[0]);

  console.log("Kiểm tra mèo sau khi bắt", cat);

  //   Yêu cầu mèo bắt hết chuột

  mouses.forEach((mouse) => {
    cat.catchMouse(mouse);
  });
  console.log("Kiểm tra đàn chuột sau khi bị bắt", mouses);
  console.log("Kiểm tra mèo sau khi bắt đàn chuột", cat);
}

// Xây dựng đối tượng mèo và chuột

// Constructor function

function Cat(name, weight, speed) {
  // Khai báo thuộc tính
  this.name = name;
  this.weight = weight;
  this.speed = speed;

  // Khai báo hành vi
  this.speak = () => {
    return "Meo Meo";
  };

  this.catchMouse = (mouse) => {
    //Điều kiện bắt chuột khi tốc độ mèo lớn hơn chuột
    if (this.speed > mouse.getSpeed() && this.weight > mouse.getWeight()) {
      // Sau khi bắt chuột --> ăn chuột
      this.eatMouse(mouse);
    } else {
      console.log("%c Không bắt được con chuột này");
    }
  };
  this.eatMouse = (mouse) => {
    // Điều kiện để ăn chuột
    if (mouse.getStatus()) {
      // Sau khi ăn, cân nặng tăng lên
      this.weight += mouse.getWeight();
      mouse.setStatus(false);
    }
  };
}

function Mouse(weight, speed, status) {
  // Khai báo thuộc tính
  this.weight = weight;
  this.speed = speed;
  this.status = status;

  // Khai báo hành vi
  this.getSpeed = () => this.speed;
  this.getStatus = () => this.status;
  this.getWeight = () => this.weight;
  this.speak = () => "Chít chít";
  this.setStatus = (status) => (this.status = status);
}
