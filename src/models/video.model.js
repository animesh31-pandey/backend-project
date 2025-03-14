import mongoose , {schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoschema = new schema(
    {
        videofile:{
            type: String,//cloudnary url
            required: true,
        },
        thumbnail:{
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        duration:{
            type: Number,
            required: true,
        },
        views:{
            type: Number,
            default: 0,
        },
        ispublished:{
            type: Boolean,
            default: true,
        },
        owner:{
            type: schema.types.ObjectId,
            ref: "user"
        },
        
    },
    {
        timestamps: true,
    },
)

videoschema.plugin(mongooseAggregatePaginate);

export const video = mongoose.model('video' , videoschema)