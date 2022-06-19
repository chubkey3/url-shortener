import {Schema, model, models} from 'mongoose';

interface Url {
    url: String,
    target: String
}

const UrlSchema = new Schema<Url>({
    url: {
        type: String,
        required: true
    },
    target: {
        type: String,
        required: true
    }
})

export default models.Urls || model<Url>('Urls', UrlSchema)