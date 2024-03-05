
// import data from './data'

const data = [
    {
        id: 1,
        title: "TIAA",
        description: "To move the needle on retirement preparedness in the black community, we had to move the needle on what a campaign is. We tapped a Hip Hop icon to put our message to music and kickstart a movement.",
        imgURL: "https://images.prismic.io/hero-collective/65bc0cfe615e73009ec43657_header_bg_d.jpg?auto=format,compress&w=1200&fm=jpeg&q=80",
        vdoURL: "https://hero-collective.cdn.prismic.io/hero-collective/65bc0ecf615e73009ec43661_Wyclef_Teaser.mp4"
    },
    {
        id: 2,
        title: "Lenovo Yoga ",
        description: "We had to reposition the Lenovo Yoga series as an essential tool for Elite Gen Z consumers, so we created a campaign around the multi-talented T-Pain putting his Lenovo laptops to the test.",
        imgURL: "https://images.prismic.io/hero-collective/65b16b36615e73009ec3e675_Lenovo-Yoga9i2in1-Phone-16x9-Generic_HeroTile_V2.jpg?auto=format,compress&w=1920&fm=webp&q=80",
        vdoURL: "https://hero-collective.cdn.prismic.io/hero-collective/65b042d8615e73009ec3dd92_Lenovo-TPain-Homepage_Thumbnail.mp4"
    },
    {
        id: 3,
        title: "Lenovo",
        description: "Gen Z needed to see Lenovo as the culture-forward, premium brand they are. We told stories of diverse change-makers using Yoga laptops to create something greater than themselves and make lasting impacts in their communities.",
        imgURL: "https://images.prismic.io/hero-collective/70313c08-2ee8-41e5-9ed2-eee9097cabc1_Screen+Shot+2023-01-24+at+11.10.12+AM+%281%29.jpg?auto=compress,format&w=1920&fm=webp&q=80",
        vdoURL: "https://hero-collective.cdn.prismic.io/hero-collective/b8670d79-8d71-43c4-8c19-9e83a8348ed9_Lenovo+30+Youtube+16X9.mp4"
    },
    {
        id: 4,
        title: "Google",
        description: "Google needed to become a brand that amplified Black+ voices. We built a social-first campaign celebrating conscious, community-minded creators who used Pixel to elevate their content and their culture.",
        imgURL: "https://images.prismic.io/hero-collective/6576e7fa531ac2845a25e742_herogoogle.jpg?auto=format,compress&w=1920&fm=webp&q=80",
        vdoURL: "https://hero-collective.cdn.prismic.io/hero-collective/6b3df641-93d2-4a4e-82be-0ea238f55a60_google_preview.mp4"
    },
    {
        id: 5,
        title: "Band-aid",
        description: "Band-Aid‘s new multi-tone brand saw significant backlash during BLM. Our story-driven campaign creatively aligned OURTONE with the resiliency that defines Black people’s pursuit of progress, equity, and equality.",
        imgURL: "https://images.prismic.io/hero-collective/6576e21f531ac2845a25e714_hero_band-aid.jpg?auto=format,compress&w=1920&fm=webp&q=80",
        vdoURL: "https://hero-collective.cdn.prismic.io/hero-collective/1dfa44a3-f018-4761-aa87-9d22e9cbfb7f_01_Hero+Band-Aid+Preview+Candace.mp4"
    },
    {
        id: 6,
        title: "Shell",
        description: "To stand out, Shell needed the idea of “performance” to resonate beyond the promise oftheir products. Our loyalty and gaming social programs, and our influencer series highlighted the lives of extreme achievers.",
        imgURL: "https://images.prismic.io/hero-collective/6576e857531ac2845a25e744_HeroShell.jpg?auto=format,compress&w=1920&fm=webp&q=80",
        vdoURL: "https://hero-collective.cdn.prismic.io/hero-collective/f8724f2a-5a9a-4916-bd27-1c85771bfd39_12_Shell-Vpower-Performanceunbound.mp4"
    },
    {
        id: 7,
        title: "NIKE",
        description: "Hero was tasked with communicating a brand identity for Nike’s Inclusive Communities Portfolio that imbued its mission with the bold, unapologetic tone of Nike, including a video for their Black Community Commitment program.",
        imgURL: "https://images.prismic.io/hero-collective/07cff86a-b372-44f5-9ea0-b674980f1cff_nike+hero+3840x3622.jpg?auto=compress,format&w=1920&fm=webp&q=80",
        vdoURL: "https://hero-collective.cdn.prismic.io/hero-collective/2f620d9e-2214-430f-8969-25739673c61d_Dear+Nike+v10.mp4"
    },
]
const footerData = [
    {
        title: "about",
        imgURL: "https://images.prismic.io/hero-collective/ba474a39-2476-4028-b5a3-906433f0613a_footer_about.jpg?auto=compress,format&w=375&fm=webp&q=80",
    },
    {
        title: "work",
        imgURL: "https://images.prismic.io/hero-collective/b343fa07-97a4-433e-a030-ffa9d43fe633_footer_work.jpeg?auto=compress,format&w=375&fm=webp&q=80",
    },
    {
        title: "healthcare",
        imgURL: "https://images.prismic.io/hero-collective/b7ec086b-30eb-49e5-b492-72b74efbde69_footer_healthcare.jpg?auto=compress,format&w=375&fm=webp&q=80",
    },
    {
        title: "latest",
        imgURL: "https://images.prismic.io/hero-collective/6576e069531ac2845a25e6f0_footer_latest.jpg?auto=format,compress&w=375&fm=webp&q=80",
    },
    {
        title: "contact",
        imgURL: "https://images.prismic.io/hero-collective/350b91c6-e90b-4504-83f9-cd37e7556bc5_footer_contact.jpg?auto=compress,format&w=375&fm=webp&q=80",
    },
]

locoScroll()
heroAnimation()
fetchData()
// newsAnimation()
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
        function: () => {
            videosEls.forEach((item) => item.play())
        }
    })
}
function fetchData() {
    data.forEach((item, index) => {
        document.querySelector(".data").innerHTML += `<section data-scroll data-scroll-speed="-1" data-id="${item.id}" class="latest rounded-[50px_50px_0px_0px] relative">
    <img
      class="w-full h-full object-cover absolute top-0 z-[2] rounded-[50px_50px_0px_0px]"
      loading="lazy"
      src="${item.imgURL}"
      alt=""
    />
    <div
      class="z-[3] relative p-5 pb-[20vh]  w-full h-full flex flex-col items-center text-center font-anton leading-none"
    >
      <h1 data-scroll data-scroll-speed="2"  class="latest__heading text-[35em] uppercase">${item.title}</h1>
      <p data-scroll data-scroll-speed="1"  class="latest__sub-heading text-[2em] uppercase">
      ${item.description}
      </p>
      <p class="py-[5vh] w-full"><span>${index}/${data.length}</span></p>
      <div data-scroll data-scroll-speed="3" class="w-1/2 aspect-video p-2 bg-black rounded">
        <video
        loading="lazy"
          src="${item.vdoURL}"
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
            start: '50% 120%',
            end: "50% 90%",
            scrub: 2,
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
        stagger: .2,
        scrollTrigger: {
            scroller: "main",
            trigger: "footer",
            start: '50% 110%',
            end: "50% 80%",
            scrub: 2,
        }
    })
}





footerData.forEach((item, index) => {
    document.querySelector('.footer__links').innerHTML += `<div
    class="footer__img min-h-[10vh] relative flex-1 flex items-center justify-center"
  >
    <img src="${item.imgURL}" alt="" class="w-full h-full object-cover" />
    <h4 class="uppercase font-anton text-[3em] leading-none absolute cursor-pointer after:w-0 after:h-[2px] after:absolute after:top-full after:left-0 after:bg-white after:rounded after:duration-200 hover:after:w-full ">${item.title}</h4>
  </div>`
})