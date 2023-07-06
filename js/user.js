const productsDB = getDataFormLocal("products") ?? [];

// Render dữ liệu
renderProducts(productsDB);

function renderProducts(data) {
  // B1: Xác định element cần đổi

  const productsElement = document.querySelector("#products .row");
  //   B2: Lấy nội dung
  let productsContent = "";

  //   Lặp qua phần tử

  data.forEach((product) => {
    productsContent += `          <div class="col-12 col-md-6 col-lg-3 my-3">
    <div class="card">
      <img
        src="${product.imageUrl}"
        class="card-img-top"
        alt="${product.name}"
      />
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">Price: $${Number(
          product.price
        ).toLocaleString()}</p>
        <div class="card-foot">

        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modal-product-detail" onclick="handleDetail('${
          product.id
        }')">
          Detail</button>
         <button class="btn btn-primary" onclick="handleAddToCart('${
           product.id
         }')">Buy</button>
        </div>
      </div>
    </div>
  </div>`;
  });

  if (data.length === 0) {
    productsContent =
      "<h2 class='text-center py-5'>Không có sản phẩm nào được tìm thấy!!!";
  }
  productsElement.innerHTML = productsContent;
}

function handleSearch() {
  const inputValue = document.querySelector("#input-search").value;
  const productsDB = getDataFormLocal("products") ?? [];

  const resultSearch = productsDB.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  renderProducts(resultSearch);

  function check(product) {
    if (product.toLowerCase().includes(inputValue.toLowerCase()) === true) {
      return true;
    }
  }
}

function handleDetail(id) {
  const productsDB = getDataFormLocal("products") ?? [];

  // Tìm sản phẩm trong db

  let productDetail;
  for (let index = 0; index < productsDB.length; index++) {
    if (productsDB[index].id == id) {
      productDetail = productsDB[index];
      break;
    }
  }

  if (!productDetail) {
    return;
  }
  //   Render cho modal

  const modalBodyProductDetail = document.querySelector(
    "#modal-product-detail .modal-body"
  );
  const modalBodyContent = `<div class="card">
  <img
    src="${productDetail.imageUrl}"
    class="card-img-top"
    alt="${productDetail.name}"
  />
  <div class="card-body">
    <h5 class="card-title">${productDetail.name}</h5>
    <p class="card-text">${productDetail.description}</p>
    <p class="card-text">Price: $${Number(
      productDetail.price
    ).toLocaleString()}</p>
   
  </div>`;
  modalBodyProductDetail.innerHTML = modalBodyContent;

  //   Đổi thuộc tính cho buy

  const btnBuy = document.querySelector("#btn-buy");

  btnBuy.setAttribute("onclick", `handleAddToCart('${id}')`);
}

function handleAddToCart(id) {
  console.log(2222222, id);

  const userLogin = getDataFormLocal("userLogin");
  if (!userLogin) {
    const myModal = new bootstrap.Modal("#modal-confirm");
    myModal.show();
    return;
  }

  //   Tìm sản phẩm trong product db
  const productDb = getDataFormLocal("products") ?? [];
  const productBuy = productDb.find((product) => product.id == id);

  //   Tìm sản phẩm đó có trong user carts hay không --> có --> cộng số lượng , không --> push mới vào

  const cartsUser = userLogin.carts;
  //   Kiểm tra sản phẩm có trong cart
  let isExist = false;
  for (let index = 0; index < cartsUser.length; index++) {
    const productUser = cartsUser[index];
    if (productUser.id === id) {
      productUser.quantity++;
      isExist = true;
      break;
    }
  }

  if (!isExist) {
    productBuy.quantity = 1;
    cartsUser.push(productBuy);
  }

  //   Hoàn thành việc thêm sản phẩm vào trong userLogin
  console.log(userLogin);

  //   Tìm người dùng trên accounts
  const accountsDB = getDataFormLocal("accounts");

  //   Lặp qua từng người dùng --> kiểm tra cart của người dùng đó

  for (let index = 0; index < accountsDB.length; index++) {
    const user = accountsDB[index];
    if (user.email === userLogin.email) {
      const newUserLogin = { ...user, ...userLogin };
      accountsDB.splice(index, 1, newUserLogin);
    }
  }
  // Set lại accounts db
  setDataToLocal("accounts", accountsDB);
  setDataToLocal("userLogin", userLogin);
}
