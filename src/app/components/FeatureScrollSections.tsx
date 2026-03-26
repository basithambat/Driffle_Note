"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "../../imports/svg-st5x77eynv";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    eyebrow: "Private by default",
    title: "No awkward bots. Just you.",
    description:
      "Driffle transcribes your computer\u2019s audio directly \u2014 meaning no robot joins your call, no notification goes out, and no one feels like they\u2019re being recorded by a third party. Your meeting stays yours.",
    bullets: [
      "Works with any meeting platform \u2014 nothing to install on theirs",
      'No \u201CDriffle is now recording\u201D announcement to your guests',
      "Your data stays private and secure",
      "Supports Zoom, Meet, Teams, Webex, Slack, and more",
    ],
    color: "#434626",
  },
  {
    eyebrow: "Your AI teammate",
    title: "Ask anything about your meetings",
    description:
      "After your call, chat with Driffle like you\u2019d chat with a brilliant colleague who attended every meeting you ever had. Draft follow-ups, pull action items, identify budget signals \u2014 in seconds.",
    bullets: [
      "Draft follow-up emails with the right context, automatically",
      "Extract action items and owners in one click",
      'Ask: \u201CWhat did we agree on regarding pricing?\u201D',
      "Search across all your past meetings at once",
    ],
    color: "#272819",
  },
  {
    eyebrow: "One click, everywhere",
    title: "Share notes where your team already works",
    description:
      "Send beautifully formatted meeting notes to Slack, email them to stakeholders, log them in your CRM, or drop them into Notion \u2014 right from inside Driffle. No copy-pasting, no reformatting.",
    bullets: [
      "One-click sharing to Slack, email, Notion, HubSpot, and more",
      "Custom templates for discovery calls, 1-on-1s, and standups",
      "Shareable links so your whole team can view notes",
      "Keeps your CRM updated without extra effort",
    ],
    color: "#585b3d",
  },
];

function BulletItem({ text }: { text: string }) {
  return (
    <div className="content-stretch flex gap-4 sm:gap-8 items-center relative shrink-0 w-full">
      <div className="h-[17.208px] relative shrink-0 w-4">
        <div className="absolute inset-[-0.74%_-0.8%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16.2556 17.463"
          >
            <path
              d={svgPaths.p34fd1f80}
              fill="var(--fill-0, #DA4C1E)"
              stroke="var(--stroke-0, #003428)"
              strokeWidth="0.255467"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#72726e] text-base sm:text-lg md:text-[22.3px]">
        <p className="leading-8">{text}</p>
      </div>
    </div>
  );
}

export function FeatureScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const eyebrowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        sectionRefs.current.forEach((section, i) => {
          if (!section) return;

          const eyebrow = eyebrowRefs.current[i];
          const title = titleRefs.current[i];
          const body = bodyRefs.current[i];

          if (eyebrow) {
            gsap.fromTo(
              eyebrow,
              { y: 24, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                  end: "top 55%",
                  scrub: 0.4,
                },
              },
            );
          }

          if (title) {
            gsap.fromTo(
              title,
              { y: 36, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 75%",
                  end: "top 45%",
                  scrub: 0.4,
                },
              },
            );
          }

          if (body) {
            gsap.fromTo(
              body,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 65%",
                  end: "top 35%",
                  scrub: 0.4,
                },
              },
            );
          }

          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            onEnter: () => {
              gsap.to(imageRef.current, {
                backgroundColor: FEATURES[i].color,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
            onEnterBack: () => {
              gsap.to(imageRef.current, {
                backgroundColor: FEATURES[i].color,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
          });
        });
      });

      mm.add("(max-width: 1023px)", () => {
        mobileRefs.current.forEach((section) => {
          if (!section) return;
          gsap.fromTo(
            section,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                end: "top 55%",
                scrub: 0.5,
              },
            },
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-white relative rounded-2xl shrink-0 w-full"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl"
      />

      {/* Desktop: sticky image + scroll-triggered entrance animations */}
      <div className="hidden lg:flex lg:flex-row lg:gap-16 xl:gap-20 px-20 xl:px-28 py-[124px] relative w-full max-w-7xl mx-auto">
        <div className="lg:w-1/2 flex flex-col gap-28 xl:gap-36">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
            >
              <div className="flex flex-col gap-6 sm:gap-8 items-start">
                <div
                  ref={(el) => {
                    eyebrowRefs.current[i] = el;
                  }}
                  className="flex flex-col font-title italic justify-center leading-[0] relative shrink-0 text-[#da4c1e] text-[22px] w-full"
                >
                  <p className="leading-[normal]">{f.eyebrow}</p>
                </div>
                <div
                  ref={(el) => {
                    titleRefs.current[i] = el;
                  }}
                  className="flex flex-col font-title justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[48px] tracking-[-0.72px] w-full"
                >
                  <p className="leading-[48px]">{f.title}</p>
                </div>
                <div
                  ref={(el) => {
                    bodyRefs.current[i] = el;
                  }}
                  className="flex flex-col gap-6 w-full"
                >
                  <div className="flex flex-col font-['Geist:Regular',sans-serif] justify-center leading-[0] not-italic text-[#72726e] text-[22.3px] w-full">
                    <p className="leading-8">{f.description}</p>
                  </div>
                  {f.bullets.map((bullet, j) => (
                    <BulletItem key={j} text={bullet} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: sticky image */}
        <div className="lg:w-1/2 relative">
          <div className="sticky top-[calc(50vh-310px)]">
            <div
              ref={imageRef}
              className="h-[621px] relative rounded-2xl w-full"
              style={{ backgroundColor: FEATURES[0].color }}
            >
              <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-8 relative rounded-[inherit] size-full">
                <div className="bg-[#faf5f2] flex-[1_0_0] min-h-px min-w-px rounded-xl w-full" />
              </div>
              <div
                aria-hidden="true"
                className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked with fade-in */}
      <div className="lg:hidden flex flex-col gap-16 px-5 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20 relative w-full">
        {FEATURES.map((f, i) => (
          <div
            key={i}
            ref={(el) => {
              mobileRefs.current[i] = el;
            }}
          >
            <div className="flex flex-col gap-5 sm:gap-7 items-start">
              <div className="flex flex-col font-title italic justify-center leading-[0] text-[#da4c1e] text-base sm:text-lg md:text-[22px] w-full">
                <p className="leading-[normal]">{f.eyebrow}</p>
              </div>
              <div className="flex flex-col font-title justify-center leading-[0] not-italic text-[#0e0f0c] text-[28px] sm:text-[34px] md:text-4xl tracking-[-0.5px] w-full">
                <p className="leading-[1.15]">{f.title}</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',sans-serif] justify-center leading-[0] not-italic text-[#72726e] text-[15px] sm:text-lg md:text-xl w-full">
                <p className="leading-relaxed">{f.description}</p>
              </div>
              {f.bullets.map((bullet, j) => (
                <BulletItem key={j} text={bullet} />
              ))}
            </div>
            <div
              className="mt-8 h-[240px] sm:h-[340px] md:h-[400px] relative rounded-2xl w-full"
              style={{ backgroundColor: f.color }}
            >
              <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-5 sm:p-7 relative rounded-[inherit] size-full">
                <div className="bg-[#faf5f2] flex-[1_0_0] min-h-px min-w-px rounded-xl w-full" />
              </div>
              <div
                aria-hidden="true"
                className="absolute border border-[#d5d5d2] border-solid inset-0 pointer-events-none rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
