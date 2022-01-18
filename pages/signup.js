import {useState} from 'react'
import Link from 'next/link'
import {auth} from '../firebase'

export default function Signup() {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = async (e)=>{
       e.preventDefault()
       try{
         const result = await auth.createUserWithEmailAndPassword(email,password)
       await result.user.updateProfile({
           displayName:name
       })
       M.toast({html: `welcome ${result.user.displayName}`,classes:"green"})  
       }catch(err){
        M.toast({html: err.message,classes:"red"})    
       }
       
    }
    return (
        <div className="container center">
            <h3>Inscrit toi !</h3>
             <form onSubmit={(e)=>handleSubmit(e)}>
                 <div className="input-field">
                     <input type="text" placeholder="Donne ton nom" value={name} onChange={(e)=>setName(e.target.value)} />
                     <input type="email" placeholder="Ton email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                     <input type="password" placeholder="et ton mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)} />
                 </div>
                 <button type="submit" className="btn #fb8c00 orange darken-1">Me rejoindre</button>
                <Link href="/login"><a><h5>Déja inscrit?</h5></a></Link>
             </form>
            
        </div>
    )
}
