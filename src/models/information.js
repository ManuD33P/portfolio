import {Types,Schema, models, model} from 'mongoose';

const infomatinoSchema = new Schema({
    about: {
        type: String,
        required: true
    },
    date:{
        lastname :{
            type: String,
            required: true
        },
        firstname :{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        linkenid:{
            type: String,
            required: true
        },
        github:{
            type: String,
            required: true
        },
    },
    skills:{
        type: Array,
        required: true
    },
    projects:{
        type: [{type:Types.ObjectId, ref: 'Project'}]
    },
    Education:{
        type: [{type:Types.ObjectId, ref: 'Education'}]
    },
    
});



export default models.Information || model('Information', infomatinoSchema);