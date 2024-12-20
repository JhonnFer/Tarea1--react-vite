import React, { useState } from 'react';
import '../style/form.css'; // Importa el archivo CSS

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');
  const [numeroCredito, setNumeroCredito] = useState('');
  const [docente, setDocente] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje(
      `¡Gracias, ${nombre}!\nTus datos han sido registrados.\nMateria: ${materia}\nFecha: ${fecha}\nNúmero de Crédito: ${numeroCredito}\nDocente: ${docente}`
    );
  };

  return (
    <div className="form-container">
      <h2>Registro de Estudiante</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
          />
        </label>
        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
            required
          />
        </label>
        <label>
          Carrera:
          <input
            type="text"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            placeholder="Ingresa tu carrera"
            required
          />
        </label>
        <label>
          Materia:
          <input
            type="text"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            placeholder="Ingresa la materia"
            required
          />
        </label>
        <label>
          Fecha de inscripción:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </label>
        <label>
          Número de Crédito:
          <input
            type="number"
            value={numeroCredito}
            onChange={(e) => setNumeroCredito(e.target.value)}
            placeholder="Ingresa el número de crédito"
            required
          />
        </label>
        <label>
          Docente:
          <input
            type="text"
            value={docente}
            onChange={(e) => setDocente(e.target.value)}
            placeholder="Ingresa el nombre del docente"
            required
          />
        </label>
        <button type="submit">Registrar</button>
      </form>

      {mensaje && <div className="confirmation-message">{mensaje}</div>}
    </div>
  );
};

export default Formulario;
