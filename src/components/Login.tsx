import React, { Component } from 'react';

interface Props {

}

interface State {
    message: String,
    passwd: String,
    rfc: String
}

 

class Login extends Component {
    // constructor(props:Props) {
    //     super(props);
    //     this.state = {  };
    // }

    state = {
        message: undefined,
        rfc: undefined,
        password: undefined
        
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
                }, rejected => {
                    console.log(rejected)
                }) 
            } else {
                alert(`Vales verga ${res.status}`)
            }
        } , rejected => {
            console.log(rejected)
        });
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

    render() {
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

            <button type = "submit" onClick={this.handleClick}>Get message</button><br/>

            <p>
                {JSON.stringify(this.state)}
            </p>

            </>
            
        );
    }
}

export default Login;