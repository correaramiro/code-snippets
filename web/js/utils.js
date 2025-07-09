// Navegar a otras paginas con select

function navigateToLink() {
    const select = document.getElementById('linkSelect');
    const url = select.value;
    if (url) {
        window.location.href = url
    }
}

// Modificar el head de html

function setupHead(title) {
    const head = document.head;
    // nombre que aparecera por defecto si la pahina no tiene nombre
    document.title = title || "Nombre";
    // icono
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/assets/img/icon.ico";
    head.appendChild(favicon);
    // links
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = "/assets/css/styles.css";
    head.appendChild(styles);
}

// Detecta el idioma del navegador del usuario y lo redirige a otra pagina

// Toma el lenguage del navegador del usuario.
const idioma = navigator.language || navigator.userLanguage;
// Combierte el texto del idioma en minusculas
const lang = idioma.slice(0, 2).toLowerCase();
// Si el lenguaje es españo, lo redirije
if (lang === "es") {
    window.location.href = "pages/index-es.html";
} else {
    // Redirige a una version por defecto
    window.location.href = "index.html"
}


setupHead(window.pageTitle);
// Funcion para incluir
function includeHtml(id, file) {
    // Pide el archivo "file", por ejemplo "header.html"
    fetch(file)
    // Convierte la respuesta en texto
    .then(res => res.text())
    .then(data => {
        // Lo inserta dentro del div con id
        document.getElementById(id).innerHTML = data;
    })
    // Si hay un error, que lo muestre en consola
    .catch(err => console.error(`Error cargando ${file}:`, err));
}

includeHtml("header", "../../components/header.html");
includeHtml("footer", "../../components/footer.html");