const router = express.Router();
import Contact from "../Models/Contact.js";
import express from "express";

router.post("/add", async (req, res) => {
  try {
    let data = await new Contact({ ...req.body }).save();
    res.status(201).send({data:data, message: "data has been added successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
      data: error,
    });
  }
});

router.get("/allcontact", async (req, res) => {
  try {
   Contact.find().then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
});


router.put('/:id', async(req, res) => { 

  try{

let data= await  Contact.findByIdAndUpdate({_id: req.params.id}, {$set: req.body});
      res.status(200).send({
        message: "success"})
  }catch(error){
      res.status(500).send({
          message: "Internal Server Error"
      })
  }
});

router.get("/get/:id", async(req, res) => {
  try {
   await Contact.findOne({ _id: req.params.id }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
});

router.delete("/delete/:contactID",async(req,res)=>{
    try{
await Contact.deleteOne({_id:req.params.contactID});
  
    res.status(200).send({message:`deleted id ${req.params.contactID} successfully`})
    }
    catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });  
    }
})
export default router;
