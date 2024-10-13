
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".imgLeft", {
        x: "-90%", 
    });

    gsap.to(".imgLeft", {
        scrollTrigger: {
            trigger: ".imgLeft",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
            
        },
        x: "10%", 
        
        duration: 3,
    });
    gsap.set(".imgLeft2", {
        x: "-90%", 
    });

    gsap.to(".imgLeft2", {
        scrollTrigger: {
            trigger: ".imgLeft2",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
            
        },
        x: "-40%", 
        
        duration: 3,
    });




    gsap.set(".imgRight", {
        x: "90%", 
    });

    gsap.to(".imgRight", {
        scrollTrigger: {
            trigger: ".imgRight",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
            
        },
        x: "10%", 
        opacity: 1,
        duration: 3,
    });



    
    gsap.set(".imgRight2", {
        x: "90%", 
    });

    gsap.to(".imgRight2", {
        scrollTrigger: {
            trigger: ".imgRight2",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
            
        },
        x: "10%", 
        opacity: 1,
        duration: 3,
    });


    gsap.set(".imgRight2", {
        x: "90%", 
    });

    gsap.to(".imgRight2", {
        scrollTrigger: {
            trigger: ".imgRight2",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
            
        },
        x: "10%", 
        opacity: 1,
        duration: 3,
    });

    
});



