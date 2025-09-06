import React from "react";

import Image from "next/image";

import Link from "next/link";
const customers = [
  {
    id: 1,
    bg: "./customer-bg-01.png",
    logo: " ./customer-01.svg",
    logoW: 78,
    logoH: 34,
    alt: "Customer 01",
    style: { "--mouse-x": "227px", "--mouse-y": "2px" },
  },
  {
    id: 2,
    bg: " ./customer-bg-02.png",
    logo: " ./customer-02.svg",
    logoW: 70,
    logoH: 25,
    alt: "Customer 02",
    style: { "--mouse-x": "-149px", "--mouse-y": "2px" },
  },
  {
    id: 3,
    bg: " ./customer-bg-03.png",
    logo: " ./customer-03.svg",
    logoW: 107,
    logoH: 33,
    alt: "Customer 03",
    style: { "--mouse-x": "-525px", "--mouse-y": "2px" },
  },
  {
    id: 4,
    bg: " ./customer-bg-04.png",
    logo: " ./customer-04.svg",
    logoW: 85,
    logoH: 36,
    alt: "Customer 04",
    style: { "--mouse-x": "227px", "--mouse-y": "-220px" },
  },
  {
    id: 5,
    bg: " ./customer-bg-05.png",
    logo: " ./customer-05.svg",
    logoW: 86,
    logoH: 18,
    alt: "Customer 05",
    style: { "--mouse-x": "-525px", "--mouse-y": "-220px" },
  },
  {
    id: 6,
    bg: " ./customer-bg-06.png",
    logo: " ./customer-06.svg",
    logoW: 110,
    logoH: 21,
    alt: "Customer 06",
    style: { "--mouse-x": "227px", "--mouse-y": "-446px" },
  },
  {
    id: 7,
    bg: " ./customer-bg-07.png",
    logo: " ./customer-07.svg",
    logoW: 83,
    logoH: 23,
    alt: "Customer 07",
    style: { "--mouse-x": "-149px", "--mouse-y": "-446px" },
  },
  {
    id: 8,
    bg: " ./customer-bg-08.png",
    logo: " ./customer-08.svg",
    logoW: 98,
    logoH: 40,
    alt: "Customer 08",
    style: { "--mouse-x": "-525px", "--mouse-y": "-446px" },
  },
  {
    id: 9,
    bg: " ./customer-bg-09.png",
    logo: " ./customer-09.svg",
    logoW: 106,
    logoH: 35,
    alt: "Customer 09",
    style: { "--mouse-x": "227px", "--mouse-y": "-668px" },
  },
  {
    id: 10,
    bg: " ./customer-bg-10.png",
    logo: " ./customer-10.svg",
    logoW: 132,
    logoH: 22,
    alt: "Customer 10",
    style: { "--mouse-x": "-525px", "--mouse-y": "-668px" },
  },
];

const testimonials = [
  {
    id: 1,
    text: "We struggled to bring all our conversations into one place until we found Vruvian. The UI is very clean and we love the integration with Spark.",
    avatar: " ./customer-avatar-01.png",
    name: "Mike Hunt",
    company: "Thunderbolt",
    style: { "--mouse-x": "-149px", "--mouse-y": "-668px" },
  },
  {
    id: 2,
    text: "We struggled to bring all our conversations into one place until we found Vruvian. The UI is very clean and we love the integration with Spark.",
    avatar: " ./customer-avatar-02.png",
    name: "Mirko Mitt",
    company: "Mildrink",
    style: { "--mouse-x": "-149px", "--mouse-y": "-220px" },
  },
];

const Customers = () => {
  return (
    <div className="mt-20 mb-32">
      <div className="c0adw cjqw8 cpwbp">
        <div className="c80q8 crgfn cpvrw cic8n cnt4i c1ser cm2qf clj4z">
          Leaders love Vruvian
        </div>
        <h1 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c6odu cgxy0">
          Trusted by leading companies
        </h1>
        <div className="cpqxv cxk7g">
          <p className="c16mo csqzg">
            Vruvian powers thousands of high-impact product teams. From next-gen
            startups who reach for the stars to established greats who change
            the world.
          </p>
        </div>
      </div>

      <div className="px-20 cx6ix cxdlu c3dqi cjqw8 cxk7g cpwbp">
        <div
          className="ckg9x ck85b c9c1i can2d cvby4 c73l4 co6zy"
          data-highlighter=""
        >
          {/* Customers */}
          {customers.map((c) => (
            <div key={c.id} style={c.style}>
              <Link href="/customer">
                <div className="c834w c2dmz cgj2h cj3ir ce8dy cck46 c82g2 csey4 ckgr6 c5niu clvz1 ccdmz c40tf csdod coafw ckogm cu07q ca3hu cxmgp cs15p cvgwp ct4qk cvu3y cmgcy cnz6i cphct cww8d cnhmh c4lt2 crsge cqvzu c2zs5">
                  <div className="cgq9w cxmgp cp877 c4lt2 crsge cdmuy">
                    {/* Particle Animation */}
                    <div className="csbhs cvjd3 cblyu" aria-hidden="true">
                      <canvas
                        data-particle-animation=""
                        data-particle-quantity="3"
                        width="176"
                        height="98"
                        style={{ width: "352px", height: "196px" }}
                      />
                    </div>
                    <div className="cv6pf cta5t citnk">
                      <Image
                        className="cxsye c1zn5 crsge cpaw2"
                        src={c.bg}
                        width="352"
                        height="198"
                        alt={`Customer Background ${c.id}`}
                        aria-hidden="true"
                      />
                      <Image
                        className="csbhs"
                        src={c.logo}
                        width={c.logoW}
                        height={c.logoH}
                        alt={c.alt}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Testimonials */}
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="cv6pf cta5t c0adw cg9hr citnk c597l"
              style={t.style}
            >
              <p className="chl73 c80q8 ch30f crgfn c9p57 cnt4i cm2qf clj4z">
                <span className="c0t7m">“{t.text}”</span>
              </p>
              <div className="c1ser c4ecq">
                <Image
                  className="cku0c"
                  src={t.avatar}
                  width="32"
                  height="32"
                  alt={`${t.name} Avatar`}
                />
              </div>
              <div className="chu7q cm2qf c4cae">
                {t.name} <span className="ca58d">-</span>{" "}
                <Link className="cxwtc c1nfs" href="#0">
                  {t.company}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cnj85 ct20k c4lt2 c9q7k cykus clyt5 cz6zh">
        {/* Blurred shape */}
        <div
          className="cdzmb ca1ms cxixl cq6fz csbhs c7v3c covvq c7anr cblyu cl53t"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient
                id="bs4-a"
                x1="19.609%"
                x2="50%"
                y1="14.544%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#83fcabff" />
                <stop offset="100%" stopColor="#63c9f1ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fill="url(#bs4-a)"
              fillRule="evenodd"
              d="m0 0 461 369-284 58z"
              transform="matrix(1 0 0 -1 0 427)"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="c0adw cpqxv cxk7g">
          <div>
            <div className="c80q8 crgfn cpvrw cic8n cnt4i c1ser cm2qf clj4z">
              The security first platform
            </div>
          </div>
          <h2 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c6odu c3myr">
            Supercharge your security
          </h2>
          <p className="c16mo csqzg ci5zu">
            All the lorem ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet.
          </p>
          <div>
            <Link
              className="c80q8 c6hcd c7806 c83hg c4l4k cz8jp cscsd coh5f co1fu c73l4 cco90"
              href="#0"
            >
              Start Building{" "}
              <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">
                -&gt;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
