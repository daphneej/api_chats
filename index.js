const express = require("express");

const app = express();

const port = process.env.port || 3000

chats = [
  {
    id: 1,
    name: "Read-me",
    age: 1,
    url: "https://www.grazia.fr/wp-content/uploads/grazia/2021/11/voici-les-races-chats-les-plus-belles-monde-est-science-qui-dit.jpg",
  },
  {
    id: 2,
    name: "Lola",
    age: 2,
    url: "https://netstorage-legit.akamaized.net/images/e3e71eb12118e7d5.jpg?imwidth=720",
  },
  {
    id: 3,
    name: "Martine",
    age: 3,
    url: "https://netstorage-legit.akamaized.net/images/a893da2f1e4fb7ca.jpg?imwidth=720",
  },
  {
    id: 4,
    name: "Kevin",
    age: 4,
    url: "https://www.grazia.fr/wp-content/uploads/grazia/2021/11/le-norvegien-jpg-617x410.jpg",
  },
];

app.use(express.json())

// recuperation de tous les chats
app.get("/chats", (req, res) => {
  res.json({ chats });
});

// recuperation d'un chat par son id
app.get("/chats/:id", (req, res) => {
  const id = req.params.id;
  const chat = chats.find((c) => {
    return c.id === parseInt(id);
  });

  if (!chat) {
    return res.status(404).json({ message: "chat non trouver" });
  }

  res.json({ chat });
});

// post ajout d'un chat
app.post("/chats", (req, res) => {
  const chat = req.body;

  if(chat.name.length <= 0){
    return res.status(400).json({message: "nom vide"})
  }

  chats.push(chat)
  res.status(201).json({ chat });
});


app.listen(port, () => {
  console.log("hello wold");
});
