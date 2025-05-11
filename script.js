$(document).ready(function() {
    // Contact form submission
    $("#contactForm").on('submit', function(e) {
        e.preventDefault();
        
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    Swal.fire({
                        title: 'Success!',
                        text: response.message,
                        icon: 'success',
                        confirmButtonColor: '#23b410',
                        background: '#1a1a1a',
                        color: 'white'
                    });
                    $("#contactForm")[0].reset();
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: response.message,
                        icon: 'error',
                        confirmButtonColor: '#ff0000'
                    });
                }
            },
            error: function() {
                Swal.fire({
                    title: 'Connection Error!',
                    text: 'Could not send message. Please try again later.',
                    icon: 'error',
                    confirmButtonColor: '#ff0000'
                });
            }
        });
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Full Stack Developer","Passionate Coder","Tech Enthusiast","Motivated Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
        
    });
    var typed = new Typed(".typing-2",{
        strings: ["Full Stack Developer","Passionate Coder","Tech Enthusiast","Motivated Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

     // Scroll to top button script
      const btnScrollToTop = document.querySelector("#btnScrollToTop");

      btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });