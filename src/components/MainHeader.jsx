import './components.css'
import {Link} from 'react-router-dom'
import Himage from '../images/main_header.png'



const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
          <div className="main__header-left">
            <h4>#100DaysofWorkout</h4>
            <h1>Join The Legends of The Fitness World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut, soluta dicta tempora accusamus fuga?</p>
            <Link className="btn lg" to="/Plans">Get Started</Link>
          </div>
          <div className="main__header-right">
              <div className="main__header-circle"></div>
              <div className="main__header-image">
                <img src={Himage} alt="main__header-img" />
              </div>
          </div>
      </div>
    </header>
  )
}

export default MainHeader