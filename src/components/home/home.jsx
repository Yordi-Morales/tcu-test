import React from 'react';
import './homestyle.css'; // Importar el archivo CSS externo

const Home = () => {
  return (
    <div class="main-home">
      <div className='home-title'>
        <h3>Bienvenidos al sitio oficial del TCU UTN San Carlos Educacion Financiera</h3>
      </div>
      <div className='upper-image'>
      </div>

      <img
        className="imagen"
        src="/utnsc.jpg"
        alt="UTN Logo"
        style={{ height: '8vw', width: '40vw', margin: 'auto', display: 'block'}}
      />

      <div className='bottom-data'>
        <div className='description'>
          <h2>Acerca del TCU</h2>
          <p>Este proyecto aborda la solución de necesidades sobre comprensión y aplicación de
            conceptos básicos de las finanzas personales y la administración del dinero, así como
            temas de endeudamiento y ahorro, tanto para los estudiantes como para los socios
            comunitarios que puedan mejorar su planificación financiera a nivel personal y a nivel
            empresarial.</p>
          <p>
            Por medio de procesos como planeamiento, organización, capacitación, ejecución y
            evaluación basados en la norma ISO- 22222 se construye la estrategia para la
            formación financiera y adecuada utilización de los instrumentos financieros.
          </p>
          <p> El estudiante capacitado podrá ser un agente de cambio en manejo de las finanzas
            en otras personas jóvenes, organizaciones de mujeres, pequeños empresarios,
            organizaciones comunales y colaboradores de instituciones públicas con
            endeudamiento en la región, mediante la sensibilización y capacitación directa.
          </p>
        </div>
        <div className='objetives'>
          <div className='general-objetive'>
            <h3>Objetivo General</h3>
            <p>Propiciar el desarrollo, aplicación y efecto multiplicador de conocimientos en
              educación financiera en personas y empresas de la Región Huetar Norte para el uso
              eficiente y responsable de las finanzas, que favorezca el mejoramiento de su calidad
              de vida.
            </p>
          </div>
          <div className='specific-objetive'>
            <h3>Objetivos Especificos</h3>
            <p> 1. Fomentar mediante actividades de sensibilización una cultura de educación
              financiera en la población residente de los cantones de la región Huetar Norte
              del país.
              </p>
             <p>  2. Fortalecer la aplicación de conocimientos en gestión financiera de las personas
              residentes de los cantones de la región Huetar Norte del país mediante
              capacitaciones y actividades lúdicas.
              </p>
              <p> 3. Acompañar a los diferentes actores comunales y sector productivo de la región
              Huetar Norte en el fortalecimiento de la gestión financiera mediante asesorías</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home;
