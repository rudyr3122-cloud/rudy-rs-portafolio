"use strict";


/* =========================================
   NAVEGACIÓN ENTRE SECCIONES
========================================= */

const botonesMenu =
    document.querySelectorAll(
        ".menu button"
    );

const secciones =
    document.querySelectorAll(
        ".seccion"
    );


function mostrarSeccion(idSeccion) {
    const nuevaSeccion =
        document.getElementById(
            idSeccion
        );

    if (!nuevaSeccion) {
        console.error(
            `No se encontró la sección: ${idSeccion}`
        );

        return;
    }


    botonesMenu.forEach((boton) => {
        const estaActivo =
            boton.dataset.seccion ===
            idSeccion;

        boton.classList.toggle(
            "activo",
            estaActivo
        );
    });


    secciones.forEach((seccion) => {
        seccion.classList.remove(
            "activa"
        );
    });


    nuevaSeccion.classList.add(
        "activa"
    );


    const esSeccionClara =
        nuevaSeccion.classList.contains(
            "seccion-clara"
        );


    document.body.classList.toggle(
        "seccion-clara-visible",
        esSeccionClara
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


botonesMenu.forEach((boton) => {
    boton.addEventListener(
        "click",
        () => {
            const idSeccion =
                boton.dataset.seccion;

            mostrarSeccion(
                idSeccion
            );
        }
    );
});


/* =========================================
   INFORMACIÓN DE LAS CARPETAS
========================================= */

const carpetas = {

    diseno: {
        titulo:
            "Diseño gráfico",

        descripcion:
            "Identidades visuales, publicaciones, piezas publicitarias y contenido gráfico desarrollado para diferentes proyectos.",

        proyectos: [
            {
                titulo:
                    "Identidad visual",

                categoria:
                    "Branding",

                tipo:
                    "imagen",

                imagen:
                    "images/diseno-1.jpg"
            },

            {
                titulo:
                    "Contenido para redes",

                categoria:
                    "Social media",

                tipo:
                    "imagen",

                imagen:
                    "images/diseno-2.jpg"
            },

            {
                titulo:
                    "Diseño de portadas",

                categoria:
                    "Publicidad",

                tipo:
                    "imagen",

                imagen:
                    "images/diseno-3.jpg"
            },

            {
                titulo:
                    "Proyecto editorial",

                categoria:
                    "Editorial",

                tipo:
                    "imagen",

                imagen:
                    "images/diseno-4.jpg"
            },

            {
                titulo:
                    "Campaña gráfica",

                categoria:
                    "Campaña",

                tipo:
                    "imagen",

                imagen:
                    "images/diseno-5.jpg"
            },

            {
                titulo:
                    "Identidad de marca",

                categoria:
                    "Branding",

                tipo:
                    "imagen",

                imagen:
                    "images/diseno-6.jpg"
            }
        ]
    },


    audiovisual: {
        titulo:
            "Producción audiovisual",

        descripcion:
            "Edición de video, fotografía, animación y contenido audiovisual creado para comunicar historias de forma dinámica.",

        proyectos: [
            {
                titulo:
                    "Producción fotográfica",

                categoria:
                    "Fotografía",

                tipo:
                    "imagen",

                imagen:
                    "images/audiovisual-1.jpg"
            },

            {
                titulo:
                    "Video dinámico",

                categoria:
                    "Edición",

                tipo:
                    "video",

                archivo:
                    "videos/audiovisual-2.mp4",

                miniatura:
                    "images/audiovisual-2.jpg"
            },

            {
                titulo:
                    "Animación digital",

                categoria:
                    "Motion",

                tipo:
                    "video",

                archivo:
                    "videos/audiovisual-3.mp4",

                miniatura:
                    "images/audiovisual-3.jpg"
            },

            {
                titulo:
                    "Modelos 3D",

                categoria:
                    "Video",

                tipo:
                    "video",

                archivo:
                    "videos/audiovisual-4.mp4",

                miniatura:
                    "images/audiovisual-4.jpg"
            },

            {
                titulo:
                    "Sesión fotográfica",

                categoria:
                    "Fotografía",

                tipo:
                    "imagen",

                imagen:
                    "images/audiovisual-5.jpg"
            },

            {
                titulo:
                    "Edición creativa",

                categoria:
                    "Postproducción",

                tipo:
                    "video",

                archivo:
                    "videos/audiovisual-6.mp4",

                miniatura:
                    "images/audiovisual-6.jpg"
            }
        ]
    },


    marcas: {
        titulo:
            "Contenido para marcas",

        descripcion:
            "Campañas, publicaciones y piezas visuales creadas para fortalecer la presencia digital de distintas marcas.",

        proyectos: [
            {
                titulo:
                    "Campaña para redes",

                categoria:
                    "Campaña",

                tipo:
                    "imagen",

                imagen:
                    "images/marca-1.jpg"
            },

            {
                titulo:
                    "Contenido comercial",

                categoria:
                    "Social media",

                tipo:
                    "imagen",

                imagen:
                    "images/marca-2.jpg"
            },

            {
                titulo:
                    "Diseño de publicaciones",

                categoria:
                    "Contenido",

                tipo:
                    "imagen",

                imagen:
                    "images/marca-3.jpg"
            },

            {
                titulo:
                    "Publicidad digital",

                categoria:
                    "Publicidad",

                tipo:
                    "imagen",

                imagen:
                    "images/marca-4.jpg"
            },

            {
                titulo:
                    "Comunicación visual",

                categoria:
                    "Diseño",

                tipo:
                    "imagen",

                imagen:
                    "images/marca-5.jpg"
            },

            {
                titulo:
                    "Campaña de producto",

                categoria:
                    "Marketing",

                tipo:
                    "imagen",

                imagen:
                    "images/marca-6.jpg"
            }
        ]
    }
};


/* =========================================
   ELEMENTOS DEL MODAL DE PROYECTOS
========================================= */

const botonesCarpeta =
    document.querySelectorAll(
        ".carpeta-proyecto"
    );


const modal =
    document.getElementById(
        "modal-proyectos"
    );


const tituloModal =
    document.getElementById(
        "titulo-modal"
    );


const descripcionModal =
    document.getElementById(
        "descripcion-modal"
    );


const galeriaModal =
    document.getElementById(
        "galeria-modal"
    );


const botonesCerrarModal =
    document.querySelectorAll(
        "[data-cerrar-modal]"
    );


/* =========================================
   CREAR VISOR DE IMÁGENES Y VIDEOS
========================================= */

const visorMultimedia =
    document.createElement(
        "div"
    );


visorMultimedia.className =
    "visor-imagen";


visorMultimedia.setAttribute(
    "aria-hidden",
    "true"
);


visorMultimedia.innerHTML = `
    <div
        class="visor-fondo"
        data-cerrar-visor>
    </div>

    <div
        class="visor-contenido"
        role="dialog"
        aria-modal="true"
        aria-label="Vista ampliada del proyecto">

        <button
            class="cerrar-visor"
            type="button"
            aria-label="Cerrar proyecto">
            ×
        </button>

        <img
            class="imagen-ampliada"
            src=""
            alt="">

        <video
            class="video-ampliado"
            controls
            playsinline
            preload="metadata">
        </video>

    </div>
`;


document.body.appendChild(
    visorMultimedia
);


/* =========================================
   ELEMENTOS DEL VISOR
========================================= */

const visorContenido =
    visorMultimedia.querySelector(
        ".visor-contenido"
    );


const imagenAmpliada =
    visorMultimedia.querySelector(
        ".imagen-ampliada"
    );


const videoAmpliado =
    visorMultimedia.querySelector(
        ".video-ampliado"
    );


const botonCerrarVisor =
    visorMultimedia.querySelector(
        ".cerrar-visor"
    );


const fondoVisor =
    visorMultimedia.querySelector(
        "[data-cerrar-visor]"
    );


/* =========================================
   ABRIR VISOR
========================================= */

function abrirVisor() {
    visorMultimedia.classList.add(
        "abierto"
    );


    visorMultimedia.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    botonCerrarVisor.focus();
}


/* =========================================
   ABRIR IMAGEN
========================================= */

function abrirVisorImagen(
    rutaImagen,
    textoAlternativo
) {
    if (!rutaImagen) {
        return;
    }


    visorContenido.classList.remove(
        "visor-video-activo"
    );


    visorContenido.classList.add(
        "visor-imagen-activa"
    );


    videoAmpliado.pause();


    videoAmpliado.removeAttribute(
        "src"
    );


    videoAmpliado.removeAttribute(
        "aria-label"
    );


    videoAmpliado.load();


    videoAmpliado.style.display =
        "none";


    imagenAmpliada.src =
        rutaImagen;


    imagenAmpliada.alt =
        textoAlternativo ||
        "Proyecto ampliado";


    imagenAmpliada.style.display =
        "block";


    abrirVisor();
}


/* =========================================
   ABRIR VIDEO
========================================= */

function abrirVisorVideo(
    rutaVideo,
    tituloVideo
) {
    if (!rutaVideo) {
        return;
    }


    visorContenido.classList.remove(
        "visor-imagen-activa"
    );


    visorContenido.classList.add(
        "visor-video-activo"
    );


    imagenAmpliada.removeAttribute(
        "src"
    );


    imagenAmpliada.alt =
        "";


    imagenAmpliada.style.display =
        "none";


    videoAmpliado.src =
        rutaVideo;


    videoAmpliado.setAttribute(
        "aria-label",
        tituloVideo ||
        "Video del proyecto"
    );


    videoAmpliado.style.display =
        "block";


    videoAmpliado.load();


    abrirVisor();


    const promesaReproduccion =
        videoAmpliado.play();


    if (
        promesaReproduccion !==
        undefined
    ) {
        promesaReproduccion.catch(
            () => {
                /*
                Algunos navegadores bloquean
                la reproducción automática.

                En ese caso el usuario puede
                presionar el botón Play.
                */
            }
        );
    }
}


/* =========================================
   CERRAR VISOR
========================================= */

function cerrarVisor() {
    const visorEstaAbierto =
        visorMultimedia.classList.contains(
            "abierto"
        );


    if (!visorEstaAbierto) {
        return;
    }


    videoAmpliado.pause();


    visorMultimedia.classList.remove(
        "abierto"
    );


    visorMultimedia.setAttribute(
        "aria-hidden",
        "true"
    );


    window.setTimeout(
        () => {
            imagenAmpliada.removeAttribute(
                "src"
            );


            imagenAmpliada.alt =
                "";


            imagenAmpliada.style.display =
                "none";


            videoAmpliado.pause();


            videoAmpliado.removeAttribute(
                "src"
            );


            videoAmpliado.removeAttribute(
                "aria-label"
            );


            videoAmpliado.style.display =
                "none";


            videoAmpliado.load();


            visorContenido.classList.remove(
                "visor-video-activo",
                "visor-imagen-activa"
            );
        },
        350
    );


    const modalEstaAbierto =
        modal &&
        modal.classList.contains(
            "abierto"
        );


    if (modalEstaAbierto) {
        document.body.style.overflow =
            "hidden";
    } else {
        document.body.style.overflow =
            "";
    }
}


/* =========================================
   EVENTOS PARA CERRAR EL VISOR
========================================= */

botonCerrarVisor.addEventListener(
    "click",
    cerrarVisor
);


fondoVisor.addEventListener(
    "click",
    cerrarVisor
);


/* =========================================
   CREAR TARJETA DE IMAGEN
========================================= */

function crearMiniaturaImagen(
    proyecto,
    imagenContenedor
) {
    const imagen =
        document.createElement(
            "img"
        );


    imagen.src =
        proyecto.imagen;


    imagen.alt =
        proyecto.titulo;


    imagen.loading =
        "lazy";


    imagen.tabIndex =
        0;


    imagen.setAttribute(
        "role",
        "button"
    );


    imagen.setAttribute(
        "aria-label",
        `Abrir imagen completa de ${proyecto.titulo}`
    );


    function abrirImagenProyecto() {
        abrirVisorImagen(
            proyecto.imagen,
            proyecto.titulo
        );
    }


    imagen.addEventListener(
        "click",
        abrirImagenProyecto
    );


    imagen.addEventListener(
        "keydown",
        (evento) => {
            const teclaPermitida =
                evento.key === "Enter" ||
                evento.key === " ";


            if (!teclaPermitida) {
                return;
            }


            evento.preventDefault();


            abrirImagenProyecto();
        }
    );


    imagen.addEventListener(
        "error",
        () => {
            imagen.style.display =
                "none";


            console.error(
                `No se encontró la imagen: ${proyecto.imagen}`
            );
        }
    );


    imagenContenedor.appendChild(
        imagen
    );
}


/* =========================================
   CREAR TARJETA DE VIDEO
========================================= */

function crearMiniaturaVideo(
    proyecto,
    imagenContenedor
) {
    imagenContenedor.classList.add(
        "trabajo-video"
    );


    const miniatura =
        document.createElement(
            "img"
        );


    miniatura.src =
        proyecto.miniatura;


    miniatura.alt =
        `Miniatura de ${proyecto.titulo}`;


    miniatura.loading =
        "lazy";


    miniatura.tabIndex =
        0;


    miniatura.setAttribute(
        "role",
        "button"
    );


    miniatura.setAttribute(
        "aria-label",
        `Reproducir video ${proyecto.titulo}`
    );


    const botonReproducir =
        document.createElement(
            "button"
        );


    botonReproducir.className =
        "boton-reproducir";


    botonReproducir.type =
        "button";


    botonReproducir.setAttribute(
        "aria-label",
        `Reproducir ${proyecto.titulo}`
    );


    botonReproducir.innerHTML = `
        <span aria-hidden="true">
            ▶
        </span>
    `;


    function reproducirVideo() {
        abrirVisorVideo(
            proyecto.archivo,
            proyecto.titulo
        );
    }


    miniatura.addEventListener(
        "click",
        reproducirVideo
    );


    miniatura.addEventListener(
        "keydown",
        (evento) => {
            const teclaPermitida =
                evento.key === "Enter" ||
                evento.key === " ";


            if (!teclaPermitida) {
                return;
            }


            evento.preventDefault();


            reproducirVideo();
        }
    );


    botonReproducir.addEventListener(
        "click",
        reproducirVideo
    );


    miniatura.addEventListener(
        "error",
        () => {
            console.error(
                `No se encontró la miniatura: ${proyecto.miniatura}`
            );


            miniatura.style.display =
                "none";
        }
    );


    imagenContenedor.append(
        miniatura,
        botonReproducir
    );
}


/* =========================================
   CREAR CADA TARJETA DE PROYECTO
========================================= */

function crearProyecto(proyecto) {
    const articulo =
        document.createElement(
            "article"
        );


    articulo.className =
        "trabajo";


    const imagenContenedor =
        document.createElement(
            "div"
        );


    imagenContenedor.className =
        "trabajo-imagen";


    const esVideo =
        proyecto.tipo ===
        "video";


    if (esVideo) {
        crearMiniaturaVideo(
            proyecto,
            imagenContenedor
        );
    } else {
        crearMiniaturaImagen(
            proyecto,
            imagenContenedor
        );
    }


    const informacion =
        document.createElement(
            "div"
        );


    informacion.className =
        "trabajo-info";


    const categoria =
        document.createElement(
            "span"
        );


    categoria.textContent =
        esVideo
            ? `▶ ${proyecto.categoria}`
            : proyecto.categoria;


    const titulo =
        document.createElement(
            "h3"
        );


    titulo.textContent =
        proyecto.titulo;


    informacion.append(
        categoria,
        titulo
    );


    articulo.append(
        imagenContenedor,
        informacion
    );


    return articulo;
}


/* =========================================
   ABRIR UNA CARPETA
========================================= */

function abrirCarpeta(
    nombreCarpeta
) {
    const carpeta =
        carpetas[nombreCarpeta];


    if (!carpeta) {
        console.error(
            `No existe la carpeta: ${nombreCarpeta}`
        );

        return;
    }


    if (
        !modal ||
        !tituloModal ||
        !descripcionModal ||
        !galeriaModal
    ) {
        console.error(
            "Faltan elementos del modal en index.html"
        );

        return;
    }


    tituloModal.textContent =
        carpeta.titulo;


    descripcionModal.textContent =
        carpeta.descripcion;


    galeriaModal.innerHTML =
        "";


    carpeta.proyectos.forEach(
        (proyecto) => {
            const tarjeta =
                crearProyecto(
                    proyecto
                );


            galeriaModal.appendChild(
                tarjeta
            );
        }
    );


    modal.classList.add(
        "abierto"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";
}


/* =========================================
   CERRAR CARPETA DE PROYECTOS
========================================= */

function cerrarModal() {
    if (!modal) {
        return;
    }


    if (
        visorMultimedia.classList.contains(
            "abierto"
        )
    ) {
        cerrarVisor();
    }


    modal.classList.remove(
        "abierto"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";
}


/* =========================================
   EVENTOS DE LAS CARPETAS
========================================= */

botonesCarpeta.forEach(
    (boton) => {
        boton.addEventListener(
            "click",
            () => {
                const nombreCarpeta =
                    boton.dataset.carpeta;


                abrirCarpeta(
                    nombreCarpeta
                );
            }
        );
    }
);


/* =========================================
   EVENTOS PARA CERRAR LA CARPETA
========================================= */

botonesCerrarModal.forEach(
    (elemento) => {
        elemento.addEventListener(
            "click",
            cerrarModal
        );
    }
);


/* =========================================
   CERRAR CON LA TECLA ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    (evento) => {
        if (
            evento.key !==
            "Escape"
        ) {
            return;
        }


        if (
            visorMultimedia.classList.contains(
                "abierto"
            )
        ) {
            cerrarVisor();

            return;
        }


        if (
            modal &&
            modal.classList.contains(
                "abierto"
            )
        ) {
            cerrarModal();
        }
    }
);


/* =========================================
   PAUSAR VIDEO SI CAMBIAS DE PESTAÑA
========================================= */

document.addEventListener(
    "visibilitychange",
    () => {
        if (
            document.hidden &&
            videoAmpliado
        ) {
            videoAmpliado.pause();
        }
    }
);


/* =========================================
   MENSAJE DE COMPROBACIÓN
========================================= */

console.log(
    "Portafolio Rudy RS cargado correctamente con imágenes y videos adaptables."
);