import React, { Component, createRef } from 'react';


interface Props{
}


export interface State {
    rfc: string, // Recibir de nuevo el RFC enviado por el formulario.
    password: string 
}

class Login_Form extends Component {
    // constructor(props: Props) {
    //     super(props);
    // }

    state = {
  
        rfc: undefined,
        password: undefined,
       
    }

    

    handleClick = (e: any) => {
        // Para evitar que la paágina se recargue al dar submit
        e.preventDefault();


        let data = {
            rfc: this.state.rfc,
            password: this.state.password,
        } 

        fetch("/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        
        .then(res => res.text()
            .then(textito => console.log(textito))
        )
        //.then(res => console.log(res.json()))
    }


    
    handleSubmit = (e: any) => {
        // Para evitar que la paágina se recargue al dar submit
        e.preventDefault();

    }


    handleChange = (e: any) => {
        // si cambia el input fecha
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <>
            <form className="form" onSubmit={this.handleSubmit}>
                <h3>Insertar datos</h3>
                <label >RFC:
                    <input 
                        name="rfc"
                        onChange={this.handleChange}
                        type="text"
                    />
                </label><br/>

                <label >Contraseña:
                    <input 
                        name="contraseña"
                        onChange={this.handleChange}
                        type="password"
                    />
                </label><br/>
                
                <button id = "1" type="submit" onClick={this.handleClick}>Iniciar sesión</button> <br/>
                
            </form>    
            <p>
                {JSON.stringify(this.state)}
            </p>
        </>;
    }
}

export default Login_Form;