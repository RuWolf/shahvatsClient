import React, { PureComponent } from 'react'
import store from '../../store/store'
import basicAuth from '../../auth/auth'
import GPNLogo from '../../assets/images/gpn-logo.png'

class Login extends PureComponent {
  state = {
    username: '',
    password: '',
    dataIsWrong: false,
  }

  handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    ev.persist()
    const { name, value } = ev.currentTarget
    this.setState(() => ({ [name]: value }))
  }

  handleSubmit = async (ev?: React.FormEvent<HTMLFormElement>) => {
    if (ev) ev.preventDefault()

    const data = await basicAuth(this.state)

    if (!data) return this.setState(() => ({ dataIsWrong: true }))
    this.setState(() => ({ dataIsWrong: false }))
    store.dispatch('saveUserData', data.user)
    store.dispatch('saveToken', {
      authenticated: true,
      token: data.token,
    })
  }

  render() {
    return (
      <div className="gpna-login">
        <div className="gpna-login-content">
          <div className="gpna-login-img">
            <img src={GPNLogo} alt="GPN Logo" />
          </div>
          <form className="gpna-login-form" onSubmit={this.handleSubmit}>
            <div className="gpna-login-name">
              <div className="gpna-login-title">Вход в систему</div>
              <div className="gpna-login-title">Интеллектуальные схемы</div>
            </div>
            <div className="gpna-login-input">
              <div className="gpna-login-subtitle">Имя пользователя</div>
              <input name="username" type="text" onChange={this.handleChange} className={`gpna-login-input-${this.state.dataIsWrong ? 'wrong' : 'name'}`} />
              {this.state.dataIsWrong ? <div className="gpna-login-wrong">Неверный логин или пароль</div> : ''}
            </div>
            <div className="gpna-login-input">
              <div className="gpna-login-subtitle">Пароль</div>
              <input name="password" className="gpna-login-input-pass" type="password" onChange={this.handleChange} />
            </div>
            <button className="gpna-login-button" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
