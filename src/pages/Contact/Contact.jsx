import './contact.css'
import Header from '../../components/Header';
import HeaderImage  from '../../images/header_bg_2.png'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'




const Contact = () => {
    return (
        <>
              <Header title="Get In Touch" image={HeaderImage} > 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Officiis accusamus quod aperiam vitae maxime voluptate in, 
        tempora dolorem? Temporibus, 
        quis ad obcaecati placeat nam ab rerum saepe delectus corrupti 
        quisquam.
        </Header>

        <section className="contact">
            <div className="container contact__container">
                <div className="contact__wrapper">
                    <a href="mailto:brichandbez@gmail.com" target="blank" rel="noreferrer">
                        <MdEmail/>
                    </a>
                    <a href="https://m.me/OjukwuCouture" target="blank" rel="noreferrer">
                        <BsMessenger/>
                    </a>
                    <a href="https://wa.me/+2348066216112" target="blank" rel="noreferrer">
                        <IoLogoWhatsapp/>
                    </a>
                </div>
            </div>
        </section>
        </>
         );
}
 
export default Contact;