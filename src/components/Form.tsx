import React, { Component, createRef } from 'react';


interface Props{
}


export interface State {
    message: string, // Para guardar el mensaje del response.
    rfc: string, // Recibir de nuevo el RFC enviado por el formulario.
    fecha: string,
    modificador: number 
}

class Form extends Component {
    // constructor(props: Props) {
    //     super(props);
    // }

    state = {
        message: undefined,
        rfc: undefined,
        fecha: undefined,
        modificador: undefined
    }

    setEndpoint = (id: string) => {
        switch(id){
            case "1": return "/add/rfc";
            case "2": return "/remove/rfc";
            default: return "";
        }
    }

    handleClick = (e: any) => {
        // Para evitar que la paágina se recargue al dar submit
        e.preventDefault();

        let endpoint: string = this.setEndpoint(e.target.id);
        console.log(endpoint);

        let data = {
            rfc: this.state.rfc,
            fecha: this.state.fecha,
            modificador: this.state.modificador
        } 

        fetch(endpoint,
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

                <label >Fecha:
                    <input 
                        name="fecha"
                        onChange={this.handleChange}
                        type="date"
                    />
                </label><br/>

                <label >Modificador:
                    <input
                        name="modificador"
                        onChange={this.handleChange}
                        type="number"
                    />
                </label><br/>
                
                <button id = "1" type="submit" onClick={this.handleClick}>Agregar</button> <br/>
                <button id = "2" type="submit" onClick={this.handleClick}>Borrar</button>
            </form>    
            <p>
                {JSON.stringify(this.state)}
            </p>
        </>;
    }
}

export default Form;