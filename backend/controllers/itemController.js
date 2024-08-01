import Item from '../models/itemModel.js'

export const getItem = async(req,res) =>{

  try{
    const items =await Item.find({})
    res.status(200).json({items})

  }
  catch(error){
res.status(500).json({message:error.message})
  }

}
export const postItem = async(req,res)=>{


  try{
    const newItem = new Item({name:req.body.name ,dateReceived:req.body.dateReceived,receivedNumber:req.body.receivedNumber,dateDispatch:req.body.dateDispatch,dispatchNumber:req.body.dispatchNumber,pendingItems:req.body.pendingItems,status:req.body.status,qrCode:req.body.qrCode})
    const savedItem =await newItem.save()
    res.status(200).json({savedItem})


  }
  catch(error){
res.status(500).json({message:error.message})
  }
}
export const updateItem = async(req,res)=>{
  const Id= req.params.id
  const updateItem = {
    title :req.body.title,
    author:req.body.author,
    description:req.body.description,
    price:req.body.price,
    coverImage:req.body.coverImage
  }
 
  try{
    const updatedItem = await Item.findByIdAndUpdate(Id,updateItem)
    if(!updatedItem){
return res.status(400).json({message:'Item not found'})
    }
    res.status(201).json({updatedItem})

  }
  catch(error){
res.status(500).json({message:error.message})
  }
}
export const deleteItem = async(req,res)=>{
  const Id=req.params.id
  try{
const deletedItem =await Item.findByIdAndDelete(Id)
if(!deletedItem){
  return res.status(400).send({message:'Item not found'})
}
res.status(200).json({message:'Item deleted succesfully'})
  }
  catch(error){
res.status(500).json({message:error.message})
  }
}


