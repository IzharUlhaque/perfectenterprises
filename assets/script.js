	    // Pup UP Contact Form
  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  window.addEventListener("load",function(){
 
   showPopup();
   setTimeout(function(){
    $('body').addClass('active-modal');
   },5000)

  })

  function showPopup(){
        const timeLimit = 1// seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
          $('.container' ).addClass('blur' );
          $('.container' ).addClass('shadow1' );
         } 
         // console.log(i)
        },1000);
  }


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
    $('.container' ).removeClass('blur' );
  })



var scroll = new SmoothScroll('a[href*="#"]');

// ========================

// =========================================
$('#enquiry').on('submit', function(e){
  // e.preventDefault();
  alert('submiited')
})
// ========================================================================================

  //Javacript for the scroll indicator bar

    window.addEventListener("scroll", () => {
      const indicatorBar = document.querySelector(".scroll-indicator-bar");

      const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = (pageScroll / height) * 100;

      indicatorBar.style.width = scrollValue + "%";
    });

    //Responsive navigation menu toggle
    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      navigation.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      navigation.classList.remove("active");
    });

