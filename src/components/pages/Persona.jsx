import React, { useState } from 'react';
import Home from '../layout/Home';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Persona = () => {

    const listaPersona = () => {
        navigate('/lista-persona');
      };

    const estilo = {
        background: '#f107a0'
    };
    const [formData, setFormData] = useState({
        Apellidos: '',
        Nombres: '',
        FechaNac: '',
        Estatura: '',
        Sexo: '',
        Edad: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        if (formData) {
            fetch("https://localhost:7236/api/Persona/Guardar", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            }).then((response) => response.json())
                .then(result => {
                    console.log(result)
                    if (result) {
                        Swal.fire('Registrado Ok!');
                        navigate('/persona');
                    } else {
                        Swal.fire('Error!');
                    }
                }).catch((err) => {
                    Swal.fire('Ha ocurrido un error! :' + err.message);
                });
        } else {
            Swal.fire('Existen campos vacios!');
        }
    }
    return (
        <div>
            <Home />
            <section className="container" id='rb'>
                <div className="card">
                    <div className="card-header text-white" style={estilo}>
                        <h3 className="card-title">DATOS PERSONALES</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus" />
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-md-6">
                                    <label>Apellidos:</label>
                                    <input type='text' className="form-control" value={formData.Apellidos} onChange={handleChange} name="Apellidos" id='Apellidos' required></input>
                                </div>
                                <div className="col-md-6">
                                    <label>Nombres:</label>
                                    <input type='text' className="form-control" value={formData.Nombres} onChange={handleChange} name="Nombres" id='Nombres' required></input>
                                </div>
                                <div className="col-md-6">
                                    <label>Fecha Nacimiento:</label>
                                    <input type='date' className="form-control" value={formData.FechaNac} onChange={handleChange} name="FechaNac" id='FechaNac' required></input>
                                </div>
                                <div className="col-md-6">
                                    <label>Estatura:</label>
                                    <input type='text' className="form-control" value={formData.Estatura} onChange={handleChange} name="Estatura" id='Estatura' required></input>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Sexo:</label>
                                        <div className="input-group mb-3">
                                            <select className="form-control form-select" value={formData.Sexo} onChange={handleChange} id='Sexo' name='Sexo' required>
                                                <option value="0">Seleccione...</option>
                                                <option value="1">Masculino</option>
                                                <option value="2">Femenino</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>Edad:</label>
                                    <input type='number' className="form-control" value={formData.Edad} onChange={handleChange} name="Edad" id='Edad' required></input>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                            <button data-mdb-ripple-init className="btn btn-primary" style={{ backgroundColor: '#3b5998' }} type='submit'>
                                Enviar
                            </button>&nbsp;&nbsp;
                            <button type="button" onClick={listaPersona} class="btn btn-info">Listar Personas</button>
                        </div>
                        </div>
                    </form>
                </div>
            </section >
        </div >
    )
}

export default Persona;