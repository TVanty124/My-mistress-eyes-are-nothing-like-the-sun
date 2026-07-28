gsap.registerPlugin(ScrollTrigger);

/* MOUSE */
const mouse = document.querySelector(".mouse");

document.addEventListener("mousemove", (e) => {
    gsap.to(mouse, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        rotate: 12,
        ease: "power2.out"
    });
});
/* SCENE 2 - EYE */

const scene2TL = gsap.timeline({

    scrollTrigger:{

        trigger:".scene2",

        start:"top top",

        end:"bottom bottom",

        scrub:true,

        // markers:true

    }

});

gsap.set(".eye2",{
    rotation:-18,
    scale:1
});



scene2TL.to(".eye2",{

    x:-800,

    y:900,

    rotation:-45,

    ease:"none"

},0.20);

scene2TL.to(".eye2",{

    x:-900,

    y:1300,

    rotation:-90,

    ease:"none"

},0.38);

scene2TL.to(".eye2",{

    x:100,

    y:1700,

    rotation:-135,

    ease:"none"

},0.56);

scene2TL.to(".eye2",{

    x:-180,

    y:2200,

    rotation:-180,

    ease:"none"

},0.74);

scene2TL.to(".eye2",{

    x:50,

    y:2800,

    rotation:-220,

    scale:0.75,

    ease:"none"

},0.92);

/* POEM */

/* Coral */

scene2TL.to(".poem2 span",{

    opacity:1,

},0.18);

scene2TL.to(".poem2 span",{

    opacity:0,

},0.100);


/* is far more red */

scene2TL.to(".poem25 span",{

    opacity:1,

},0.50);

scene2TL.to(".poem25 span",{

    opacity:0,

},0.180);


/* than her lips' red */

scene2TL.to(".poem26 span",{

    opacity:1,

},0.99);

scene2TL.to(".poem26 span",{

    opacity:0,



},0.98);

/* SNOW */
const container = document.querySelector(".snow-container");

let snowInterval = null;

function createSnow(){

    const snow = document.createElement("img");

    snow.src = "Image/snow.png";

    snow.className = "snow";

    snow.style.left = Math.random()*100 + "%";

    const size = 700 + Math.random()*70;
    snow.style.width = size + "px";

    snow.style.opacity = 0.35 + Math.random()*0.65;

    const duration = 8 + Math.random()*6;

    snow.style.animation = `fall ${duration}s linear forwards`;

    container.appendChild(snow);

    snow.addEventListener("animationend",()=>{
        snow.remove();
    });

}

ScrollTrigger.create({

    trigger: ".scene3",

    start: "top bottom",

    end: "bottom top",

    onEnter(){

        if(!snowInterval){

            snowInterval = setInterval(createSnow,250);

        }

    },

    onLeave(){

        clearInterval(snowInterval);

        snowInterval = null;

    },

    onEnterBack(){

        if(!snowInterval){

            snowInterval = setInterval(createSnow,250);

        }

    },

    onLeaveBack(){

        clearInterval(snowInterval);

        snowInterval = null;

    }

});

/* SCENE 4 */

ScrollTrigger.create({

    trigger: ".scene4",

    start: "top center",

    end: "bottom center",

    onEnter(){
        mouse.src = "Image/mouse2.png";
        mouse.style.width = "100px";   
    },

    onLeave(){
        mouse.src = "Image/mouse.png";
        mouse.style.width = "400px";
    },

    onEnterBack(){
        mouse.src = "Image/mouse2.png";
        mouse.style.width = "100px";   
    },

    onLeaveBack(){
        mouse.src = "Image/mouse.png";
        mouse.style.width = "400px";
    }

});

/* SCENE 4.2 */
const scene4 = document.querySelector(".scene4");

const mirror1 = document.querySelector(".mirror1");
const mirror2 = document.querySelector(".mirror2");

const doodle1 = document.querySelector(".doodle1");
const doodle2 = document.querySelector(".doodle2");

let changed = false;

scene4.addEventListener("click",()=>{

    changed = !changed;

    scene4.classList.toggle("changed");

    if(changed){

        mirror1.src="Image/mirror3.png";
        mirror2.src="Image/mirror4.png";

        doodle1.src="Image/doodle3.png";
        doodle2.src="Image/doodle4.png";
    }else{

        mirror1.src = "Image/mirror1.png";
        mirror2.src = "Image/mirror2.png";

        doodle1.src = "Image/doodle1.png";
        doodle2.src = "Image/doddle2.png";
    }

});

/* POEM */

const poem40 = document.querySelector(".poem40");

scene4.addEventListener("click",()=>{

    poem40.classList.toggle("changed");

});

/* SCENE 5 */

let tl = gsap.timeline({

    scrollTrigger:{

        trigger:".scene5",

        start:"top top",

        end:"+=1800",

        scrub:true,

        markers:false

    }

});

tl.to(".flower",{

    x:100,

    y:220,

    rotation:20,

    duration:0.15,

    ease:"none"

})

.to(".flower",{

    x:240,

    y:520,

    rotation:55,

    duration:0.20,

    ease:"none"

})

.to(".flower",{

    x:180,

    y:900,

    rotation:110,

    duration:0.20,

    ease:"none"

})

.to(".flower",{

    x:420,

    y:1300,

    rotation:180,

    duration:0.20,

    ease:"none"

})

.to(".flower",{

    x:650,

    y:1800,

    rotation:260,

    duration:0.25,

    ease:"none"

});

/* POEM */

document.querySelectorAll(".chaos").forEach(word=>{

    const text = word.textContent.trim();

    word.innerHTML = "";

    [...text].forEach(letter=>{

        const span = document.createElement("span");

        span.innerHTML = letter === " " ? "&nbsp;" : letter;

        span.style.display = "inline-block";

        const x = (Math.random()-0.5)*180;
        const y = (Math.random()-0.5)*120;
        const r = (Math.random()-0.5)*180;
        const s = 0.8 + Math.random()*0.5;

        span.style.transform =
        `translate(${x}px,${y}px)
         rotate(${r}deg)
         scale(${s})`;

        span.style.transition =
        "transform .8s cubic-bezier(.22,.61,.36,1)";

        word.appendChild(span);

    });

});

function assemble(word){

    const letters = word.querySelectorAll("span");

    letters.forEach((letter,index)=>{

        setTimeout(()=>{

            letter.style.transform =
            "translate(0px,0px) rotate(0deg) scale(1)";

        },index*35);

    });

}


const roses = document.querySelector(".roses");

const red = document.querySelector(".red");

const white = document.querySelector(".white");


roses.addEventListener("mouseenter",()=>{

    assemble(roses);

});


red.addEventListener("mouseenter",()=>{

    assemble(red);

});


white.addEventListener("mouseenter",()=>{

    assemble(white);

});

gsap.fromTo(".poem55",
{
    opacity:0,
    filter:"blur(12px)"
},
{
    opacity:1,
    filter:"blur(0px)",
    ease:"none",

    scrollTrigger:{
        trigger:".scene5",
        start:"top top",
        end:"bottom bottom",
        scrub:true,

    }
});

/*SCENE 6*/

const perfume = document.querySelector(".perfumeBottle");
const spray = document.querySelector(".spray");

const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");

let perfumeChanged = false;

/*SPRAY*/

function sprayPerfume(){

    spray.innerHTML = "";

    gsap.timeline()

    .to(".perfumeBottle",{

        rotation:-10,
        duration:0.08,
        ease:"power2.out"

    })

    .to(".perfumeBottle",{

        rotation:7,
        duration:0.08,
        ease:"power2.out"

    })

    .to(".perfumeBottle",{

        rotation:-3,
        duration:0.06

    })

    .to(".perfumeBottle",{

        rotation:0,
        duration:0.06

    });

for(let i=0;i<18;i++){

        const drop = document.createElement("div");

        drop.className = "drop";

        spray.appendChild(drop);


        const angle = gsap.utils.random(-12,12);

        const distance = gsap.utils.random(180,340);

        const size = gsap.utils.random(5,12);

        const stretch = gsap.utils.random(1.2,2.6);

gsap.set(drop,{

        width:size,

        height:size,

        x:0,

        y:0,

        scaleX:stretch,

        rotation:angle

});

const x = -Math.cos(angle*Math.PI/180) * distance;

const y = Math.sin(angle*Math.PI/180) * distance * 0.25;

gsap.to(drop,{

    x:x,

    y:y,

    opacity:0,

    scale:0.3,

    duration:gsap.utils.random(.6,.9),

    ease:"power2.out",

    onComplete(){

    drop.remove();

}
});
}
}

/*CHANGE TEXT*/

function changePerfumeText(){

if(!perfumeChanged){

    gsap.to(text1,{

    opacity:0,

    y:-20,

    filter:"blur(10px)",

    duration:0.35,

    ease:"power2.out"

});

gsap.fromTo(text2,
{

    opacity:0,

    y:20,

    filter:"blur(10px)"

},

{

    opacity:1,

    y:0,

    filter:"blur(0px)",

    duration:0.45,

    ease:"power2.out"
}

);

}

else{

gsap.to(text2,{

    opacity:0,

    y:-20,

    filter:"blur(10px)",

    duration:0.35,

    ease:"power2.out"

});

gsap.fromTo(text1,
{

    opacity:0,

    y:20,

    filter:"blur(10px)"

},

{

    opacity:1,

    y:0,

    filter:"blur(0px)",

    duration:0.45,

    ease:"power2.out"

}

);

}

    perfumeChanged = !perfumeChanged;

}

/*CLICK*/

perfume.addEventListener("click",()=>{

    sprayPerfume();

    setTimeout(()=>{

        changePerfumeText();

    },250);

});

/*HOVER*/

perfume.addEventListener("mouseenter",()=>{

    sprayPerfume();

    setTimeout(()=>{

        changePerfumeText();

    },250);

});

/*SCENE 7*/

const record = document.querySelector(".record");
const notes = document.querySelectorAll(".note1,.note2,.note3");

const girl = document.querySelector(".scene7Girl");
const box = document.querySelector(".speechBox");

const oldWords = document.querySelectorAll(".line1 span,.line1-2 span");
const newWords = document.querySelectorAll(".line2 span,.line2-2 span");

let scene7Changed = false;


/*INITIAL STATE*/

gsap.set(newWords,{
    opacity:0,
    y:35,
    scale:.7
});


/*RECORD*/

gsap.to(record,{

    rotation:"+=360",

    duration:12,

    repeat:-1,

    ease:"none",

    transformOrigin:"50% 50%"

});


/*NOTES*/

/* NOTES */

notes.forEach((note,index)=>{

    gsap.set(note,{

        opacity:0,

        x:0,

        y:0,

        scale:0.6,

        rotation:0

    });

    gsap.timeline({

        repeat:-1,

        delay:index*0.35

    })

    .to(note,{

        opacity:1,

        scale:1,

        duration:0.15

    })

    .to(note,{

        x:60,

        y:-90,

        rotation:12,

        opacity:0,

        scale:1.2,

        duration:2,

        ease:"power1.out"

    });

});

/*CHANGE TEXT*/

function showSecondSentence(){

    /* Box + Girl */

    gsap.to(box,{
        x:-130,
        duration:.75,
        ease:"back.out(1.8)"
    });

    gsap.to(girl,{
        x:-45,
        duration:.75,
        ease:"back.out(1.8)"
    });


    /* SHOW lINE2 */

    gsap.set(".line2,.line2-2",{
    visibility:"visible",
    opacity:1
    });


    /* REMOVE OLDLINE */

    oldWords.forEach((word,index)=>{

        gsap.to(word,{

            x:gsap.utils.random(-180,-60),

            y:gsap.utils.random(-80,80),

            rotation:gsap.utils.random(-120,120),

            scale:.2,

            opacity:0,

            duration:.45,

            delay:index*.03,

            ease:"power2.out"

        });

    });


    /* SHOW NEWLINE */

    newWords.forEach((word,index)=>{

        gsap.fromTo(word,

        {

            opacity:0,

            y:35,

            scale:.7

        },

        {

            opacity:1,

            y:0,

            scale:1,

            duration:.5,

            delay:.45+index*.04,

            ease:"back.out(1.7)"

        });

    });

}

/*BACK*/

function showFirstSentence(){

    gsap.to(box,{
        x:0,
        duration:.6,
        ease:"power2.out"
    });

    gsap.to(girl,{
        x:0,
        duration:.6,
        ease:"power2.out"
    });


    /* REMOVE NEWLINE */

    newWords.forEach((word,index)=>{

        gsap.to(word,{

            opacity:0,

            y:-25,

            scale:.7,

            duration:.3,

            delay:index*.02

        });

    });


    /* DELETE */

    gsap.delayedCall(.35,()=>{

        gsap.set(".line2,.line2-2",{
    opacity:0,

    visibility:"hidden"

        });

    });


    /* TAKE BACK*/

    oldWords.forEach((word,index)=>{

        gsap.to(word,{

            x:0,

            y:0,

            rotation:0,

            scale:1,

            opacity:1,

            duration:.45,

            delay:.25+index*.02,

            ease:"back.out(1.5)"

        });

    });

}


/*CLICK*/

function playScene7(){

    if(scene7Changed){

        showFirstSentence();

    }

    else{

        showSecondSentence();

    }

    scene7Changed=!scene7Changed;

}

girl.addEventListener("click",playScene7);

box.addEventListener("click",playScene7);

/* SCENE 8 */

const footprints = document.querySelectorAll(
    ".footer1,.footer2,.footer3,.footer4,.footer5,.footer6"
);

footprints.forEach((foot)=>{

    const img = foot.querySelector("img");
    const text = foot.querySelector(".footText");

    gsap.set(text,{
        opacity:0,
        y:20,
        scale:.8
    });


    foot.addEventListener("mouseenter",()=>{

        gsap.to(img,{
            scale:.94,
            rotation:3,
            duration:.25,
            ease:"power2.out"
        });

        gsap.to(text,{
            opacity:1,
            y:0,
            scale:1,
            duration:.45,
            ease:"back.out(1.8)"
        });

    });


    foot.addEventListener("mouseleave",()=>{

        gsap.to(img,{
            scale:1,
            rotation:0,
            duration:.25
        });

        gsap.to(text,{
            opacity:0,
            y:20,
            scale:.8,
            duration:.25,
            ease:"power2.in"
        });

    });

});

/* SCENE 9 */

gsap.registerPlugin(ScrollTrigger);


gsap.set([

    ".dance2",
    ".dance3",
    ".dance4",
    ".dance5",

    ".foot1",
    ".foot2",
    ".foot3",
    ".foot4",
    ".foot5",
    ".foot6",
    ".foot7",
    ".foot8",
    ".foot9",
    ".foot10",
    ".foot11",
    ".foot12",

    ".poem9",
    ".poem91",
    ".poem92",
    ".poem93"

],{

    opacity:0

});


let tl1 = gsap.timeline({

    scrollTrigger:{

        trigger:".foot1",

        start:"top 80%",

        toggleActions:"play none none none"

    }

});


tl1

.fromTo(".foot1",
{
    opacity:0,
    scale:.3,
    rotation:-30
},
{
    opacity:1,
    scale:1,
    rotation:-25,
    duration:.25
})

.fromTo(".foot2",
{
    opacity:0,
    scale:.3,
    rotation:40
},
{
    opacity:1,
    scale:1,
    rotation:18,
    duration:.25
})

.fromTo(".foot3",
{
    opacity:0,
    scale:.3,
    rotation:-40
},
{
    opacity:1,
    scale:1,
    rotation:-28,
    duration:.25
})
.fromTo(".foot4",
{
    opacity:0,
    scale:.3,
    rotation:-40
},
{
    opacity:1,
    scale:1,
    rotation:-25,
    duration:.25
})

.fromTo(".foot5",
{
    opacity:0,
    scale:.3,
    rotation:40
},
{
    opacity:1,
    scale:1,
    rotation:18,
    duration:.25
})

.fromTo(".foot6",
{
    opacity:0,
    scale:.3,
    rotation:-40
},
{
    opacity:1,
    scale:1,
    rotation:-28,
    duration:.25
})

.fromTo(".dance2",
{
    opacity:0,
    scale:.85,
    y:40
},
{
    opacity:1,
    scale:1,
    y:0,
    duration:.5
})

.fromTo(".poem9",
{
    opacity:0,
    y:25
},
{
    opacity:1,
    y:0,
    duration:.4
},"<");


let tl2 = gsap.timeline({

    scrollTrigger:{

        trigger:".foot7",

        start:"top 80%",

        toggleActions:"play none none none"

    }

});


tl2

.fromTo(".foot7",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot8",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot9",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})
.fromTo(".foot10",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot11",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot12",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})


.fromTo(".dance3",
{
    opacity:0,
    scale:.85,
    y:40
},
{
    opacity:1,
    scale:1,
    y:0,
    duration:.5
})

.fromTo(".poem91",
{
    opacity:0,
    y:25
},
{
    opacity:1,
    y:0,
    duration:.4
},"<");


let tl3 = gsap.timeline({

    scrollTrigger:{

        trigger:".foot13",

        start:"top 80%",

        toggleActions:"play none none none"

    }

});

tl3

.fromTo(".foot13",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot14",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot15",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})
.fromTo(".foot16",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot17",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot18",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".dance4",
{
    opacity:0,
    scale:.85,
    y:40
},
{
    opacity:1,
    scale:1,
    y:0,
    duration:.5
})

.fromTo(".poem92",
{
    opacity:0,
    y:25
},
{
    opacity:1,
    y:0,
    duration:.4
},"<");


let tl4 = gsap.timeline({

    scrollTrigger:{

        trigger:".foot19",

        start:"top 80%",

        toggleActions:"play none none none"

    }

});


tl4

.fromTo(".foot19",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot20",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot21",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})
.fromTo(".foot22",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot23",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".foot24",
{
    opacity:0,
    scale:.3
},
{
    opacity:1,
    scale:1,
    duration:.25
})

.fromTo(".dance5",
{
    opacity:0,
    scale:.85,
    y:40
},
{
    opacity:1,
    scale:1,
    y:0,
    duration:.5
})

.fromTo(".poem93",
{
    opacity:0,
    y:25
},
{
    opacity:1,
    y:0,
    duration:.4
},"<");