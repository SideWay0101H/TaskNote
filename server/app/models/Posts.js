const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title : {
        type :String,
        required : true,
    },
    description : {
        type : String,
    },
    status : {
        type : String,
        enum : ["Small","Medium","Large"]
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'Users'
    }

},
{
    timestamps : true
})

module.exports = mongoose.model("Posts", PostSchema);