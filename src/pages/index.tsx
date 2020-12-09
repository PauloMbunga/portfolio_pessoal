
import Header from '../pages/_header';
import Footer from '../pages/_footer';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    

      <Header/>
     <div className="wrapper-content content">
    
      <section className="left" >

<p>Hi,</p>
<p>I'm <span className="title_name">Paulo Mbunga</span></p>
<p>Software Developer</p>
<a href="contact" className="button">Contact</a>
      </section>

      <section className="right" >
            <Image className="img"
        src="/assets/pauloverde.png"
        alt="Paulo"
        width={400}
        height={400}
      
      />
  
      </section>
    
       

      </div>

      <Footer/>
     
    
    </div>
  )
}
