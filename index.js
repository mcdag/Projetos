// yarn init -y (cria o package json)
// yarn add [express] (cria a pasta node_modueles e cria o yarn.lock)



const express = require('express');

const server = express();

server.use(express.json()); //uso do express para conseguir mandar um body request json 

// query params = ?nome=NodeJs
// route params = /curso/2
// request body = {Noeme: 'NodeJs', tipo: 'Backend'}

// CRUD

//lendo cursos
const cursos = ['Node JS', 'JavaScript', 'React Native'];

server.get('/cursos', (req, res)=> {
  return res.json(cursos);
});

//localhost:3000/curso
server.get('/cursos/:index',(req, res) => {
  //query-query     route-params    

  const {index} = req.params;

  return res.json(cursos[index]);

});

//criando um curso
server.post('/cursos' , (req,res) => {
  const {name} = req.body;
  cursos.push(name);
  return res.json(cursos);
});

//atualizando um curso
server.put('/cursos/:index' , (req,res) => {
  const {index} = req.params;
  const {name} = req.body;

  cursos[index] = name;

  return res.json(cursos);
})

//deletando um curso
server.delete('/cursos/:index' ,(req,res) => {
  const {index} = req.params;

  cursos.splice(index,1);
  return res.json(cursos);
  //
})

server.listen(3000);
