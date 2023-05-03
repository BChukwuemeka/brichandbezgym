import './notFound.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/banner.png'
import { Link } from 'react-router-dom'




const NotFound = () => {
  return (
    <>
          <Header title="NotFound" image={HeaderImage} />
<section>
  <div className="container notfound__container">
    <h2>!Oops... Looks like you got Lost</h2>
    <Link className="btn" to="/">Go back Home</Link>
  </div>
</section>
    </>
  )
}

export default NotFound