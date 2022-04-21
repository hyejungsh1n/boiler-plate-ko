if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
/* 환경 변수가 배포 환경일 때는
prod.js 파일을 실행하게 하고
아니면 개발환경(로컬)로 해서 dev.js가져오게 */