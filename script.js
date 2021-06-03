let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

   let swiperPortofolio = new Swiper(".swiper-portofolio", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      $(document).ready(function(){
        $("a").on('click', function(event) {
             
         if (this.hash !== "") {
             event.preventDefault();
             let hash = this.hash;
             
             $('html, body').animate({
               scrollTop: $(hash).offset().top
             }, 1000, function(){
             window.location.hash = hash;
             });
           } 
         });
       });
      
       
      