const express = require("express");

//route direct the client request to the respective endpoints
const router = express.Router();
//We are again importing the following model which will help us to create table in the database
const books = require("./Models/Books");
//instead of using normal way with anonymous function we can use Async which will not lock any object during our transactions

router.get("/", async(req,res)=> {
    try {
        
        const booksInformation = await  books.find();
        res.json(booksInformation);
        
    } catch (err) {
        res.send("Something went wrong with the get request.. " + err);
    }

});

router.post("/", async(req,res)=> {
    const booksInformation = await new books({
        name: req.body.name,
        img: req.body.img,
        summary: req.body.summary
    });

    try {
        const recordSaved = booksInformation.save();
        res.json(recordSaved);

    } catch (err) {
        res.send("Something went wrong with the post request.. " + err);
    }
});


router.patch("/:id", async(req,res)=> {
    try {
        const booksInformation = await  books.findById(req.params.id);
        booksInformation.name= req.body.name,
        booksInformation.img= req.body.img,
        booksInformation.summary=req.body.summary;
        const recordSaved = await booksInformation.save();
        res.json(recordSaved);
        
    } catch (err) {
        res.send("Something went wrong with the get request.. " + err);
    }

});

//Delete by ID Method
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const booksInformation = await books.findByIdAndDelete(id);
        res.json(booksInformation);
    }
    catch (err) {
        res.send("Something went wrong with the get request.. " + err);
    }
});

//The below command for importing th    e router which help in redirect client request and in case of following error
//TypeError: Router.use() requires a middleware function but got a Object
module.exports = router;