
const box = document.querySelector(".box");
const circle = document.querySelector(".hover-transition");
const circleRadius = 20;

box.addEventListener("mousemove", (e) => {
    const boxRect = box.getBoundingClientRect();
    let x = e.clientX - boxRect.left;
    let y = e.clientY - boxRect.top;

    // Constrain within box
    x = Math.max(circleRadius, Math.min(x, boxRect.width - circleRadius));
    y = Math.max(circleRadius, Math.min(y, boxRect.height - circleRadius));

    // circle.style.transform = `translate(${x - circleRadius}px, ${y - circleRadius}px)`

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // gsap.to(circle, {
        
    //     duration: 1,
    //     width: '200px',
    //     height: '200px',
    // });
});

box.addEventListener("mouseenter", (e) => {
    gsap.to(circle, {
        duration: 0.7,
        width: '2000px',
        height: '2000px',
    })

    gsap.to(box, {
        scale: 1.1,
        duration: 0.5,

    })

    gsap.to(".prev-content", {
        opacity: 0,
        duration: 0.4,
    })

    gsap.to(".next-content", {
        opacity: 1,
        duration: 0.5,
        
    })


})

box.addEventListener("mouseleave", (e) => {
    gsap.to(circle, {
        duration: 0.5,
        width: '0px',
        height: '0px',
    })
    gsap.to(box, {
        scale: 1,
        duration: 1,
    
    })

    gsap.to(".prev-content", {
        opacity: 1,
        duration: 1,
    })

    gsap.to(".next-content", {
        opacity: 0,
        duration: 0.4,
        
    })
})


