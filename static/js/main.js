// main.js — students will add JavaScript here as features are built

// Video Modal Functionality
(function() {
    const modal = document.getElementById('video-modal');
    const trigger = document.querySelector('[data-modal-trigger]');
    const closeBtn = modal.querySelector('.modal-close');
    const video = document.getElementById('modal-video');
    const videoSrc = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    function openModal() {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        video.src = videoSrc;
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        video.src = '';
    }

    if (trigger) {
        trigger.addEventListener('click', openModal);
    }

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
