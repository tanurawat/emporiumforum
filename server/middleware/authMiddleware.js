//we have code for every protected api which means user who are authenticated can only use our application
const jwt = require("jsonwebtoken");
module.exports = (req, res, next)=>{
    try {
    //get token from header
    const token = req.header("authorization").split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = decryptedToken.userId;
    next();
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
}
