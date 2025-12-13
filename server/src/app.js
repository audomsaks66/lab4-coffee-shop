let express = require('express')
let bodyParser = require('body-parser') // เพิ่มบรรทัดนี้

const app = express()

// เพิ่ม 2 บรรทัดนี้เพื่อใช้งาน body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/status', function (req, res) {
    res.send('staff in coffee shop')
})

app.get('/hello/:person', function (req, res) {
    console.log('hello - ' + req.params.person)
    res.send('say hello with ' + req.params.person)
})

// get staff by id
app.get('/staff/:staffId', function (req, res) {
    res.send('ดูข้อมูลพนักงาน: ' + req.params.staffId)
})

// get all staff
app.get('/staff', function (req, res) {
    res.send('เรียกข้อมูล พนักงานทั้งหมด')
})
// create staff
app.post('/staff/', function (req, res) {
    res.send('ทำการสร้างข้อมูลพนักงาน: ' + JSON.stringify(req.body))
})

// edit staff
app.put('/staff/:staffId', function (req, res) {
    res.send('ทำการแก้ไขข้อมูลพนักงาน: ' + req.params.staffId + ' : ' + JSON.stringify(req.body))
})

// delete staff
app.delete('/staff/:staffId', function (req, res) {
    res.send('ทำการลบข้อมูลพนักงาน: ' + req.params.staffId + ' : ' + JSON.stringify(req.body))
})

let port = 8081
app.listen(port, function () {
    console.log('server running on ' + port)
})