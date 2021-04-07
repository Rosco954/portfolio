const emailSwitch = document.getElementById('email-switch');
const landingPagesSwitch = document.getElementById('pages-switch');
const emailContainer = document.getElementById('emails');
const landingPageContainer = document.getElementById('landing-pages');

emailSwitch.addEventListener('click', () => {
    emailContainer.style.display = 'grid';
    landingPageContainer.style.display = 'none';
})

landingPagesSwitch.addEventListener('click', () => {
    emailContainer.style.display = 'none';
    landingPageContainer.style.display = 'grid';
})