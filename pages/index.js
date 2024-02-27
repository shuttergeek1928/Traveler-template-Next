import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Feature from '../components/feature'
import Offer from '../components/offer'
import Location from '../components/location'
import Guide from '../components/guide'
import Article from '../components/article'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Traveler template</title>
          <meta property="og:title" content="Traveler template" />
        </Head>
        <section className="home-hero">
          <div className="home-main">
            <div className="home-video">
              <video
                src
                poster="/Videos/hero-cover1-1500h.png"
                className="home-video1"
              ></video>
              <div className="home-tint"></div>
            </div>
            <div className="home-content">
              <header data-thq="thq-navbar" className="home-navbar">
                <img alt="logo" src="/logo.svg" className="home-logo" />
                <div data-thq="thq-burger-menu" className="home-menu">
                  <div className="home-links">
                    <a href="#features" className="home-link link">
                      Features
                    </a>
                    <span className="link">How it works</span>
                    <span className="link">Prices</span>
                    <a href="#find" className="home-link01 link">
                      Contact
                    </a>
                  </div>
                  <button className="home-hamburger button">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </button>
                </div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                  <div
                    data-thq="thq-mobile-menu-nav"
                    data-role="Nav"
                    className="home-nav"
                  >
                    <div className="home-container1">
                      <img alt="logo" src="/logo.svg" className="home-logo1" />
                      <div
                        data-thq="thq-close-menu"
                        className="home-menu-close"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon02">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <nav
                      data-thq="thq-mobile-menu-nav-links"
                      data-role="Nav"
                      className="home-nav1"
                    >
                      <span className="home-text02">About</span>
                      <span className="home-text03">Features</span>
                      <span className="home-text04">Pricing</span>
                      <span className="home-text05">Team</span>
                      <span className="home-text06">Blog</span>
                    </nav>
                    <div className="home-container2">
                      <button className="home-login button">Login</button>
                      <button className="button">Register</button>
                    </div>
                  </div>
                  <div className="home-icon-group">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon04"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon08"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </header>
              <div className="home-center">
                <div className="home-heading">
                  <h1 className="home-header">See the world like a local</h1>
                  <p className="home-caption">
                    Find a local guide consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="home-border">
                  <div className="home-filter">
                    <img
                      alt="image"
                      src="/Icons/location.svg"
                      className="home-image"
                    />
                    <input
                      type="text"
                      placeholder="Destination"
                      className="home-textinput input"
                    />
                    <input
                      type="date"
                      placeholder="Date"
                      className="home-textinput1 input"
                    />
                    <input
                      type="number"
                      placeholder="Group size"
                      className="home-textinput2 input"
                    />
                    <div className="home-search">
                      <img
                        alt="image"
                        src="/Icons/search.svg"
                        className="home-icon10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="features" className="home-feaures">
            <div className="home-content01">
              <Feature></Feature>
              <Feature
                icon="/Icons/headset.svg"
                header="24/7 Support"
              ></Feature>
              <Feature
                icon="/Icons/person.svg"
                header="Private Tours"
              ></Feature>
            </div>
          </div>
        </section>
        <section id="tours" className="home-quick-view">
          <div className="home-main1">
            <div className="home-heading01">
              <h2 className="home-header01">See the world like a local</h2>
              <p className="home-caption01">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-sorting">
              <button className="home-option-primary button">All</button>
              <button className="button-option button">Popular</button>
              <button className="button-option button">Featured</button>
              <button className="button-option button">Trending</button>
            </div>
          </div>
          <div className="home-offers">
            <Link href="/">
              <a>
                <div className="home-offer-container">
                  <Offer image="/Offers/offers-11-1500w.png"></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container1">
                  <Offer
                    image="/Offers/offers-21-1500w.png"
                    guides="54 Local guides"
                    location="Barcelona, Spain"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container2">
                  <Offer
                    image="/Offers/offers-31-1500w.png"
                    guides="34 Local Guides"
                    location="Machu Picchu, Peru"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container3">
                  <Offer
                    image="/Offers/offers-41-1500w.png"
                    guides="1 Local guide"
                    location="Doha, Quatar"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container4">
                  <Offer
                    image="/Offers/offers-51-1500w.png"
                    guides="6 Local guides"
                    location="Rhodes, Greece"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container5">
                  <Offer
                    image="/Offers/offers-61-1500w.png"
                    guides="132 Local guides"
                    location="New York, USA"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container6">
                  <Offer
                    image="/Offers/offers-71-1500w.png"
                    guides="1 Local guide"
                    location="Doha, Quatar"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container7">
                  <Offer
                    image="/Offers/offers-81-1500w.png"
                    guides="6 Local guides"
                    location="Rhodes, Greece"
                  ></Offer>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-offer-container8">
                  <Offer
                    image="/Offers/offers-91-1500w.png"
                    guides="132 Local guides"
                    location="New York, USA"
                  ></Offer>
                </div>
              </a>
            </Link>
          </div>
          <div className="home-pagination">
            <button className="home-previous button-option button">
              <svg viewBox="0 0 1024 1024" className="home-icon11">
                <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
              </svg>
              <span className="home-text07">Previous</span>
            </button>
            <div className="home-pages">
              <div className="home-primary">
                <div className="home-number-current page-current page">
                  <span className="home-text08">1</span>
                </div>
                <div className="page">
                  <span className="home-text09">2</span>
                </div>
                <div className="page home-number1">
                  <span className="home-text10">3</span>
                </div>
              </div>
              <img alt="image" src="/Icons/more.svg" className="home-more" />
              <div className="page">
                <span className="home-text11">12</span>
              </div>
            </div>
            <button className="home-next button-option button">
              <span className="home-text12">Next</span>
              <svg viewBox="0 0 1024 1024" className="home-icon13">
                <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
              </svg>
            </button>
          </div>
        </section>
        <section className="home-testimonials">
          <div className="home-content02">
            <div className="home-heading02">
              <span className="home-title">Customer testimonial</span>
              <p className="home-quote">
                “We’ve used Traveler to lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.”
              </p>
            </div>
            <div className="home-details">
              <div className="home-author">
                <img
                  alt="image"
                  src="/Avatar/quote-200h.png"
                  className="home-avatar"
                />
                <span className="home-name">Michael McDonald</span>
              </div>
              <div className="home-controls">
                <div className="page">
                  <span className="home-text13">&lt;</span>
                </div>
                <div className="home-next1 page">
                  <span className="home-text14">&lt;</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="home-highlights">
          <div className="home-highlight">
            <div className="home-content03">
              <div className="home-heading03">
                <h2 className="home-header02">
                  Excepteur sint occaecat cupidatat non proident
                </h2>
                <p className="home-caption02">
                  Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </p>
              </div>
              <button className="button-arrow button">
                <span className="home-text15">Read more</span>
                <span className="home-text16">&gt;</span>
              </button>
            </div>
            <div className="home-image1">
              <img
                alt="image"
                src="/Highlights/highlight-1-1500w.png"
                className="home-image2"
              />
              <div className="home-rectangle"></div>
            </div>
          </div>
          <div className="home-highlight1">
            <div className="home-image3">
              <img
                alt="image"
                src="/Highlights/highlight-2-1500w.png"
                className="home-image4"
              />
            </div>
            <div className="home-content04">
              <div className="home-heading04">
                <h2 className="home-header03">
                  Excepteur sint occaecat cupidatat non proident
                </h2>
                <p className="home-caption03">
                  <span>
                    Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                  <br></br>
                </p>
              </div>
              <button className="home-find button">Find a local guide</button>
            </div>
          </div>
        </section>
        <section id="destinations" className="home-destinations">
          <div className="home-video-details">
            <div className="home-heading05">
              <h2 className="home-header04">Spotlight destinations</h2>
              <p className="home-caption04">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-video-wrapper">
              <div className="home-tint1">
                <img
                  alt="image"
                  src="/Icons/play.svg"
                  className="home-image5"
                />
              </div>
              <video
                src
                poster="/Videos/spotlight-cover1-1500w.png"
                className="home-video2"
              ></video>
            </div>
          </div>
          <p className="home-caption05">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto.
          </p>
          <div className="home-list">
            <Link href="/">
              <a className="home-link11">
                <div className="home-location-wrapper">
                  <Location></Location>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="home-link12">
                <div className="home-location-wrapper1">
                  <Location
                    location="Paris, France"
                    background="/Destinations/destination-2-400h.png"
                  ></Location>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="home-link13">
                <div className="home-location-wrapper2">
                  <Location
                    location="Bruges, Belgium"
                    background="/Destinations/destination-3-400h.png"
                  ></Location>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="home-link14">
                <div className="home-location-wrapper3">
                  <Location
                    location="London, UK"
                    background="/Destinations/destination-4-400h.png"
                  ></Location>
                </div>
              </a>
            </Link>
          </div>
          <button className="home-find1 button">Find a local guide</button>
        </section>
        <section id="guides" className="home-guides">
          <div className="home-heading06">
            <h2 className="home-header05">Meet our guides</h2>
            <p className="home-caption06">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-list1">
            <Link href="/">
              <a>
                <div className="home-guide-wrapper">
                  <Guide></Guide>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-guide-wrapper1">
                  <Guide
                    location="Paris, France"
                    portrait="/Guides/guide-2.png"
                    rootClassName="guide-root-class-name2"
                  ></Guide>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-guide-wrapper2">
                  <Guide
                    location="Bruges, Belgium"
                    portrait="/Guides/guide-3.png"
                    rootClassName="guide-root-class-name"
                  ></Guide>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="home-guide-wrapper3">
                  <Guide
                    location="London, UK "
                    portrait="/Guides/guide-4.png"
                    rootClassName="guide-root-class-name1"
                  ></Guide>
                </div>
              </a>
            </Link>
          </div>
        </section>
        <section className="home-articles">
          <div id="articles" className="home-content05">
            <div className="home-heading07">
              <h2 className="home-header06">
                Excepteur sint occaecat cupidatat non proident
              </h2>
              <p className="home-caption07">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-list2">
              <div className="home-row">
                <Article
                  image="/Articles/articles-11-1500w.png"
                  rootClassName="article-root-class-name1"
                ></Article>
                <Article
                  image="/Articles/articles-21-1500w.png"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                  rootClassName="article-root-class-name"
                ></Article>
              </div>
              <div className="home-row1">
                <Article
                  image="/Articles/articles-31-1500w.png"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  rootClassName="article-root-class-name2"
                ></Article>
                <Article
                  image="/Articles/articles-41-1500w.png"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                  rootClassName="article-root-class-name3"
                ></Article>
              </div>
              <div className="home-row2">
                <button className="home-read-all button-option button">
                  Read all articles
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="home-faq">
          <div id="faqs" className="home-content06">
            <div className="home-heading08">
              <h2 className="home-header07">Frequently asked questions</h2>
              <p className="home-caption08">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-accordion">
              <div
                data-role="accordion-container"
                className="accordion home-element"
              >
                <div className="home-content07">
                  <span className="home-header08">
                    Lorem ipsum dolor sit ametetur elit?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div className="home-icon-container">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon15"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon17"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element1 accordion"
              >
                <div className="home-content08">
                  <span className="home-header09">
                    Excepteur sint occaecat cupidatat non sunt in culpa qui
                    officia deserunt mollit anim id est laborum?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description1"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div className="home-icon-container1">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon19"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon21"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element2 accordion"
              >
                <div className="home-content09">
                  <span className="home-header10">
                    Tempor incididunt ut labore et dolore magna aliquat enim ad
                    minim?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description2"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div className="home-icon-container2">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon23"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon25"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element3 accordion"
              >
                <div className="home-content10">
                  <span className="home-header11">
                    Lorem ipsum dolor sit ametetur elit?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description3"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div className="home-icon-container3">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon27"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon29"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element4 accordion"
              >
                <div className="home-content11">
                  <span className="home-header12">
                    Incididunt ut labore et dolore?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description4"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
                <div className="home-icon-container4">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon31"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon33"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="find" className="home-find2">
          <div className="home-heading09">
            <h2 className="home-header13">Find a local guide now</h2>
            <p className="home-caption09">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <button className="home-find3 button">Find a local guide</button>
        </section>
        <section className="home-footer">
          <div className="home-content12">
            <div className="home-main2">
              <div className="home-branding">
                <div className="home-heading10">
                  <img alt="image" src="/logo.svg" className="home-image6" />
                  <p className="home-caption10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
              <div className="home-links1">
                <div className="home-items">
                  <button className="home-link19 button button-clean">
                    Find a guide
                  </button>
                  <a
                    href="#destinations"
                    className="home-link20 button button-clean"
                  >
                    Find a tour
                  </a>
                  <a
                    href="#destinations"
                    className="home-link21 button button-clean"
                  >
                    Visit a city
                  </a>
                  <a
                    href="#destinations"
                    className="home-link22 button button-clean"
                  >
                    Visit a country
                  </a>
                </div>
                <div className="home-items1">
                  <a
                    href="#how-it-works"
                    className="home-link23 button button-clean"
                  >
                    How it works
                  </a>
                  <button className="home-link24 button button-clean">
                    Cancelation policy
                  </button>
                  <button className="home-link25 button button-clean">
                    Local guides
                  </button>
                  <button className="home-link26 button button-clean">
                    Affiliate
                  </button>
                </div>
                <div className="home-items2">
                  <button className="home-link27 button button-clean">
                    About us
                  </button>
                  <button className="home-link28 button button-clean">
                    Blog
                  </button>
                  <button className="home-link29 button button-clean">
                    Partners
                  </button>
                  <button className="home-link30 button button-clean">
                    Faqs
                  </button>
                  <button className="home-link31 button button-clean">
                    Careers
                  </button>
                </div>
              </div>
            </div>
            <span className="home-copyright">
              © 2022 Character. All Rights Reserved.
            </span>
          </div>
        </section>
        <div>
          <div className="home-container4">
            <Script
              html={`<script>
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-video {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-video1 {
            height: 100%;
          }
          .home-tint {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .home-content {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            height: 33px;
          }
          .home-menu {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link {
            text-decoration: none;
          }
          .home-link01 {
            text-decoration: none;
          }
          .home-hamburger {
            cursor: pointer;
            display: none;
            padding: var(--dl-space-space-unit);
            aspect-ratio: 1;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.3);
          }
          .home-icon {
            fill: #ffffff;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 1000;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            height: 33px;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-center {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header {
            color: rgb(255, 255, 255);
            font-size: 90px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 90px;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-border {
            width: 100%;
            display: flex;
            max-width: 700px;
            align-items: center;
            border-color: rgba(255, 255, 255, 0.3);
            border-width: 4px;
            border-radius: 50px;
            flex-direction: column;
            justify-content: center;
          }
          .home-filter {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 500px;
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: #ffffff;
          }
          .home-image {
            height: 22px;
            object-fit: cover;
          }
          .home-textinput {
            width: 100%;
            padding: 0px;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Karla;
            border-color: #949aa5;
            border-width: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            border-right-width: 1px;
          }
          .home-textinput1 {
            width: 50%;
            padding: 0px;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Karla;
            border-color: #949aa5;
            border-width: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            border-right-width: 1px;
          }
          .home-textinput2 {
            width: 50%;
            padding: 4px;
            font-family: Karla;
            border-color: #949aa5;
            border-width: 0px;
            border-radius: 0px;
          }
          .home-search {
            cursor: pointer;
            display: flex;
            padding: 12px;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #fad87a;
          }
          .home-search:hover {
            opacity: 0.5;
          }
          .home-icon10 {
            width: 18px;
            object-fit: cover;
          }
          .home-feaures {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #397b53;
          }
          .home-content01 {
            gap: 140px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-quick-view {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-main1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading01 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header01 {
            color: #352b2a;
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption01 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-sorting {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-option-primary {
            padding: var(--dl-space-space-unit);
            transition: 0.3s;
            aspect-ratio: 1;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-round);
            background-color: rgb(250, 216, 122);
          }
          .home-option-primary:hover {
            opacity: 0.5;
          }
          .home-offers {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          .home-offer-container {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container1 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container2 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container3 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container4 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container5 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container6 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container7 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-offer-container8 {
            width: 100%;
            display: flex;
            text-decoration: none;
          }
          .home-pagination {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
          }
          .home-previous {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon11 {
            width: 24px;
            height: 24px;
            display: none;
          }
          .home-pages {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-primary {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-number-current {
            border-color: rgba(0, 0, 0, 0);
          }
          .home-text08 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text09 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text10 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-more {
            width: 17px;
            object-fit: cover;
          }
          .home-text11 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-next {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon13 {
            width: 24px;
            height: 24px;
            display: none;
          }
          .home-testimonials {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #f8f0e9;
          }
          .home-content02 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading02 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title {
            color: #352b2a;
            font-size: 18px;
            line-height: 27px;
          }
          .home-quote {
            color: #352b2a;
            font-size: 40px;
            font-style: italic;
            font-family: Cormorant Infant;
            font-weight: 600;
            line-height: 48px;
          }
          .home-details {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-author {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-avatar {
            width: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-name {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-controls {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text13 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-next1 {
            transform: rotate(180deg);
          }
          .home-text14 {
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-highlights {
            gap: 220px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 170px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-highlight {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-content03 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading03 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header02 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: left;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption02 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: left;
            font-family: Karla;
            line-height: 27px;
          }
          .home-text15 {
            font-style: normal;
            font-weight: 500;
          }
          .home-text16 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image1 {
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-image2 {
            object-fit: cover;
          }
          .home-rectangle {
            right: -215px;
            width: 315px;
            bottom: -95px;
            height: 410px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #397b53;
          }
          .home-highlight1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image3 {
            height: 530px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-image4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-content04 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading04 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header03 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: left;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption03 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: left;
            font-family: Karla;
            line-height: 27px;
          }
          .home-find {
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(250, 216, 122);
          }
          .home-find:hover {
            opacity: 0.5;
          }
          .home-destinations {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-video-details {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading05 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header04 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption04 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-video-wrapper {
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
          }
          .home-video-wrapper:hover {
            opacity: 0.75;
          }
          .home-tint1 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            pointer-events: none;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.2);
          }
          .home-image5 {
            width: 115px;
            object-fit: cover;
          }
          .home-video2 {
            width: 100%;
          }
          .home-caption05 {
            font-size: 24px;
            max-width: 900px;
            text-align: center;
            line-height: 36px;
          }
          .home-list {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link11 {
            display: contents;
          }
          .home-location-wrapper {
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-link12 {
            display: contents;
          }
          .home-location-wrapper1 {
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-link13 {
            display: contents;
          }
          .home-location-wrapper2 {
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-link14 {
            display: contents;
          }
          .home-location-wrapper3 {
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-find1 {
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(250, 216, 122);
          }
          .home-find1:hover {
            opacity: 0.5;
          }
          .home-guides {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-heading06 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header05 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption06 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-list1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          }
          .home-guide-wrapper {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-guide-wrapper1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-guide-wrapper2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-guide-wrapper3 {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-articles {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #f8f0e9;
          }
          .home-content05 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading07 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header06 {
            color: rgb(53, 43, 42);
            width: 100%;
            font-size: 60px;
            max-width: 800px;
            font-style: normal;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption07 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 800px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-list2 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row1 {
            gap: 130px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-read-all {
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-faq {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #e8ded5;
          }
          .home-content06 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading08 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header07 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption08 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-accordion {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-content07 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header08 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description {
            color: #000000;
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon15 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon17 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element1 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content08 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header09 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description1 {
            color: #000000;
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container1 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon19 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon21 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element2 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content09 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header10 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description2 {
            color: #000000;
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon23 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon25 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element3 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content10 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header11 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description3 {
            color: #000000;
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon27 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon29 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element4 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content11 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description4 {
            color: #000000;
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container4 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon31 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon33 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-find2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #477e5d;
          }
          .home-heading09 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header13 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption09 {
            color: #ffffff;
            font-size: 18px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-find3 {
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(250, 216, 122);
          }
          .home-find3:hover {
            opacity: 0.5;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #352b2a;
          }
          .home-content12 {
            gap: 120px;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-main2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading10 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image6 {
            height: 33px;
            object-fit: cover;
          }
          .home-caption10 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 21px;
          }
          .home-links1 {
            gap: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-items {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link19 {
            color: rgb(255, 255, 255);
          }
          .home-link20 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link21 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link22 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-items1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link23 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link24 {
            color: rgb(255, 255, 255);
          }
          .home-link25 {
            color: rgb(255, 255, 255);
          }
          .home-link26 {
            color: rgb(255, 255, 255);
          }
          .home-items2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link27 {
            color: rgb(255, 255, 255);
          }
          .home-link28 {
            color: rgb(255, 255, 255);
          }
          .home-link29 {
            color: rgb(255, 255, 255);
          }
          .home-link30 {
            color: rgb(255, 255, 255);
          }
          .home-link31 {
            color: rgb(255, 255, 255);
          }
          .home-copyright {
            color: #766968;
            font-size: 12px;
          }
          .home-container4 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-links {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-content01 {
              gap: var(--dl-space-space-fourunits);
            }
            .home-quick-view {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-offers {
              grid-template-columns: auto auto;
            }
            .home-testimonials {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-highlights {
              gap: 135px;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-highlight {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-highlight1 {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column-reverse;
            }
            .home-find1 {
              width: 50%;
              text-align: center;
            }
            .home-list1 {
              grid-template-columns: auto auto;
            }
            .home-list2 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-row {
              gap: var(--dl-space-space-threeunits);
            }
            .home-row1 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-element {
              border-top-width: 1px;
            }
            .home-content07 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header08 {
              font-size: 16px;
            }
            .home-description {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content08 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header09 {
              font-size: 16px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content09 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header10 {
              font-size: 16px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content10 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header11 {
              font-size: 16px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content11 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header12 {
              font-size: 16px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content12 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-main2 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-branding {
              max-width: 80%;
            }
            .home-heading10 {
              gap: var(--dl-space-space-unit);
            }
            .home-links1 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-main {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-navbar {
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-menu {
              display: flex;
            }
            .home-links {
              display: none;
            }
            .home-hamburger {
              display: flex;
            }
            .home-mobile-menu {
              background-color: #397b53;
            }
            .home-icon02 {
              fill: #fff;
            }
            .home-text02 {
              color: #fff;
            }
            .home-text03 {
              color: #fff;
            }
            .home-text04 {
              color: #fff;
            }
            .home-text05 {
              color: #fff;
            }
            .home-text06 {
              color: #fff;
            }
            .home-center {
              padding-bottom: 100px;
            }
            .home-heading {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header {
              font-size: 40px;
              line-height: 40px;
            }
            .home-caption {
              font-size: 16px;
              max-width: 80%;
              line-height: 24px;
            }
            .home-feaures {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content01 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-quick-view {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-offers {
              grid-template-columns: auto;
            }
            .home-pagination {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-testimonials {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content02 {
              gap: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-heading02 {
              gap: var(--dl-space-space-unit);
              width: 80%;
              align-items: center;
            }
            .home-title {
              font-size: 12px;
              text-align: center;
              line-height: 18px;
            }
            .home-quote {
              font-size: 24px;
              text-align: center;
              line-height: 28px;
            }
            .home-details {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: center;
            }
            .home-author {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-avatar {
              width: 60px;
            }
            .home-name {
              font-size: 14px;
            }
            .home-highlights {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content03 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading03 {
              gap: var(--dl-space-space-unit);
            }
            .home-header02 {
              font-size: 32px;
              line-height: 30px;
            }
            .home-caption02 {
              font-size: 16px;
            }
            .home-image3 {
              width: 100%;
              height: auto;
            }
            .home-content04 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading04 {
              gap: var(--dl-space-space-unit);
            }
            .home-header03 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption03 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-destinations {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading05 {
              gap: var(--dl-space-space-unit);
            }
            .home-header04 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption04 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption05 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-location-wrapper {
              width: 100%;
            }
            .home-location-wrapper1 {
              width: 100%;
            }
            .home-location-wrapper2 {
              width: 100%;
            }
            .home-location-wrapper3 {
              width: 100%;
            }
            .home-guides {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading06 {
              gap: var(--dl-space-space-unit);
            }
            .home-header05 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption06 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-list1 {
              grid-template-columns: auto;
            }
            .home-articles {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content05 {
              gap: var(--dl-space-space-threeunits);
              align-items: center;
            }
            .home-heading07 {
              gap: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-header06 {
              font-size: 32px;
              max-width: 75%;
              text-align: center;
              line-height: 31px;
            }
            .home-caption07 {
              font-size: 16px;
              max-width: 60%;
              text-align: center;
              line-height: 24px;
            }
            .home-list2 {
              gap: var(--dl-space-space-twounits);
            }
            .home-row {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-row1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-faq {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content06 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-heading08 {
              gap: var(--dl-space-space-unit);
            }
            .home-header07 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption08 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-element1 {
              align-items: flex-start;
            }
            .home-element2 {
              align-items: flex-start;
            }
            .home-element3 {
              align-items: flex-start;
            }
            .home-element4 {
              align-items: flex-start;
            }
            .home-find2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading09 {
              gap: var(--dl-space-space-unit);
            }
            .home-header13 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption09 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content12 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-branding {
              max-width: 70%;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-sorting {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-pagination {
              gap: var(--dl-space-space-halfunit);
            }
            .home-previous {
              padding: var(--dl-space-space-halfunit);
            }
            .home-icon11 {
              display: flex;
            }
            .home-text07 {
              display: none;
            }
            .home-number1 {
              display: none;
            }
            .home-next {
              padding: var(--dl-space-space-halfunit);
            }
            .home-text12 {
              display: none;
            }
            .home-icon13 {
              display: flex;
            }
            .home-image2 {
              width: 100%;
            }
            .home-rectangle {
              right: -120px;
              width: 200px;
              bottom: -110px;
            }
            .home-header08 {
              font-size: 16px;
            }
            .home-description {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header09 {
              font-size: 16px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header10 {
              font-size: 16px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header11 {
              font-size: 16px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header12 {
              font-size: 16px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
