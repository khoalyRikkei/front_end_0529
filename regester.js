const accounts = [];
// Cách xử lý register bằng for
function handleRegister() {
  // B1: Lấy dữ liệu từ form
  const user = getDataForm();

  //   repeat password --> Chắc chắn rằng người dùng đã nhớ password mình muốn đặt
  if (user.password !== user.repeatPasswordValue) {
    alert("Password phải trùng nhau");
    return;
  }
  //   B2: Kiểm tra rằng - email có tồn tại trong mảng dữ liệu (dataBase)
  // Dùng vòng lặp lặp qua từng phần tử để so sánh --> for, for of, forEach,  find()
  let isExist = false;
  for (let i = 0; i < accounts.length; i++) {
    if (user.email === accounts[i].email) {
      isExist = true;
      break; // rút ngắn lần lặp
    }
  }

  // Nếu trùng email -> thông báo email tồn tại --> yêu cầu đăng nhập hoặc đăng ký email mới
  // Nếu email không tồn tại --> push vào mảng accounts  --> điều hướng sang đăng nhập

  if (isExist) {
    alert("Email đã tồn tại, vui lòng nhập lại hoặc đăng nhập");
  } else {
    // delete key không cần thiết --> repeatPassword
    delete user.repeatPasswordValue;
    accounts.push(user);
    console.log(accounts);
    alert("Đăng ký thành công");
  }
}

// Cách xử lý register bằng forEach()
function handleRegister2() {
  // B1: Lấy dữ liệu từ form
  const user = getDataForm();

  //   repeat password --> Chắc chắn rằng người dùng đã nhớ password mình muốn đặt
  if (user.password !== user.repeatPasswordValue) {
    alert("Password phải trùng nhau");
    return;
  }
  //   B2: Kiểm tra rằng - email có tồn tại trong mảng dữ liệu (dataBase)
  // Dùng vòng lặp lặp qua từng phần tử để so sánh --> for, for of, forEach,  find()
  let isExist = false;
  accounts.forEach((item) => {
    if (item.email === user.email) {
      isExist = true;
      return;
    }
    console.log("Hello world");
  });

  // Nếu trùng email -> thông báo email tồn tại --> yêu cầu đăng nhập hoặc đăng ký email mới
  // Nếu email không tồn tại --> push vào mảng accounts  --> điều hướng sang đăng nhập

  if (isExist) {
    alert("Email đã tồn tại, vui lòng nhập lại hoặc đăng nhập");
  } else {
    // delete key không cần thiết --> repeatPassword
    delete user.repeatPasswordValue;
    accounts.push(user);
    console.log(accounts);
    alert("Đăng ký thành công");
  }
}

// Cách xử lý register bằng find()
function handleRegister3() {
  // B1: Lấy dữ liệu từ form
  const user = getDataForm();

  //   repeat password --> Chắc chắn rằng người dùng đã nhớ password mình muốn đặt
  if (user.password !== user.repeatPasswordValue) {
    alert("Password phải trùng nhau");
    return;
  }
  //   B2: Kiểm tra rằng - email có tồn tại trong mảng dữ liệu (dataBase)
  // Dùng vòng lặp lặp qua từng phần tử để so sánh --> for, for of, forEach,  find()
  const userExist = accounts.find((item) => {
    // item.email === user.email
    if (item.email === user.email) {
      return true;
    }
  });

  // Nếu trùng email -> thông báo email tồn tại --> yêu cầu đăng nhập hoặc đăng ký email mới
  // Nếu email không tồn tại --> push vào mảng accounts  --> điều hướng sang đăng nhập

  if (userExist) {
    alert("Email đã tồn tại, vui lòng nhập lại hoặc đăng nhập");
  } else {
    // delete key không cần thiết --> repeatPassword
    delete user.repeatPasswordValue;
    accounts.push(user);
    console.log(accounts);
    alert("Đăng ký thành công");
  }
}

// lấy dữ liệu trong form
function getDataForm() {
  // lấy dữ liệu từ ô input
  const emailValue = document.querySelector("#email").value;
  const userNameValue = document.querySelector("#user-name").value;
  const passwordValue = document.querySelector("#password").value;
  const repeatPasswordValue = document.querySelector("#repeat-password").value;

  return {
    email: emailValue,
    userName: userNameValue,
    password: passwordValue,
    repeatPasswordValue: repeatPasswordValue,
  };
}

function handleLogin() {
  // B1: Lấy dữ liệu từ form
  const emailLoginValue = document.querySelector("#email-login").value;
  const passwordLoginValue = document.querySelector("#password-login").value;

  // B2: Kiểm tra account  --> email và password có trùng hay không
  let isLogin = false;
  for (let i = 0; i < accounts.length; i++) {
    const user = accounts[i];
    if (
      user.email === emailLoginValue &&
      user.password === passwordLoginValue
    ) {
      isLogin = true;
      break;
    }
  }
  // Nếu trùng --> vào --> thông báo
  // Nếu không trùng  --> vào --> thông báo
  if (isLogin) {
    // isLogin === true
    alert("Đăng nhập thành công ");
    // Điều hướng về page mong muốn  // window.location = ""
    // Lưu dữ liệu cần thiết lên localStorage
  } else {
    alert("Email hoặc mật khẩu không đúng!!!");
  }
}
