const router = require('express').Router();
//import todo model
const todoItemsModel = require('../models/todoItems');

//lets create our first route -- we will add our todo item to database
router.post('/api/item', async (req, res)=>{
    try{
        const newItem = todoItemsModel({
            item: req.body.item
        })
        //save this item in database
        const saveItem = await newItem.save()
        res.status(200).json('Item added successfully');
    }catch(err){
        res.json(err);
    }
})

//lets create second route --get data from database
router.get('/api/item', async (req, res) => {
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems);
    }catch(err){
        res.json(err);
    }
})



//lets update item
router.put('/api/item/:id', async (req, res) => {
    try{
        //find the item by it's id and update it
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Item Updated");
        res.status(200).json(updateItem);
    } catch(err) {
        res.json(err);
    }
})


//lets delete item from database
router.delete('/api/item/:id', async (req, res) => {
    try{
        //find the item by it's id and delete it
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Item Deleted");
    } catch(err) {
        res.json(err);
    }
})











//export router
module.exports = router;
