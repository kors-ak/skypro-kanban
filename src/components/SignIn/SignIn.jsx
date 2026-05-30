import AuthForm from '../Auth/AuthForm'

const SignIn = ({ setUser }) => {
  return <AuthForm IsSignUp={false} setUser={setUser} />
}

export default SignIn
