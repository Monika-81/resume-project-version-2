function sendMail (contactForm) {
    emailjs.send("service_8rdojmg","template_hstyoqf", {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailadress.value,
        'project_request': contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log('SUCCESS', response);
        }, 
        function(error) {
            console.log('FAILED', error);
        });
        return false;
}