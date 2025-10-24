var express = require('express')
var cors = require('cors')


const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());





app.get("/", (req, res) => {
  res.send("<b>Hello from Express!</b>");
});

app.get("/me", (req, res) => {
  res.send("<b>My name is Emir Gunay!</b>");
});


let urunler = [
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    Image: `https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png`,
    url: 'products1',
      
  },
  {
    id: 2,
    name: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    Image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg",
    url: "products2",
  },
  {
    id: 3,
    name: "Mens Cotton Jacket",
    price: 55.99,
    Image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    url: "products3",
  },
  {
    id: 4,
    name: "Mens Casual Slim Fit",
    price: 15.99,
    Image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    url: "products4",
  },
  {
    id: 5,
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    Image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    url: "products5",
  },
  {
    id: 6,
    name: "Solid Gold Petite Micropave",
    price: 168,
    Image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    url: "products6",
  },
   {
    id: 7,
    name: "White Gold Plated Princess",
    price: 9.99,
    Image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    url: "products7",
  },
  {
    id: 8,
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    Image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    url: "products8",
  }
];

app.get("/products", (req, res) => {
  let id=req.body.id;
  let name=req.body.name;
  res.send(urunler);
});

app.post("/products", (req, res) => {
  let id=req.body.id;
  let name=req.body.name;
  console.log(`${name} with ID: ${id}`);
  res.json(urunler);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = urunler.find((p) => p.id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

    app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
