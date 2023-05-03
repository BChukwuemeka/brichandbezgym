import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.png'
import VisionImage from '../../images/about2.png'
import MissionImage from '../../images/about3.png'


const About = () => {
  return (
      <>
      <Header title="About Us" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Exercitationem dignissimos dolores error dicta. Quasi ipsa rerum velit atque ut, voluptatem vero quisquam iste nihil maiores 
      labore nobis ad quae iure qui molestias repudiandae corporis 
      dolorum!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="our story img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Laboriosam, dolor itaque quaerat animi quae eaque asperiores,
                laudantium maxime quidem repellat dicta quisquam? Id,
               laudantium voluptatem unde ullam labore maxime libero.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Totam commodi distinctio consequatur quidem incidunt nihil?
                Possimus aliquam, voluptas iusto, sequi error ipsum consectetur 
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Cumque nam mollitia consequuntur deleniti placeat libero
            </p>
          </div>
        </div>
      </section>


      <section className="vision">
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Laboriosam, dolor itaque quaerat animi quae eaque asperiores,
                laudantium maxime quidem repellat dicta quisquam? Id,
               laudantium voluptatem unde ullam labore maxime libero.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Totam commodi distinctio consequatur quidem incidunt nihil?
                Possimus aliquam, voluptas iusto, sequi error ipsum consectetur 
            </p>
          
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="our vision img" />
          </div>
        </div>
      </section>

      
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="our mission img" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Laboriosam, dolor itaque quaerat animi quae eaque asperiores,
                laudantium maxime quidem repellat dicta quisquam? Id,
               laudantium voluptatem unde ullam labore maxime libero.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Totam commodi distinctio consequatur quidem incidunt nihil?
                Possimus aliquam, voluptas iusto, sequi error ipsum consectetur 
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Cumque nam mollitia consequuntur deleniti placeat libero
            </p>
          </div>
        </div>
      </section>
      </>
  )
}

export default About