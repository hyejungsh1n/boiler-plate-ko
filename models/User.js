const mongoose = require('mongoose'); // 몽구스 모듈 가져오기

// 스키마 생성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    }, 
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength : 5
    },
    lastname : {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    }, 
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})
// 스키마를 모델로 감싸준다.
const User = mongoose.model('User', userSchema)
// 다른 곳에서도 사용할 수 있게 
module.exports = { User }
//trim으로 공백까지 없애주는 게 너무 신기하다.. 
// token을 통해 유효성검사, 그리고 tokenExp 토큰만료기간까지
// 스키마 작성할 때 굳이 오브젝트가 아니어도 됨 image쪽 참고.
