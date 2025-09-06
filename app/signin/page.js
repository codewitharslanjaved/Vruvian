'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Signin = () => {
  return (
    <main className="cih8s">
      <section className="c4lt2">

        {/* Illustration */}
        <div className="cdzmb ca1ms cxixl cq6fz cstve csbhs c7v3c cpl14 cblyu" aria-hidden="true">
          <Image
            src="/auth-illustration.svg"
            className="cw312"
            width={1440}
            height={450}
            alt="Page Illustration"
            priority
          />
        </div>

        <div className="c7rlc c4lt2 ca7yh cxk7g c62s6">
          <div className="cjqw8 cmma3 cpwbp c8230">

            {/* Page header */}
            <div className="c0adw cpqxv cxk7g cpwbp">
              {/* Logo */}
              <div className="cfxdw">
                <Link href="/" className="c1ser">
                  <div className="cjg8t cjhxf c115b cn0tc ckogm c8c0t cv6pf cta5t cvotd c5cyt c4lt2 cb919 citnk cqxtx ci523">
                    <Image
                      className="c4lt2"
                      src="/logo.svg"
                      width={42}
                      height={42}
                      alt="Stellar"
                    />
                  </div>
                </Link>
              </div>
              {/* Page title */}
              <h1 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c3myr">Sign in to your account</h1>
            </div>

            {/* Form */}
            <div className="cgx5u cxk7g">

              <form>
                <div className="cz7x6">
                  <div>
                    <label className="chu7q cm2qf c4cae cu3fu cebxn" htmlFor="email">Email</label>
                    <input id="email" className="csqk0 cpaw2" type="email" required />
                  </div>
                  <div>
                    <div className="cu781 citnk">
                      <label className="chu7q cm2qf c4cae cu3fu cebxn" htmlFor="password">Password</label>
                      <Link href="/reset-password" className="cuz37 c1nfs cz8jp cm2qf cscsd coh5f c4cae c2m0f">
                        Forgot?
                      </Link>
                    </div>
                    <input
                      id="password"
                      className="csqk0 cpaw2"
                      type="password"
                      autoComplete="on"
                      required
                    />
                  </div>
                </div>
                <div className="cx3cz">
                  <button className="cif83 ci4ze cters c9rae c4cae cpaw2 c73l4 cco90">
                    Sign In <span className="crls0 c4v48 c18jp cj4ni cz8jp cscsd cvpqc">-&gt;</span>
                  </button>
                </div>
              </form>

              <div className="c0adw cy32n">
                <div className="c16mo c4cae">
                  Don&apos;t have an account? <Link href="/signup" className="cuz37 c1nfs cz8jp cm2qf cscsd coh5f">
                    Sign up
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="cta5t ctn7u citnk">
                <div className="ch7ii cykus cuupb cih8s" aria-hidden="true"></div>
                <div className="c5668 c4cae cmk2a">or</div>
                <div className="ch7ii cykus cvgxa cih8s" aria-hidden="true"></div>
              </div>

              {/* Social login */}
              <div className="c7lle citnk">
                <button
                  className="cjg8t ce8dy cjhxf ccdmz cs6tu ckogm c8c0t chu7q cz8jp cscsd coh5f c4lt2 cpaw2 c73l4 cco90 cuevg">
                  <span className="c4lt2">
                    <span className="c6qme">Continue with Twitter</span>
                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                      <path
                        d="m4.34 0 2.995 3.836L10.801 0h2.103L8.311 5.084 13.714 12H9.482L6.169 7.806 2.375 12H.271l4.915-5.436L0 0h4.34Zm-.635 1.155H2.457l7.607 9.627h1.165L3.705 1.155Z">
                      </path>
                    </svg>
                  </span>
                </button>
                <button
                  className="cjg8t ce8dy cjhxf ccdmz cs6tu ckogm c8c0t chu7q cz8jp cscsd coh5f c4lt2 cpaw2 c73l4 cco90 cuevg">
                  <span className="c4lt2">
                    <span className="c6qme">Continue with GitHub</span>
                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="16" height="15">
                      <path
                        d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z">
                      </path>
                    </svg>
                  </span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </section>

    </main>
  )
}

export default Signin
