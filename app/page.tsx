import CardsSection from "@/components/CardsSection";
import CarouselCard from "@/components/CarouselCards";
import CarouselSection from "@/components/CarouselSection";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import ProjectSection from "@/components/ProjectSection";
import SecuritySectionAds from "@/components/SecuritySectionAds";
import UserSectionAdvertisment from "@/components/UserSectionAdvertisment";


export default function Home() {

  return (
    <div className="relative h-screen  flex">

      <main className="relative container mx-auto   z-[100]">
      <HomeBanner/>
      <CarouselCard/>
      
        {/* <ScreenWithImage /> */}
        <CarouselSection />
        <ProjectSection />
        <CardsSection />
        <SecuritySectionAds />
        <UserSectionAdvertisment />
        <Footer />
      </main>










      <div className="hidden absolute inset-0 z-[-1] md:block overflow-hidden">
        <svg
          width="1382"
          height="370"
          viewBox="0 0 1382 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute hidden  md:block inset-0 z-30 h-full w-full"
        >
          <path
            d="M268 115L181.106 6.97176C178.069 3.19599 173.485 1 168.639 1H0"
            stroke="url(#paint0_linear_337_46)"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
          <path
            d="M1114 115L1200.89 6.97176C1203.93 3.19599 1208.52 1 1213.36 1H1382"
            stroke="url(#paint1_linear_337_46)"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
          <path
            d="M268 255L181.106 363.028C178.069 366.804 173.485 369 168.639 369H0"
            stroke="url(#paint2_linear_337_46)"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
          <path
            d="M1114 255L1200.89 363.028C1203.93 366.804 1208.52 369 1213.36 369H1382"
            stroke="url(#paint3_linear_337_46)"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_337_46"
              x1="26.4087"
              y1="1.00001"
              x2="211.327"
              y2="175.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.481613" stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_337_46"
              x1="1355.59"
              y1="1.00001"
              x2="1170.67"
              y2="175.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.481613" stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_337_46"
              x1="26.4087"
              y1="369"
              x2="211.327"
              y2="194.83"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.481613" stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_337_46"
              x1="1355.59"
              y1="369"
              x2="1170.67"
              y2="194.83"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.481613" stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="807"
          height="797"
          viewBox="0 0 807 797"
          fill="none"
          className="pointer-events-none absolute -left-96 top-0 hidden  h-full w-full  dark:block"
        >
          <path
            d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
            fill="url(#paint0_radial_254_135)"
          />
          <path
            d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
            fill="url(#paint1_radial_254_135)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_254_135"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(77.0001 15.8894) rotate(90.3625) scale(869.41 413.353)"
            >
              <stop stopColor="#23268F" />
              <stop offset="0.25" stopColor="#1A266B" />
              <stop offset="0.573634" stopColor="#0C0C36" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_254_135"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(127.5 -31) rotate(1.98106) scale(679.906 715.987)"
            >
              <stop stopColor="#2E459F" />
              <stop offset="0.283363" stopColor="#1C379B" />
              <stop offset="0.573634" stopColor="#0D0D33" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="807"
          height="797"
          viewBox="0 0 807 797"
          fill="none"
          className="pointer-events-none absolute rotate-180 -right-90 bottom-0 hidden h-full w-full dark:block"
        >
          <path
            d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
            fill="url(#paint0_radial_254_135)"
          />
          <path
            d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
            fill="url(#paint1_radial_254_135)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_254_135"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(77.0001 15.8894) rotate(90.3625) scale(869.41 413.353)"
            >
              <stop stopColor="#23268F" />
              <stop offset="0.25" stopColor="#1A266B" />
              <stop offset="0.573634" stopColor="#0C0C36" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_254_135"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(127.5 -31) rotate(1.98106) scale(679.906 715.987)"
            >
              <stop stopColor="#2E459F" />
              <stop offset="0.283363" stopColor="#1C379B" />
              <stop offset="0.573634" stopColor="#0D0D33" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 z-1  hidden md:flex [mask-image:radial-gradient(circle_at_center,white_0%,white_45%,transparent_70%)]">


        <svg
          width="445"
          height="418"
          viewBox="0 0 445 418"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-x-0  -bottom-20 z-20 aspect-square h-[150px] w-full md:h-[300px]"
        >
          <line x1="139.5" y1="418" x2="139.5" y2="12" stroke="url(#paint0_linear_0_1)" />
          <line x1="172.5" y1="418" x2="172.5" y2="12" stroke="url(#paint1_linear_0_1)" />
          <line x1="205.5" y1="418" x2="205.5" y2="12" stroke="url(#paint2_linear_0_1)" />
          <line x1="238.5" y1="418" x2="238.5" y2="12" stroke="url(#paint3_linear_0_1)" />
          <line x1="271.5" y1="418" x2="271.5" y2="12" stroke="url(#paint4_linear_0_1)" />
          <line x1="304.5" y1="418" x2="304.5" y2="12" stroke="url(#paint5_linear_0_1)" />
          <path
            d="M1 149L109.028 235.894C112.804 238.931 115 243.515 115 248.361V417"
            stroke="url(#paint6_linear_0_1)"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
          <path
            d="M444 149L335.972 235.894C332.196 238.931 330 243.515 330 248.361V417"
            stroke="url(#paint7_linear_0_1)"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="140.5"
              y1="418"
              x2="140.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="173.5"
              y1="418"
              x2="173.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_1"
              x1="206.5"
              y1="418"
              x2="206.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_0_1"
              x1="239.5"
              y1="418"
              x2="239.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_0_1"
              x1="272.5"
              y1="418"
              x2="272.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_0_1"
              x1="305.5"
              y1="418"
              x2="305.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_0_1"
              x1="115"
              y1="390.591"
              x2="-59.1703"
              y2="205.673"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.481613" stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_0_1"
              x1="330"
              y1="390.591"
              x2="504.17"
              y2="205.673"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.481613" stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          width="445"
          height="418"
          viewBox="0 0 445 418"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-x-0  -top-0 rotate-180 z-20 aspect-square h-[150px] w-full md:h-[300px]"
        >
          <line x1="139.5" y1="418" x2="139.5" y2="12" stroke="url(#paint0_linear_0_1)" />
          <line x1="172.5" y1="418" x2="172.5" y2="12" stroke="url(#paint1_linear_0_1)" />
          <line x1="205.5" y1="418" x2="205.5" y2="12" stroke="url(#paint2_linear_0_1)" />
          <line x1="238.5" y1="418" x2="238.5" y2="12" stroke="url(#paint3_linear_0_1)" />
          <line x1="271.5" y1="418" x2="271.5" y2="12" stroke="url(#paint4_linear_0_1)" />
          <line x1="304.5" y1="418" x2="304.5" y2="12" stroke="url(#paint5_linear_0_1)" />
          <path
            d="M1 149L109.028 235.894C112.804 238.931 115 243.515 115 248.361V417"
            stroke="url(#paint6_linear_0_1)"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
          <path
            d="M444 149L335.972 235.894C332.196 238.931 330 243.515 330 248.361V417"
            stroke="url(#paint7_linear_0_1)"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="140.5"
              y1="418"
              x2="140.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="173.5"
              y1="418"
              x2="173.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_1"
              x1="206.5"
              y1="418"
              x2="206.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_0_1"
              x1="239.5"
              y1="418"
              x2="239.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_0_1"
              x1="272.5"
              y1="418"
              x2="272.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_0_1"
              x1="305.5"
              y1="418"
              x2="305.5"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_0_1"
              x1="115"
              y1="390.591"
              x2="-59.1703"
              y2="205.673"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.481613" stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_0_1"
              x1="330"
              y1="390.591"
              x2="504.17"
              y2="205.673"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.481613" stopColor="#F8F8F8" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>



        {/* {
          [...Array(40)].map((element, index) => {
            return <div key={index} className="h-full w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-400)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]">
            </div>
          })
        } */}
      </div>
    </div>
  );
}
