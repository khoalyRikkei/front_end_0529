const productsToDB = [
  {
    id: "SP_1",
    name: "Đàn ông",
    price: 5000,
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/03/11/20/01/tree-7845181_640.jpg",
    description: "Người đàn ông khóc",
  },
  {
    id: "SP_2",
    name: "Thể thao",
    price: 3000,
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/06/17/16/22/man-8070375_640.jpg",
    description: "Vận động mỗi ngày",
  },
  {
    id: "SP_3",
    name: "Đàn ông",
    price: 5000,
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/03/11/20/01/tree-7845181_640.jpg",
    description: "Người đàn ông khóc",
  },
  {
    id: "SP_4",
    name: "Thể thao",
    price: 3000,
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/06/17/16/22/man-8070375_640.jpg",
    description: "Vận động mỗi ngày",
  },
  {
    id: "SP_5",
    name: "Đàn ông",
    price: 5000,
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/03/11/20/01/tree-7845181_640.jpg",
    description: "Người đàn ông khóc",
  },
  {
    id: "SP_6",
    name: "Thể thao",
    price: "3000",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/06/17/16/22/man-8070375_640.jpg",
    description: "Vận động mỗi ngày",
  },
  {
    id: "SP_7",
    name: "Đàn ông",
    price: 5000,
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/03/11/20/01/tree-7845181_640.jpg",
    description: "Người đàn ông khóc",
  },
  {
    id: "SP_8",
    name: "Thể thao",
    price: 3000,
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/06/17/16/22/man-8070375_640.jpg",
    description: "Vận động mỗi ngày",
  },
];

const accountsDB = [
  {
    email: "k@gmail.com",
    password: "",
    carts: [],
    role: "admin",
    isActive: true,
  },
  {
    email: "kk@gmail.com",
    password: "",
    carts: [],
    role: "customer",
    isActive: true,
  },
  {
    email: "khoa@gmail.com",
    password: "",
    carts: [],
    role: "customer",
    isActive: true,
  },
  {
    email: "minh@gmail.com",
    password: "",
    carts: [],
    role: "customer",
    isActive: true,
  },
  {
    email: "thang@gmail.com",
    password: "",
    carts: [],
    role: "customer",
    isActive: true,
  },
  {
    email: "nuong@gmail.com",
    password: "",
    carts: [],
    role: "customer",
    isActive: true,
  },
];

const products = localStorage.getItem("products");
if (!products) {
  localStorage.setItem("products", JSON.stringify(productsToDB));
  localStorage.setItem("accounts", JSON.stringify(accountsDB));

  //   Set login tạm

  localStorage.setItem(
    "userLogin",
    JSON.stringify({ email: "kk@gmail.com", carts: [], role: "customer" })
  );
}
