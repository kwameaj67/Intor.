import './home.css'
import './responsive.css'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import image from '../../assets/zane-persaud-V8CSUtCP04E-unsplash.svg'
import { CgArrowLongRight } from 'react-icons/cg'
function Home() {
  return (
    <div className="App">
      <Navbar />
      <section className="section-1">
        <div className="intro-container">
          <div className="text-container">
            <h1>Luxurious comfort in a refreshing interior</h1>
            <div className="summary-text-container">
              <div className="scroll-container">
                <div className="divider"></div>
                <p>Scroll to <br />Explore</p>
              </div>
              <div className="summary-text">
                <p>Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more asthetically pleasing environment for the people using the space.</p>
              </div>
            </div>
          </div>
          <div className="bg-img-container">
            <img src={image} alt="img" className="bg-img" />
          </div>
        </div>
      </section>
      <section className="section-2" id="works">
        <div className="works-container">
          <div className="works-list-container">
            <div className="works-item">
              <h1 className="heading">Planing</h1>
              <div className="works-item-content">
                <h1>Step 01</h1>
                <p>Let's see how we are working. Discover the best interior design for your sweet home.</p>
              </div>
              <div className="item-divider"></div>
            </div>
            <div className="works-item">
              <h1 className="heading">Estimating</h1>
              <div className="works-item-content">
                <h1>Step 02</h1>
                <p>Let's see how we are working. Discover the best interior design for your sweet home.</p>
              </div>
              <div className="item-divider"></div>
            </div>
            <div className="works-item">
              <h1 className="heading">Building</h1>
              <div className="works-item-content">
                <h1>Step 03</h1>
                <p>Let's see how we are working. Discover the best interior design for your sweet home.</p>
              </div>
              <div className="item-divider"></div>
            </div>
          </div>
          <div className="works-summary">
            <h1>See how we works</h1>
            <p>Let's see how we are working. Discover the best interior design for your sweet home.</p>
            <div className="bg-img-container">
              <img src={image} alt="img" className="bg-img" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="text-container">
          <h1>Keep up to date with new trends in interior design.</h1>
          <div className="text-p">
            <p>Stay updated with the newest interior design stories, case studies, and insights shared by the <span>intor.</span> Team</p>
          </div>
        </div>
      </section>
      <section className="section-4">
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
      <section className="section-5" id="about">
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
      <Footer/>
    </div>
  );
}

export default Home;
