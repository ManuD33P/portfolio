import {Types,Schema, models, model} from 'mongoose';


const projectSchema = new Schema({
    title: {
        type: String,
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
        required: true
    },
    date:{
        type: Date,
        required: true
    }

});


export default models.Project || model('Project', projectSchema);