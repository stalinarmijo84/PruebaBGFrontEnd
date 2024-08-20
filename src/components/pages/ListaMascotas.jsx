import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../layout/Home';

const ListaMascotas = () => {
    const API_MASCOTA = "https://localhost:7236/api/Mascota";

    const [mcst, setMascota] = useState([]);

    const getMascota = async () => {
        await axios.get(API_MASCOTA)
            .then(response => {
                setMascota(response.data)
            }).catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        getMascota();
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
                            <h3 class="card-title">LISTA MASCOTAS</h3>
                        </div>
                        <div class="card-body">
                            <table id="example" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Especie</th>
                                        <th>Raza</th>
                                        <th>Color</th>
                                        <th>Nombre</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mcst.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.especie}</td>
                                            <td>{item.raza}</td>
                                            <td>{item.color}</td>
                                            <td>{item.nombre}</td>
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
export default ListaMascotas;