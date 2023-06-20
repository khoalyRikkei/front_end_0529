// Hiển thị danh sách học viên

// Thông tin cần biết
// 1. Dữ liệu  --> array
// 2. Hiển thị ở đâu --> id="render-student"

const students = [
  "Minh",
  "Hạnh",
  "Thắng",
  "Huyền",
  "Hùng",
  "Nương",
  "Tú",
  "Tài",
]; //--> Có dữ liệu lưu trữ

renderData();

function handleAdd() {
  // B1: Có được element input

  const inputElement = document.querySelector("#input-add");
  console.log("Kiểm tra input", inputElement);

  //   B2: Thêm dữ liệu vào data

  const inputValue = inputElement.value;

  students.push(inputValue);
  //   Xóa dữ liệu ở input --> option
  inputElement.value = "";
  console.log("Student ", students);

  //   Gọi lại function renderData() để cập nhập lại dữ liệu

  renderData();
}

// Function renderData
function renderData() {
  const renderElement = document.querySelector("#render-student");
  console.log("Kiểm tra ul", renderElement);
  let renderContent = "";
  for (let i = 0; i < students.length; i++) {
    renderContent += `<li>${students[i]}</li>`;
  }

  renderElement.innerHTML = renderContent;
}
