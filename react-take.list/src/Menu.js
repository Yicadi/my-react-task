import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tareas">Tareas</Link>
                    </li>
                    <li>
                        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
//este archivo proporciona los enlaces para navegar entre las rutas.

export default Menu;