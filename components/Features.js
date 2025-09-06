import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Features = () => {
    const [activeTab, setActiveTab] = useState('1')

    return (
        <div>
            <section>
                <div className="c7rlc c4lt2 ca7yh cxk7g c62s6">

                    {/* Illustration */}
                    <div className="cdzmb cpl4a cxmgp csbhs cvjd3 ca0nu cblyu" aria-hidden="true">
                        <div className="ca1ms cq6fz csbhs c7anr cblyu">
                            <Image
                                src="/glow-top.svg"
                                width={1404}
                                height={658}
                                alt="Features Illustration"
                                className="cw312"
                            />
                        </div>
                    </div>

                    <div className="cjqw8 cyuy9 cpwbp c5dbr">
                        <div>
                            {/* Section content */}
                            <div className="cjklf cng6q cnei8 cj4ls cwj02 c0z63 cre2l c5ett cz0pw cg9hr cxk7g citnk">

                                {/* Content */}
                                <div className="cezm6 cddom cpjot cxjps c65se" data-aos="fade-down">
                                    {/* Content #1 */}
                                    <div>
                                        <div className="c80q8 crgfn cpvrw cic8n cnt4i c1ser cm2qf clj4z">The security first platform</div>
                                    </div>
                                    <h3 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i clj4z c78uk">Simplify your security with authentication services</h3>
                                    <p className="c16mo csqzg ci5zu">Define access roles for the end-users, and extend your authorization capabilities to implement dynamic access control.</p>
                                    <div className="ckwe7 cmcd2 c0fvl cbg2n">
                                        <button
                                            className={`c4h8f cpq1v cqbkb cta5t cz8jp cm2qf cscsd coh5f c90mn c4cae cpaw2 cb919 citnk c6rcm c405v ${activeTab !== '1' ? 'cj4h1 ca93n' : 'ckqrw cx431 cl5ur'}`}
                                            onClick={() => setActiveTab('1')}
                                        >
                                            <svg className="c21kk clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z"></path>
                                            </svg>
                                            <span>Simplify your security</span>
                                        </button>
                                        <button
                                            className={`c4h8f cpq1v cqbkb cta5t cz8jp cm2qf cscsd coh5f c90mn c4cae cpaw2 cb919 citnk c6rcm c405v ${activeTab !== '2' ? 'cj4h1 ca93n' : 'ckqrw cx431 cl5ur'}`}
                                            onClick={() => setActiveTab('2')}
                                        >
                                            <svg className="c21kk clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z"></path>
                                            </svg>
                                            <span>Customer identity</span>
                                        </button>
                                        <button
                                            className={`c4h8f cpq1v cqbkb cta5t cz8jp cm2qf cscsd coh5f c90mn c4cae cpaw2 cb919 citnk c6rcm c405v ${activeTab !== '3' ? 'cj4h1 ca93n' : 'ckqrw cx431 cl5ur'}`}
                                            onClick={() => setActiveTab('3')}
                                        >
                                            <svg className="c21kk clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z"></path>
                                            </svg>
                                            <span>Adaptable authentication</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="cvv3w cxjps" data-aos="fade-up" data-aos-delay="100">
                                    <div className="c4lt2 cu9si cn5u8">

                                        {/* Particles animation */}
                                        <div className="csbhs cvjd3 cblyu">
                                            <canvas data-particle-animation="" data-particle-quantity="8" data-particle-staticity="30"></canvas>
                                        </div>

                                        <div className="cv6pf cta5t citnk">
                                            <div className="cv6pf cta5t c4lt2 citnk ca3dp cnbly">
                                                {/* Halo effect */}
                                                <svg
                                                    className="cdibk cdzmb ca1ms ch3pd cq6fz c518d csbhs c5u3j cvjd3 c6jif"
                                                    width="480"
                                                    height="480"
                                                    viewBox="0 0 480 480"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <defs>
                                                        <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
                                                            <stop offset="0%" stopColor="#10B981"></stop> {/* Green */}
                                                            <stop offset="76.382%" stopColor="#FFFFFF"></stop> {/* White */}
                                                            <stop offset="100%" stopColor="#3B82F6"></stop> {/* Blue */}
                                                        </linearGradient>
                                                    </defs>
                                                    <g fillRule="evenodd">
                                                        <path
                                                            className="c3wbi"
                                                            fill="url(#pulse-a)"
                                                            fillRule="evenodd"
                                                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                                                        ></path>
                                                        <path
                                                            className="c6sru c3wbi"
                                                            fill="url(#pulse-a)"
                                                            fillRule="evenodd"
                                                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                                                        ></path>
                                                        <path
                                                            className="chkdx c3wbi"
                                                            fill="url(#pulse-a)"
                                                            fillRule="evenodd"
                                                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                                                        ></path>
                                                    </g>
                                                </svg>

                                                {/* Grid */}
                                                <div className="c9prb cdzmb ca1ms ch3pd cxmgp cku0c coo61 cby26 cq6fz c518d csbhs c5u3j cvjd3">
                                                    <div className="cvsez cr959">
                                                        <div className="c2t07 cczds cxm3k csbhs cvjd3"></div>
                                                        <div className="ctl9n csbhs cvjd3"></div>
                                                        <div className="csqkd cczds cxm3k csbhs cvjd3"></div>
                                                        <div className="cbn6o csbhs cvjd3"></div>
                                                    </div>
                                                </div>
                                                {/* Icons */}
                                                {activeTab === '1' && (
                                                    <div className="cjg8t cjhxf c115b cn0tc cgr36 ckogm c8c0t cv6pf cta5t cvotd c5cyt c4lt2 cb919 citnk cqxtx ci523">
                                                        <svg className="c7u3b c4lt2" xmlns="http://www.w3.org/2000/svg" width="23" height="25">
                                                            <path fillRule="nonzero" d="M10.55 15.91H.442L14.153.826 12.856 9.91h10.107L9.253 24.991l1.297-9.082Zm.702-8.919L4.963 13.91h7.893l-.703 4.918 6.289-6.918H10.55l.702-4.918Z"></path>
                                                        </svg>
                                                    </div>
                                                )}
                                                {activeTab === '2' && (
                                                    <div className="cjg8t cjhxf c115b cn0tc cgr36 ckogm c8c0t cv6pf cta5t cvotd c5cyt c4lt2 cb919 citnk cqxtx ci523">
                                                        <svg className="c7u3b c4lt2" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                                                            <path d="M18 14h-2V8h2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v2H8V4c0-2.2-1.8-4-4-4S0 1.8 0 4s1.8 4 4 4h2v6H4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-2h6v2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4ZM16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2V4ZM2 4c0-1.1.9-2 2-2s2 .9 2 2v2H4c-1.1 0-2-.9-2-2Zm4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2ZM8 8h6v6H8V8Zm10 12c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Z"></path>
                                                        </svg>
                                                    </div>
                                                )}
                                                {activeTab === '3' && (
                                                    <div className="cjg8t cjhxf c115b cn0tc cgr36 ckogm c8c0t cv6pf cta5t cvotd c5cyt c4lt2 cb919 citnk cqxtx ci523">
                                                        <svg className="c7u3b c4lt2" xmlns="http://www.w3.org/2000/svg" width="26" height="14">
                                                            <path fillRule="nonzero" d="m10 5.414-8 8L.586 12 10 2.586l6 6 8-8L25.414 2 16 11.414z"></path>
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
