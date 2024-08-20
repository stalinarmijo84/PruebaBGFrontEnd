import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const btnPersona = () => {
    navigate('/persona');
  };
  const btnMascota = () => {
    navigate('/mascota');
  };
  const estilo = {
    background: '#f107a0'
};
  return (
    <div>
      <br />
      <div className='container'>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="text-center">
                <button type="button" onClick={btnPersona} class="btn btn-primary" style={estilo}>Persona</button>&nbsp;&nbsp;
                <button type="button" onClick={btnMascota} class="btn btn-primary" style={estilo}>Mascota</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
