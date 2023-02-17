// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

// import db from 'data/db.json'
var fs = require('fs');
var db = require('data/db.json');

export default function handler(req, res) {
  // console.log(req.method)
  // console.log(req.body)
  // console.log(db)

  const {method, body} = req;
  switch(method) {
    case 'GET': dataGet(); break;
    case 'POST': dataCreate(); break;
    case 'PUT': dataUpdate(); break;
    case 'DELETE': dataDelete(); break;
  }
  function saveData() {
    fs.writeFileSync('data/db.json', JSON.stringify(db));
    res.status(200).json(db)
  }
  function dataCreate() {
    db.push(body);
    saveData();
  }
  function dataGet() {
    res.status(200).json(db)
  }
  function dataUpdate() {
    let user = db.find((obj) => obj.id == body.id);
    Object.assign(user, body);
    saveData();
  }
  function dataDelete() {
    db = db.filter(obj => obj.id !== body);
    saveData();
  }
} 
