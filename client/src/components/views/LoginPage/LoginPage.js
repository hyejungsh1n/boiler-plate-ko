import { Axios } from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // initialState는 처음에 어떻게 되었냐. 빈칸.
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 페이지가 리프레쉬 되지 않게.

    console.log('Email', Email)
    console.log('Password', Password)

    let body = {
      email: Email,
      password: Password
    }
    //action
    dispatch(loginUser(body))
      .then(response => {
        if(response.payload.loginSuccess) {
          navigate('/') 
        } else {
          alert('Error')
        }
      })
  }

  //state를 value로 넣어줌(input type의 value참고)

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems:'center',
      width: '100%', height: '100vh'
    }}>


    <form style={{ display:'flex', flexDirection:'column' }}
      onSubmit={onSubmitHandler}
    >
      <label>Email</label>
      <input type="email" value={Email} onChange={onEmailHandler} />
      <label>Password</label>
      <input type="password" value={Password} onChange={onPasswordHandler} />

      <br />
      <button>
        Login
      </button>
    </form>
    </div>
  )
}

export default LoginPage