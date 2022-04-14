const express = require('express') 

const app = express()
const port = 3000

//views
app.engine('pug', require('pug').__express)

app.set('view engine', 'pug');
app.set('views','./views');


//uses
app.use('/utils', express.static('utils'))
app.use('/css', express.static('css'))

app.get('/', (req, res) => {
    res.render(`index.pug`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})