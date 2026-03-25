"use client";

import clsx from "clsx";
import svgPaths from "../../imports/svg-st5x77eynv";
import { useEffect, useRef, useState } from "react";
import { HeroInteractiveImage } from "./HeroInteractiveImage";
import { NoiseOverlay } from "./NoiseOverlay";
import { ScrollTransitionSection } from "./ScrollTransitionSection";

function ListBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-4 relative w-full">{children}</div>
    </div>
  );
}

function BackgroundBorderOverlayBlurBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="backdrop-blur-[8px] bg-[#c0a492] relative rounded-2xl shrink-0 w-full max-w-[664px] mx-auto">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

type SvgBackgroundImage2Props = {
  additionalClassNames?: string;
};

function SvgBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<SvgBackgroundImage2Props>) {
  return (
    <div className={clsx("size-5", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-full shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-1.5 relative">{children}</div>
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgb(33, 33, 33) 0%, rgb(33, 33, 33) 33.33%, rgb(237, 146, 18) 40%, rgb(164, 41, 98) 45%, rgb(161, 145, 206) 50%, rgb(184, 213, 255) 55%, rgb(178, 194, 72) 60%, rgba(178, 194, 72, 0) 66.67%, rgba(178, 194, 72, 0) 100%)" }} className="bg-clip-text flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[transparent] whitespace-nowrap">
      <p className="leading-5">{children}</p>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-2xl shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-col lg:flex-row items-center justify-center size-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-16 sm:py-20 md:py-[124px] relative w-full max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
}

type BackgroundImage3Props = {
  additionalClassNames?: string;
  withNoiseOverlay?: boolean;
  withCursorGlow?: boolean;
  borderClassName?: string;
};

function BackgroundImage3({ children, additionalClassNames = "", withNoiseOverlay = false, withCursorGlow = false, borderClassName }: React.PropsWithChildren<BackgroundImage3Props>) {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = withCursorGlow
    ? (e: React.MouseEvent<HTMLDivElement>) => {
        if (!glowRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glowRef.current.style.background =
          `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,157,0,0.07), transparent 70%)`;
        glowRef.current.style.opacity = "1";
      }
    : undefined;

  const handleMouseLeave = withCursorGlow
    ? () => {
        if (glowRef.current) glowRef.current.style.opacity = "0";
      }
    : undefined;

  return (
    <div
      className={clsx("relative rounded-2xl shrink-0 w-full", additionalClassNames)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div aria-hidden="true" className={clsx("absolute border border-solid inset-0 pointer-events-none rounded-2xl", borderClassName || "border-[#d5d5d2]")} />
      {withCursorGlow && (
        <div
          ref={glowRef}
          className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 pointer-events-none z-[5]"
        />
      )}
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-16 md:gap-[104px] items-center px-6 sm:px-12 md:px-20 py-16 sm:py-20 md:py-[124px] relative w-full">
          {withNoiseOverlay && <NoiseOverlay opacity={0.15} />}
          {children}
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-8 relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end pr-2 py-[13.375px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-4">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-4 sm:gap-8 items-center relative shrink-0 w-full">
      <div className="h-[17.208px] relative shrink-0 w-4">
        <div className="absolute inset-[-0.74%_-0.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2556 17.463">
            <path d={svgPaths.p34fd1f80} fill="var(--fill-0, #DA4C1E)" id="Subtract" stroke="var(--stroke-0, #003428)" strokeWidth="0.255467" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#72726e] text-base sm:text-lg md:text-[22.3px]">
        <p className="leading-8">{children}</p>
      </div>
    </div>
  );
}

type BackgroundBorderBackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundBorderBackgroundImage({ additionalClassNames = "" }: BackgroundBorderBackgroundImageProps) {
  return (
    <div className={clsx("h-auto aspect-square max-h-[621px] relative rounded-2xl shrink-0 w-full max-w-[620px]", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-6 sm:p-8 relative rounded-[inherit] size-full">
        <div className="bg-[#faf5f2] flex-[1_0_0] min-h-px min-w-px rounded-xl w-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return <BackgroundImage1>{text}</BackgroundImage1>;
}

function BackgroundImage() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex items-center justify-center left-0 size-16 sm:size-20 top-0">
      <div className="-rotate-4 flex-none">
        <div className="bg-[#c0a492] relative rounded-lg size-14 sm:size-[75px]">
          <div aria-hidden="true" className="absolute border-[#003428] border-[0.534px] border-solid inset-[-0.267px] pointer-events-none rounded-[8.267px]" />
        </div>
      </div>
    </div>
  );
}

type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgb(156, 163, 175) 0%, rgb(156, 163, 175) 33.33%, rgb(237, 146, 18) 40%, rgb(164, 41, 98) 45%, rgb(161, 145, 206) 50%, rgb(184, 213, 255) 55%, rgb(178, 194, 72) 60%, rgba(178, 194, 72, 0) 66.67%, rgba(178, 194, 72, 0) 100%)" }} className={clsx("bg-clip-text flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[transparent] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-5">{text}</p>
    </div>
  );
}

type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return <BackgroundImage5>{text}</BackgroundImage5>;
}

type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <BackgroundImageAndText text={text} additionalClassNames="text-[13.3px]" />
    </div>
  );
}

type ContainerBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText({ text, additionalClassNames = "" }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[13.2px] w-full">
        <p className="leading-5">{text}</p>
      </div>
    </div>
  );
}

type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-title justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-xl tracking-[-0.3px] w-full">
        <p className="leading-7">{text}</p>
      </div>
    </div>
  );
}

function SvgBackgroundImage1() {
  return (
    <BackgroundImage2>
      <path d={svgPaths.p29e7ff00} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
    </BackgroundImage2>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="content-stretch flex h-4 items-center justify-center relative shrink-0 w-2.5">
      <div className="h-[9px] relative rounded-sm shrink-0 w-2.5" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.6)] border-solid inset-0 pointer-events-none rounded-sm" />
      </div>
    </div>
  );
}

function SvgBackgroundImage() {
  return (
    <BackgroundImage2>
      <path d={svgPaths.p11401600} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
    </BackgroundImage2>
  );
}

function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const THRESHOLD = 10;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current + THRESHOLD) setHidden(true);
      else if (y < lastY.current - THRESHOLD) setHidden(false);
      setScrolled(y > 100);
      lastY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        hidden && "-translate-y-[calc(100%+3rem)]"
      )}
    >
      <div className={clsx(
        "backdrop-blur-xl flex flex-row gap-4 sm:gap-8 md:gap-[61px] items-center justify-center px-4 sm:px-6 md:px-[25px] py-2 rounded-full relative transition-[background-color,box-shadow] duration-300",
        scrolled
          ? "bg-white/80 shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
          : "bg-[rgba(0,0,0,0.1)]"
      )}>
        <div aria-hidden="true" className={clsx(
          "absolute border border-solid inset-0 pointer-events-none rounded-full transition-colors duration-300",
          scrolled ? "border-[#d5d5d2]" : "border-white/30"
        )} />

        {/* Logo */}
        <div className="content-stretch flex gap-1 items-center relative shrink-0 cursor-pointer">
          <div className="h-6 relative shrink-0 w-[19.078px]">
            <div className="absolute inset-[-0.62%_0_0_-0.92%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2536 23.144">
                <g id="Frame 14">
                  <path d={svgPaths.p3ec0b400} fill="var(--fill-0, black)" id="Vector 4" opacity="0.3" />
                  <path d={svgPaths.p66ea880} fill="var(--fill-0, black)" id="Vector 2" opacity="0.3" />
                  <path d={svgPaths.p3bc29f80} fill="var(--fill-0, black)" id="Subtract" opacity="0.3" />
                  <path d={svgPaths.p24e82500} fill="var(--fill-0, black)" id="Vector 5" opacity="0.3" />
                  <path d={svgPaths.p7da2800} fill="var(--fill-0, #EAEAEA)" id="Subtract_2" stroke="var(--stroke-0, #003428)" strokeWidth="0.285968" />
                </g>
              </svg>
            </div>
          </div>
          <div className={clsx(
            "flex flex-col font-title font-medium justify-center leading-[0] not-italic relative shrink-0 text-xl sm:text-2xl md:text-[25px] whitespace-nowrap transition-colors duration-300",
            scrolled ? "text-[#0e0f0c]" : "text-white"
          )}>
            <p className="leading-[normal]">Driffle</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className={clsx(
          "hidden sm:flex font-['Geist:Medium',sans-serif] gap-4 md:gap-[26px] items-center leading-[0] not-italic relative shrink-0 text-sm md:text-[15.1px] whitespace-nowrap transition-colors duration-300",
          scrolled ? "text-[#0e0f0c]" : "text-white"
        )}>
          <div className="flex flex-col justify-center relative shrink-0 cursor-pointer hover:opacity-60 transition-opacity">
            <p className="leading-6">Features</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 cursor-pointer hover:opacity-60 transition-opacity">
            <p className="leading-6">Pricing</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 cursor-pointer hover:opacity-60 transition-opacity">
            <p className="leading-6">Blog</p>
          </div>
        </div>

        {/* Download Button */}
        <div className={clsx(
          "content-stretch flex items-center px-3 sm:px-[13px] py-1.5 sm:py-[7px] relative rounded-full shrink-0 cursor-pointer transition-colors duration-200",
          scrolled ? "hover:bg-black/5" : "hover:bg-white/10"
        )} data-name="Link">
          <div aria-hidden="true" className={clsx(
            "absolute border border-solid inset-0 pointer-events-none rounded-full transition-colors duration-300",
            scrolled ? "border-[#d5d5d2]" : "border-[rgba(255,255,255,0.2)]"
          )} />
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
              <div className={clsx(
                "flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-sm sm:text-[15.3px] whitespace-nowrap transition-colors duration-300",
                scrolled ? "text-[#0e0f0c]" : "text-white"
              )}>
                <p className="leading-6">Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function ResponsiveFrame() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white content-stretch flex flex-col gap-2 items-center p-4 relative size-full" ref={containerRef}>
      <NoiseOverlay opacity={0.06} blendMode="soft-light" />
      <NavBar />
      {/* Hero Section */}
      <div className="bg-white min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:h-[813px] relative rounded-2xl shrink-0 w-full">
        {/* inset-0 avoids height:100% collapsing when parent only has min-height */}
        <div className="absolute inset-0 overflow-clip rounded-[inherit]">
          {/* Background Image — subtle zoom + perspective tilt toward cursor on hover */}
          <HeroInteractiveImage alt="" src="/assets/hero-placeholder.png" />
          
          {/* Hero Content */}
          <div className="absolute left-1/2 -translate-x-1/2 top-24 sm:top-32 md:top-44 content-stretch flex flex-col gap-12 sm:gap-16 md:gap-[87px] items-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[653px] px-4">
            <div className="content-stretch flex flex-col gap-6 sm:gap-8 items-center leading-[0] not-italic relative shrink-0 text-center text-white w-full">
              <div className="flex flex-col font-title justify-center relative shrink-0 text-3xl sm:text-4xl md:text-5xl lg:text-[57.5px] w-full">
                <p className="leading-tight sm:leading-[60px]">
                  Stop scribbling.
                  <br aria-hidden="true" />
                  Start{"\u00A0"}remembering.
                </p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',sans-serif] justify-center relative shrink-0 text-base sm:text-lg md:text-xl lg:text-2xl w-full">
                <p className="leading-relaxed sm:leading-[28.13px]">Driffle quietly listens to your meetings and turns your rough notes into clear, structured records — no bots, no interruptions, just you and your{"\u00A0"}calls.</p>
              </div>
            </div>
            <div className="bg-[#ff9d00] content-stretch flex gap-1 h-12 sm:h-14 items-center justify-center overflow-clip px-5 sm:px-6 relative rounded-full shrink-0 w-full max-w-xs sm:max-w-[322px] cursor-pointer hover:brightness-110 active:scale-[0.98] transition-all duration-200" data-name="Link">
              <div className="relative shrink-0 size-5 sm:size-6" data-name="apple">
                <div className="absolute inset-[0_14.39%_12.5%_14.39%]" data-name="vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0948 21">
                    <path d={svgPaths.p241a7b80} fill="var(--fill-0, black)" id="vector" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e180a] text-base sm:text-lg whitespace-nowrap">
                <p className="leading-7">Download for{"\u00A0"}mac</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl" />
      </div>

      {/* Section 2: Notes → AI Enhanced (pins at center, plays both scenes, then releases) */}
      <ScrollTransitionSection />

      {/* Three steps section */}
      <BackgroundImage3 additionalClassNames="bg-white">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-6 sm:gap-8 items-center leading-[0] not-italic px-4 sm:px-8 md:px-16 relative text-center w-full">
              <div className="flex flex-col font-title justify-center relative shrink-0 text-[#0e0f0c] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px]">
                <p className="leading-tight lg:leading-[48px]">Three steps to better{"\u00A0"}meetings</p>
              </div>
              <div className="flex flex-col font-['Geist:Light',sans-serif] justify-center relative shrink-0 text-[#72726e] text-base sm:text-lg md:text-xl lg:text-[22.3px]">
                <p className="leading-relaxed lg:leading-8">Driffle fits into how you already work — no new habits, no clunky setup, no meeting{"\u00A0"}bots.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row justify-center size-full">
            <div className="content-stretch flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-stretch justify-center px-4 sm:px-8 md:px-12 relative w-full">
              <div className="bg-[#faf5f2] relative rounded-2xl self-stretch shrink-0 w-full md:w-auto md:flex-1 md:max-w-[296px]">
                <div aria-hidden="true" className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl" />
                <div className="content-stretch flex flex-col gap-6 sm:gap-8 items-start p-6 relative size-full">
                  <div className="relative shrink-0 size-16 sm:size-20">
                    <BackgroundImage />
                    <div className="absolute left-4 sm:left-[18px] overflow-clip size-8 sm:size-9 top-5 sm:top-[22.05px]" data-name="microphone, mic, sound, podcast">
                      <div className="absolute inset-[8.33%_16.73%]" data-name="vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9574 30">
                          <g id="vector">
                            <path d={svgPaths.p4b83200} fill="var(--fill-0, white)" />
                            <path d={svgPaths.p27d92c80} fill="var(--fill-0, white)" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-title justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-2xl sm:text-3xl tracking-[-0.3px] w-full">
                    <p className="leading-7">Join your meeting</p>
                  </div>
                  <div className="flex flex-col font-['Geist:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-lg sm:text-xl lg:text-[22.3px] text-[#72726e] w-full">
                    <p className="leading-relaxed lg:leading-8">{`Open Driffle before your call. It listens to your computer's audio directly — no bot joins the call, no one gets notified.`}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#faf5f2] content-stretch flex flex-col gap-6 sm:gap-8 items-start p-6 relative rounded-2xl shrink-0 w-full md:w-auto md:flex-1 md:max-w-[296px]">
                <div aria-hidden="true" className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl" />
                <div className="relative shrink-0 size-16 sm:size-20">
                  <BackgroundImage />
                  <div className="absolute left-5 sm:left-6 overflow-clip size-8 sm:size-9 top-5 sm:top-[22.05px]" data-name="write, edit-list, list">
                    <div className="absolute inset-[12.5%_11.78%_8.33%_12.5%]" data-name="vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2603 28.4999">
                        <g id="vector">
                          <path d={svgPaths.p2c595b00} fill="var(--fill-0, white)" />
                          <path d={svgPaths.pb27e900} fill="var(--fill-0, white)" />
                          <path d={svgPaths.p10558a00} fill="var(--fill-0, white)" />
                          <path d={svgPaths.p1f68f940} fill="var(--fill-0, white)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-title justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-2xl sm:text-3xl tracking-[-0.3px] w-full">
                  <p className="leading-7">Jot your key thoughts</p>
                </div>
                <div className="flex flex-col font-['Geist:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-lg sm:text-xl lg:text-[22.3px] text-[#72726e] w-full">
                  <p className="leading-relaxed lg:leading-8">{`Type quick bullets as you talk. Don't worry about being thorough — Driffle has the full transcript to fill in the gaps.`}</p>
                </div>
              </div>
              <div className="bg-[#faf5f2] content-stretch flex flex-col gap-6 sm:gap-8 items-start p-6 relative rounded-2xl shrink-0 w-full md:w-auto md:flex-1 md:max-w-[296px]">
                <div aria-hidden="true" className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl" />
                <div className="relative shrink-0 size-16 sm:size-20">
                  <BackgroundImage />
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-8 sm:size-9 top-1/2" data-name="sparkles-soft">
                    <div className="absolute inset-[8.33%]" data-name="vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                        <g id="vector">
                          <path d={svgPaths.p3589600} fill="var(--fill-0, white)" />
                          <path d={svgPaths.pef17000} fill="var(--fill-0, white)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-title justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-2xl sm:text-3xl tracking-[-0.3px] w-full">
                  <p className="leading-7">Get polished notes instantly</p>
                </div>
                <div className="flex flex-col font-['Geist:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-lg sm:text-xl lg:text-[22.3px] text-[#72726e] w-full">
                  <p className="leading-relaxed lg:leading-8">When the call ends, Driffle combines your notes with the transcript and delivers structured, ready-to-share meeting records.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage3>

      {/* Feature sections */}
      <BackgroundImage4>
        <div className="content-stretch flex lg:flex-1 flex-col gap-6 sm:gap-8 items-start lg:items-center lg:justify-center min-h-px min-w-px relative lg:max-w-[50%]">
          <div className="flex flex-col font-title italic justify-center leading-[0] relative shrink-0 text-[#da4c1e] text-lg sm:text-xl md:text-[22px] w-full">
            <p className="leading-[normal]">Private by default</p>
          </div>
          <div className="flex flex-col font-title justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] w-full">
            <p className="leading-tight lg:leading-[48px]">No awkward bots. Just you.</p>
          </div>
          <div className="flex flex-col font-['Geist:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#72726e] text-base sm:text-lg md:text-xl lg:text-[22.3px] w-full">
            <p className="leading-relaxed lg:leading-8">{`Driffle transcribes your computer's audio directly — meaning no robot joins your call, no notification goes out, and no one feels like they're being recorded by a third party. Your meeting stays yours.`}</p>
          </div>
          <BackgroundImageAndText2 text="Works with any meeting platform — nothing to install on theirs" />
          <BackgroundImage1>{`No "Driffle is now recording" announcement to your guests`}</BackgroundImage1>
          <BackgroundImageAndText2 text="Your data stays private and secure" />
          <BackgroundImageAndText2 text="Supports Zoom, Meet, Teams, Webex, Slack, and more" />
        </div>
        <div className="bg-[#434626] h-auto min-h-[400px] sm:min-h-[500px] lg:min-h-[621px] aspect-square lg:flex-1 relative rounded-2xl shrink-0 w-full lg:max-w-[50%]" data-name="Background+Border">
          <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-6 sm:p-8 relative rounded-[inherit] size-full">
            <div className="bg-[#faf5f2] flex-[1_0_0] min-h-px min-w-px rounded-xl w-full" />
          </div>
          <div aria-hidden="true" className="absolute border border-[#434626] border-solid inset-0 pointer-events-none rounded-2xl" />
        </div>
      </BackgroundImage4>

      <BackgroundImage4>
        <div className="bg-[#272819] h-auto min-h-[400px] sm:min-h-[500px] lg:min-h-[621px] aspect-square lg:flex-1 relative rounded-2xl shrink-0 w-full lg:max-w-[50%]">
          <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-6 sm:p-8 relative rounded-[inherit] size-full">
            <div className="bg-[#faf5f2] flex-[1_0_0] min-h-px min-w-px rounded-xl w-full" />
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl" />
        </div>
        <div className="content-stretch flex lg:flex-1 flex-col gap-6 sm:gap-8 items-start lg:items-center lg:justify-center min-h-px min-w-px relative lg:max-w-[50%]">
          <div className="flex flex-col font-title italic justify-center leading-[0] relative shrink-0 text-[#da4c1e] text-lg sm:text-xl md:text-[22px] w-full">
            <p className="leading-[normal]">Your AI teammate</p>
          </div>
          <div className="flex flex-col font-title justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] w-full">
            <p className="leading-tight lg:leading-[48px]">Ask anything about your meetings</p>
          </div>
          <div className="flex flex-col font-['Geist:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#72726e] text-base sm:text-lg md:text-xl lg:text-[22.3px] w-full">
            <p className="leading-relaxed lg:leading-8">{`After your call, chat with Driffle like you'd chat with a brilliant colleague who attended every meeting you ever had. Draft follow-ups, pull action items, identify budget signals — in seconds.`}</p>
          </div>
          <BackgroundImageAndText2 text="Draft follow-up emails with the right context, automatically" />
          <BackgroundImageAndText2 text="Extract action items and owners in one click" />
          <BackgroundImage1>{`Ask: "What did we agree on regarding pricing?"`}</BackgroundImage1>
          <BackgroundImageAndText2 text="Search across all your past meetings at once" />
        </div>
      </BackgroundImage4>

      <BackgroundImage4>
        <div className="content-stretch flex lg:flex-1 flex-col gap-6 sm:gap-8 items-start lg:items-center lg:justify-center min-h-px min-w-px relative lg:max-w-[50%]">
          <div className="flex flex-col font-title italic justify-center leading-[0] relative shrink-0 text-[#da4c1e] text-lg sm:text-xl md:text-[22px] w-full">
            <p className="leading-[normal]">One click, everywhere</p>
          </div>
          <div className="flex flex-col font-title justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[-0.72px] w-full">
            <p className="leading-tight lg:leading-[48px]">Share notes where your team already works</p>
          </div>
          <div className="flex flex-col font-['Geist:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#72726e] text-base sm:text-lg md:text-xl lg:text-[22.3px] w-full">
            <p className="leading-relaxed lg:leading-8">Send beautifully formatted meeting notes to Slack, email them to stakeholders, log them in your CRM, or drop them into Notion — right from inside Driffle. No copy-pasting, no reformatting.</p>
          </div>
          <BackgroundImageAndText2 text="One-click sharing to Slack, email, Notion, HubSpot, and more" />
          <BackgroundImageAndText2 text="Custom templates for discovery calls, 1-on-1s, and standups" />
          <BackgroundImageAndText2 text="Shareable links so your whole team can view notes" />
          <BackgroundImageAndText2 text="Keeps your CRM updated without extra effort" />
        </div>
        <div className="bg-[#585b3d] h-auto min-h-[400px] sm:min-h-[500px] lg:min-h-[621px] aspect-square lg:flex-1 relative rounded-2xl shrink-0 w-full lg:max-w-[50%]">
          <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-6 sm:p-8 relative rounded-[inherit] size-full">
            <div className="bg-[#faf5f2] flex-[1_0_0] min-h-px min-w-px rounded-xl w-full" />
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl" />
        </div>
      </BackgroundImage4>

      {/* Pricing section */}
      <BackgroundImage3 additionalClassNames="bg-[#18190f]" withNoiseOverlay={true} withCursorGlow={true} borderClassName="border-white/[0.06]">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-6 sm:gap-8 items-center leading-[0] px-4 sm:px-8 md:px-16 relative w-full">
              <div className="flex flex-col font-title italic justify-center relative shrink-0 text-[#da4c1e] text-lg sm:text-xl md:text-[22px] text-center">
                <p className="leading-[normal]">Simple, honest pricing</p>
              </div>
              <div className="flex flex-col font-title justify-center not-italic relative shrink-0 text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center text-white tracking-[-0.72px]">
                <p>
                  <span className="leading-tight lg:leading-[48px] text-[#ff9d00]">Start free</span>
                  <span className="leading-tight lg:leading-[48px]">{`, upgrade when you're hooked`}</span>
                </p>
              </div>
              <div className="flex flex-col font-['Geist:Light',sans-serif] justify-center not-italic relative shrink-0 text-base sm:text-lg md:text-xl lg:text-[22.3px] text-center text-white w-full">
                <p className="leading-relaxed lg:leading-8">{`No surprise fees. Cancel anytime. We think you'll stay because you love it.`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ff9d00] content-stretch flex h-14 sm:h-16 items-center justify-center w-full max-w-xs sm:max-w-[319px] relative rounded-full shrink-0 cursor-pointer hover:brightness-110 active:scale-[0.98] transition-all duration-200" data-name="Button">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#18190f] text-sm sm:text-[14.5px] text-center uppercase whitespace-nowrap">
            <p className="leading-6">view pricing</p>
          </div>
        </div>
      </BackgroundImage3>
    </div>
  );
}