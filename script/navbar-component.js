// navbar-component.js

class NavbarComponent extends HTMLElement {
    constructor() {
        super(); // Llamada al constructor de HTMLElement

        // Crear un shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // HTML del navbar (como template)
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
            /* Estilos del navbar (encapsulados en el Shadow DOM) */
            nav {
                background-color: #000000e2;
                color: antiquewhite;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 10px;
            }

            nav ul {
                list-style: none;
                display: flex;
                justify-content: space-around;
            }

            nav ul li a {
                text-decoration: none;
                /* Elimina el subrayado de los enlaces */
                color: antiquewhite;
                /* Color de texto de los enlaces */
                font-size: 20px;
                padding: 10px 15px;
                transition: color 0.6s ease;
            }

            .logo {
                padding: 0;
            }

            nav ul li a:hover {
                color: #256ccc;
                transform: scale(1.1);  
                font-weight: 700;
            }
        </style>
        <nav>
            <!-- lista no ordenada -->
            <ul>
                <li><a href="./index.html">Inicio</a></li> <!-- Ruta hacia 'index.html' desde la raíz -->
                <li><a href="./nuestrosproductos.html">Nuestros productos</a></li>
                <li><a href="./sobrenosotros.html">Procesos</a></li>
                <li><a href="./sobrenosotros.html">Sobre nosotros</a></li>
                <li><a href="./contactenos.html">Contactenos</a></li>
            </ul>
            <div class="logo">
                
            </div>

            <!-- boton Hamburgesa -->
            <div class="btn-burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </nav>
        `;

        // Adicionar el template al Shadow DOM
        shadow.appendChild(template.content);
    }
}

// Definir el Web Component
customElements.define('navbar-component', NavbarComponent);
