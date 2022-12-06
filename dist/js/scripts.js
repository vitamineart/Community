const cards = Array.from(document.querySelectorAll('.friends-grid .card'));

const randomCards = cards.sort(randomizeFunc);

function randomizeFunc(a, b) {
  return 0.5 - Math.random();
}

document.querySelector('.friends-grid').innerHTML = '';
randomCards.forEach((card, index)=>{
    document.querySelector('.friends-grid').appendChild(card)
    card.classList.add(`card-${index+1}`)
})

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(max-width:899px)": function () {
        const boxes = gsap.utils.toArray('.card');

        boxes.forEach((box, i) => {
        const anim = gsap.from(box, {opacity: 0, y: 50, scale:.8, duration: .6, delay: i * 0.07, ease: 'circ.Out()'});
            ScrollTrigger.create({
                trigger: box,
                animation: anim,
                toggleActions: 'play none none none',
                once: true,
            });
        });
    },
    "(min-width:900px)": function () {

        gsap.from(".friends-grid .card", {
            scrollTrigger: {
                trigger: '.friends-grid',
                start: '5% 80%',
            },
            opacity: 0,
            scale: 0,
            duration: 1.5,
            stagger: {
                amount: 1,
                from:"random",
                grid:"auto"
            },
            ease: 'expo.out()'

        })
    }
})
gsap.fromTo(".hero-bg-planet", {
    scrollTrigger: {
        trigger: '.hero-bg-planet',
    },
    opacity: 0,
    scale: 0,
    filter: 'blur(5px)',
    rotate: 0,
}, {
    opacity: 1,
    scale: 1.5,
    filter: 'none',
    rotate: -20,
    duration: 5,
    ease: 'expo.out()'

})
gsap.fromTo(".friends-collage", {
    scrollTrigger: {
        trigger: '.friends-collage',
    },
    opacity: 0,
    scale: 0,
}, {
    opacity: 1,
    scale: 1,
    duration: 3,
    ease: 'expo.out()'

}
)


