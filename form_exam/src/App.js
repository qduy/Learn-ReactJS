
import './App.css';
import react, {Component} from 'react';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      txtName : '',
      txtPassword : '',
      txtMess : '',
      slGender : 0,
      rdLang : 'vi',
      ckStatus: true
    }
   
  }

  
  onHandleChange  = (event)=>{
    
    var target = event.target;
    var name = target.name;  // txtName, txtPassword, txtMess
    var value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
        [name] : value
    });

  }

  onHandleSubmit = (event) => {
     // chan duong su kien submit
     event.preventDefault();
     console.log(this.state);
  }
  
  render(){
  return (
    
    <div className="container ">
      
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          
          <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                
                <form onSubmit = {this.onHandleSubmit}>
                  
                  <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" name='txtName'
                     
                    onChange = {this.onHandleChange}

                    ></input>
                  </div>


                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name='txtPassword'
                     
                    onChange = {this.onHandleChange}

                    ></input>
                  </div>
                  
                  <div className="form-group">
                    <label>Mess</label>
                    
                    <textarea name="txtMess"  className="form-control" rows="3" 
                    onChange = {this.onHandleChange}
                    ></textarea>
                    
                  </div>

                  <label>Sex</label>
                  <select name="slGender" className="form-control" 
                  value = {this.state.slGender}
                  onChange = {this.onHandleChange}
                  >
                    <option value="{0}">Female</option>
                    <option value="{1}">Male</option>

                  </select>
                  
                  <br/>
                  <label>Language</label>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="rdLang" value="en"
                      onChange = {this.onHandleChange}
                      checked = {this.state.rdLang === 'en'}
                      />
                       English
                    </label><br/>
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="rdLang" value = "vi" 
                      onChange = {this.onHandleChange}
                      checked = {this.state.rdLang === 'vi'}
                      />
                       Vietnamese
                    </label>
                  </div>
                  
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" name="ckStatus" value={true} 
                      checked = {this.state.ckStatus === true}
                      onChange = {this.onHandleChange}
                      />
                      Status
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                  <button type="reset" className="btn btn-default">Submit</button>

                </form>
                
              </div>
          </div>
          
        </div>
      </div>
      
    </div>
    
  );
  }
}

export default App;
