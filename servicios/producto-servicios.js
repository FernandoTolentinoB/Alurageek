const API_URL = " http://localhost:3000/producto"

//GET
const listaProductos = () =>
  fetch(API_URL)
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUnProducto = (id) => {
  return fetch(`${API_URL}/${id}`).then((respuesta) => {
    return respuesta.json();
  });
};

//POST
const creaProdutos = (name, imageUrl, price) => {
  return fetch(`http://localhost:3000/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
      id: uuid.v4()
    }),
  }).then((respuesta) => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error("No fué posible crear un producto");
  });
};

// PUT/PATCH
const alteraProducto = async (id, name, price, description) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoServices = {
  listaProductos,
  listarUnProducto,
  creaProdutos,
  alteraProducto,
  deleteProducto,
};
