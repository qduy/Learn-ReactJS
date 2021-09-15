
import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'
class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      txtUsername: '',
      txtPassword: ''
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onLogin = (event) => {
    //event.preventDefault();
    console.log(this.state)
    var { txtPassword, txtUsername } = this.state
    if (txtPassword === 'admin' && txtUsername === 'admin') {
      localStorage.setItem('USER', JSON.stringify({
        user: txtUsername,
        pass: txtPassword
      }))
    }
  }
  render() {
    var { txtPassword, txtUsername } = this.state
    var loginInfo = localStorage.getItem('USER')
    if (loginInfo !== null) {
      return <Redirect to='/products' />
    }

    return (
      <div className='container'>

        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6col-lg-6">

            <form onSubmit={this.onLogin}>
              <legend>Login</legend>

              <div className="form-group">
                <label for="">UserName</label>
                <input type="text" className="form-control" name='txtUsername'
                  value={txtUsername}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label for="">PassWord</label>
                <input type="password" className="form-control" name='txtPassword'
                  value={txtPassword}
                  onChange={this.onChange}
                />
              </div>



              <button type="submit" className="btn btn-primary">Login</button>
            </form>

          </div>
        </div>

      </div>
    );
  }
}

export default Login;
