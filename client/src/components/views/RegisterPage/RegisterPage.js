import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action'
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  // initialState는 처음에 어떻게 되었냐. 빈칸.
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Name, setName] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 페이지가 리프레쉬 되지 않게.

    if(Password !== ConfirmPassword) {
      return alert("비밀번호를 확인해주세요")
    }

    console.log('Email', Email)
    console.log('Name', Name)
    console.log('Password', Password)
    console.log('Confirm', ConfirmPassword)
  

    let body = {
      email: Email,
      name: Name,
      password: Password
      
    }
    //action
    dispatch(registerUser(body))
      .then(response => {
        if(response.payload.success) {
          navigate('/login') 
          alert('축하합니다!')
        } else {
          alert("가입 실패")
        }
      })

    }
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
      <label>Name</label>
      <input type="name" value={Name} onChange={onNameHandler} />
      <label>Password</label>
      <input type="password" value={Password} onChange={onPasswordHandler} />
      <label>Confirm Password</label>
      <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
      <br />
      <button>
        회원가입
      </button>
    </form>
    </div>
  )
}

export default RegisterPage