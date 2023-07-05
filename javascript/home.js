
// // Toggle transparency class on navbar
//    document.addEventListener("DOMContentLoaded", function() {
//    var navbar = document.getElementById("navbar");

//     // Check if the navbar has the transparent class
//    if (navbar.classList.contains("navbar-transparent")) {
//          //Remove the transparent class if it exists
//         navbar.classList.remove("navbar-transparent");
//     }
// });

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
    trial: {
        title: document.getElementById("hks"),
        images: ['../img/117_ElLegado_Pic_3_homePage.jpg', '../img/117_ElLegado_Pic_5_homePage.jpg', '../img/117_ElLegado_Pic_7_homePage.jpg', '../img/117_ElLegado_Pic_8_homePage.jpg'],
        counter: 0,
        intervalId: null
    },
    agrupa: {
        title: document.getElementById("agrupa"),
        images: ['../img/28_AgrupaNow_HomePage_1.jpg', '../img/28_AgrupaNow_HomePage_3.jpg', '../img/28_AgrupaNow_HomePage_4.jpg', '../img/28_AgrupaNow_HomePage_2.jpg'],
        counter: 0,
        intervalId: null
    },
    sonidoAcido: {
        title: document.getElementById("sonidoAcido"),
        images: ['../img/178_binocular_1_homePage.jpg', '../img/178_binocular_2_homePage.jpg', '../img/178_binocular_3_homePage.jpg', '../img/178_binocular_4_homePage.jpg', '../img/178_binocular_5_homePage.jpg'],
        counter: 0,
        intervalId: null
    },
    project4: {
        title: document.getElementById("fueraDelMolde"),
        images: ['../img/177_FueraDelMolde_HomePage_1.jpg', '../img/177_FueraDelMolde_HomePage_2.jpg', '../img/177_FueraDelMolde_HomePage_3.jpg', '../img/177_FueraDelMolde_HomePage_4.jpg', '../img/177_FueraDelMolde_HomePage_5.jpg'],
        counter: 0,
        intervalId: null
    },
    sprite: {
        title: document.getElementById("sprite"),
        images: ['../img/171_SpriteDaddyYankee_1_homePage.jpg', '../img/171_SpriteDaddyYankee_3_homePage.jpg', '../img/171_SpriteDaddyYankee_12_homePage.jpg', '../img/171_SpriteDaddyYankee_13_homePage.jpg', '../img/171_SpriteDaddyYankee_14_homePage.jpg'],
        counter: 0,
        intervalId: null
    },
    kraft: {
        title: document.getElementById("kraft"),
        images: ['../img/079_kraftRicosMomentos_11_homePage.jpg', '../img/079_kraftRicosMomentos_12_homePage.jpg', '../img/079_kraftRicosMomentos_14_homePage.jpg', '../img/079_kraftRicosMomentos_15_homePage.jpg', '../img/079_kraftRicosMomentos_8_homePage.jpg'],
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

const projectTitles = document.querySelectorAll('.project-title');

projectTitles.forEach((projectTitle) => {
    projectTitle.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video-src');

        const videoElement = document.createElement('video');
        videoElement.src = videoSrc;
        videoElement.controls = true;
        videoElement.style.position = 'fixed';
        videoElement.style.width = '80vw';
        videoElement.style.height = '80vh';
        videoElement.style.top = '50%';
        videoElement.style.left = '50%';
        videoElement.style.transform = 'translate(-50%, -50%)';
        videoElement.style.zIndex = '100';
        videoElement.autoplay = true;
        document.body.appendChild(videoElement);

        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.zIndex = '99';
        document.body.appendChild(overlay);

        const removeVideoAndOverlay = () => {
            videoElement.remove();
            overlay.remove();
        };

        overlay.addEventListener('click', removeVideoAndOverlay);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                removeVideoAndOverlay();
            }
        });
    });
});



