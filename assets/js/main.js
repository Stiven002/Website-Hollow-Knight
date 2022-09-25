const moreOptions = document.querySelector('#btn-more'),
        bShowMobileLinks = document.querySelector('#btn-menu'),
        mobileMenu = document.querySelector('.links'),
        moreMenu = document.querySelector('.more .menu');

bShowMobileLinks.addEventListener('click', (e) =>{
    e.preventDefault();
    mobileMenu.classList.toggle('show');
});

moreOptions.addEventListener('click', (e) =>{
    e.preventDefault();
    moreMenu.classList.toggle('show');
});

const videos = [
    {
        id: "nSPJXlYjENE",
    },
    {
        id: "UAO2urG23S4",
    },
    {
        id: "yQxwbZsL14Y",
    },
    {
        id: "kWo5g-tsBNk",
    },
    {
        id: "FzzsWP2GWmg",
    },
];

const sliderContainer = document.querySelector('#slider'),
        currentContainer = document.querySelector('#curren'),
        videosContainer = document.querySelector('#videos-container'),
        bNext = document.querySelector('#next'),
        bPrev = document.querySelector('#prev');
        let current = 0;

        bNext.addEventListener("click", (e) => {
            let changed = current;
            current = current + 1 < videos.length ? current + 1 : current;
            if (current !== changed) {
            renderCurrentVideo(videos[current].id);
        }
        });
        
        bPrev.addEventListener("click", (e) => {
            let changed = current;
            current = current - 1 >= 0 ? current - 1 : current;
            if (current !== changed) {
            renderCurrentVideo(videos[current].id);
        }
        });
        
        renderCurrentVideo(videos[current].id);
        renderVideos();
        
        function renderCurrentVideo(id) {
            currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
        
        function renderVideos() {
            const html = videos.map((video, index) => {
            return `
            <div class="item">
                <a href="#" data-id="${index}">
                <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg" />
                </a>
            </div>`;
        });
        
            videosContainer.innerHTML = html.join("");
        
            document.querySelectorAll(".item a").forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const id = +item.getAttribute("data-id");
                current = id;
                renderCurrentVideo(videos[current].id);
            });
        });
}

// dark light theme
const themeButton = document.getElementById('theme-button')
const themeButtonPc = document.getElementById('theme-button-1')
const themeButtonLogo = document.getElementById('logo-dark')
const lightLogo = document.getElementById('logo-light')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
const LogoTheme = 'active'


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const selectedIconPc = localStorage.getItem('selected-icon-pc')
const selectedLogo = localStorage.getItem('selected-logo')
const selectedLogoLight = localStorage.getItem('selected-logo-light')


// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
const getCurrentIconPc = () => themeButtonPc.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
const getCurrentLogo = () => themeButtonLogo.classList.contains(LogoTheme) ? 'logo' : 'active'
const getCurrentLogoLight = () => lightLogo.classList.contains(LogoTheme) ? 'active' : 'logo'
// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
    themeButtonPc.classList[selectedIconPc === 'bx-moon' ? 'add' : 'remove'](iconTheme)
    themeButtonLogo.classList[selectedLogo === 'logo' ? 'add' : 'remove'](LogoTheme)
    lightLogo.classList[selectedLogoLight === 'active' ? 'add' : 'remove'](LogoTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

themeButtonPc.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButtonPc.classList.toggle(iconTheme)
    themeButtonLogo.classList.toggle(LogoTheme)
    lightLogo.classList.toggle(LogoTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon-pc', getCurrentIconPc())
    localStorage.setItem('selected-logo', getCurrentLogo())
    localStorage.setItem('selected-logo-light', getCurrentLogoLight())
})


