import React, { useState } from 'react';
import questions from './questionmodel'; // Asegúrate de que la ruta al archivo quizData.js sea correcta
import './questionstyle.css'; // Importa el archivo CSS con estilos

const QuizComponent = () => {
    const [answers, setAnswers] = useState(new Array(questions.length).fill(''));
    const [currentWindow, setCurrentWindow] = useState(0); // Iniciamos en 0 para la ventana inicial
    const [score, setScore] = useState(0);
    const [result, setResult] = useState('');
    const [firstPageCompleted, setFirstPageCompleted] = useState(false); // Estado para verificar si se han respondido todas las preguntas de la primera página
    const [secondPageCompleted, setSecondPageCompleted] = useState(false); // Estado para verificar si se han respondido todas las preguntas de la segunda página

    const handleAnswerChange = (questionIndex, value) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = value;
        setAnswers(newAnswers);

        if (currentWindow === 1) {
            // Verifica si se han respondido todas las preguntas de la primera página
            const answeredQuestions = newAnswers.slice(0, 5).filter(answer => answer !== '');
            setFirstPageCompleted(answeredQuestions.length === 5);
        } else if (currentWindow === 2) {
            // Verifica si se han respondido todas las preguntas de la segunda página
            const answeredQuestions = newAnswers.slice(5, 10).filter(answer => answer !== '');
            setSecondPageCompleted(answeredQuestions.length === 5);
        }
    };

    const calculateScore = () => {
        // Implementa tu lógica para calcular el puntaje aquí, basándote en las respuestas almacenadas en 'answers'
        // Este es solo un ejemplo básico para calcular la suma de las respuestas
        return answers.reduce((total, value) => total + parseInt(value), 0);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (currentWindow === 1 && !firstPageCompleted) {
            alert('Por favor, responde todas las preguntas de la primera página.');
            return;
        }

        if (currentWindow === 2 && !secondPageCompleted) {
            alert('Por favor, responde todas las preguntas de la segunda página.');
            return;
        }

        const currentScore = calculateScore();

        let currentResult = '';
        if (currentScore >= 42 && currentScore <= 50) {
            currentResult = 'Excelente';
        } else if (currentScore >= 33 && currentScore <= 41) {
            currentResult = 'Buena';
        } else if (currentScore >= 24 && currentScore <= 32) {
            currentResult = 'Aceptable';
        } else if (currentScore >= 15 && currentScore <= 23) {
            currentResult = 'Regular';
        } else if (currentScore >= 6 && currentScore <= 14) {
            currentResult = 'Mala';
        } else {
            currentResult = 'Muy mala';
        }

        setScore(currentScore);
        setResult(currentResult);
    };

    const canProceed = () => {
        if (currentWindow === 0) return true; // Si es la primera ventana, puede avanzar siempre
        if (currentWindow === 1) return firstPageCompleted; // Verifica si se han respondido todas las preguntas de la primera página
        if (currentWindow === 2) return secondPageCompleted; // Verifica si se han respondido todas las preguntas de la segunda página
        return true; // Para otras ventanas, puede avanzar siempre
    };

    const handleNext = () => {
        if (canProceed()) {
            if (currentWindow === 1 && !firstPageCompleted) {
                alert('Por favor, responde todas las preguntas de la primera página antes de continuar.');
            } else {
                setCurrentWindow(currentWindow + 1);
            }
        } else {
            alert('Por favor, responde todas las preguntas antes de continuar.');
        }
    };

    const handlePrevious = () => {
        setCurrentWindow(currentWindow - 1);
    };

    const handleRestart = () => {
        setAnswers(new Array(questions.length).fill(''));
        setCurrentWindow(0);
        setScore(0);
        setResult('');
        setFirstPageCompleted(false);
        setSecondPageCompleted(false);
    };

    return (
        <div className='main-quiz'>
            <div className="quiz-container">
                {currentWindow === 0 && (
                    <div className="main-window">
                        <h2>Este es un cuestionario para saber qué tan adecuado se gestiona las finanzas en pareja</h2>
                        <p>Consta de 10 preguntas, al completarlo muestra una calificación en pantalla</p>
                        <button onClick={handleNext}>Iniciar</button>
                    </div>
                )}
                {currentWindow === 1 && (
                    <div className="centered">
                        {questions.slice(0, 5).map((question, index) => (
                            <div key={index} className="question-container">
                                <p>{question.question}</p>
                                <div className="select-wrapper">
                                    <select
                                        value={answers[index]}
                                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                                    >
                                        <option value="">Selecciona una opción</option>
                                        {question.options.map((option, optionIndex) => (
                                            <option key={optionIndex} value={option.value} id="opt">
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ))}
                        <button id="nxt-btn" onClick={handleNext}>Siguiente</button>
                    </div>
                )}

                {currentWindow === 2 && (
                    <div className="centered">
                        {questions.slice(5, 10).map((question, index) => (
                            <div key={index} className="question-container">
                                <div className='test'>

                                    <p>{question.question}</p>
                                    <div className="select-wrapper">
                                        <select
                                            value={answers[index + 5]}
                                            onChange={(e) => handleAnswerChange(index + 5, e.target.value)}
                                        >
                                            <option value="">Selecciona una opción</option>
                                            {question.options.map((option, optionIndex) => (
                                                <option key={optionIndex} value={option.value} id="opt">
                                                    {option.text}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="buttons-bottom">
                            {currentWindow !== 0 && <button onClick={handlePrevious}>Anterior</button>}
                            <button onClick={handleFormSubmit}>Calcular</button>
                            <button onClick={handleRestart}>Volver a intentar</button>

                        </div>
                    </div>
                )}

                {score !== 0 && (
                    <div className="result">
                        <p>Tu puntaje es: {score}</p>
                        <p>Resultado: {result}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizComponent;
