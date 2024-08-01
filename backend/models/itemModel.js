import mongoose from "mongoose"
const itemSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  dateReceived: { 
    type: Date,
     required: true
     },
     
   receivedNumber: {
    type: Number,
    required: true
  },
  dateDispatch: {
    type: Date,
    required: true
  },
  dispatchNumber: {
    type: Number,
    required: true
  },
  pendingItems: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  qrCode: {
    type: String,
    required: false
  }
})
const Item = mongoose.model("Item",itemSchema)
export default Item