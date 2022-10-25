import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de rotas
app.use(usersRoute);
app.use(statusRoute);

// Inicialização do servidor
app.listen(4500, () => {
  console.log("Aplicação executando a porta 4500!");
});
