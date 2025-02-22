const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    const circle = document.createElement("div");
    circle.classList.add("hover-transition");
    circle.style.backgroundColor = "aqua";
    circle.style.borderRadius = "50%";
    circle.style.width = "0px";
    circle.style.height = "0px";
    circle.style.position = "absolute";
    circle.style.transform = "translate(-50%, -50%)";
    box.appendChild(circle);

    box.addEventListener("mousemove", (e) => {
        const boxRect = box.getBoundingClientRect();
        let x = e.clientX - boxRect.left;
        let y = e.clientY - boxRect.top;

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    });

    box.addEventListener("mouseenter", () => {
        gsap.to(circle, {
            duration: 0.7,
            width: '2000px',
            height: '2000px',
        });

        gsap.to(box, {
            scale: 1.1,
            duration: 0.5,
        });

        gsap.to(box.querySelector(".prev-content"), {
            opacity: 0,
            duration: 0.4,
        });

        gsap.to(box.querySelector(".next-content"), {
            opacity: 1,
            duration: 0.5,
        });
    });

    box.addEventListener("mouseleave", () => {
        gsap.to(circle, {
            duration: 0.5,
            width: '0px',
            height: '0px',
        });

        gsap.to(box, {
            scale: 1,
            duration: 1,
        });

        gsap.to(box.querySelector(".prev-content"), {
            opacity: 1,
            duration: 1,
        });

        gsap.to(box.querySelector(".next-content"), {
            opacity: 0,
            duration: 0.4,
        });
    });
});
