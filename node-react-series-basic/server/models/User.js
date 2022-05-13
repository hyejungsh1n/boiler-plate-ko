const mongoose = require('mongoose'); // 몽구스 모듈 가져오기
const bcrypt = require('bcrypt');
// 솔트 생성하고 
const saltRounds = 10;
const jwt = require('jsonwebtoken');

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

userSchema.pre('save', function(next) {
    let user = this;
    // Password encryption
    if(user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
         if(err) return next(err);
            user.password = hash;
            next();
            });
        });
        } else {
            next();
        }
    });

    userSchema.methods.comparePassword = function(plainPassword, cb) {
        // plainPassword 1234567와 암호화된 비밀번호(db에 플레인이 암호화된 거) 비교
        bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
            if(err) return cb(err);
            cb(null, isMatch);
        })
    }

    userSchema.methods.generateToken = function(cb) {

        var user = this;
        //json 웹토큰을 사용하여 웹토큰 생성하기
        var token = jwt.sign(user._id.toHexString(), 'secretToken')

        user.token = token
        user.save(function(err, user) {
            if(err) return cb(err)
            cb(null, user)
        })
    }

    userSchema.statics.findByToken = function (token, cb) {
        var user = this;

      //  user._id + '' = token
        // 토큰을 decode한다.
    
        jwt.verify(token, 'secretToken', function(err, decoded) {
            // 유저아이디를 이용해서 유저를 찾은 다음에
            // 클라에서 가져온 ㅗ크노가 디비에서 보관된 토큰이 일치하는지 화인

            user.findOne({"_id" : decoded, "token": token}, function(err, user) {
                if(err) return cb(err);
                cb(null, user);
            })
        })

    }


// 스키마를 모델로 감싸준다.
const User = mongoose.model('User', userSchema)
// 다른 곳에서도 사용할 수 있게 
module.exports = { User }
//trim으로 공백까지 없애주는 게 너무 신기하다.. 
// token을 통해 유효성검사, 그리고 tokenExp 토큰만료기간까지
// 스키마 작성할 때 굳이 오브젝트가 아니어도 됨 image쪽 참고.
