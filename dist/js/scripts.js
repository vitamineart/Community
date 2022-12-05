gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.create({
//     trigger: '#dropcap',
//     start: 'bottom 100%',
//     markers: true,
//     toggleActions: 'restart none reverse none',
//     toggleClass: 'animate__wobble'
// })

ScrollTrigger.matchMedia({
    "(max-width:899px)": function () {
        const boxes = gsap.utils.toArray('.card');

        boxes.forEach((box, i) => {
        const anim = gsap.from(box, {opacity: 0, y: 50, scale:.8, duration: .6, delay: i * 0.1, ease: 'circ.Out()'});
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
gsap.from(".hero-bg-planet", {
    scrollTrigger: {
        trigger: '.hero-bg-planet',
    },
    opacity: 0,
    scale: 0,
    filter: 'blur(5px)',
    rotate: 20,
    duration: 5,
    ease: 'expo.out()'
})

