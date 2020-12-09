import Link from "next/link";



export default function Header() {
    return (
      <div>
<header id="main-header" >
        <div className="content">
        <h3><span className="branco">Pau</span><span className="branco">lo Mbu</span><span className="branco">nga</span></h3>
      <nav>
      <ul>
                        <li><Link href="/"><a >Home</a></Link></li>
                        <li><Link href="about"><a>About</a></Link></li>
                        <li><Link href="#skills"><a>Skills</a></Link></li>
                        <li><Link href="#work"><a >Work</a></Link></li>
                        <li><Link href="contact"><a >Contact</a></Link></li>
                      

                       
       </ul>
       </nav>
       </div>
      </header>

      </div>
  )
}