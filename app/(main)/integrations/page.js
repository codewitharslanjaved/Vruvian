'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CTA from '@/components/CTA';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Page = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    return (
        <main className="cih8s">

            {/* Hero */}
            <section className="c4lt2">

                {/* Illustration 02 */}
                <div className="cdzmb ca1ms cfmae cq6fz cstve csbhs cmjk5 c7v3c cswvw cblyu" aria-hidden="true">
                    <Image
                        src="https://preview.cruip.com/stellar/images/page-illustration-02.svg"
                        className="cw312"
                        width={1440}
                        height={427}
                        alt="Page Illustration 02"
                    />
                </div>

                {/* Opacity layer */}
                <div className="cp877 cd8l0 csbhs cvjd3 cblyu" aria-hidden="true"></div>

                {/* Radial gradient */}
                <div className="cdzmb ca1ms ch3pd cv6pf cq2iz cta5t caqr5 cq6fz csbhs c7anr cblyu citnk" aria-hidden="true">
                    <div className="cje6l cg3aq ci4ze cku0c cvkuv csbhs cvjd3"></div>
                    <div className="cg3aq csmir cltun cku0c cxixl csbhs cz52t cwi6g"></div>
                </div>

                {/* Particles animation */}
                <div className="csbhs cvjd3 cblyu c5cj0" aria-hidden="true">
                    <canvas data-particle-animation="" data-particle-quantity="15"></canvas>
                </div>

                {/* Illustration */}
                <div className="cdzmb ca1ms cfmae cq6fz cstve csbhs c7v3c ccz65 cblyu" aria-hidden="true">
                    <Image
                        src="https://preview.cruip.com/stellar/images/page-illustration.svg"
                        className="cw312"
                        width={1440}
                        height={427}
                        alt="Page Illustration"
                    />
                </div>

                <div className="c7rlc ca7yh cxk7g c62s6">
                    <div className="cmma3 c8230">

                        {/* Hero content */}
                        <div className="c0adw cjqw8 cpwbp" data-aos="fade-down"
                            data-aos-delay="200">
                            <div className="c80q8 crgfn cpvrw cic8n cnt4i c1ser cm2qf clj4z">Integrations &amp; Add-ons</div>
                            <h1 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c6odu cgxy0">Make Addizer uniquely yours</h1>
                            <div className="cpqxv cxk7g">
                                <p className="c16mo csqzg">Our landing page template works on all devices&apos; so you only have to set it up once&apos; and get beautiful results forever.</p>
                            </div>
                        </div>

                        <div className="cexs9 czr3h c1t5i cisme csvzg c7ptl cctzk c5z0b ckogm c8c0t c2fmr cvgwp ct4qk c3qgn cv8nf cboss c4lt2">
                            <div className="stellar-carousel swiper-container c73l4" data-aos="zoom-in-up">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>                                <div className="swiper-slide cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 ckkoj cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-01.svg" width="40" height="40" alt="Icon 01"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Retool</Link>
                                            </div>
                                            <div className="cmhzb cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                            <div className="cu781 citnk">
                                                <div className="c686t c73c1 citnk">
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-01.jpg" width="24" height="24" alt="Avatar 01"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-02.jpg" width="24" height="24" alt="Avatar 02"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-03.jpg" width="24" height="24" alt="Avatar 03"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-04.jpg" width="24" height="24" alt="Avatar 04"></Image>
                                                </div>
                                                <button className="cn5ru cs6tu chu7q cta5t cm2qf comlt c4cae citnk">
                                                    <span className="c6qme">Like</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                        <path className="cp2ik" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"></path>
                                                    </svg>
                                                    <span>2.3K</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div></SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slide cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 ckkoj cb919 c73l4">
                                            <div className="cg9hr crsge citnk ce9r8">
                                                <div className="cta5t c7lle cpgza citnk">
                                                    <div className="c4lt2">
                                                        <Image src="https://preview.cruip.com/stellar/images/integrations-02.svg" width="40" height="40" alt="Icon 02"></Image>
                                                        <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                    </div>
                                                    <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Zapier</Link>
                                                </div>
                                                <div className="cmhzb cih8s">
                                                    <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                                </div>
                                                <div className="cu781 citnk">
                                                    <div className="c686t c73c1 citnk">
                                                        <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-05.jpg" width="24" height="24" alt="Avatar 05"></Image>
                                                        <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-06.jpg" width="24" height="24" alt="Avatar 06"></Image>
                                                        <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-07.jpg" width="24" height="24" alt="Avatar 07"></Image>
                                                    </div>
                                                    <button className="cn5ru cs6tu chu7q cta5t cm2qf comlt c4cae citnk">
                                                        <span className="c6qme">Like</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                            <path className="cp2ik" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"></path>
                                                        </svg>
                                                        <span>4.5K</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div></SwiperSlide>
                                    <SwiperSlide>                                <div className="swiper-slide cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 ckkoj cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-03.svg" width="40" height="40" alt="Icon 03"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Airtable</Link>
                                            </div>
                                            <div className="cmhzb cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                            <div className="cu781 citnk">
                                                <div className="c686t c73c1 citnk">
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-08.jpg" width="24" height="24" alt="Avatar 08"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-09.jpg" width="24" height="24" alt="Avatar 09"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-10.jpg" width="24" height="24" alt="Avatar 10"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-11.jpg" width="24" height="24" alt="Avatar 11"></Image>
                                                </div>
                                                <button className="cn5ru cs6tu chu7q cta5t cm2qf comlt c4cae citnk">
                                                    <span className="c6qme">Like</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                        <path className="cp2ik" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"></path>
                                                    </svg>
                                                    <span>4.7K</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div></SwiperSlide>
                                    <SwiperSlide>                                <div className="swiper-slide cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 ckkoj cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-04.svg" width="40" height="40" alt="Icon 04"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Jira</Link>
                                            </div>
                                            <div className="cmhzb cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                            <div className="cu781 citnk">
                                                <div className="c686t c73c1 citnk">
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-12.jpg" width="24" height="24" alt="Avatar 12"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-13.jpg" width="24" height="24" alt="Avatar 13"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-14.jpg" width="24" height="24" alt="Avatar 14"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-15.jpg" width="24" height="24" alt="Avatar 15"></Image>
                                                </div>
                                                <button className="cn5ru cs6tu chu7q cta5t cm2qf comlt c4cae citnk">
                                                    <span className="c6qme">Like</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                        <path className="cp2ik" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"></path>
                                                    </svg>
                                                    <span>4.4K</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div></SwiperSlide>
                                    <SwiperSlide>                                <div className="swiper-slide cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 ckkoj cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-05.svg" width="40" height="40" alt="Icon 05"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">GitLab</Link>
                                            </div>
                                            <div className="cmhzb cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                            <div className="cu781 citnk">
                                                <div className="c686t c73c1 citnk">
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-16.jpg" width="24" height="24" alt="Avatar 16"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-17.jpg" width="24" height="24" alt="Avatar 17"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-18.jpg" width="24" height="24" alt="Avatar 18"></Image>
                                                    <Image className="ch7ii cku0c c2mhi cz8ek" src="https://preview.cruip.com/stellar/images/avatar-19.jpg" width="24" height="24" alt="Avatar 19"></Image>
                                                </div>
                                                <button className="cn5ru cs6tu chu7q cta5t cm2qf comlt c4cae citnk">
                                                    <span className="c6qme">Like</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                        <path className="cp2ik" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"></path>
                                                    </svg>
                                                    <span>3.4K</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div></SwiperSlide>

                                </Swiper>


                            </div>
                        </div>

                        {/* Arrows */}
                        <div className="cz2ij citnk cm9vp">

                        </div>

                    </div>
                </div>

            </section>

            {/* Categories */}
            <section>
                <div className="c7rlc ca7yh cxk7g c62s6">

                    <div className="cjqw8 cpwbp">
                        {/* Tobpabr */}
                        <div className="cnj85 cxve1 cu781 cca6r cta5t crkg8 c9q7k citnk cy1m1" data-aos="fade-right">
                            {/* Links */}
                            <ul className="cmt6c cm2qf crkg8 c4cae citnk">
                                <li>
                                    <Link className="cjqnf cn5ru cs6tu cqbkb cta5t comlt citnk" href="#engineering">
                                        <svg className="cp2ik" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path d="m7.7 7.3-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L5.6 8l-4.3 4.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4ZM8 12h7v2H8z"></path>
                                        </svg>
                                        <span>Engineering</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="cjqnf cn5ru cs6tu cqbkb cta5t comlt citnk" href="#nocode">
                                        <svg className="cp2ik" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path d="M10 15c-.4 0-.8-.3-.9-.7L5.8 4.6 3.9 8.4c-.2.4-.5.6-.9.6H0V7h2.4l2.7-5.4c.2-.4.6-.6 1-.6s.7.3.9.7l3.2 9.7 1.9-3.8c.2-.4.5-.6.9-.6h3v2h-2.4l-2.7 5.4c-.2.4-.5.6-.9.6Z"></path>
                                        </svg>
                                        <span>No-code</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="cjqnf cn5ru cs6tu cqbkb cta5t comlt citnk" href="#collaboration">
                                        <svg className="cp2ik" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path d="M7.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 15.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 10.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z"></path>
                                        </svg>
                                        <span>Collaboration</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="cjqnf cn5ru cs6tu cqbkb cta5t comlt citnk" href="#productivity">
                                        <svg className="cp2ik" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z"></path>
                                            <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z"></path>
                                        </svg>
                                        <span>Productivity</span>
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <form className="cta5t c4lt2 citnk">
                                    <input className="czofm cr687 ce166 cgib4 cbwi7 ciqee csqk0 ca9zm croh5" type="text" id="search" aria-label="Search…" placeholder="Search…" autoComplete="off"></input>
                                    <div className="cdzmb cv6pf cta5t csbhs cvjd3 citnk ckebe">
                                        <svg className="cbulz csbhs cz2je" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z"></path>
                                        </svg>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Cards */}
                        <div>
                            {/* Section #1 */}
                            <div className="ckjn9 chy9q" data-aos="fade-down">
                                <h3 id="engineering" className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c1ser crq0r ca7kf ctdn8 cin20">Engineering</h3>
                                <div className="c9c1i can2d cvby4 co6zy">
                                    {/* Card #1 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-06.svg" width="40" height="40" alt="Icon 06"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Vercel</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #2 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-07.svg" width="40" height="40" alt="Icon 07"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Sentry</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #3 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-04.svg" width="40" height="40" alt="Icon 04"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Jira</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #4 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-08.svg" width="40" height="40" alt="Icon 08"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">GitHub</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #5 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-05.svg" width="40" height="40" alt="Icon 05"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">GitLab</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #6 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-01.svg" width="40" height="40" alt="Icon 01"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Retool</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Section #2 */}
                            <div className="ckjn9 chy9q" data-aos="fade-down">
                                <h3 id="nocode" className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c1ser crq0r ca7kf ctdn8 cin20">No-code</h3>
                                <div className="c9c1i can2d cvby4 co6zy">
                                    {/* Card #1 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-02.svg" width="40" height="40" alt="Icon 02"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Zapier</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #2 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-03.svg" width="40" height="40" alt="Icon 03"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Airtable</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #3 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-09.svg" width="40" height="40" alt="Icon 09"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Framer</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #4 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-10.svg" width="40" height="40" alt="Icon 10"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Jotform</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #5 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-11.svg" width="40" height="40" alt="Icon 11"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Webflow</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #6 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-12.svg" width="40" height="40" alt="Icon 12"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Coda</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Section #3 */}
                            <div className="ckjn9 chy9q" data-aos="fade-down">
                                <h3 id="collaboration" className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c1ser crq0r ca7kf ctdn8 cin20">Collaboration</h3>
                                <div className="c9c1i can2d cvby4 co6zy">
                                    {/* Card #1 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-13.svg" width="40" height="40" alt="Icon 13"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Asana</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #2 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-14.svg" width="40" height="40" alt="Icon 14"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Myngo</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #3 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-15.svg" width="40" height="40" alt="Icon 15"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Bonsai</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #4 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-16.svg" width="40" height="40" alt="Icon 16"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Decipad</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #5 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-17.svg" width="40" height="40" alt="Icon 17"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Miro</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #6 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-18.svg" width="40" height="40" alt="Icon 18"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Popform</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Section #4 */}
                            <div className="ckjn9 chy9q" data-aos="fade-down">
                                <h3 id="productivity" className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c1ser crq0r ca7kf ctdn8 cin20">Productivity</h3>
                                <div className="c9c1i can2d cvby4 co6zy">
                                    {/* Card #1 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-19.svg" width="40" height="40" alt="Icon 19"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Linear</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #2 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-20.svg" width="40" height="40" alt="Icon 20"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Microsoft</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #3 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-21.svg" width="40" height="40" alt="Icon 21"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Google Drive</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #4 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-22.svg" width="40" height="40" alt="Icon 22"></Image>
                                                    <Image className="csbhs csk37 c7anr" src="https://preview.cruip.com/stellar/images/star.svg" width="16" height="16" alt="Star" aria-hidden="true"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">InVision</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #5 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-23.svg" width="40" height="40" alt="Icon 23"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">WeTransfer</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card #6 */}
                                    <div className="cans4 cp6em cn5ru ch7ii ca2cv csy15 cww8d c4lt2 cb919 c73l4">
                                        <div className="cg9hr crsge citnk ce9r8">
                                            <div className="cta5t c7lle cpgza citnk">
                                                <div className="c4lt2">
                                                    <Image src="https://preview.cruip.com/stellar/images/integrations-24.svg" width="40" height="40" alt="Icon 24"></Image>
                                                </div>
                                                <Link className="c0on6 csvyp chl73 c80q8 ch30f crgfn c9p57 co6h2 cnt4i" href="integrations-single.html">Hotjar</Link>
                                            </div>
                                            <div className="cih8s">
                                                <div className="c16mo c4cae">Vruvian makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* CTA */}
            <CTA title="The security first platform" subtitle="Build your own integration
" description="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet." buttonText="Start Building" />

        </main>
    )
}

export default Page
