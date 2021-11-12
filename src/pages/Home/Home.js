import React, { useEffect, createRef } from 'react';
import './home.css'
import './responsive.css'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import image from '../../assets/zane-persaud-V8CSUtCP04E-unsplash.webp'
import item1 from '../../assets/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash.webp'
import item2 from '../../assets/rune-enstad-UXFJ-6Zj27M-unsplash.webp'
import item3 from '../../assets/sidekix-media-oCw5_evbWyI-unsplash.webp'
import item4 from '../../assets/im3rd-media-dn5VihVxloc-unsplash.webp'
import designImage from '../../assets/jason-briscoe-UV81E0oXXWQ-unsplash.webp'
import designImage1 from '../../assets/im3rd-media-dn5VihVxloc-unsplash.webp'
import { CgArrowLongRight } from 'react-icons/cg'
import locomotiveScroll from 'locomotive-scroll'

function Home() {
  const scrollRef = createRef();
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  })
  return (
    <div data-scroll data-scroll-speed="-3" ref={scrollRef} className="App">
      <Navbar />
      <section data-scroll className="section-1">
        <div className="intro-container">
          <div className="text-container">
            <h1>Luxurious comfort in a refreshing interior</h1>
            <div className="summary-text-container">
              <div className="scroll-container">
                <div className="divider"></div>
                <p >Scroll to <br />Explore</p>
              </div>
              <div className="summary-text">
                <p>Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more asthetically pleasing environment for the people using the space.</p>
              </div>
            </div>
          </div>
          <div  className="bg-img-container">
            <img src={image} alt="img" className="bg-img" />
          </div>
        </div>
        <div  className="overlay-container">
          <img src={image} alt="img" className="overlay-img" />
        </div>
      </section>
      <section data-scroll className="section-2" id="works">
        <div className="works-container">
          <div className="works-list-container">
            <div className="works-item">
              <h1 className="heading">Planing</h1>
              <div className="works-item-content">
                <h1>Step 01</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
              <div className="item-divider"></div>
            </div>
            <div className="works-item">
              <h1 className="heading">Estimating</h1>
              <div className="works-item-content">
                <h1>Step 02</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
              <div className="item-divider"></div>
            </div>
            <div className="works-item">
              <h1 className="heading">Building</h1>
              <div className="works-item-content">
                <h1>Step 03</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
              <div className="item-divider"></div>
            </div>
          </div>
          <div className="works-summary">
            <h1 >See how we works</h1>
            <p >Let's see how we are working. Discover the best interior design for your sweet home.</p>
            <div className="bg-img-container">
              <img src={image} alt="img" className="bg-img" />
            </div>
          </div>
        </div>
      </section>
      <section data-scroll className="our-projects" id="projects">
        <div className="text-container">
          <div className="heading-container">
            <h1>Our Projects</h1>
            <p>Intor is definitely a new way of getting work done and sharing. Interior ecosystems are created as productive and collaborative environments.</p>
          </div>
          <div className="summary-container">
            <h1>01/09</h1>
            <p>Duis airt dolor in suitds velit asuss ipsum</p>
          </div>
        </div>
        <div className="projects-container">
          <div className="project-item">
            <div className="project-img">
              <img src={item1} alt="img" className="img" loading="lazy" />
            </div>
            <div className="project-heading">
              <h1>Outdoor</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="project-item">
            <div className="project-img">
              <img src={item2} alt="img" className="img" loading="lazy" />
            </div>
            <div className="project-heading">
              <h1>Officeroom</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="project-item">
            <div className="project-img">
              <img src={item3} alt="img" className="img" loading="lazy" />
            </div>
            <div className="project-heading">
              <h1>Kitchen</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="project-item">
            <div className="project-img">
              <img src={item4} alt="img" className="img" loading="lazy" />
            </div>
            <div className="project-heading">
              <h1>Kitchen</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>
      <section data-scroll className="about-us" id="about">
        <div className="about-heading">
          <h1>Intor is a team of enthusiasts providing a high quality of solution for all interior work.</h1>
        </div>
        <div className="row-container">
          <div className="text-container">
            <div className="heading">
              <p className="left">Discover the best interior</p>
              <p className="right">design for your best home</p>
            </div>
            <div className="summary">
              <p>We founded space in 2003 having previously worked in the traditional interior and the serviced office world.<br /><br />It's hugely important to us that we respond to the architecture, location and context of each building; we figured if we did that, then each location would belong to the people who use them rather than us, and generate a real sense of ownership and community.
              </p>
            </div>
            <div className="image">
              <img src={designImage1} alt="img" className="img" loading="lazy" />
            </div>
          </div>
          <div className="image-container">
            <img src={designImage} alt="img" className="img" loading="lazy" />
          </div>
        </div>
      </section>
      <section data-scroll className="section-3">
        <div className="text-container">
          <h1>Keep up to date with new trends in interior design.</h1>
          <div className="text-p">
            <p>Stay updated with the newest interior design stories, case studies, and insights shared by the intor Team</p>
          </div>
        </div>
      </section>
      <section data-scroll className="section-4">
        <div className="text-container">
          <div className="item-container">
            <div className="item">
              <div className="content-container">
                <div>
                  <p className="date">05 April 2021</p>
                  <p>How to make a family heirlooom shine in your home.</p>
                </div>
                <div className="arrow-container">
                  <CgArrowLongRight size={20} className="arrow" />
                </div>
              </div>
              <div className="content-divider"></div>
            </div>
            <div className="item">
              <div className="content-container">
                <div>
                  <p className="date">10 May 2021</p>
                  <p>How to make a family heirlooom shine in your home.</p>
                </div>
                <div className="arrow-container">
                  <CgArrowLongRight size={20} className="arrow" />
                </div>
              </div>
              <div className="content-divider"></div>
            </div>
            <div className="item">
              <div className="content-container">
                <div>
                  <p className="date">12 March 2021</p>
                  <p>Indoor trees are the one thing you need to add drama to any corner</p>
                </div>
                <div className="arrow-container">
                  <CgArrowLongRight size={20} className="arrow" />
                </div>
              </div>
              <div className="content-divider"></div>
            </div>
          </div>
        </div>
      </section>
      <section data-scroll className="section-5">
        <div className="text-container">
          <div className="heading-text">
            <h1 className="first">Let's work</h1>
            <h1 className="second">together</h1>
          </div>
          <div className="summary-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisir</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
