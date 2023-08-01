import ReactCarousel from "react-multi-carousel";
import defaultTheme from "tailwindcss/defaultTheme";
import { useBreakpoint } from "../hooks/use-breakpoint";

export default function Carousel({ className, children }) {
  const { isSm } = useBreakpoint("sm");
  const { isLg } = useBreakpoint("lg");
  const { isXl } = useBreakpoint("xl");

  return (
    <ReactCarousel
      className={["z-0", className].join(" ")}
      responsive={{
        mobile: {
          breakpoint: { min: 0, max: parseInt(defaultTheme.screens.sm) },
          items: 2,
        },
        tablet: {
          breakpoint: {
            min: parseInt(defaultTheme.screens.sm),
            max: parseInt(defaultTheme.screens.lg),
          },
          items: 3,
        },
        desktop: {
          breakpoint: {
            min: parseInt(defaultTheme.screens.lg),
            max: parseInt(defaultTheme.screens.xl),
          },
          items: 4,
        },
        largeDesktop: {
          breakpoint: { min: parseInt(defaultTheme.screens.xl), max: 9999 },
          items: 5,
        },
      }}
      rewind={false}
      rewindWithAnimation
      showDots={false}
      slidesToSlide={isXl ? 5 : isLg ? 4 : isSm ? 3 : 2}
      customLeftArrow={<LeftArrow />}
      customRightArrow={<RightArrow />}
    >
      {children}
    </ReactCarousel>
  );
}

function LeftArrow({ onClick, ...rest }) {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return deviceType !== "mobil" ? (
    <button
      type="button"
      className="absolute left-0 z-[1000] bg-white h-10 w-10 grid place-content-center rounded-full shadow-lg outline outline-1 outline-gray-200"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-chevron-left"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 6l-6 6l6 6"></path>
      </svg>
    </button>
  ) : null;
}

function RightArrow({ onClick, ...rest }) {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return deviceType !== "mobil" ? (
    <button
      type="button"
      className="absolute right-0 z-[1000] bg-white h-10 w-10 grid place-content-center rounded-full shadow-lg outline outline-1 outline-gray-200"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-chevron-right"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 6l6 6l-6 6"></path>
      </svg>
    </button>
  ) : null;
}
