const mongoose = require('mongoose');
const {Schema} = mongoose;


const taskSchema = new Schema({
    title: { type : String, required: true, unique: true},
    description: { type : String, required: true},
    due_date: { type: Date },
    status: { type : String, default:'pending' },
    userId: {type:String}
})

const virtual  = taskSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
taskSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) { delete ret._id}
})


exports.Tasks = mongoose.model('Tasks',taskSchema)