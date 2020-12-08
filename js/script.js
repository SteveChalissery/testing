const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover',function(e){
    span.classList.remove('animated','rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssbar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')


var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75,{width: `calc(0% - 6px)`},{width: `calc(90% - 6px)`, ease: Power4.easeout})
  .fromTo(cssbar, .75, {width: `calc(0% - 6px)`},{width: `calc(60% - 6px)`, ease: Power4.easeout})
  .fromTo(jsBar, .75,  {width: `calc(0% - 6px)`},{width: `calc(40% - 6px)`,ease: Power4.easeout})
  .fromTo(reactBar, .75, {width: `calc(0% - 6px)`},{width: `calc(80% - 6px)`,ease: Power4.easeout})



const controller = new Scrollmagic.controller()
const scene = new Scrollmagic.scene(
    {
        triggerElement: 'skills',
        triggerHook: 0
    }
)
.setTween(t1)
.addTo(controller)


const showRequiredCategory = event => {
    const getId= event.getId
    const links = document.querySelectorAll('.work-category button')
    for(i-0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }

   event.classList.add('active')
   const getCategory = document.querySelector(`.category-${getId}`)
   const categories = document.querySelectorAll(`div[class ^= "category-"]`)
   for(i=0;i<categories.length; i++){
       if(categories[i].hasAttribute('class')) {
           categories[i].classList.remove('showCategory')
           categories[i].classList.add('hideCategory')
       }
   }


   getCategory.classList.remove('hideCategory')
   getCategory.classList.add('showCategory')

}





    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });