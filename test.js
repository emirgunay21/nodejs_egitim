var express = require('express')
var cors = require('cors')


const app = express();
const PORT = 3000;
app.use(cors());





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
  res.send(urunler);
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
