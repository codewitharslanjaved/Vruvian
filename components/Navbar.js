"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="cpaw2 ctz8y fixed top-0 bg-background/50 backdrop-blur-lg">
            <div className="c7rlc ca7yh cxk7g c62s6">
                <div className="cu781 cta5t c7uhm citnk cqxtx">

                    {/* Site branding */}
                    <div className="ceb4u">
                        {/* Logo */}
                        <Link href="/" aria-label="Cruip">
                            <Image
                                className="cw312"
                                src="/logo.svg"
                                width={38}
                                height={38}
                                alt="Stellar"
                            />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="ckft5 c4bse c01dc">
                        <ul className="cv6pf cta5t ckscb citnk cih8s">
                        <li>
                                    <Link
                                        className="cs6tu chu7q cz8jp cm2qf cscsd coh5f cpl7r c4cae cr6r1"
                                        href={`/`}
                                    >
                                        Home
                                    </Link>
                                </li>
                            {['About', 'Integrations', 'Pricing', 'Customers', 'Changelog'].map((item) => (
                                <li key={item}>
                                    <Link
                                        className="cs6tu chu7q cz8jp cm2qf cscsd coh5f cpl7r c4cae cr6r1"
                                        href={`/${item.toLowerCase()}`}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop sign in links */}
                    <ul className="cta5t cz2ij ceb4u citnk">
                        <li>
                            <Link
                                className="cjqnf cs6tu chu7q cz8jp cm2qf cscsd coh5f c4cae"
                                href="/signin"
                            >
                                Sign in
                            </Link>
                        </li>
                        <li className="cogux">
                            <Link
                                className="cjg8t ce8dy cjhxf ccdmz cs6tu ckogm c8c0t chu7q cz8jp cscsd coh5f c4lt2 c36y6 cpaw2 c73l4"
                                href="/signup"
                            >
                                <span className="cta5t c1ser c4lt2">
                                    Sign up <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">-&gt;</span>
                                </span>
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile menu */}
                    <div className="cta5t c3odk ckq5l citnk">
                        {/* Hamburger button */}
                        <button
                            className="cs6tu cv6pf chu7q cta5t c1ser c0adw coh5f c73l4 c12cr czkwf"
                            aria-controls="mobile-nav"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="c6qme">Menu</span>
                            <svg className="cdzmb c01eg cppgq cchn9" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <rect className="cl6a4 cbcyu codbc cn8i4 ctukp cnhd4 cccm5" y="7" width="16" height="2" rx="1"></rect>
                                <rect className="ctvrd czjmr ctukp cnhd4 cccm5" y="7" width="16" height="2" rx="1"></rect>
                                <rect className="cl6a4 ck3xz codbc csena ctukp cnhd4 cccm5" y="7" width="16" height="2" rx="1"></rect>
                            </svg>
                        </button>

                        {/* Mobile navigation */}
                        <nav
                            id="mobile-nav"
                            className={`cxmgp ctukp cccm5 cscsd csbhs cmint ca7yh cr8kn cpaw2 cdmuy c62s6 ${
                                isMobileMenuOpen ? 'opacity-100' : 'max-h-0 opacity-80'
                            }`}
                        >
                            <ul className="cjg8t cn0tc c6nee clat9 cb919 c62s6">
                            <li>
                                    <Link
                                        className="cs6tu chu7q cm2qf clat9 c4cae citnk"
                                        href={`/`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                {['About', 'Integrations', 'Pricing', 'Customers', 'Changelog'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            className="cs6tu chu7q cm2qf clat9 c4cae citnk"
                                            href={`/${item.toLowerCase()}`}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
