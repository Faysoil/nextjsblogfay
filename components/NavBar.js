import Link from 'next/link'
import {auth} from '../firebase'
export default function NavBar({user}) {
    
    return (
        <nav>
        <div className="nav-wrapper #fb8c00 orange darken-1">
          <Link href="/"><a className="brand-logo">Blog de Fay</a></Link>
          <ul id="nav-mobile" className="right">
            {user?
            <>
              <li><Link href="/createblog"><a>Créer blog</a></Link></li>
              <li> <button  className="btn red" onClick={()=>auth.signOut()}>Déconnexion</button></li>
            </>
            
            :
                <>
                <li><Link href="/signup"><a>Inscription</a></Link></li>
                <li><Link href="/login"><a>Connexion</a></Link></li>
                </>
            }
            
          </ul>
        </div>
      </nav>
    )
}
