import React, { Component } from 'react';

import Form from './components/Form';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home'
import Header from './components/Header'
import AddRemove from './components/AddRemove'
import Protected from './components/Protected'
import Login_Form from './components/Login';


interface Props{
}

class App extends Component {

    state = {
        message: undefined,
        rfc: undefined,
        fecha: undefined,
        modificador: undefined
    }

    constructor(props: Props) {
        super(props);
    }

    // getMessage = () => {
    //     fetch("/add/rfc")
    //     .then(response => 
    //         response.text()
    //         .then(textito =>
    //             this.setState({
    //                 message: textito
    //             })
    //         )
    //     )
    // }



    render() {
        return <>
        
            <Header/>

            {/* <div className="fixed">
                <div className="cheems_container">
                    <img src={img} className="image" alt=""/>
                </div>
            </div> */}
            
            
            <h1 className="title">Consulta RFCs</h1>
            <Router>
                
                <Route exact path= "/" component={Home}/> 
                <Route path= "/api/addremove" component={AddRemove}/>
                <Route path= "/api/protected" component={Protected}/>
                <Route path= "/api/login" component={Login_Form}/>
                
            </Router>

            {/* <button onClick={this.getMessage}>Get Message</button> */}
            <div>{this.state.message}</div>
            {/* <Form/> */}
        </>;
    }
}

export default App;

