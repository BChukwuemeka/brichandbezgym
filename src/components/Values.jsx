import image from '../images/values.jpg'
import image_ from '../images/values_crop1.png'
import {GiCutDiamond} from 'react-icons/gi'
import SectionHead from '../components/SectionHead'
import './components.css'
import {values} from '../data'
import Card from '../UI/Card'



const Values = () => {
  return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={image} alt="" />
                    </div>
                    <div className="values__image_">
                        <img src={image_} alt="" />
                    </div>
                </div>
                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond/>} title="Values"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione laboriosam sit, eveniet eligendi impedit!
                    </p>

                    <div className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc}) => {
                                return (
                                    <Card className="values__value" key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Values