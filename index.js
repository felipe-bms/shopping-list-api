const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Variáveis globais para armazenar os itens da lista de compras
let items = [];
let currentId = 1;

// Rota para inserir item
app.post("/items", (req, res) => {
  const { name, quantity, type } = req.body;
  if (!name || !quantity || !type) {
    return res
      .status(422)
      .json({ error: "Name, quantity, and type are required" });
  }

  // Verificar duplicação de nome
  const existingItem = items.find((item) => item.name === name);
  if (existingItem) {
    return res.status(409).json({
      error: `There's already an item registered by the name ${name}`,
    });
  }

  const newItem = { id: currentId++, name, quantity, type };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Rota para obter todos os itens ou por tipo
app.get("/items", (req, res) => {
  const { type } = req.query;

  if (type) {
    const filteredItems = items.filter(
      (item) => item.type.toLowerCase() === type.toLowerCase()
    );
    return res.json(filteredItems);
  }

  res.json(items);
});

// Rota para obter item por ID
app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  // Verificar se o ID é um inteiro positivo
  if (isNaN(parsedId) || parsedId <= 0) {
    return res
      .status(400)
      .json({ error: "Bad Request: ID must be a positive integer" });
  }

  const item = items.find((item) => item.id === parsedId);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json(item);
});
