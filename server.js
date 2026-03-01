const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

let tenants = [];
let id = 1;

// SERVE PUBLIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

// GET TENANTS
app.get("/tenants", (req,res)=>{
  res.json(tenants);
});

// ADD TENANT
app.post("/tenants",(req,res)=>{
  const tenant = {
    id:id++,
    name:req.body.name,
    room:req.body.room,
    rent:req.body.rent
  };

  tenants.push(tenant);
  res.json(tenant);
});

// DELETE TENANT
app.delete("/tenants/:id",(req,res)=>{
  tenants = tenants.filter(t=>t.id != req.params.id);
  res.sendStatus(200);
});

// START SERVER
app.listen(5000, ()=>{
  console.log("Tenant Management Server Running 🚀");
});