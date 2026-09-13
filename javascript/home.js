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
        video: '../img/338_suspended-banner.mp4',
        images: ['../img/338_suspended-sequence-01.webp', '../img/338_suspended-sequence-02.webp', '../img/338_suspended-sequence-03.webp', '../img/338_suspended-sequence-04.webp', '../img/338_suspended-sequence-05.webp']
    },
    {
        trigger: document.getElementById('polPablo'),
        video: '../img/350_pol-pablo-banner.mp4',
        images: ['../img/350_pol-pablo-01.webp', '../img/350_pol-pablo-02.webp', '../img/350_pol-pablo-03.webp', '../img/350_pol-pablo-05.webp', '../img/350_pol-pablo-08.webp']
    },
    {
        trigger: document.getElementById('contraCorriente'),
        video: '../img/238_contra-corriente-banner.mp4',
        images: ['../img/238_contra-corriente-01.webp', '../img/238_contra-corriente-03.webp', '../img/238_contra-corriente-04.webp', '../img/238_contra-corriente-05.webp', '../img/238_contra-corriente-09.webp']
    },
    {
        trigger: document.getElementById('dykora'),
        video: '../img/441_dykora-banner.mp4',
        images: ['../img/441_dykora-01.webp', '../img/441_dykora-02.webp', '../img/441_dykora-04.webp', '../img/441_dykora-06.webp', '../img/441_dykora-09.webp']
    },
    {
        trigger: document.getElementById('clubDesahuciados'),
        video: '../img/285_club-desahuciados-banner.mp4',
        images: ['../img/285_club-desahuciados-01.webp', '../img/285_club-desahuciados-03.webp', '../img/285_club-desahuciados-05.webp', '../img/285_club-desahuciados-06.webp', '../img/285_club-desahuciados-09.webp']
    },
    {
        trigger: document.getElementById('cdm'),
        video: '../img/529_CDM_banner_webOptimized.mp4',
        images: ['../img/529_CDM_cdm-01.webp', '../img/529_CDM_cdm-02.webp', '../img/529_CDM_cdm-03.webp', '../img/529_CDM_cdm-04.webp', '../img/529_CDM_cdm-05.webp', '../img/529_CDM_cdm-06.webp']
    },
    {
        trigger: document.getElementById('hks'),
        video: '../img/117_el-legado-mobile-preview.mp4',
        images: ['../img/117_ElLegado_preview-01.webp', '../img/117_ElLegado_preview-02.webp', '../img/117_ElLegado_preview-03.webp', '../img/117_ElLegado_preview-04.webp']
    },
    {
        trigger: document.getElementById('agrupa'),
        video: '../img/28_agrupa-mobile-preview.mp4',
        images: ['../img/28_AgrupaNow_preview-01.webp', '../img/28_AgrupaNow_preview-02.webp', '../img/28_AgrupaNow_preview-03.webp', '../img/28_AgrupaNow_preview-04.webp']
    },
    {
        trigger: document.getElementById('sonidoAcido'),
        video: '../img/178_binocular-mobile-preview.mp4',
        images: ['../img/178_binocular_preview-01.webp', '../img/178_binocular_preview-02.webp', '../img/178_binocular_preview-03.webp', '../img/178_binocular_preview-04.webp', '../img/178_binocular_preview-05.webp']
    },
    {
        trigger: document.getElementById('fueraDelMolde'),
        video: '../img/177_fuera-del-molde-mobile-preview.mp4',
        images: ['../img/177_fueraDelMolde_preview-01.webp', '../img/177_fueraDelMolde_preview-02.webp', '../img/177_fueraDelMolde_preview-03.webp', '../img/177_fueraDelMolde_preview-04.webp', '../img/177_fueraDelMolde_preview-05.webp']
    },
    {
        trigger: document.getElementById('sprite'),
        video: '../img/171_sprite-mobile-preview.mp4',
        images: ['../img/171_SpriteDaddyYankee_preview-01.webp', '../img/171_SpriteDaddyYankee_preview-02.webp', '../img/171_SpriteDaddyYankee_preview-03.webp', '../img/171_SpriteDaddyYankee_preview-04.webp', '../img/171_SpriteDaddyYankee_preview-05.webp']
    },
    {
        trigger: document.getElementById('kraft'),
        video: '../img/079_kraft-mobile-preview.mp4',
        images: ['../img/079_kraftRicosMomentos_preview-01.webp', '../img/079_kraftRicosMomentos_preview-02.webp', '../img/079_kraftRicosMomentos_preview-03.webp', '../img/079_kraftRicosMomentos_preview-04.webp', '../img/079_kraftRicosMomentos_preview-05.webp']
    }
];

const mobileProjects = projectsTrack
    ? [...projectsTrack.querySelectorAll('.project-title-link')]
        .map((link) => projects.find((project) => project.trigger === link.querySelector('.project-title')))
        .filter(Boolean)
    : projects;

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
const mobileMedia = window.matchMedia('(max-width: 768px)');
let mobileProjectIndex = 0;
let mobileReelInitialized = false;
let mobileOriginalLinks = [];
let mobileSlides = [];
let activeMobileSlide = null;
let mobileScrollTimer = null;
let mobileResizeTimer = null;

function isMobileProjectExperience() {
    return mobileMedia.matches;
}

function playDesktopBackgroundVideo() {
    if (!bgVideo || isMobileProjectExperience()) {
        return;
    }

    bgVideo.defaultMuted = true;
    bgVideo.muted = true;
    bgVideo.playsInline = true;
    bgVideo.play().catch(() => {});
}

function createMobileSlideVideo(slide) {
    const project = mobileProjects[Number(slide.dataset.projectIndex)];
    if (!project?.video) {
        return null;
    }

    const video = document.createElement('video');
    video.className = 'mobile-slide-video';
    video.dataset.src = project.video;
    video.poster = project.images[0];
    video.loop = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = 'none';
    video.controls = false;
    video.disablePictureInPicture = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('aria-hidden', 'true');
    slide.prepend(video);
    return video;
}

function prepareMobileSlideVideo(video, eager = false) {
    if (!video) {
        return;
    }

    video.preload = eager ? 'auto' : 'metadata';
    if (!video.getAttribute('src')) {
        video.src = video.dataset.src;
        video.load();
    }
}

function activateMobileSlide(slide) {
    if (!slide || slide === activeMobileSlide) {
        return;
    }

    activeMobileSlide = slide;
    mobileProjectIndex = Number(slide.dataset.projectIndex);
    const activePosition = mobileSlides.indexOf(slide);

    mobileSlides.forEach((candidate, index) => {
        const video = candidate.querySelector('.mobile-slide-video');
        const isActive = candidate === slide;
        const isAdjacent = Math.abs(index - activePosition) <= 1;
        candidate.classList.toggle('is-active', isActive);

        if (isAdjacent) {
            prepareMobileSlideVideo(video, isActive);
        }

        if (isActive && !reducedMotion.matches) {
            video?.play().catch(() => {});
        } else {
            video?.pause();
        }
    });
}

function jumpToMobileSlide(position) {
    if (!projectsViewport || !mobileSlides[position]) {
        return;
    }

    projectsViewport.style.scrollSnapType = 'none';
    projectsViewport.scrollTop = position * projectsViewport.clientHeight;
    activateMobileSlide(mobileSlides[position]);
    window.requestAnimationFrame(() => {
        projectsViewport.style.scrollSnapType = '';
    });
}

function settleMobileReel() {
    if (!projectsViewport || !mobileReelInitialized) {
        return;
    }

    const position = Math.round(projectsViewport.scrollTop / projectsViewport.clientHeight);
    const lastRealPosition = mobileOriginalLinks.length;

    if (position === 0) {
        jumpToMobileSlide(lastRealPosition);
    } else if (position === lastRealPosition + 1) {
        jumpToMobileSlide(1);
    } else {
        activateMobileSlide(mobileSlides[position]);
    }
}

function handleMobileReelScroll() {
    if (!projectsViewport || !mobileReelInitialized) {
        return;
    }

    const position = Math.max(0, Math.min(
        mobileSlides.length - 1,
        Math.round(projectsViewport.scrollTop / projectsViewport.clientHeight)
    ));
    activateMobileSlide(mobileSlides[position]);
    window.clearTimeout(mobileScrollTimer);
    mobileScrollTimer = window.setTimeout(settleMobileReel, 100);
}

function initializeMobileReel() {
    if (!projectsTrack || !projectsViewport || mobileReelInitialized || !mobileProjects.length) {
        return;
    }

    bgVideo?.pause();
    mobileReelInitialized = true;
    mobileOriginalLinks = [...projectsTrack.querySelectorAll(':scope > .project-title-link')];
    mobileOriginalLinks.forEach((link) => {
        const project = projects.find((item) => item.trigger === link.querySelector('.project-title'));
        link.dataset.projectIndex = String(mobileProjects.indexOf(project));
        link.tabIndex = 0;
        link.setAttribute('aria-hidden', 'false');
    });

    const lastClone = mobileOriginalLinks[mobileOriginalLinks.length - 1].cloneNode(true);
    const firstClone = mobileOriginalLinks[0].cloneNode(true);
    [lastClone, firstClone].forEach((clone) => {
        clone.dataset.mobileClone = 'true';
        clone.tabIndex = -1;
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelector('[id]')?.removeAttribute('id');
    });

    projectsTrack.prepend(lastClone);
    projectsTrack.append(firstClone);
    mobileSlides = [...projectsTrack.querySelectorAll(':scope > .project-title-link')];
    mobileSlides.forEach(createMobileSlideVideo);
    projectsViewport.addEventListener('scroll', handleMobileReelScroll, { passive: true });

    window.requestAnimationFrame(() => jumpToMobileSlide(1));
}

function teardownMobileReel() {
    if (!projectsTrack || !projectsViewport || !mobileReelInitialized) {
        return;
    }

    window.clearTimeout(mobileScrollTimer);
    window.clearTimeout(mobileResizeTimer);
    projectsViewport.removeEventListener('scroll', handleMobileReelScroll);
    projectsTrack.querySelectorAll('[data-mobile-clone="true"]').forEach((clone) => clone.remove());
    projectsTrack.querySelectorAll('.mobile-slide-video').forEach((video) => {
        video.pause();
        video.remove();
    });
    mobileOriginalLinks.forEach((link) => link.removeAttribute('data-project-index'));
    projectsViewport.scrollTop = 0;
    mobileSlides = [];
    mobileOriginalLinks = [];
    activeMobileSlide = null;
    mobileReelInitialized = false;
}

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

    if (isMobileProjectExperience()) {
        projectsViewport?.scrollBy({
            top: direction * projectsViewport.clientHeight,
            behavior: reducedMotion.matches ? 'auto' : 'smooth'
        });
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

    const mobileOffset = 0;
    const startY = direction > 0 ? mobileOffset : mobileOffset - rowHeight;
    const endY = direction > 0 ? mobileOffset - rowHeight : mobileOffset;
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
        projectsTrack.style.transform = mobileOffset
            ? `translate3d(0, ${mobileOffset}px, 0)`
            : '';
        projectsTrack.classList.remove('is-moving');
        menuIsMoving = false;
        updateVisibleProjects();
    });
}

projectsViewport?.addEventListener('wheel', (event) => {
    if (isMobileProjectExperience()) {
        return;
    }

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

    link.addEventListener('focus', () => {
        if (!isMobileProjectExperience()) {
            startSequence(project);
        }
    });
    link.addEventListener('blur', () => {
        if (!isMobileProjectExperience()) {
            stopSequence();
        }
    });
}

if (bgImage && backgroundImage) {
    projects.forEach(bindProjectPreview);
}

if (isMobileProjectExperience()) {
    initializeMobileReel();
} else {
    updateVisibleProjects();
    playDesktopBackgroundVideo();
    bgVideo?.addEventListener('canplay', playDesktopBackgroundVideo, { once: true });
}

reducedMotion.addEventListener('change', ({ matches }) => {
    if (matches) {
        stopSequence();
        if (isMobileProjectExperience()) {
            activeMobileSlide?.querySelector('.mobile-slide-video')?.pause();
        } else {
            playDesktopBackgroundVideo();
        }
    } else if (isMobileProjectExperience()) {
        activeMobileSlide?.querySelector('.mobile-slide-video')?.play().catch(() => {});
    } else {
        playDesktopBackgroundVideo();
    }
});

mobileMedia.addEventListener('change', ({ matches }) => {
    if (matches) {
        initializeMobileReel();
    } else {
        teardownMobileReel();
        updateVisibleProjects();
        bgVideo?.load();
        playDesktopBackgroundVideo();
    }
});

window.addEventListener('resize', () => {
    if (!isMobileProjectExperience() || !mobileReelInitialized) {
        playDesktopBackgroundVideo();
        return;
    }

    window.clearTimeout(mobileResizeTimer);
    mobileResizeTimer = window.setTimeout(() => {
        const activePosition = mobileSlides.findIndex((slide) => (
            !slide.dataset.mobileClone
            && Number(slide.dataset.projectIndex) === mobileProjectIndex
        ));
        jumpToMobileSlide(activePosition > 0 ? activePosition : 1);
    }, 120);
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        window.cancelAnimationFrame(animationFrameId);
        mobileSlides.forEach((slide) => slide.querySelector('.mobile-slide-video')?.pause());
    } else if (isMobileProjectExperience() && !reducedMotion.matches) {
        activeMobileSlide?.querySelector('.mobile-slide-video')?.play().catch(() => {});
    } else if (activeProject) {
        animationFrameId = window.requestAnimationFrame(showNextFrame);
    } else {
        playDesktopBackgroundVideo();
    }
});
