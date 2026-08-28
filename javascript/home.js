const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');

function closeMenu() {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
    header?.classList.remove('active');
}

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu?.classList.toggle('active');
    header?.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

const bgVideo = document.getElementById('background-video');
const bgImage = document.getElementById('bgImage');
const backgroundImage = document.getElementById('backgroundImage');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const supportsHover = window.matchMedia('(hover: hover)').matches;

const projects = [
    {
        trigger: document.getElementById('hks'),
        images: ['../img/117_ElLegado_Pic_3_homePage.jpg', '../img/117_ElLegado_Pic_5_homePage.jpg', '../img/117_ElLegado_Pic_7_homePage.jpg', '../img/117_ElLegado_Pic_8_homePage.jpg']
    },
    {
        trigger: document.getElementById('agrupa'),
        images: ['../img/28_AgrupaNow_HomePage_1.jpg', '../img/28_AgrupaNow_HomePage_3.jpg', '../img/28_AgrupaNow_HomePage_4.jpg', '../img/28_AgrupaNow_HomePage_2.jpg']
    },
    {
        trigger: document.getElementById('sonidoAcido'),
        images: ['../img/178_binocular_1_homePage.jpg', '../img/178_binocular_2_homePage.jpg', '../img/178_binocular_3_homePage.jpg', '../img/178_binocular_4_homePage.jpg', '../img/178_binocular_5_homePage.jpg']
    },
    {
        trigger: document.getElementById('fueraDelMolde'),
        images: ['../img/177_FueraDelMolde_HomePage_1.jpg', '../img/177_FueraDelMolde_HomePage_2.jpg', '../img/177_FueraDelMolde_HomePage_3.jpg', '../img/177_FueraDelMolde_HomePage_4.jpg', '../img/177_FueraDelMolde_HomePage_5.jpg']
    },
    {
        trigger: document.getElementById('sprite'),
        images: ['../img/171_SpriteDaddyYankee_1_homePage.jpg', '../img/171_SpriteDaddyYankee_3_homePage.jpg', '../img/171_SpriteDaddyYankee_12_homePage.jpg', '../img/171_SpriteDaddyYankee_13_homePage.jpg', '../img/171_SpriteDaddyYankee_14_homePage.jpg']
    },
    {
        trigger: document.getElementById('kraft'),
        images: ['../img/079_kraftRicosMomentos_11_homePage.jpg', '../img/079_kraftRicosMomentos_12_homePage.jpg', '../img/079_kraftRicosMomentos_14_homePage.jpg', '../img/079_kraftRicosMomentos_15_homePage.jpg', '../img/079_kraftRicosMomentos_8_homePage.jpg']
    }
];

let activeProject = null;
let animationFrameId = null;
let activationId = 0;
let lastFrameTime = 0;
let frameIndex = 0;
const frameDuration = 120;

function preloadProject(project) {
    if (project.preloadPromise) {
        return project.preloadPromise;
    }

    project.preloadPromise = Promise.all(project.images.map((src) => new Promise((resolve) => {
        const image = new Image();
        image.decoding = 'async';
        image.onload = () => resolve(image);
        image.onerror = () => resolve(null);
        image.src = src;
    }))).then((images) => {
        project.preloadedImages = images.filter(Boolean);
    });

    return project.preloadPromise;
}

function showNextFrame(timestamp) {
    if (!activeProject || !bgImage) {
        return;
    }

    if (timestamp - lastFrameTime >= frameDuration) {
        frameIndex = (frameIndex + 1) % activeProject.images.length;
        bgImage.src = activeProject.images[frameIndex];
        lastFrameTime = timestamp;
    }

    animationFrameId = window.requestAnimationFrame(showNextFrame);
}

async function startSequence(project) {
    if (!bgImage || !backgroundImage || reducedMotion.matches) {
        return;
    }

    const currentActivation = ++activationId;
    await preloadProject(project);

    if (currentActivation !== activationId || reducedMotion.matches) {
        return;
    }

    window.cancelAnimationFrame(animationFrameId);
    activeProject = project;
    frameIndex = 0;
    lastFrameTime = performance.now();
    bgImage.src = project.images[frameIndex];
    backgroundImage.classList.add('is-active');
    bgVideo?.classList.add('is-hidden');
    animationFrameId = window.requestAnimationFrame(showNextFrame);
}

function stopSequence() {
    activationId += 1;
    activeProject = null;
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
    bgImage?.removeAttribute('src');
    backgroundImage?.classList.remove('is-active');
    bgVideo?.classList.remove('is-hidden');
}

function bindProjectPreview(project) {
    if (!project.trigger) {
        return;
    }

    const link = project.trigger.closest('a');
    if (!link) {
        return;
    }

    if (supportsHover) {
        link.addEventListener('pointerenter', () => startSequence(project));
        link.addEventListener('pointerleave', stopSequence);
    }

    link.addEventListener('focus', () => startSequence(project));
    link.addEventListener('blur', stopSequence);
}

if (bgImage && backgroundImage) {
    projects.forEach(bindProjectPreview);
}

if (bgVideo && reducedMotion.matches) {
    bgVideo.pause();
}

reducedMotion.addEventListener('change', ({ matches }) => {
    if (matches) {
        stopSequence();
        bgVideo?.pause();
    } else {
        bgVideo?.play().catch(() => {});
    }
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        window.cancelAnimationFrame(animationFrameId);
    } else if (activeProject) {
        animationFrameId = window.requestAnimationFrame(showNextFrame);
    }
});
