const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");  // Import cors

const db = require("./database/db.js");
db();

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  id:Number,
  name:String,
  category:String,
  dateCreated:String,
  creatorName:String
});

var userModel = mongoose.model("artical", userSchema, "artical");

const app = express();

// Use CORS middleware globally
app.use(cors());  // This allows all origins, enabling cross-origin requests

app.use(express.json());

app.get("/artical", async (req, res) => {
  try {
    const products = await userModel.find();
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message); // Only log errors
    res.status(500).json({ message: err.message });
  }
});


app.post("/artical", async (req, res) => {
  try {
    const record = new userModel(req.body);
    await record.save();
    res.status(201).send("artical Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete("/artical/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await userModel.findById(productId);
    if (!product) {
      return res.status(404).send("artical not found");
    }
    await userModel.findByIdAndDelete(productId);
    res.status(200).send("Product deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.put('/artical/:id', async (req, res) => {
    try {
      // Validate ID
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
  
      // Update product
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      // Check if product exists
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      // Respond with updated product
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
app.listen(9000, () => {
  console.log("Server is running on http://localhost:9000");
});


  