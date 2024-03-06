
const data = [
    {
        id: 1,
        title: "TIAA",
        description: "To move the needle on retirement preparedness in the black community, we had to move the needle on what a campaign is. We tapped a Hip Hop icon to put our message to music and kickstart a movement.",
        imgURL: "header_bg_d.jpg",
        vdoURL: "Wyclef_Teaser.mp4"
    },
    {
        id: 2,
        title: "Lenovo Yoga ",
        description: "We had to reposition the Lenovo Yoga series as an essential tool for Elite Gen Z consumers, so we created a campaign around the multi-talented T-Pain putting his Lenovo laptops to the test.",
        imgURL: "Lenovo-Yoga9i2in1-Phone-16x9-Generic_HeroTile_V2.jpg",
        vdoURL: "Lenovo-TPain-Homepage_Thumbnail.mp4"
    },
    {
        id: 3,
        title: "Lenovo",
        description: "Gen Z needed to see Lenovo as the culture-forward, premium brand they are. We told stories of diverse change-makers using Yoga laptops to create something greater than themselves and make lasting impacts in their communities.",
        imgURL: "Lenovo30+Youtube+16X9.jpg",
        vdoURL: "Lenovo30+Youtube+16X9.mp4"
    },
    {
        id: 4,
        title: "Google",
        description: "Google needed to become a brand that amplified Black+ voices. We built a social-first campaign celebrating conscious, community-minded creators who used Pixel to elevate their content and their culture.",
        imgURL: "google_preview.jpg",
        vdoURL: "google_preview.mp4"
    },
    {
        id: 5,
        title: "Band-aid",
        description: "Band-Aid‘s new multi-tone brand saw significant backlash during BLM. Our story-driven campaign creatively aligned OURTONE with the resiliency that defines Black people’s pursuit of progress, equity, and equality.",
        imgURL: "01_Hero+Band-Aid+Preview+Candace.jpg",
        vdoURL: "01_Hero+Band-Aid+Preview+Candace.mp4"
    },
    {
        id: 6,
        title: "Shell",
        description: "To stand out, Shell needed the idea of “performance” to resonate beyond the promise oftheir products. Our loyalty and gaming social programs, and our influencer series highlighted the lives of extreme achievers.",
        imgURL: "12_Shell-Vpower-Performanceunbound.avif",
        vdoURL: "12_Shell-Vpower-Performanceunbound.mp4"
    },
    {
        id: 7,
        title: "NIKE",
        description: "Hero was tasked with communicating a brand identity for Nike’s Inclusive Communities Portfolio that imbued its mission with the bold, unapologetic tone of Nike, including a video for their Black Community Commitment program.",
        imgURL: "Dear+Nike+v10.avif",
        vdoURL: "Dear+Nike+v10.mp4"
    },
]

const footerData = [
    {
        title: "about",
        imgURL: "footer_about.jpg",
    },
    {
        title: "work",
        imgURL: "culture_hack_image+resized.avif",
    },
    {
        title: "healthcare",
        imgURL: "footer_healthcare.jpg",
    },
    {
        title: "latest",
        imgURL: "footer_latest.jpg",
    },
    {
        title: "contact",
        imgURL: "footer_contact.avif",
    },
]

locoScroll()
heroAnimation()
page1Animation()
playSecAnime()
showData()
// newsAnimation()
latestSecAnime()
cultureAnimation()
footerAnimation()





function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector("main").style.transform
          ? "transform"
          : "fixed"*/
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function heroAnimation() {
    const tl = gsap.timeline();
    const videosEls = document.querySelectorAll('.hero__heading--top h1 video')
    tl.from('nav h2 span ', {
        opacity: 0,
        x: '-100%',
        duration: .5,
        delay: 1,
        stagger: .2,
    })
    tl.from('nav div ', {
        opacity: 0,
        duration: .5,
    })
    tl.from(".hero__heading--top h1 div", {
        opacity: 0,
        duration: .5,
        stagger: .5,
    });
    tl.from(".hero__heading--main>h1 ", {
        scale: 3,
        opacity: 0,
        duration: .5,
    })
    tl.from(".hero__heading--top h1 video", {
        opacity: 0,
        duration: .5,
        onstart: () => {
            videosEls.forEach((item) => item.play())
        }
    })
}

function page1Animation() {

    gsap.from(".page1__headings h1", {
        opacity: .5,
        y: "100%",
        stagger: .2,
        scrollTrigger: {
            scroller: "main",
            trigger: ".page1__headings h1",
            start: "top 90%",
            end: "top 20%",
            scrub: 3,
            // markers: true,
        }
    });
}

function playSecAnime() {
    gsap.from(".heading--fade-left , .heading-sm--fade-left", {
        x: "-110%",
        duration: .5,
        scrollTrigger: {
            scroller: "main",
            trigger: ".heading--fade-left , .heading-sm--fade-left ",
            start: "top 70%",
            end: "top 40%",
            scrub: 2,
            // markers: true,
        }
    });
    gsap.from(".heading--fade-right , .heading-sm--fade-right", {

        x: "110%",
        duration: .5,
        scrollTrigger: {
            scroller: "main",
            trigger: ".heading--fade-right , .heading-sm--fade-right ",
            start: "top 70%",
            end: "top 40%",
            scrub: 2,
            // markers: true,
        }
    });
}

function latestSecAnime() {
    gsap.from('.bottom--in', {
        y: '100%',
        scrollTrigger: {
            scroller: "main",
            trigger: ".bottom--in",
            start: "top 100%",
            end: "top 70%",
            scrub: 2,
            // markers: true,
        }
    })
}

function showData() {
    data.forEach((item, index) => {
        document.querySelector(".data").innerHTML += `<section data-scroll data-scroll-speed="-1" data-id="${item.id}" class="latest rounded-[50px_50px_0px_0px] relative">
    <img
      class="w-full h-full object-cover absolute top-0 z-[2] rounded-[50px_50px_0px_0px]"
      loading="lazy"
      src="./assets/Images/${item.imgURL}"
      alt=""
    />
    <div
      class="z-[3] relative p-5 pb-[20vh]  w-full h-full flex flex-col items-center text-center font-anton leading-none"
    >
      <h1 data-scroll data-scroll-speed="2"  class="latest__heading text-[35em] uppercase">${item.title}</h1>
      <p data-scroll data-scroll-speed="1"  class="latest__sub-heading text-[2em] uppercase">
      ${item.description}
      </p>
      <p class="py-[5vh] w-full"><span>${index + 1}/${data.length}</span></p>
      <div data-scroll data-scroll-speed="3" class="w-1/2 aspect-video p-2 bg-black rounded">
        <video
        loading="lazy"
          src="./assets/videos/${item.vdoURL}"
          class="w-full h-full object-cover"
          autoplay
          muted
          loop
        ></video>
      </div>
    </div>
    </section>`
    })
}

function newsAnimation() {
    gsap.from(".news .news__img-overlay", {
        y: '100%',
        rotate: "-45deg",
        scale: 1.2,
        scrollTrigger: {
            scroller: "main",
            trigger: ".news .news__img-overlay",
            start: '50% 80%',
            end: "50% 0%",
            scrub: 2,
            markers: true,
        }
    })
}

function cultureAnimation() {

    gsap.from('.culture p, .culture span', {
        opacity: 0,
        y: '50%',
        scrollTrigger: {
            scroller: "main",
            trigger: ".culture",
            start: 'top 70%',
            end: "top 40%",
            scrub: 2,
            // markers: true,
        }
    })
    gsap.from('.culture_heading--one img:nth-child(1)', {
        opacity: 0,
        x: '-50%',
        scrollTrigger: {
            scroller: "main",
            trigger: ".culture",
            start: '50% 120%',
            end: "50% 90%",
            scrub: 2,
        }
    })
    gsap.from('.culture_heading--one img:nth-child(3)', {
        opacity: 0,
        x: '50%',
        scrollTrigger: {
            scroller: "main",
            trigger: ".culture",
            start: '50% 120%',
            end: "50% 90%",
            scrub: 2,
        }
    })
    gsap.from('.culture_heading--bottom img', {
        rotate: '15deg',
        scrollTrigger: {
            scroller: "main",
            trigger: ".culture",
            start: '50% 100%',
            end: "50% 50%",
            scrub: 2,
        }
    })
}

function footerAnimation() {
    gsap.from('footer h1 div', {
        // opacity: 0,
        y: '50%',
        stagger: .3,
        scrollTrigger: {
            scroller: "main",
            trigger: "footer",
            start: 'top 80%',
            end: "top 30%",
            scrub: 2,
        }
    })
    gsap.from('footer .footer__links', {
        opacity: 0,
        scrollTrigger: {
            scroller: "main ",
            trigger: "footer",
            start: '50% 80%',
            end: "50% 30%",
            scrub: 2,
            // markers: true
        }
    })


}





footerData.forEach((item, index) => {
    document.querySelector('.footer__links').innerHTML += `<div
    class="footer__img min-h-[10vh] relative flex-1 flex items-center justify-center"
  >
    <img src="./assets/Images/${item.imgURL}" alt="" class="w-full h-full object-cover" />
    <h4 class="uppercase font-anton text-[3em] leading-none absolute cursor-pointer after:w-0 after:h-[2px] after:absolute after:top-full after:left-0 after:bg-white after:rounded after:duration-200 hover:after:w-full ">${item.title}</h4>
  </div>`
})