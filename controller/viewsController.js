const homePage = async (req,res) => {
    res.render('index')
}
const About = async (req,res) => {
    res.render('about')
}
const Contact = async (req,res) => {
    res.render('contact')
}
const Login = async (req,res) => {
    res.render('login')
}
const Game = async (req,res) => {
    res.render('games')
}
const Payment = async (req,res) => {
    res.render('payment')
}
const Pay = async (req,res) => {
<<<<<<< HEAD
    res.render('Pay')
}
const Sign = async (req,res) => {
    res.render('sign')
=======
    res.render('pay')
}
const Signup = async (req,res) => {
    res.render('signup')
>>>>>>> 704d515fe72c7cd333c0384d72e0b4a112b9ab0f
}

const ForgetPassword = async(req,res) => {
    res.render('forgetpassword')
}
const  ResetPassword = async(req, res) =>{
    res.render('resetpassword')
}

const error = async (req,res) =>{
    res.render('error')
}
const PasswordSent = async (req,res) =>{
    res.render('passwordsent')
}

const Successful = async (req,res) =>{
    res.render('successful')
}

module.exports = {
    homePage,
    Signup,
    Payment,
    Pay,
    Game,
    Login,
    About,
    Contact,
    ForgetPassword,
    ResetPassword,
    PasswordSent,
    Successful,
    error,
}