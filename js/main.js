const emailSwitch = document.getElementById('email-switch');
const landingPagesSwitch = document.getElementById('pages-switch');
const websitesSwitch = document.getElementById('websites-switch');
const emailContainer = document.getElementById('emails');
const landingPageContainer = document.getElementById('landing-pages');
const websitesContainer = document.getElementById('websites');

emailSwitch.addEventListener('click', () => {
    emailContainer.style.display = 'grid';
    landingPageContainer.style.display = 'none';
    websitesContainer.style.display = 'none';
});

landingPagesSwitch.addEventListener('click', () => {
    emailContainer.style.display = 'none';
    landingPageContainer.style.display = 'grid';
    websitesContainer.style.display = 'none';
});

websitesSwitch.addEventListener('click', () => {
    emailContainer.style.display = 'none';
    landingPageContainer.style.display = 'none';
    websitesContainer.style.display = 'grid';
});

//scroll to

const projectsBtn = document.getElementById('projects-btn');
const projectsSection = document.getElementById('projects');

projectsBtn.addEventListener('click', () => {

    //focus email switch for projects
    setTimeout(() => {emailSwitch.focus();}, 400)
    scrollToSection(projectsSection);
})

function scrollToSection(s){
    const offsetTop = s.offsetTop; 

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });

}