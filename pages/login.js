import { useState } from 'react'
import useUser from '../lib/useUser'
import LayoutLogin from '../components/layoutLogin'
import Form from '../components/Form'

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/profile-sg',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const body = {
      username: e.currentTarget.username.value,
    }
  }

  return (
    <LayoutLogin>
      <div className="container">
        <div className="login">
          <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
        </div>
      </div>

    </LayoutLogin>
  )
}

export default Login
