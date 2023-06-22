const products = ["LG", "Sony", "Samsung"];

renderProduct(products);

function handleAdd() {
  // B1: Xác định giá trị cần add
  const inputElement = document.querySelector("#input-add");
  const indexElement = document.querySelector("#product-index-1");
  const buttonElement = document.querySelector("#btn-add-edit");

  // B2: Thêm vào products
  if (indexElement.value != "") {
    products.splice(indexElement.value, 1, inputElement.value);
    buttonElement.innerHTML = "Add";
    indexElement.value = "";
  } else {
    products.push(inputElement.value);
  }

  //   B3: Xóa value input
  inputElement.value = "";
  // B4: Render lại
  renderProduct(products);
}

function handleDelete(index) {
  // Xóa phần thử thứ index
  products.splice(index, 1);
  // render lại
  renderProduct(products);
}

// function --> chức năng -> đưa dữ liệu lên form
function handleEdit(index) {
  console.log("Kiểm tra index", index);
  const sectionEditElement = document.querySelector(".update");
  sectionEditElement.style.display = "block";

  // B1: Xác định element muốn thay đổi
  const inputElement = document.querySelector("#input-edit");
  const indexElement = document.querySelector("#product-index");

  // B2: Xác định được phần tử để sửa

  const product = products[index];

  // B3: Đưa sản phẩm lên input update
  inputElement.value = product;
  indexElement.value = index;
}

// function --> search sản phẩm
function handleSearch() {
  // B1: Xác định value cần tìm
  const searchValue = document.querySelector("#input-search").value;
  const productSearch = [];
  // B2: Xác định được phần tử để sửa
  for (const element of products) {
    // includes() --> boolean
    if (element.toLowerCase().includes(searchValue.toLowerCase())) {
      productSearch.push(element);
    }
  }
  // render lại sản phẩm
  renderProduct(productSearch);
}

// function --> search sản phẩm
function handleSearch2() {
  // B1: Xác định value cần tìm
  const searchValue = document.querySelector("#input-search-2").value;

  // B2: Xác định được phần tử để sửa

  const dataSearch = products.filter((product) =>
    product.toLowerCase().includes(searchValue.toLowerCase())
  );

  // render lại sản phẩm
  renderProduct(dataSearch);
}

// function --> cập nhập lại products (database)
function handleUpdate() {
  const sectionEditElement = document.querySelector(".update");
  sectionEditElement.style.display = "none";
  // B1: Lấy giá trị của form muốn thay đổi
  const productValue = document.querySelector("#input-edit").value;
  const productIndex = document.querySelector("#product-index").value;
  console.log("index product", productIndex);
  // B2: Tìm và thay thế product
  if (productIndex != "") {
    products.splice(productIndex, 1, productValue);
  }

  // B3: render lại

  renderProduct(products);
}

// Render sản phẩm
function renderProduct(products) {
  // B1: Xác định element
  const table = document.querySelector("table");

  // B2: Tạo content chứa thông tin sp theo html
  let tableContent = `<tr>
  <th>Product</th>
  <th>${products.length} products</th>
</tr>`;

  // B3: Lặp qua từng sp --> hiển thị nội dung theo html

  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    tableContent += `<tr>
        <td>${element}</td>
        <td><button onclick="handleEdit(${i})">Edit</button><button onclick="handleEdit2(${i})">Edit 2</button> <button onclick="handleDelete(${i})">Delete</button></td>
      </tr>`;
  }

  //   B4: gán lại element
  table.innerHTML = tableContent;
}

// Cách 2: gộp chung function add và edit

function handleEdit2(index) {
  // B1: Xác định element muốn thay đổi
  const inputElement = document.querySelector("#input-add");
  const indexElement = document.querySelector("#product-index-1");
  const buttonElement = document.querySelector("#btn-add-edit");
  // B2: Xác định được phần tử để sửa

  const product = products[index];
  buttonElement.innerHTML = "Update";
  // B3: Đưa sản phẩm lên input update
  inputElement.value = product;
  indexElement.value = index;
}
