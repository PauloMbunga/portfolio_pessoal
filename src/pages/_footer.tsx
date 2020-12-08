import Image from 'next/image'
export default function Footer() {
    return (
      <div>
<footer className="footer" >
        <div className="content">
       
    
      
        <nav>
      <ul>
                        <li><a href="https://www.facebook.com/pauloderossimbunga.derossi/" rel="noopener noreferrer" target="_blank" aria-label="Link do Facebook do Paulo Mbunga">
       <Image  src="/assets/facebook-verde.png"
        alt="f"
        width={40}
        height={40}
      
      /></a></li>

<li> <a href="https://github.com/PauloMbunga" rel="noopener noreferrer" target="_blank" aria-label="Link do Github do Paulo Mbunga">
    <Image  src="/assets/github-verde.png"
        alt="f"
        width={40}
        height={40}
      
      /></a></li>

<li> <a href="https://www.linkedin.com/in/paulo-mbunga-19790237/" rel="noopener noreferrer" target="_blank" aria-label="Link do Linkedin do Paulo Mbunga">

    <Image  src="/assets/linkedin-verde.png"
        alt="f"
        width={40}
        height={40}
      
      /></a></li>

</ul>
       </nav>

       

       </div>
      </footer>

      </div>
  )
}