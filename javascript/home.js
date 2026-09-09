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
const projectsViewport = document.querySelector('.projects-viewport');
const projectsTrack = document.querySelector('.projects-track');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const supportsHover = window.matchMedia('(hover: hover)').matches;

const projects = [
    {
        trigger: document.getElementById('suspended'),
        images: ['../img/338_suspended-01.webp', '../img/338_suspended-03.webp', '../img/338_suspended-04.webp', '../img/338_suspended-06.webp', '../img/338_suspended-08.webp']
    },
    {
        trigger: document.getElementById('polPablo'),
        images: ['../img/350_pol-pablo-01.webp', '../img/350_pol-pablo-02.webp', '../img/350_pol-pablo-03.webp', '../img/350_pol-pablo-05.webp', '../img/350_pol-pablo-08.webp']
    },
    {
        trigger: document.getElementById('contraCorriente'),
        images: ['../img/238_contra-corriente-01.webp', '../img/238_contra-corriente-03.webp', '../img/238_contra-corriente-04.webp', '../img/238_contra-corriente-05.webp', '../img/238_contra-corriente-09.webp']
    },
    {
        trigger: document.getElementById('dykora'),
        images: ['../img/441_dykora-01.webp', '../img/441_dykora-02.webp', '../img/441_dykora-04.webp', '../img/441_dykora-06.webp', '../img/441_dykora-09.webp']
    },
    {
        trigger: document.getElementById('clubDesahuciados'),
        images: ['../img/285_club-desahuciados-01.webp', '../img/285_club-desahuciados-03.webp', '../img/285_club-desahuciados-05.webp', '../img/285_club-desahuciados-06.webp', '../img/285_club-desahuciados-09.webp']
    },
    {
        trigger: document.getElementById('cdm'),
        images: ['../img/529_CDM_cdm-01.webp', '../img/529_CDM_cdm-02.webp', '../img/529_CDM_cdm-03.webp', '../img/529_CDM_cdm-04.webp', '../img/529_CDM_cdm-05.webp', '../img/529_CDM_cdm-06.webp']
    },
    {
        trigger: document.getElementById('hks'),
        images: ['../img/117_ElLegado_preview-01.webp', '../img/117_ElLegado_preview-02.webp', '../img/117_ElLegado_preview-03.webp', '../img/117_ElLegado_preview-04.webp']
    },
    {
        trigger: document.getElementById('agrupa'),
        images: ['../img/28_AgrupaNow_preview-01.webp', '../img/28_AgrupaNow_preview-02.webp', '../img/28_AgrupaNow_preview-03.webp', '../img/28_AgrupaNow_preview-04.webp']
    },
    {
        trigger: document.getElementById('sonidoAcido'),
        images: ['../img/178_binocular_preview-01.webp', '../img/178_binocular_preview-02.webp', '../img/178_binocular_preview-03.webp', '../img/178_binocular_preview-04.webp', '../img/178_binocular_preview-05.webp']
    },
    {
        trigger: document.getElementById('fueraDelMolde'),
        images: ['../img/177_fueraDelMolde_preview-01.webp', '../img/177_fueraDelMolde_preview-02.webp', '../img/177_fueraDelMolde_preview-03.webp', '../img/177_fueraDelMolde_preview-04.webp', '../img/177_fueraDelMolde_preview-05.webp']
    },
    {
        trigger: document.getElementById('sprite'),
        images: ['../img/171_SpriteDaddyYankee_preview-01.webp', '../img/171_SpriteDaddyYankee_preview-02.webp', '../img/171_SpriteDaddyYankee_preview-03.webp', '../img/171_SpriteDaddyYankee_preview-04.webp', '../img/171_SpriteDaddyYankee_preview-05.webp']
    },
    {
        trigger: document.getElementById('kraft'),
        images: ['../img/079_kraftRicosMomentos_preview-01.webp', '../img/079_kraftRicosMomentos_preview-02.webp', '../img/079_kraftRicosMomentos_preview-03.webp', '../img/079_kraftRicosMomentos_preview-04.webp', '../img/079_kraftRicosMomentos_preview-05.webp']
    }
];

let activeProject = null;
let animationFrameId = null;
let activationId = 0;
let lastFrameTime = 0;
let frameIndex = 0;
const frameDuration = 120;
const visibleProjectCount = 5;
const menuAnimationDuration = 620;
let menuIsMoving = false;
let wheelDelta = 0;
let touchStartY = null;

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

function startSequence(project) {
    if (!bgImage || !backgroundImage) {
        return;
    }

    const currentActivation = ++activationId;
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
    activeProject = project;
    frameIndex = 0;
    lastFrameTime = performance.now();
    bgImage.src = project.images[frameIndex];
    backgroundImage.classList.add('is-active');
    bgVideo?.classList.add('is-hidden');

    if (reducedMotion.matches) {
        return;
    }

    preloadProject(project).then(() => {
        if (currentActivation !== activationId || reducedMotion.matches || activeProject !== project) {
            return;
        }

        lastFrameTime = performance.now();
        animationFrameId = window.requestAnimationFrame(showNextFrame);
    });
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

function updateVisibleProjects() {
    if (!projectsTrack || !projectsViewport) {
        return;
    }

    const links = [...projectsTrack.querySelectorAll('.project-title-link')];
    links.forEach((link, index) => {
        const isVisible = index < visibleProjectCount;
        link.tabIndex = isVisible ? 0 : -1;
        link.setAttribute('aria-hidden', String(!isVisible));
    });

    if (document.activeElement?.matches('.project-title-link[aria-hidden="true"]')) {
        projectsViewport.focus({ preventScroll: true });
    }
}

function scrollProjectMenu(direction) {
    if (!projectsTrack || menuIsMoving || direction === 0) {
        return;
    }

    const links = projectsTrack.querySelectorAll('.project-title-link');
    if (links.length <= visibleProjectCount) {
        return;
    }

    menuIsMoving = true;
    stopSequence();
    projectsTrack.classList.add('is-moving');

    const rowHeight = links[0].getBoundingClientRect().height;
    const duration = reducedMotion.matches ? 0 : menuAnimationDuration;

    if (direction < 0) {
        projectsTrack.prepend(links[links.length - 1]);
    }

    const startY = direction > 0 ? 0 : -rowHeight;
    const endY = direction > 0 ? -rowHeight : 0;
    const animation = projectsTrack.animate(
        [
            { transform: `translate3d(0, ${startY}px, 0)` },
            { transform: `translate3d(0, ${endY}px, 0)` }
        ],
        {
            duration,
            easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
            fill: 'forwards'
        }
    );

    animation.finished.finally(() => {
        if (direction > 0) {
            projectsTrack.append(projectsTrack.firstElementChild);
        }

        animation.cancel();
        projectsTrack.style.transform = '';
        projectsTrack.classList.remove('is-moving');
        menuIsMoving = false;
        updateVisibleProjects();
    });
}

projectsViewport?.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (menuIsMoving) {
        return;
    }

    wheelDelta += event.deltaY;
    if (Math.abs(wheelDelta) < 24) {
        return;
    }

    scrollProjectMenu(Math.sign(wheelDelta));
    wheelDelta = 0;
}, { passive: false });

projectsViewport?.addEventListener('touchstart', (event) => {
    touchStartY = event.changedTouches[0]?.clientY ?? null;
}, { passive: true });

projectsViewport?.addEventListener('touchend', (event) => {
    if (touchStartY === null) {
        return;
    }

    const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY;
    const distance = touchStartY - touchEndY;
    touchStartY = null;

    if (Math.abs(distance) >= 30) {
        scrollProjectMenu(Math.sign(distance));
    }
}, { passive: true });

projectsViewport?.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
        return;
    }

    event.preventDefault();
    scrollProjectMenu(event.key === 'ArrowDown' ? 1 : -1);
});

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

updateVisibleProjects();

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
