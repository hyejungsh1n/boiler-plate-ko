const express = require('express')
//express 모듈을 가져온다.
const app = express()
// 이것의 함수를 이용하여 새로운 앱을 만든다.
const port = 5000
// 5000번을 포트로 둔다

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shin:youngtan2@boilerplate.mpbcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connect...')).catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))
// 루트 디렉토리에 헬로월드 출력!

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//지정한 port로 이 앱을 실행한다.
