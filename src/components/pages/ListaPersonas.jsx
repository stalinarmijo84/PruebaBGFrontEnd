import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../layout/Home';

const ListaPersonas = () => {
    const API_PERSONA = "https://localhost:7236/api/Persona";

    const [prs, setPersona] = useState([]);

    const getPersona = async () => {
        await axios.get(API_PERSONA)
            .then(response => {
                setPersona(response.data)
            }).catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        getPersona();
    }, [])

    const estilo = {
        background: '#f107a0'
    };
    const modificarRegistro = (id)=>{
        alert(id+ " MODIFICAR EN CONSTRUCCION")
    }
    const eliminarRegistro = (id)=>{
        alert(id+ " ELIMINAR EN CONSTRUCCION")
    }
    return (
        <div>
            <Home />
            <section className="container">
                    <div class="card">
                        <div className="card-header text-white" style={estilo}>
                            <h3 class="card-title">LISTA PERSONAS</h3>
                        </div>
                        <div class="card-body">
                            <table id="example" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Apellidos</th>
                                        <th>Nombres</th>
                                        <th>Fecha Nacimiento</th>
                                        <th>Estatura</th>
                                        <th>Sexo</th>
                                        <th>Edad</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {prs.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.apellidos}</td>
                                            <td>{item.nombres}</td>
                                            <td>{item.fechaNac}</td>
                                            <td>{item.estatura}</td>
                                            <td>{item.sexo}</td>
                                            <td>{item.edad}</td>
                                            <td>
                                            <button type="button" class="btn btn-warning" onClick={()=>modificarRegistro(item.id)}>Modificar</button>&nbsp;&nbsp;
                                            <button type="button" class="btn btn-danger" onClick={()=>eliminarRegistro(item.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
       
    )
}
export default ListaPersonas;