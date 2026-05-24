import AuthForm from '../Auth/AuthForm'

const SignIn = ({setIsAuth}) => {
  return <AuthForm IsSignUp={false} setIsAuth={setIsAuth}/>
}

export default SignIn
