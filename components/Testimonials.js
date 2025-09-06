"use client"
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);
  const testimonialsRef = useRef(null);

  const items = [
    {
      image: "https://preview.cruip.com/stellar/images/testimonial-01.jpg",
      quote:
        "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to be able to select between formats.",
      name: "Jessie J",
      role: "Ltd Head of Product",
    },
    {
      image: "https://preview.cruip.com/stellar/images/testimonial-02.jpg",
      quote:
        "I have been using this product for a few weeks now and I am blown away by the results. My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.",
      name: "Spark",
      role: "Founder & CEO",
    },
    {
      image: "https://preview.cruip.com/stellar/images/testimonial-03.jpg",
      quote:
        "As a busy professional, I don't have a lot of time to devote to working out. But with this fitness program, I have seen amazing results in just a few short weeks. The workouts are efficient and effective.",
      name: "Jeff Kahl",
      role: "Appy Product Lead",
    },
  ];

  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Auto-rotate
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1 === items.length ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [items.length]);

  // Height fix
  useEffect(() => {
    if (testimonialsRef.current) {
      const activeChild = testimonialsRef.current.children[active];
      if (activeChild) {
        testimonialsRef.current.style.height = activeChild.offsetHeight + "px";
      }
    }
  }, [active]);

  const stopAutorotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section>
      <div className="cpqxv ca7yh cxk7g c62s6" data-aos="zoom-in-down">
        <div className="cjqw8 c4lt2 cpwbp animate-fade-in">
          {/* Carousel */}
          <div className="c0adw">
            {/* Testimonial image */}
            <div className="clwnn c4lt2 c72ye">
              <div className="cqlly c39hk cfp3e ccdmz cdzmb cldum ctp0s ca1ms ckogm c8c0t c2fmr cvgwp ct4qk cuw57 cku0c ccraq chmqd cdkno cjtm9 cq6fz csbhs c7anr cblyu">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ease-in-out ${
                      active === index ? "opacity-100 block" : "opacity-0 hidden"
                    }`}
                  >
                    <Image
                      className="transform transition-transform duration-500 hover:scale-110"
                      src={item.image}
                      width={56}
                      height={56}
                      alt={item.name || "Testimonial"}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="cwf71">
              <div
                className="ctukp cz8jp cscsd c4cai c4lt2 cg9hr citnk"
                ref={testimonialsRef}
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-500 ease-in-out ${
                      active === index
                        ? "translate-x-0 opacity-100 block"
                        : "translate-x-8 opacity-0 hidden"
                    }`}
                  >
                    <div className="chl73 c80q8 ch30f crgfn c9p57 cnt4i ca7kf c50uv">
                      {item.quote}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="cv6pf ckscb cw50r citnk">
              {items.map((item, index) => (
                <button
                  key={index}
                  className={`transform transition-all duration-300 hover:scale-105 ${
                    active === index
                      ? "c5an1 translate-y-0"
                      : "cvkuv c4ko0 hover:-translate-y-1"
                  }`}
                  onClick={() => {
                    setActive(index);
                    stopAutorotate();
                  }}
                >
                  <span>
                    <span className="cqbkb">{item.name}</span>
                    <span className="cqlbb"> - </span>
                    <span>{item.role}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
