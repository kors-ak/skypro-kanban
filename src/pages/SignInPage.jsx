import AuthForm from '../components/Auth/AuthForm.jsx'

function SignInPage({setUser}) {
  return <AuthForm IsSignUp={false} setUser={setUser} />
}

export default SignInPage
