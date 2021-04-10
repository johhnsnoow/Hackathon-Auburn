import React,{useState} from 'react';
import { GoogleLogin } from 'react-google-login'
import Dashboard from './Dashboard';
import './Login.css'
const Login = () => {
    const [token,setToken] = useState('');
    const [response,setResponse] = useState('');
  const responseGoogle = (response) => {
      console.log(response)
      setResponse(response)
      setToken(response.accessToken)
  }
    const onchange = (data) => {
        setToken(data)
        console.log("Form>", data);
    }
  if(!token)
  {
    return(
        <div className="login-wrapper">
        <GoogleLogin
        clientId="212743495313-nkaug08hibils2oinv9pg8n48rue1tv9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      </div>
      )
  }
  return (
    <Dashboard response={response} setToken={setToken} onchange={(e) => { onchange(e) }}/>
  )
}


  export default Login;