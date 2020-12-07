import Header from '../pages/_header';
import Image from 'next/image'

export default function ABOUT() {
  return (
    <div>

      <Header/>
     <div className="wrapper-content content">
    
      <section className="left" >

      <Image className="img_about"
        src="/assets/pauloverde.png"
        alt="Paulo"
        width={400}
        height={400}
      />
      </section>

      <section className="right" >
    
<p><h2><span className="verde">I'm Paulo Mbunga</span></h2></p>
<br></br>
<p>I am a Software Developer with extensive
knowledge in Java development with
JSF/primefaces Frameworks,Spring
Framework, Javascript, Nodejs, SqlServer ,
Postgres, Mysql, DB2, MongoDb database ,
some experience in iSeries/AS400
environments,currently learning and
developing in ReactJs and ReactNative, some
knowledge in Computer Networks, Routing ,
Switching and Voip. </p>
 
      </section>
    
     

      </div>
     
    </div>
  )
}
