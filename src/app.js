const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');



const PageTransitions = () => {


    // BUTTON CLICK - ACTIVE CLASS
    sectBtn.forEach((btn) => {

        btn.addEventListener('click', function () {

            const currentBtn = document.querySelector('.active-btn');

            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }

            this.classList.add('active-btn');

        });

    });




    // SECTION TRANSITIONS
    allSections.addEventListener('click', (e) => {

        const id = e.target.dataset.id;

        if (id) {

            // Remove selected state from other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });

            e.target.classList.add('active');



            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });



            // Activate selected section
            const element = document.getElementById(id);

            if (element) {
                element.classList.add('active');
            }

        }

    });




    // TOGGLE THEME
    const themeBtn = document.querySelector('.theme-btn');

    if (themeBtn) {

        themeBtn.addEventListener('click', () => {

            document.body.classList.toggle('light-mode');

        });

    }




    // AUTOMATIC THEME BASED ON TIME
    const currentHour = new Date().getHours();

    if (currentHour >= 7 && currentHour < 19) {

        // Daytime: 7AM - 7PM
        document.body.classList.add('light-mode');

    } else {

        // Nighttime: 7PM - 7AM
        document.body.classList.remove('light-mode');

    }




    // BASIC CONTENT PROTECTION
    // Disable right-click / context menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });



    // Disable common keyboard shortcuts used for inspecting/saving
    document.addEventListener('keydown', (e) => {

        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            return;
        }

        // Ctrl + Shift + I
        if (
            e.ctrlKey &&
            e.shiftKey &&
            e.key.toLowerCase() === 'i'
        ) {
            e.preventDefault();
            return;
        }

        // Ctrl + Shift + J
        if (
            e.ctrlKey &&
            e.shiftKey &&
            e.key.toLowerCase() === 'j'
        ) {
            e.preventDefault();
            return;
        }

        // Ctrl + Shift + C
        if (
            e.ctrlKey &&
            e.shiftKey &&
            e.key.toLowerCase() === 'c'
        ) {
            e.preventDefault();
            return;
        }

        // Ctrl + U - View source
        if (
            e.ctrlKey &&
            e.key.toLowerCase() === 'u'
        ) {
            e.preventDefault();
            return;
        }

        // Ctrl + S - Save page
        if (
            e.ctrlKey &&
            e.key.toLowerCase() === 's'
        ) {
            e.preventDefault();
            return;
        }

    });




    // PREVENT DRAGGING IMAGES
    document.querySelectorAll('img').forEach((img) => {

        img.setAttribute('draggable', 'false');

        img.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

    });




    // PREVENT TEXT SELECTION
    document.addEventListener('selectstart', (e) => {

        // Allow selection inside inputs/textareas
        if (
            e.target.tagName === 'INPUT' ||
            e.target.tagName === 'TEXTAREA'
        ) {
            return;
        }

        e.preventDefault();

    });

};



PageTransitions();
