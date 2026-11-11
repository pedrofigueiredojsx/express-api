import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://pedrofigueiredojsx_db_user:pedro123@cluster0.kmpvazl.mongodb.net/Usuarios",
  )
  .then(() => {
    console.log("Conectado ao banco de dados mongodb");
  })
  .catch((error) => {
    console.log(error);
  });

const usuarioSchema = new mongoose.Schema(
  {
    nome: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    idade: { type: Number, require: true },
  },
  { timestamps: true },
);

const Usuario = mongoose.model("Usuario", usuarioSchema);

app.get("/usuarios", async (request, response) => {
  const usuariosDoBanco = await Usuario.find();

  response.json(usuariosDoBanco);
});

app.post("/usuarios", async (request, response) => {
  const usuarioCriado = await Usuario.create(request.body);

  response.json(usuarioCriado);
});

app.put("/usuarios/:id", async (request, response) => {
  const { id } = request.params;

  const usuario = await Usuario.findByIdAndUpdate(id, request.body, {
    new: true,
  });

  return response.json(usuario);
});

app.delete("/usuarios/:id", async (request, response) => {
  const { id } = request.params;

  await Usuario.findByIdAndDelete(id);

  return response.json({ mensagem: "Usuário deletado com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor Rodando na Porta 3000");
});
