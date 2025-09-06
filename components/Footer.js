import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="c7rlc ca7yh cxk7g c62s6">
            {/* Footer Wrapper */}
            <div className="cd7js c7052 c9xwv co6zy cm9vp">

                {/* 1st Block - Logo and Social Links */}
                <div className="cl3r2 cben8 ccaj3 c65se">
                    <div className="cu781 cg5wk ceta9 cg9hr crsge citnk">
                        <div className="cdu7y cmhzb">
                            <div className="cmhzb">
                                {/* Logo */}
                                <Link href="/" aria-label="Cruip">
                                    <Image
                                        src="/logo.svg"
                                        width={38}
                                        height={38}
                                        alt="Stellar"
                                    />
                                </Link>
                            </div>
                            <div className="chu7q c4cae">© Vruvian.com <span className="c5668">-</span> All rights reserved.</div>
                        </div>
                        {/* Social Links */}
                        <ul className="citnk">
                            <li>
                                <Link href="#0" aria-label="Twitter" className="cuz37 c1nfs cv6pf cta5t cz8jp cscsd coh5f citnk">
                                    <svg className="c01eg c12cr czkwf" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                                    </svg>
                                </Link>
                            </li>
                            <li className="c2m0f">
                                <Link href="#0" aria-label="Dev.to" className="cuz37 c1nfs cv6pf cta5t cz8jp cscsd coh5f citnk">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                        <path className="c01eg c12cr czkwf" d="M12.29 14.3a.69.69 0 0 0-.416-.155h-.623v3.727h.623a.689.689 0 0 0 .416-.156.543.543 0 0 0 .21-.466v-2.488a.547.547 0 0 0-.21-.462ZM22.432 8H9.568C8.704 8 8.002 8.7 8 9.564v12.872A1.568 1.568 0 0 0 9.568 24h12.864c.864 0 1.566-.7 1.568-1.564V9.564A1.568 1.568 0 0 0 22.432 8Zm-8.925 9.257a1.631 1.631 0 0 1-1.727 1.687h-1.657v-5.909h1.692a1.631 1.631 0 0 1 1.692 1.689v2.533ZM17.1 14.09h-1.9v1.372h1.163v1.057H15.2v1.371h1.9v1.056h-2.217a.72.72 0 0 1-.74-.7v-4.471a.721.721 0 0 1 .7-.739H17.1v1.054Zm3.7 4.118c-.471 1.1-1.316.88-1.694 0l-1.372-5.172H18.9l1.058 4.064 1.056-4.062h1.164l-1.378 5.17Z"></path>
                                    </svg>
                                </Link>
                            </li>
                            <li className="c2m0f">
                                <Link href="#0" aria-label="Github" className="cuz37 c1nfs cv6pf cta5t cz8jp cscsd coh5f citnk">
                                    <svg className="c01eg c12cr czkwf" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2nd Block - Products */}
                <div className="ctfcd cdk1r c3sly">
                    <h6 className="cqbkb cm2qf c4cae c4ecq">Products</h6>
                    <ul className="cmcd2 c4cae">
                        {['Features', 'Integrations', 'Pricing & Plans', 'Changelog', 'Our method'].map((item) => (
                            <li key={item}>
                                <Link href="#0" className="cj1pe c16mo cz8jp cscsd coh5f">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3rd Block - Company */}
                <div className="ctfcd cdk1r c3sly">
                    <h6 className="cqbkb cm2qf c4cae c4ecq">Company</h6>
                    <ul className="cmcd2 c4cae">
                        {['About us', 'Diversity & Inclusion', 'Blog', 'Careers', 'Financial statements'].map((item) => (
                            <li key={item}>
                                <Link href="#0" className="cj1pe c16mo cz8jp cscsd coh5f">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4th Block - Resources */}
                <div className="ctfcd cdk1r c3sly">
                    <h6 className="cqbkb cm2qf c4cae c4ecq">Resources</h6>
                    <ul className="cmcd2 c4cae">
                        {['Community', 'Terms of service', 'Report a vulnerability'].map((item) => (
                            <li key={item}>
                                <Link href="#0" className="cj1pe c16mo cz8jp cscsd coh5f">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 5th Block - Legals */}
                <div className="ctfcd cdk1r c3sly">
                    <h6 className="cqbkb cm2qf c4cae c4ecq">Legals</h6>
                    <ul className="cmcd2 c4cae">
                        {['Refund policy', 'Terms & Conditions', 'Privacy policy', 'Brand Kit'].map((item) => (
                            <li key={item}>
                                <Link href="#0" className="cj1pe c16mo cz8jp cscsd coh5f">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
