"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "../../imports/svg-st5x77eynv";

gsap.registerPlugin(ScrollTrigger);

export function ScrollTransitionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const oldLabelRef = useRef<HTMLDivElement>(null);
  const aiLabelRef = useRef<HTMLDivElement>(null);
  const titleOldRef = useRef<HTMLDivElement>(null);
  const titleNewRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const recordingPillRef = useRef<HTMLDivElement>(null);
  const oldTextRef = useRef<HTMLDivElement>(null);
  const newContentRef = useRef<HTMLDivElement>(null);
  const hasTypedRef = useRef(false);
  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");
  const [activeTypingLine, setActiveTypingLine] = useState<1 | 2>(1);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const startTyping = () => {
        if (hasTypedRef.current) return;
        hasTypedRef.current = true;

        const line1 = "150, expanding";
        const line2 = "utilize project.ai, very hands-on";

        let i = 0;
        let j = 0;
        setTypedLine1("");
        setTypedLine2("");
        setActiveTypingLine(1);

        const typeLine1 = window.setInterval(() => {
          i += 1;
          setTypedLine1(line1.slice(0, i));
          if (i >= line1.length) {
            window.clearInterval(typeLine1);
            window.setTimeout(() => {
              setActiveTypingLine(2);
              const typeLine2 = window.setInterval(() => {
                j += 1;
                setTypedLine2(line2.slice(0, j));
                if (j >= line2.length) {
                  window.clearInterval(typeLine2);
                }
              }, 35);
            }, 220);
          }
        }, 45);
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: startTyping,
      });

      const bulletSections = newContentRef.current?.querySelectorAll(".bullet-section");
      const keywordHighlights = newContentRef.current?.querySelectorAll(".keyword-highlight");

      gsap.set(aiLabelRef.current, { opacity: 0, y: 16 });
      gsap.set(titleNewRef.current, { opacity: 0, y: 24 });
      if (bulletSections) gsap.set(bulletSections, { opacity: 0, y: 20 });
      if (keywordHighlights) gsap.set(keywordHighlights, { opacity: 0.4 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1200",
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // 0–10 %: fade out recording pill (controls stay visible)
      tl.to(recordingPillRef.current, { opacity: 0, y: 10, duration: 0.1, ease: "none" }, 0);

      // 10–30 %: label roll + title roll
      tl.to(oldLabelRef.current, { y: -20, opacity: 0, duration: 0.2, ease: "power1.inOut" }, 0.1);
      tl.fromTo(
        aiLabelRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, ease: "power1.inOut", immediateRender: false },
        0.1,
      );
      tl.to(titleOldRef.current, { y: -28, opacity: 0, duration: 0.2, ease: "power1.inOut" }, 0.1);
      tl.fromTo(
        titleNewRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, ease: "power1.inOut" },
        0.1,
      );

      // 30–50 %: plain notes fade out
      tl.to(oldTextRef.current, { opacity: 0, y: -14, duration: 0.2, ease: "none" }, 0.3);

      // 40–50 %: section background warms up for scene 2
      tl.to(
        sectionRef.current,
        { backgroundColor: "#faf5f2", duration: 0.1, ease: "power1.inOut" },
        0.4,
      );

      // 50–80 %: structured notes reveal with staggered highlights
      if (bulletSections) {
        tl.fromTo(
          bulletSections,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.045, stagger: 0.035, ease: "power2.out" },
          0.48,
        );
      }
      if (keywordHighlights) {
        tl.to(
          keywordHighlights,
          { opacity: 1, duration: 0.03, stagger: 0.035, ease: "none" },
          0.5,
        );
      }

      // 80–100 %: dead time (hold the final state so user can read before unpin)
      tl.to({}, { duration: 0.2 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Notes to AI enhanced transition"
      className="bg-white content-stretch flex flex-col gap-6 sm:gap-8 items-center justify-center py-16 sm:py-20 md:py-[124px] relative rounded-2xl shrink-0 w-full"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl"
      />

      {/* Labels container with overflow hidden for rolling effect */}
      <div className="relative h-7 w-full flex justify-center overflow-hidden">
        {/* Old label */}
        <div ref={oldLabelRef} className="absolute">
          <div className="flex flex-col font-title justify-center leading-[0] not-italic text-[#0e0f0c] text-lg whitespace-nowrap">
            <p className="leading-7">Your notes + transcript</p>
          </div>
        </div>

        {/* AI enhanced label */}
        <div
          ref={aiLabelRef}
          className="absolute opacity-0 flex items-center gap-1"
        >
          <div className="relative size-5">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 20 20"
            >
              <path
                d={svgPaths.p15505c00}
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear"
                  x1="10"
                  x2="10"
                  y1="3"
                  y2="17"
                >
                  <stop stopColor="#FF9D00" />
                  <stop offset="1" stopColor="#DA4C1E" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col font-title justify-center leading-[0] not-italic text-[#0e0f0c] text-lg whitespace-nowrap">
            <p className="leading-7">AI refined notes</p>
          </div>
        </div>
      </div>

      {/* Window Frame */}
      <div className="backdrop-blur-[8px] bg-[#c0a492] relative rounded-2xl shrink-0 w-full max-w-[664px] mx-auto">
        <div
          aria-hidden="true"
          className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl"
        />
        <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
          {/* Top bar with controls */}
          <div className="h-8 relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-end size-full">
              <div
                ref={controlsRef}
                className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end pr-2 py-[13.375px] relative size-full"
              >
                <div className="content-stretch flex gap-2 items-center justify-end relative shrink-0">
                  <div className="relative shrink-0 size-4">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8H13" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="relative shrink-0 size-4">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                      <rect x="3.5" y="3.5" width="9" height="9" rx="1.5" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="relative shrink-0 size-4">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                      <path d="M4 4L12 12M12 4L4 12" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="bg-white min-h-[300px] sm:h-[428px] relative shrink-0 w-full overflow-hidden rounded-b-[15px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-6 sm:px-8 py-4 relative size-full">
              {/* Title with roll transition */}
              <div className="relative h-7 overflow-hidden w-full mb-4">
                <div
                  ref={titleOldRef}
                  className="absolute w-full"
                >
                  <div className="flex flex-col font-title justify-center leading-[0] not-italic text-[#0e0f0c] text-xl tracking-[-0.3px]">
                    <p className="leading-7">Untitled</p>
                  </div>
                </div>
                <div
                  ref={titleNewRef}
                  className="absolute w-full opacity-0"
                >
                  <div className="flex flex-col font-title justify-center leading-[0] not-italic text-[#0e0f0c] text-xl tracking-[-0.3px]">
                    <p className="leading-7">
                      Kickoff meeting: TeamConnect
                    </p>
                  </div>
                </div>
              </div>

              {/* Old text (fades out) */}
              <div
                ref={oldTextRef}
                className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full z-10"
              >
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#0e0f0c] text-[13.2px] w-full">
                  <p className="leading-5">
                    {typedLine1}
                    {activeTypingLine === 1 ? (
                      <span className="inline-block align-middle ml-0.5 h-4 w-0.5 bg-[#b2c248] animate-pulse" />
                    ) : null}
                  </p>
                </div>
                <div className="content-stretch flex gap-px items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#0e0f0c] text-[13.2px] whitespace-nowrap min-h-5">
                    <p className="leading-5">
                      {typedLine2}
                      {activeTypingLine === 2 ? (
                        <span className="inline-block align-middle ml-0.5 h-4 w-0.5 bg-[#b2c248] animate-pulse" />
                      ) : null}
                    </p>
                  </div>
                  <div className="bg-[#b2c248] h-[18.19px] rounded-full shrink-0 w-0.5" />
                </div>
              </div>

              {/* Scene 1: floating recording indicator */}
              <div
                ref={recordingPillRef}
                className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2"
                aria-hidden
              >
                <div className="flex items-center gap-3 rounded-full border border-[#e8e6e4] bg-white px-3.5 py-2 shadow-[0_4px_16px_rgba(14,15,12,0.08)]">
                  <div className="flex h-5 items-end gap-[3px]" role="presentation">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="recording-wave-bar block h-4 w-[3px] shrink-0 rounded-full bg-gradient-to-t from-[#da4c1e] to-[#ff9d00]"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: `${0.52 + i * 0.06}s`,
                        }}
                      />
                    ))}
                  </div>
                  <span
                    className="size-3.5 shrink-0 rounded-[3px] bg-[#3a3a38]"
                    role="presentation"
                  />
                </div>
              </div>

              {/* New structured content (fades + slides in on scroll) */}
              <div
                ref={newContentRef}
                className="absolute top-16 left-6 sm:left-8 right-6 sm:right-8 z-0"
              >
                <div className="content-stretch flex flex-col gap-1.5 items-start w-full text-[13.2px] text-[#0e0f0c]">
                  <div className="bullet-section">
                    <p className="leading-5 font-medium">
                      TeamConnect <span className="keyword-highlight text-[#da4c1e]">Overview</span>
                    </p>
                  </div>
                  <div className="bullet-section pl-4">
                    <p className="leading-5">
                      150 staff, onboarding{" "}
                      <span className="keyword-highlight text-[#b2c248]">25 more</span> next quarter
                    </p>
                  </div>
                  <div className="bullet-section pl-4">
                    <p className="leading-5">
                      Offices in <span className="keyword-highlight text-[#a191ce]">New York</span> and Chicago
                    </p>
                  </div>
                  <div className="bullet-section mt-1">
                    <p className="leading-5 font-medium">
                      Current Vendor{" "}
                      <span className="keyword-highlight text-[#ed9212]">(Project.ai)</span>
                    </p>
                  </div>
                  <div className="bullet-section pl-4">
                    <p className="leading-5">
                      Data entry is <span className="keyword-highlight text-[#da4c1e]">overly manual</span>
                    </p>
                  </div>
                  <div className="bullet-section pl-4">
                    <p className="leading-5">
                      Too complicated for{" "}
                      <span className="keyword-highlight text-[#a191ce]">non-tech users</span>
                    </p>
                  </div>
                  <div className="bullet-section pl-4">
                    <p className="leading-5">
                      $200 per employee annually{" "}
                      <span className="keyword-highlight text-[#b2c248]">{`("too pricey")`}</span>
                    </p>
                  </div>
                  <div className="bullet-section mt-1">
                    <p className="leading-5 font-medium">Their Needs</p>
                  </div>
                  <div className="bullet-section pl-4">
                    <p className="leading-5">
                      Searching for a better solution is{" "}
                      <span className="keyword-highlight text-[#ed9212]">{`"a focus for Q3"`}</span>
                    </p>
                  </div>
                  <div className="bullet-section pl-4">
                    <p className="leading-5">
                      Require <span className="keyword-highlight text-[#a191ce]">secure data sharing</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
