const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

const PageTransitions = () => {
    //Button click active class
    sectBtn.forEach((btn, i) => {
        btn.addEventListener('click', function () {
            const currentBtn = document.querySelector('.active-btn');
            currentBtn.className = currentBtn.className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    })

    //Sections Active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode')
    })

    // Automatic theme change based on time of day
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 18) {
        // Day time (6AM - 6PM), use light mode
        document.body.classList.add('light-mode');
    } else {
        // Night time (6PM - 6AM), use dark mode
        document.body.classList.remove('light-mode');
    }
}

PageTransitions();
