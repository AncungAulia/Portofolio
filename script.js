const links = document.querySelectorAll('.nav-list a');
links.forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});