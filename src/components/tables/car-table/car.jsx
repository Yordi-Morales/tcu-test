import React from 'react';
import { Container, Table } from 'react-bootstrap';
import products from './carmodel';
import './carstyle.css';

const CarTable = () => {
  return (
    <div className='car-class'>
    <div className="car-content">
      <Container className="table-car">
        <h2 className="table-title">Costos de mantenimiento de un vehiculo en un año</h2> {/* Título de la tabla */}
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
        <h4>Total:₡186000</h4>

      </Container>
      <p>*Los precios y productos suministrados son basados en los costos promedio de mantenimiento de un vehículo tipo automóvil en un año
        y no incluyen costos extras como marchamo, repuestos,compustible o revisión vehícular</p>
    </div>
    
    <div className="blue-overlay"></div>
    
  </div>
  
  );
};


export default CarTable;
