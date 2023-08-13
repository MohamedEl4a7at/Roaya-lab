const express               = require('express'),
      router                = express.Router(),
      user                  = require('../controllers/user'),
      auth                  = require('../middlewares/auth')

///////////////////////////////////////////////// sign up
     router.post('/signUp',user.addUser);
/////////////////////////////////////////////// login
     router.post('/login',user.login);
////////////////////////////////////////////// update profile
    //  router.put('/updateProfile',auth,upload.single('image'),user.update)
module.exports = router;
