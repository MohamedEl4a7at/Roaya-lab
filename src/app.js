const express                 = require('express'),
      app                     = express(),
      port                    = process.env.PORT
      cors                    = require('cors'),
      userRouter              = require('./routers/user')



require('dotenv').config()
require('./config/mongoose')
app.use(express.json(),cors(),userRouter)

app.listen(port,()=>console.log('Server is running'))