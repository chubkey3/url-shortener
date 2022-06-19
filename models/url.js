import {Schema, model, models} from 'mongoose';

const UrlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    target: {
        type: String,
        required: true
    }
})

export default models.Urls || model('Urls', UrlSchema)