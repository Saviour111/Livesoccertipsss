const express = require("express")
 const  {
    homePage,
    Signup,
    Payment,
    Game,
    Login,
    About,
    Contact, 
    ForgetPassword,
    ResetPassword,
    PasswordSent,
    Successful,
    error,
    
} = require("../controller/viewsController")
const viewRouter = express.Router()

viewRouter.get("/", homePage)
viewRouter.get("/signup", Signup)
viewRouter.get("/payment", Payment)
viewRouter.get("/games", Game) 
viewRouter.get("/login", Login)
viewRouter.get("/about", About) 
viewRouter.get("/contact", Contact) 
viewRouter.get("/forgetpassword", ForgetPassword)
viewRouter.get("/resetpassword", ResetPassword)
viewRouter.get("/passwordsent", PasswordSent)
viewRouter.get('/successuful', Successful)
viewRouter.get("/error", error )



module.exports = viewRouter