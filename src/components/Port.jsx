import { portText } from "../data/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
const Port = () => {
    const horizontalRef = useRef(null);
    const horSectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const horizontal = horizontalRef.current;
        const horSection = horSectionRef.current;

        const animation = gsap.to(horSection, {
            xPercent: -100 * (horSection.length - 1),
            ease: "none",

            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                // end: "+=3000px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                // markers: true,
            },
        });

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port_inner">
                <div className="port_title">Mountain Ranges</div>
                <div className="port_wrap">
                    {portText.map((port, idx) => (
                        <article
                            className={`port_item p${idx + 1}`}
                            key={port.num}
                            ref={(el) => {
                                horSectionRef.current[idx] = el;
                            }}
                        >
                            <span className="num">{port.num}</span>
                            <a className="img" href={port.code} target="_blank" rel="noreferrer">
                                <img alt={port.name} src={port.img} />
                            </a>
                            <h1 className="title">{port.title}</h1>
                            <p className="desc">{port.desc}</p>
                            <a className="site" href={port.view} target="_blank" rel="noreferrer">
                                자세히보기
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;
