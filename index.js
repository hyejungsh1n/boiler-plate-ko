const express = require('express')
//express 모듈을 가져온다.
const app = express()
// 이것의 함수를 이용하여 새로운 앱을 만든다.
const port = 5000
// 5000번을 포트로 둔다
const bodyParser = require('body-parser');
const config = require('./config/key');

const { User } = require("./models/User"); // 모델 가져오기

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Connect...')).catch(err => console.log(err))


//appliaction/x-www-form-urlencoded
//bodyparser가 클라이언트에서 가져오는 걸 분석해서
app.use(bodyParser.urlencoded({extended: true}));

//aplication/json 제이슨타입으로 분석해서 가져올 수 있게.
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello World! 안녕하세요ㅋㅋ'))
// 루트 디렉토리에 헬로월드 출력!

// 회원가입을 위한 라우트
app.post('/register', (req, res) => {
    //회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.

    //Line 9 가져온 모델로 인스턴스 생성 제이슨형식으로가져와짐
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    }) // 

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//지정한 port로 이 앱을 실행한다.

