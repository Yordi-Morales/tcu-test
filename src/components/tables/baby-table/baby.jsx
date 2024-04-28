import React from 'react';
import { Container, Table } from 'react-bootstrap';
import products from './babymodel';
import './babystyle.css';

const BabyTable = () => {
  return (
    <div className='baby-class'>
      <div className="baby-content">
        <Container className="table-baby">
          <h2 className="table-title">Costos de tener de un bebé en Costa Rica el primer año</h2> {/* Título de la tabla */}
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
        <p>*
          Los precios de los pañales suministrados están basados en la tabla de referencia de ©Huggies,
          así como sus precios. Estos precios son únicamente una referencia general de los costos asociados con el cuidado de un bebé. No se incluyeron productos que puedan tener una variabilidad considerable, como prendas de vestir, medicamentos, entre otros.

        </p>
      </div>
      <div className="blue-overlay"></div>
    </div>
  );
};


export default BabyTable;
