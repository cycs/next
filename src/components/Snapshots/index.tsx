'use client';

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './snapshots.module.css';
import { useInView } from 'react-intersection-observer';

export const Snapshots: FC = () => {
  console.log('snapshots');
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const svgRef = useRef(null);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  console.log({});

  const handleScroll = useCallback(() => {
    if (svgRef.current && inView) {
      const scrollY = window.scrollY;
      setScrollVelocity(scrollY);
    }
  }, [inView]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, inView]);

  return (
    <section className="px-12 pb-12" ref={ref}>
      <h3 className="pb-3 text-">projects</h3>
      <div className="rounded-md bg-stone-900 h-96 w-full flex justify-center items-center text-stone-100 p-10">
        <div className="colorflow-logo">
          {/* <svg
            width="630px"
            height="120px"
            viewBox="0 0 630.41797 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                {`.cls-1{fill:url(#a)}.cls-2{fill:url(#d)}.cls-3{fill:url(#c)}.cls-4{fill:url(#b)}`}
              </style>

              <linearGradient
                id="a"
                x2="120"
                y1="60"
                y2="60"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fad11c" offset="0" />
                <stop stopColor="#e8a534" offset=".095" />
                <stop stopColor="#d06954" offset=".234" />
                <stop stopColor="#be3e6b" offset=".353" />
                <stop stopColor="#b3247a" offset=".445" />
                <stop stopColor="#af1a7f" offset=".5" />
                <stop stopColor="#914194" offset=".576" />
                <stop stopColor="#7763a5" offset=".656" />
                <stop stopColor="#637eb3" offset=".739" />
                <stop stopColor="#5491bd" offset=".822" />
                <stop stopColor="#4c9cc3" offset=".908" />
                <stop stopColor="#49a0c5" offset="1" />
              </linearGradient>
              <linearGradient
                id="d"
                x1="127.67"
                x2="200.33"
                y1="83.333"
                y2="83.333"
                xlinkHref="#a"
              />
              <linearGradient
                id="c"
                x1="243.33"
                x2="316"
                y1="83.394"
                y2="83.394"
                xlinkHref="#a"
              />
              <linearGradient
                id="b"
                x1="454.33"
                x2="527"
                y1="83.394"
                y2="83.394"
                xlinkHref="#a"
              />
            </defs>
            <title>Colorflow</title>
            <g data-name="Calque 2">
              <g data-name="Calque 1">
                <path
                  fill="white"
                  d="M208.7 97.857V29.995h16.121v66.822q0 4.94 2.015 6.955 2.015 2.016 7.215 2.016h6.11v13.91h-8.97q-11.44 0-16.966-5.396-5.525-5.395-5.525-16.445zm128.44-45.761v7.67a21.088 21.088 0 0 1 8.515-6.825 27.454 27.454 0 0 1 11.246-2.275 33.118 33.118 0 0 1 6.37.52v15.34a26.714 26.714 0 0 0-9.62-1.69q-7.67 0-11.896 4.486-4.225 4.485-4.226 12.936v37.44h-16.12V52.097zm58.24-3.38v3.38h14.561v11.31H395.38V119.7h-15.991V63.407h-9.1V52.096h9.1v-2.73q0-9.62 5.07-14.496 5.07-4.875 14.951-4.875h10.53v10.92h-5.98q-4.68 0-6.63 1.82-1.95 1.822-1.95 5.981zm25.08 49.141V29.995h16.121v66.822q0 4.94 2.015 6.955 2.015 2.016 7.215 2.016h6.11v13.91h-8.97q-11.44 0-16.966-5.396-5.525-5.395-5.525-16.445zM542.4 52.096l13.65 45.242 15.73-45.242h12.091l15.99 45.242 13.391-45.242h17.161l-23.271 67.603h-13.65l-15.601-45.762-15.731 45.762h-13.65l-23.142-67.603z"
                />
                <g>
                  <path
                    fill="white"
                    className="cls-1"
                    d="M60 0a60 60 0 1 0 60 60A60 60 0 0 0 60 0zm0 100a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"
                  />
                  <path
                    fill="white"
                    d="M82.188 93.282a40.004 40.004 0 1 1-.79-67.069l10.7-16.894a59.995 59.995 0 1 0 1.183 100.6zM120 60l-1 1h1"
                  />
                </g>
                <path
                  fill="white"
                  className="cls-2"
                  d="M164 47a36.333 36.333 0 1 0 36.333 36.333A36.333 36.333 0 0 0 164 47zm0 60.556a24.222 24.222 0 1 1 24.222-24.222A24.222 24.222 0 0 1 164 107.556z"
                />
                <path
                  fill="white"
                  d="M143.85 96.769a24.224 24.224 0 1 1 40.614-.478l10.23 6.48a36.33 36.33 0 1 0-60.921.716zM164 119.67l-.606-.606v.606"
                />
                <path
                  className="cls-3"
                  d="M279.67 47.061a36.333 36.333 0 1 0 36.333 36.333 36.333 36.333 0 0 0-36.333-36.333zm0 60.556a24.222 24.222 0 1 1 24.222-24.222 24.222 24.222 0 0 1-24.222 24.222z"
                />
                <path
                  fill="white"
                  d="M266.23 63.24a24.224 24.224 0 1 1 .478 40.614l-6.48 10.23a36.33 36.33 0 1 0-.716-60.921zm-22.9 20.154l.606-.606h-.606"
                />
                <path
                  fill="white"
                  className="cls-4"
                  d="M490.67 47.061a36.333 36.333 0 1 0 36.333 36.333 36.333 36.333 0 0 0-36.333-36.333zm0 60.556a24.222 24.222 0 1 1 24.222-24.222 24.222 24.222 0 0 1-24.222 24.222z"
                />
                <path
                  fill="white"
                  d="M510.82 69.958a24.224 24.224 0 1 1-40.614.478l-10.23-6.48a36.33 36.33 0 1 0 60.921-.716zm-20.15-22.897l.606.606v-.606"
                />
              </g>
            </g>
          </svg> */}
          <svg
            className="logo__big logo"
            viewBox="0 0 630.41797 120"
            xmlns="http://www.w3.org/2000/svg"
            width="630px"
            height="120px"
            ref={svgRef}
          >
            <defs>
              <style>{`.grad1{fill:url(#loga);}.grad2{fill:url(#logd);}.grad3{fill:url(#logc);}.grad4{fill:url(#logb);}`}</style>
              <linearGradient
                id="loga"
                x2="120"
                y1="60"
                y2="60"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fad11c" offset="0" />
                <stop stopColor="#e8a534" offset=".09502" />
                <stop stopColor="#d06954" offset=".23417" />
                <stop stopColor="#be3e6b" offset=".353" />
                <stop stopColor="#b3247a" offset=".44537" />
                <stop stopColor="#af1a7f" offset=".5" />
                <stop stopColor="#914194" offset=".57574" />
                <stop stopColor="#7763a5" offset=".65635" />
                <stop stopColor="#637eb3" offset=".73874" />
                <stop stopColor="#5491bd" offset=".82249" />
                <stop stopColor="#4c9cc3" offset=".90844" />
                <stop stopColor="#49a0c5" offset="1" />
              </linearGradient>
              <linearGradient
                id="logd"
                x1="127.67"
                x2="200.33"
                y1="83.333"
                y2="83.333"
                xlinkHref="#loga"
              />
              <linearGradient
                id="logc"
                x1="243.33"
                x2="316"
                y1="83.394"
                y2="83.394"
                xlinkHref="#loga"
              />
              <linearGradient
                id="logb"
                x1="454.33"
                x2="527"
                y1="83.394"
                y2="83.394"
                xlinkHref="#loga"
              />
            </defs>
            <g data-name="logo_colorflow">
              <path
                fill="white"
                d="m208.7 97.857v-67.862h16.121v66.822q0 4.9409 2.0146 6.9551 2.0156 2.0156 7.2153 2.0156h6.1104v13.91h-8.9702q-11.44 0-16.966-5.3955-5.5254-5.395-5.5254-16.445z"
              />
              <path
                fill="white"
                d="m337.14 52.096v7.6699a21.088 21.088 0 0 1 8.5151 -6.8252 27.454 27.454 0 0 1 11.246 -2.2744 33.118 33.118 0 0 1 6.3701 0.51953v15.341a26.714 26.714 0 0 0 -9.6201 -1.6904q-7.6707 0-11.896 4.4854-4.2253 4.4853-4.2256 12.936v37.441h-16.12v-67.603z"
              />
              <path
                fill="white"
                d="m395.38 48.716v3.3799h14.561v11.311h-14.561v56.292h-15.991v-56.292h-9.1001v-11.311h9.1001v-2.7305q0-9.6196 5.0703-14.495 5.0706-4.875 14.951-4.875h10.53v10.92h-5.98q-4.6802 0-6.6304 1.8203-1.9504 1.8208-1.9502 5.9805z"
              />
              <path
                fill="white"
                d="m420.46 97.857v-67.862h16.121v66.822q0 4.9409 2.0146 6.9551 2.0156 2.0156 7.2153 2.0156h6.1104v13.91h-8.9702q-11.44 0-16.966-5.3955-5.5254-5.395-5.5254-16.445z"
              />
              <path
                fill="white"
                d="m542.4 52.096l13.65 45.242 15.73-45.242h12.091l15.99 45.242 13.391-45.242h17.161l-23.271 67.603h-13.65l-15.601-45.762-15.731 45.762h-13.65l-23.142-67.603z"
              />
              <g
                className="logo__el logo__el--c"
                style={{ transform: `rotate(${scrollVelocity * 0.2}deg)` }}
              >
                <path
                  className="grad1"
                  d="M60,0a60,60,0,1,0,60,60A60,60,0,0,0,60,0Zm0,100a40,40,0,1,1,40-40A40,40,0,0,1,60,100Z"
                />
                <path
                  fill="white"
                  d="m82.188 93.282a40.004 40.004 0 1 1 -0.78907 -67.069l10.699-16.894a59.995 59.995 0 1 0 1.1835 100.6z"
                />
              </g>
              <g
                className="logo__el logo__el--o1"
                style={{ transform: `rotate(${-scrollVelocity * 0.8}deg)` }}
              >
                <path
                  className="grad2"
                  d="m164 47a36.333 36.333 0 1 0 36.333 36.333 36.333 36.333 0 0 0 -36.333 -36.333zm0 60.556a24.222 24.222 0 1 1 24.222 -24.222 24.222 24.222 0 0 1 -24.222 24.222z"
                />
                <path
                  fill="white"
                  d="m143.85 96.769a24.224 24.224 0 1 1 40.614 -0.47782l10.23 6.4791a36.33 36.33 0 1 0 -60.921 0.71669z"
                />
              </g>
              <g
                className="logo__el logo__el--o2"
                style={{ transform: `rotate(${scrollVelocity * 1.6}deg)` }}
              >
                <path
                  className="grad3"
                  d="m279.67 47.061a36.333 36.333 0 1 0 36.333 36.333 36.333 36.333 0 0 0 -36.333 -36.333zm0 60.556a24.222 24.222 0 1 1 24.222 -24.222 24.222 24.222 0 0 1 -24.222 24.222z"
                />
                <path
                  fill="white"
                  d="m266.23 63.24a24.224 24.224 0 1 1 0.47782 40.614l-6.4791 10.23a36.33 36.33 0 1 0 -0.71669 -60.921z"
                />
              </g>
              <g
                className="logo__el logo__el--o3"
                style={{ transform: `rotate(${scrollVelocity * 0.6}deg)` }}
              >
                <path
                  className="grad4"
                  d="m490.67 47.061a36.333 36.333 0 1 0 36.333 36.333 36.333 36.333 0 0 0 -36.333 -36.333zm0 60.556a24.222 24.222 0 1 1 24.222 -24.222 24.222 24.222 0 0 1 -24.222 24.222z"
                />
                <path
                  fill="white"
                  d="m510.82 69.958a24.224 24.224 0 1 1 -40.614 0.47782l-10.23-6.4791a36.33 36.33 0 1 0 60.921 -0.71669z"
                />
              </g>
            </g>
          </svg>
          {/* <svg
            className="logo__small logo"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>{`.logo__small--c{fill:url(#e);}`}</style>
              <linearGradient
                id="e"
                x2="120"
                y1="60"
                y2="60"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fad11c" offset="0" />
                <stop stopColor="#e8a534" offset=".09502" />
                <stop stopColor="#d06954" offset=".23417" />
                <stop stopColor="#be3e6b" offset=".353" />
                <stop stopColor="#b3247a" offset=".44537" />
                <stop stopColor="#af1a7f" offset=".5" />
                <stop stopColor="#914194" offset=".57574" />
                <stop stopColor="#7763a5" offset=".65635" />
                <stop stopColor="#637eb3" offset=".73874" />
                <stop stopColor="#5491bd" offset=".82249" />
                <stop stopColor="#4c9cc3" offset=".90844" />
                <stop stopColor="#49a0c5" offset="1" />
              </linearGradient>
            </defs>
            <g data-name="letter_c">
              <path
                className="logo__small--c"
                d="M60,0a60,60,0,1,0,60,60A60,60,0,0,0,60,0Zm0,100a40,40,0,1,1,40-40A40,40,0,0,1,60,100Z"
              />
              <g className="logo__el logo__el--bigc">
                <path d="m82.188 93.282a40.004 40.004 0 1 1 -0.78907 -67.069l10.699-16.894a59.995 59.995 0 1 0 1.1835 100.6z" />
              </g>
            </g>
          </svg> */}
        </div>
      </div>
    </section>
  );
};
