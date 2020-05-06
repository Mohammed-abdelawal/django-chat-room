
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});




var elems = document.querySelectorAll('.carousel');
var instances = M.Carousel.init(elems,
    options = {
        indicators: true,


    });


setInterval(function () {
    $('.carousel').carousel('next');
}, 5000);



document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });
