function toggleAnswer(element) {
    const faqAnswer = element.nextElementSibling;
    const faqIcon = element.querySelector('.arrow');
    const arrowDownIcon = '<i class="fa-solid fa-caret-down"></i>';
    const arrowUpIcon = '<i class="fa-solid fa-caret-up"></i>';

    if (faqAnswer.style.display === "block") {
        faqAnswer.style.display = "none";
        faqIcon.innerHTML = arrowDownIcon;
    } else {
        faqAnswer.style.display = "block";
        faqIcon.innerHTML = arrowUpIcon;
    }
}

const menuToggle = document.getElementById('mobile-navbar');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});
