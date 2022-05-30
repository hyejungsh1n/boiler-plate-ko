// 1. 리액트 import
import React from "react"
// scss 파일 가져다가 쓰기
import "./PhoneList.scss"


// 2. 컴포넌트 만들기
const PhoneList = () => {
    return (
        <div className="phone_list">
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">홍길동</div>
            <div className="phone_item_phone">010-0000-0000</div>
          </div>
          <div className="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">홍길동</div>
            <div className="phone_item_phone">010-0000-0000</div>
          </div>
          <div className="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">홍길동</div>
            <div className="phone_item_phone">010-0000-0000</div>
          </div>
          <div className="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
      </div>
    );
}

// 3. 컴포넌트를 외부에서 사용할 수 있도록 지정
export default PhoneList;