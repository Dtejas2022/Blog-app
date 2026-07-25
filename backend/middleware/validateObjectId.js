const mongoose = require('mongoose');

const {objId} = req.query;

if(objId === mongoose.Types.ObjectId.isValid()){
        res.status(200).json({message:'id is valid'});
        next();
}
else{
    return res.status(500).json({message:'id is notvalid'});
}