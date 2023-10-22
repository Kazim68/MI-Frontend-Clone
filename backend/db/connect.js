const mongoose = require('mongoose');

export const connect = async (url) => {
    return mongoose.connect(url);
}