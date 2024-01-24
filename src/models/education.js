import {Types,Schema, models, model} from 'mongoose';


const educationSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    image:{
        type: String,
    }
});


export default models.Education || model('Education', educationSchema);