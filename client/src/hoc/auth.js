import React from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action'
export default function (SpectificComponent, option, adminRoute = null) {

    function AuthenticationCheck(props) {
    
        const dispatch = useDispatch();
        useEffect(() => {
        dispatch(auth())
        Axios.get('/api/users/auth')
    }, [])
}
    
    Return AuthenticationCheck
}
