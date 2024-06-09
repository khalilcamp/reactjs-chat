// import de express, o que roda o servidor.
const express = require("express");
// cors é usado para puxar o servidor de qualquer lugar.
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// autenticação, leva um username e retorna um usuario falso.
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
//Quando um usuário chegar no autenticate, será criado um objeto de user.
try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username},
            {headers: {"private-key":"85eb1c85-02e6-4178-8e29-2ca2cfea930c"}}
    )
    return res.status(r.status).json(r.data);
} catch(e){
    return res.status(e.response.status).json(e.response.data);
}
});

// O app roda no port 3001
app.listen(3001);