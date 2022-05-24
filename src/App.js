import React, { Component } from 'react';
class App extends React.Component {
constructor(props) {
  
super(props);
this.state = {
  nom: '',
  prenom: '',
  email: '',
age:''
};
this.onChange = this.onChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.reset=this.reset.bind(this);
}
onChange = e => { // arrow function
  this.setState({ [e.target.name]: e.target.value });
  };
handleSubmit(event) {
  let age=this.state.age; // let pour variable local var pour globale
  if(age<18)
  {
    alert("vous n'êtes pas autorisé d'accéder");
  }
  else if(age>110)
  alert("donnez un age logique!");
  else
alert('bienvenu ' + this.state.nom+' '+this.state.prenom+' ');
event.preventDefault();
}
reset()
{
  this.setState({
    nom: '',
  prenom: '',
  email: '',
age:''

  })


}
render() {
  return (
    <div className="container">
  <div className="row">
    <div className="col">
      
    </div>
    <div className="col">
    <form onSubmit={this.handleSubmit} method="post">
  <h1 className="text-center">Formulaire d'inscription</h1>
  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Nom</label>
  <input type="text" name="nom" value={this.state.nom} onChange={this.onChange} className="form-control"  placeholder="Votre nom ici" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Prenom</label>
  <input type="text" name="prenom" value={this.state.prenom} onChange={this.onChange} className="form-control"  placeholder="Votre prenom ici" />
  
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control"  placeholder="Votre email ici" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Age</label>
  <input type="number" min="1" name="age" value={this.state.age} onChange={this.onChange} className="form-control"  placeholder="Votre age ici" />
</div>
<div className="mb-3 text-center">
<input type="submit" className="btn btn-primary" value="Submit" />&nbsp;&nbsp;
<input type="reset" onClick={this.reset} className="btn btn-warning" value="vider" />

</div>
  
  </form>
    </div>
    <div className="col">
      
    </div>
  </div>
</div>
  
  );
  }
  }
  export default App;