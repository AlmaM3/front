import React, { Component, useState} from 'react';
// import Menu from '../components/Menu'
// import { withRouter, useHistory} from 'react-router-dom';
// //import {Router} from 'react-router';


interface Props {
 history: any
}

interface State {
    message: String,
    passwd: String,
    rfc: String,
    code: Number,
    history: any
}

 

class Login extends Component <Props> {
    constructor(props:Props) {
        super(props);
        //this.history2 = 3;
        
    }

    state = {
        message: undefined,
        rfc: undefined,
        password: undefined, 
        // code: 200}
        // title: undefined,
        // history: useHistory()
    }


      handleClick = (e: any) => {
        // Para evitar que la paágina se recargue al dar submit
        e.preventDefault();

        let data = {
            rfc: this.state.rfc,
            password: this.state.password
        }

  
        fetch("/login",
        {
            method: "POST",
            headers: {
                 "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        
        .then(res => {
            if (res.status === 200) {
                res.text().then(textito => {
                    this.setState({
                        message: textito
                    })
                    this.redirectToMenu();
                }, rejected => {
                    console.log(rejected)
                }) 
            } else {
                this.redirectToHome()

                alert(`Falló inicio de sesión. Verifique usuario o contraseña `)  // ${res.status}
            }
        } , rejected => {
            console.log(rejected)
        });
    }

           
    redirectToHome = () => {
      // const [title, updateTitle] = useState(null);
       const {history} = this.props;
       // this.props.updateTitle('Home');
        history.push('/');
    // //     this.setState({
    // //         title: "Home"
    // //     })
    }

    redirectToMenu = () => {
        const {history} = this.props;
        history.push('/api/menu');
    }
            
            
            // res.text()
            // .then(textito => console.log(textito))
        // )
        //.then(res => console.log(res.json()))
//}

    handleChange = (e: any) => {
         this.setState({
            [e.target.name]: e.target.value
        })
    }

    // prueba = () => {
    //     const {history} = this.props;
    //     console.log(this.props)
    //     console.log(history)
    // }

    render() {

        
// history = useHistory();


        return (
            
            <>
            
                        <label >RFC:
                            <input
                                    name="rfc"
                                    onChange={this.handleChange}
                                    type="text"
                            />
                        </label><br/>

                        <label >Contraseña:
                            <input
                                    name="password"
                                    onChange={this.handleChange}
                                    type="password"
                            />
                        </label><br/>

                        <button type = "submit" onClick={this.handleClick}>Iniciar sesión</button><br/>

                        {/* <button type = "submit" onClick={this.redirectToHome}>Props</button><br/> */}


                        <p>
                            {JSON.stringify(this.state)}
                        </p>
             </>
                      
        );
    }
}

export default Login;