


//hamburger responsiveness 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");  
}))
  
// bgVideo Playing
var bgVideo = document.getElementById("background-video");

for (let key in projects) {
    let project = projects[key];
    project.title.addEventListener("mouseover", function() {
        project.counter = 0;
        bgVideo.classList.add('hide');
        bgImage.src = project.images[project.counter];
        resizeImage();
        project.intervalId = setInterval(function() {
            project.counter++;
            if (project.counter === project.images.length) {
                project.counter = 0;
            }
            bgImage.src = project.images[project.counter];
        }, 100);
    });

    project.title.addEventListener("mouseout", function() {
        clearInterval(project.intervalId);
        bgImage.src = '';
        bgVideo.classList.remove('hide');
    });
}

// Img sequence per project title
var bgImage = document.getElementById("bgImage");

var projects = {
    hks: {
        title: document.getElementById("indexHKSLegadoLink"),
        images: ['/img/117_ElLegado_Pic_3_homePage.jpg', '/img/117_ElLegado_Pic_5_homePage.jpg', '/img/117_ElLegado_Pic_7_homePage.jpg', '/img/117_ElLegado_Pic_8_homePage.jpg'],
        counter: 0,
        intervalId: null
    },
    agrupa: {
        title: document.getElementById("indexAgrupaLink"),
        images: ['/img/28_AgrupaNow_HomePage_1.jpg', '/img/28_AgrupaNow_HomePage_3.jpg', '/img/28_AgrupaNow_HomePage_4.jpg', '/img/28_AgrupaNow_HomePage_2.jpg'],
        counter: 0,
        intervalId: null
    },
    sonidoAcido: {
        title: document.getElementById("indexSonidoAcidoLink"),
        images: ['/img/178_binocular_1_homePage.jpg', '/img/178_binocular_2_homePage.jpg', '/img/178_binocular_3_homePage.jpg', '/img/178_binocular_4_homePage.jpg', '/img/178_binocular_5_homePage.jpg'],
        counter: 0,
        intervalId: null
    },
    project4: {
        title: document.getElementById("indexFueraDelMoldeLink"),
        images: ['/img/177_FueraDelMolde_HomePage_1.jpg', '/img/177_FueraDelMolde_HomePage_2.jpg', '/img/177_FueraDelMolde_HomePage_3.jpg', '/img/177_FueraDelMolde_HomePage_4.jpg', '/img/177_FueraDelMolde_HomePage_5.jpg'],
        counter: 0,
        intervalId: null
    },
    sprite: {
        title: document.getElementById("indexSpriteDaddyLink"),
        images: ['/img/171_SpriteDaddyYankee_1_homePage.jpg', '/img/171_SpriteDaddyYankee_3_homePage.jpg', '/img/171_SpriteDaddyYankee_12_homePage.jpg', '/img/171_SpriteDaddyYankee_13_homePage.jpg', '/img/171_SpriteDaddyYankee_14_homePage.jpg'],
        counter: 0,
        intervalId: null
    },
    kraft: {
        title: document.getElementById("indexKraftMomentosLink"),
        images: ['/img/079_kraftRicosMomentos_11_homePage.jpg', '/img/079_kraftRicosMomentos_12_homePage.jpg', '/img/079_kraftRicosMomentos_14_homePage.jpg', '/img/079_kraftRicosMomentos_15_homePage.jpg', '/img/079_kraftRicosMomentos_8_homePage.jpg'],
        counter: 0,
        intervalId: null
    }
};

function resizeImage() {
    if (window.innerWidth / window.innerHeight > bgImage.naturalWidth / bgImage.naturalHeight) {
        bgImage.style.width = '100%';
        bgImage.style.height = 'auto';
    } else {
        bgImage.style.height = '100%';
        bgImage.style.width = 'auto';
    }
}

window.addEventListener('resize', resizeImage);

for (let key in projects) {
    let project = projects[key];
    project.title.addEventListener("mouseover", function() {
        project.counter = 0;
        bgImage.src = project.images[project.counter];
        resizeImage();
        project.intervalId = setInterval(function() {
            project.counter++;
            if (project.counter === project.images.length) {
                project.counter = 0;
            }
            bgImage.src = project.images[project.counter];
        }, 100);
    });

    project.title.addEventListener("mouseout", function() {
        clearInterval(project.intervalId);
        bgImage.src = '';
    });
}


// Dynamic Content Loading for Multilingual Websites

var translations = {
    'en': {
        'contact': 'Contact',
        'agrupaNowTitle': 'Agrupa - Now',
        'hksTitle': 'HKS - The Legacy',
        'spriteTitle': 'Sprite - BTL Activation',
        'kraftTitle': 'Kraft - Delicious Moments',
        'sonidoAcidoTitle': 'Sonido Ácido - Binocular',
        'fueraDelMoldeTitle': 'Fuera Del Molde - Season 01',
        'agrupaNowDesc': 'Fashion Film where we had the opportunity to work with the clothing store Agrupa, and we were in charge of the production, direction, and post-production.',
        'hksDesc': 'In-house project that we carried out with @hksgoat. The idea was to create a profile video based on a dark and heavy atmosphere, but at the same time contemporary. Showing HKS\'s connection with trap and the Venezuelan hip-hop scene was a must.',
        'spriteDesc': 'The legendary farewell concert of Daddy Yankee in Chile could not have less than this BTL activation of Agencia SM where we produced the entire audiovisual experience. Not only did we have the Cine Bot with a super slow motion cinema camera of 1,000fps (frames per second), but we also developed an entire post-production flow in real time on site, so that each participant had their video on WhatsApp ready to share and upload to their social networks.',
        'kraftDesc': 'Series of 12 digital capsules for Kraft. Hand in hand with Father Productions, we took care of the editing, color, and online of this Branded Content series with Virginia de Maria.',
        'fueraDelMoldeDesc': 'We worked as the post house doing editing, color, and online for the first season of Fuera Del Molde, a program from the Cocina Viva segment of VTR with 12 episodes of 25min produced by Father Productions.',
        'makeMagic': "Let's make magic!",
        'studioDesc': 'Hernández Sánchez Studio is a creative studio based in Santiago, Chile, specializing in the production of audiovisual content and cinematic storytelling for digital content, corporate videos, and music videos.',
        'quoteInstruction': 'To get a quote, fill out the form telling us a bit about your project.',
        'firstName': 'First Name:',
        'lastName': 'Last Name:',
        'emailLabel': 'Email:'
    },
    'es': {
        'contact': 'Contacto',
        'agrupaNowTitle': 'Agrupa - Now',
        'hksTitle': 'HKS - El Legado',
        'spriteTitle': 'Sprite - Activación BTL',
        'kraftTitle': 'Kraft - Ricos Momentos',
        'sonidoAcidoTitle': 'Sonido Ácido - Binocular',
        'fueraDelMoldeTitle': 'Fuera Del Molde - Temporada 01',
        'agrupaNowDesc': 'Fashion Film donde tuvimos la oportunidad de trabajar con la tienda de ropa Agrupa y estuvios a cargo de la producción, dirección y post producción.',
        'hksDesc': 'Proyecto inhouse que realizamos junto a @hksgoat. La idea era crear un profile video con base en un ambiente oscuro y pesado, pero al mismo tiempo contemporáneo. Mostrar la conexión de HKS con el trap y la escena hip-hopera venezolana era un must.',
        'spriteDesc': 'El mítico concierto de despedida de Daddy Yankee en Chile no podía tener menos que esta activación de BTL de Agencia SM donde produjimos toda la experiencia audiovisual. No solo contamos con el Cine Bot junto a una cámara de cine super slow motion de 1.000fps (cuadros por segundo), sino que también desarrollamos todo un flujo de post producción en tiempo real in situ, de forma que cada participante contaba con su video en whatsapp listo para compartir y subir a sus redes sociales.',
        'kraftDesc': 'Serie de 12 cápsulas digitales para Kraft. De la mano de Father Producciones, nos encargamos del montaje, color y online de esta serie de Branded Content junto a la Virginia de Maria.',
        'fueraDelMoldeDesc': 'Trabajamos como la casa de post haciendo montaje, color y online de la primera temporada de Fuera Del Molde, programa del segmento Cocina Viva de VTR con 12 capítulos de 25min producidos por Father Producciones.',
        'makeMagic': '¡Hagamos magia!',
        'studioDesc': 'Hernández Sánchez Studio es un estudio creativo con base en Santiago, Chile que se especializa en producción de contenido audiovisual y storytelling cinemático para contenido digital, corporativo y videoclips.',
        'quoteInstruction': 'Para cotizar rellena el formulario contándonos un poco sobre tu proyecto.',
        'firstName': 'Nombre:',
        'lastName': 'Apellido:',
        'emailLabel': 'Email:'
    }
};


var userLang = navigator.language || navigator.userLanguage; 
var currentLang = userLang.startsWith('es') ? 'es' : 'en';


var currentTranslations = translations[currentLang] || translations['en'];  // Default to English if the user's language is not available.

document.addEventListener('DOMContentLoaded', function() {
    
    // For the contact link
    document.getElementById('contactLink').textContent = currentTranslations['contact'];

    // For project titles and descriptions
    document.getElementById('agrupaNowTitleID').textContent = currentTranslations['agrupaNowTitle'];
    document.getElementById('agrupaNowDescID').textContent = currentTranslations['agrupaNowDesc'];

    document.getElementById('hksTitleID').textContent = currentTranslations['hksTitle'];
    document.getElementById('hksDescID').textContent = currentTranslations['hksDesc'];

    document.getElementById('spriteTitleID').textContent = currentTranslations['spriteTitle'];
    document.getElementById('spriteDescID').textContent = currentTranslations['spriteDesc'];

    document.getElementById('kraftTitleID').textContent = currentTranslations['kraftTitle'];
    document.getElementById('kraftDescID').textContent = currentTranslations['kraftDesc'];

    document.getElementById('sonidoAcidoTitleID').textContent = currentTranslations['sonidoAcidoTitle'];
    document.getElementById('sonidoAcidoDescID').textContent = currentTranslations['sonidoAcidoDesc'];

    document.getElementById('fueraDelMoldeTitleID').textContent = currentTranslations['fueraDelMoldeTitle'];
    document.getElementById('fueraDelMoldeDescID').textContent = currentTranslations['fueraDelMoldeDesc'];

    // For the contact page content
    document.getElementById('makeMagicID').textContent = currentTranslations['makeMagic'];
    document.getElementById('studioDescID').textContent = currentTranslations['studioDesc'];
    document.getElementById('quoteInstructionID').textContent = currentTranslations['quoteInstruction'];
    document.getElementById('firstNameLabelID').textContent = currentTranslations['firstName'];
    document.getElementById('lastNameLabelID').textContent = currentTranslations['lastName'];
    document.getElementById('emailLabelID').textContent = currentTranslations['emailLabel'];

});


// Function to set the initial language based on the browser's language
function setInitialLanguage() {
    // Get the browser's language
    var browserLang = navigator.language || navigator.userLanguage;

    // Check if the browser's language starts with 'es' (for Spanish)
    if (browserLang.startsWith('es')) {
        changeLanguage('es');
    } else {
        changeLanguage('en');
    }
}

// Call the function to set the initial language
setInitialLanguage();


