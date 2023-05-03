import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.png'





const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength ; i++ ) {
      images.push(require(`../../images/gallery${i}.jpg`));

  }


  return (
    <>
    <Header title="Gallery" image={HeaderImage}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Fuga aspernatur delectus odit, 
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
          {
            images.map((image, index) => {
             return (
                <article key={index}>
                  <img  src={image} alt={`gallery img ${index + 1}`}/>
                </article>
              )
            })
          }
      </div>
    </section>
    </>
  )
}

export default Gallery