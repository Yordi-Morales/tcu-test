import React from 'react';
import { Container, Table } from 'react-bootstrap';
import products from './babymodel';
import './babystyle.css';

const BabyTable = () => {
  return (
    <div className='baby-class'>
    <div className="baby-content">
      <Container className="table-baby">
        <h2 className="table-title">Costos de manutencion de un bebe en Costa Rica en un año</h2> {/* Título de la tabla */}
        <div className="table-wrapper">
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th className='pr1'>Producto</th>
                <th className='pr2'>Precio</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          
        </div>
        <h4>Total:₡938900</h4>

      </Container>
      <p>*Los precios de pañales suministrados estan basados en la tabla de referencia de una fabricada de pañales asi como sus precios. 
        Los precios son solo una referencia general de los costos que implica el tener un bebe. No se contemplaron productos los cuales
        pueden variar mucho como lo son prendas de vestir, medicinas entre otras
        
         </p>
    </div>
    <div className="blue-overlay"></div>
  </div>
  );
};


export default BabyTable;
