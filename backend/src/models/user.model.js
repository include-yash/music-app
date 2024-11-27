import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    
    accountSID: {
        type: String,
        required: true
    },

    authToken: {
        type: String,
        required: true
    },

    myTwilioPhoneNumber: {
        type: String,
        required: true
    },

    emergencyNumber: {
        type: String,
        required: true
    },
    
}, {timestamps: true});

export const User = mongoose.model('User', UserSchema);

