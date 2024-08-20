import React, { useState } from 'react';
import Home from '../layout/Home';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Mascota = () => {

    const listaMascota = () => {
        navigate('/lista-mascota');
      };

    const estilo = {
        background: '#f107a0'
    };
    const [formData, setFormData] = useState({
        Especie: '',
        Raza: '',
        Color: '',
        Nombre: ''
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
            fetch("https://localhost:7236/api/Mascota/Guardar", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            }).then((response) => response.json())
                .then(result => {
                    console.log(result)
                    if (result) {
                        Swal.fire('Registrado Ok!');
                        navigate('/mascota');
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
            <section className="container">
                <div className="card">
                    <div className="card-header text-white" style={estilo}>
                        <h3 className="card-title">DATOS MASCOTA</h3>
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
                                    <label>Especie:</label>
                                    <input type='text' className="form-control" value={formData.Especie} onChange={handleChange} name="Especie" id='Especie' required></input>
                                </div>
                                <div className="col-md-6">
                                    <label>Raza:</label>
                                    <input type='text' className="form-control" value={formData.Raza} onChange={handleChange} name="Raza" id='Raza' required></input>
                                </div>
                                <div className="col-md-6">
                                    <label>Color:</label>
                                    <input type='text' className="form-control" value={formData.Color} onChange={handleChange} name="Color" id='Color' required></input>
                                </div>
                                <div className="col-md-6">
                                    <label>Nombre:</label>
                                    <input type='text' className="form-control" value={formData.Nombre} onChange={handleChange} name="Nombre" id='Nombre' required></input>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <br />
                                <button data-mdb-ripple-init className="btn btn-primary" style={{ backgroundColor: '#3b5998' }} type='submit'>
                                    Enviar
                                </button>&nbsp;&nbsp;
                                <button type="button" onClick={listaMascota} class="btn btn-info">Listar Mascotas</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section >
        </div >
    )
}
export default Mascota;
