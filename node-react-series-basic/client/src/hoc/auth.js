import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action'
import { useNavigate } from 'react-router-dom';
export default function (SpectificComponent, option, adminRoute = null) {

    function AuthenticationCheck(props) {
    
        let navigate = useNavigate();
        const dispatch = useDispatch();
        useEffect(() => {
        dispatch(auth()).then(response => {
            console.log(response)

            // 로그인 하지 않은 상태
            if(!response.payload.isAuth) {
                if(option) {
                    navigate('/login')
                }
            } else {
                // 로그인 한 상태
                if(adminRoute && !response.payload.isAdmin) {
                    navigate('/')   
                } else{
                    if(option === false) {
                        navigate('/')
                    }
                }
            }
        })
        Axios.get('/api/users/auth')
    }, [])
    return (
        <SpectificComponent />
    )
}
    
    return AuthenticationCheck
}
