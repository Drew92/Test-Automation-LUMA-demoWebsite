module.exports = [
    {
        email:'bad@mail',
        errorMessage:'Please enter a valid email address (Ex: johndoe@domain.com).'
    },
    {
        email:' ',
        errorMessage:'This is a required field'
    },
    {
        email:'correctFormat@gmail.com',
        errorMessage:null
    }
];