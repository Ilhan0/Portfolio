class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md">
            <div class="container mx-auto px-4 py-2 flex justify-between items-center"> <!-- Höhe reduziert -->
                <div class="text-xl font-bold text-white">Ilhan Arifi</div> <!-- Schrift etwas kleiner -->

                <!-- Desktop Menu -->
                <div class="flex space-x-6"> <!-- Abstand zwischen Links leicht reduziert -->
                    <a href="#about" class="nav-link text-gray-400 hover:text-white transition text-sm">Über mich</a>
                    <a href="#skills" class="nav-link text-gray-400 hover:text-white transition text-sm">Skills</a>
                    <a href="#projects" class="nav-link text-gray-400 hover:text-white transition text-sm">Projekte</a>
                    <a href="#experience" class="nav-link text-gray-400 hover:text-white transition text-sm">Erfahrung</a>
                    <a href="#contact" class="nav-link text-gray-400 hover:text-white transition text-sm">Kontakt</a>
                </div>
            </div>
        </nav>

        <style>
            .nav-link {
                position: relative;
            }
            .nav-link::after {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                bottom: -2px;
                left: 0;
                background-color: #6366f1; /* primary color */
                transition: width 0.3s ease;
            }
            .nav-link:hover::after {
                width: 100%;
            }
        </style>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);
