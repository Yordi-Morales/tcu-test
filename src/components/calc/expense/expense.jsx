import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './expensestyle.css';

const FinancialCalculatorInput = () => {
    const [ingresos, setIngresos] = useState([
        { id: 1, tipoPeriodo: 'mensual', nombre: '', monto: 0 }
    ]);

    const [gastos, setGastos] = useState([
        { id: 1, tipoPeriodo: 'mensual', nombre: '', monto: 0 }
    ]);

    const handleTipoPeriodoChange = (event, index, tipo) => {
        if (tipo === 'ingreso') {
            const newIngresos = [...ingresos];
            newIngresos[index].tipoPeriodo = event.target.value;
            setIngresos(newIngresos);
        } else if (tipo === 'gasto') {
            const newGastos = [...gastos];
            newGastos[index].tipoPeriodo = event.target.value;
            setGastos(newGastos);
        }
    };

    const handleNombreIngresoChange = (event, index) => {
        const newIngresos = [...ingresos];
        newIngresos[index].nombre = event.target.value;
        setIngresos(newIngresos);
    };

    const handleMontoIngresoChange = (event, index) => {
        const value = event.target.value === '' ? 0 : parseFloat(event.target.value);
        const newIngresos = [...ingresos];
        newIngresos[index].monto = value;
        setIngresos(newIngresos);
    };

    const handleMontoIngresoBlur = (index) => {
        const newIngresos = [...ingresos];
        if (newIngresos[index].monto === '' || isNaN(newIngresos[index].monto)) {
            newIngresos[index].monto = 0;
            setIngresos(newIngresos);
        }
    };

    const handleNombreGastoChange = (event, index) => {
        const newGastos = [...gastos];
        newGastos[index].nombre = event.target.value;
        setGastos(newGastos);
    };

    const handleMontoGastoChange = (event, index) => {
        const value = event.target.value === '' ? 0 : parseFloat(event.target.value);
        const newGastos = [...gastos];
        newGastos[index].monto = value;
        setGastos(newGastos);
    };

    const handleMontoGastoBlur = (index) => {
        const newGastos = [...gastos];
        if (newGastos[index].monto === '' || isNaN(newGastos[index].monto)) {
            newGastos[index].monto = 0;
            setGastos(newGastos);
        }
    };

    const handleAgregarIngreso = () => {
        const nuevoId = ingresos.length + 1;
        setIngresos([
            ...ingresos,
            { id: nuevoId, tipoPeriodo: 'mensual', nombre: '', monto: 0 }
        ]);
    };

    const handleAgregarGasto = () => {
        const nuevoId = gastos.length + 1;
        setGastos([
            ...gastos,
            { id: nuevoId, tipoPeriodo: 'mensual', nombre: '', monto: 0 }
        ]);
    };

    const handleEliminarIngreso = (id) => {
        const nuevosIngresos = ingresos.filter((ingreso) => ingreso.id !== id);
        setIngresos(nuevosIngresos);
    };

    const handleEliminarGasto = (id) => {
        const nuevosGastos = gastos.filter((gasto) => gasto.id !== id);
        setGastos(nuevosGastos);
    };

    const calcularTotal = (lista) => {
        let total = 0;
        lista.forEach((item) => {
            const monto = isNaN(parseFloat(item.monto)) ? 0 : parseFloat(item.monto);
            if (item.tipoPeriodo === 'anual') {
                total += monto;
            } else {
                total += monto * 12;
            }
        });
        return total;
    };

    const calcularTotalNeto = () => {
        const totalIngresos = calcularTotal(ingresos);
        const totalGastos = calcularTotal(gastos);
        return totalIngresos - totalGastos;
    };

    const exportToExcel = () => {
        const wb = XLSX.utils.book_new();
        const incomesData = ingresos.map(({ id, tipoPeriodo, nombre, monto }) => ({ Tipo_Periodo: tipoPeriodo, Nombre: nombre, Monto: monto }));
        const expensesData = gastos.map(({ id, tipoPeriodo, nombre, monto }) => ({ Tipo_Periodo: tipoPeriodo, Nombre: nombre, Monto: monto }));
        const incomesSheet = XLSX.utils.json_to_sheet(incomesData);
        const expensesSheet = XLSX.utils.json_to_sheet(expensesData);
        XLSX.utils.book_append_sheet(wb, incomesSheet, 'Ingresos');
        XLSX.utils.book_append_sheet(wb, expensesSheet, 'Gastos');
        XLSX.writeFile(wb, 'financial_data.xlsx');
    };

    return (
        <div className="financial-calculator-container">
            <h2>Realiza un control de sus gastos anuales</h2>
            <div className="totals">
                <h4>Total Neto: {calcularTotalNeto()}</h4>
            </div>
            <div className="m-columns">
                <div className="incomes columni">
                    <p>Total Ingresos: {calcularTotal(ingresos)}</p>
                    <h3>Ingresos</h3>
                    {ingresos.map((ingreso, index) => (
                        <div key={ingreso.id} className="item-row">
                            <select
                                value={ingreso.tipoPeriodo}
                                onChange={(event) => handleTipoPeriodoChange(event, index, 'ingreso')}
                            >
                                <option value="mensual">Mensual</option>
                                <option value="anual">Anual</option>
                            </select>
                            <p>nombre:</p>
                            <input
                                type="text"
                                value={ingreso.nombre}
                                onChange={(event) => handleNombreIngresoChange(event, index)}
                            />
                            <p>monto:</p>
                            <input
                                type="number"
                                value={ingreso.monto}
                                onChange={(event) => handleMontoIngresoChange(event, index)}
                                onBlur={() => handleMontoIngresoBlur(index)}
                            />
                            <button onClick={() => handleEliminarIngreso(ingreso.id)} className='delete-btn misc-btn'><i className="fa fa-minus"></i></button>
                        </div>
                    ))}
                    <button onClick={handleAgregarIngreso} className='add-btn misc-btn'>Agregar ingreso</button>
                </div>

                <div className="expense columni">
                    <p id='totals'>Total Gastos: {calcularTotal(gastos)}</p>
                    <h3>Gastos</h3>
                    {gastos.map((gasto, index) => (
                        <div key={gasto.id} className="item-row">
                            <select
                                value={gasto.tipoPeriodo}
                                onChange={(event) => handleTipoPeriodoChange(event, index, 'gasto')}
                            >
                                <option value="mensual">Mensual</option>
                                <option value="anual">Anual</option>
                            </select>
                            <p>nombre:</p>
                            <input
                                type="text"
                                value={gasto.nombre}
                                onChange={(event) => handleNombreGastoChange(event, index)}
                            />
                            <p>monto:</p>
                            <input
                                type="number"
                                value={gasto.monto}
                                onChange={(event) => handleMontoGastoChange(event, index)}
                                onBlur={() => handleMontoGastoBlur(index)}
                            />
                            <button onClick={() => handleEliminarGasto(gasto.id)} className='delete-btn misc-btn'><i className="fa fa-minus"></i></button>
                        </div>
                    ))}
                    <button onClick={handleAgregarGasto} className='add-btn misc-btn'>Agregar gasto</button>
                </div>
            </div>
            <button onClick={exportToExcel} className='excel-btn'>Exportar a Excel</button>
        </div>
    );
};

export default FinancialCalculatorInput;
