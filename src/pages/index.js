import {db} from '../firebase'
import Link from 'next/link'
import {useState} from 'react'
export default function Home({Allblogs}) {
   const [blogs,setblogs] = useState(Allblogs)
   const [end,setEnd] = useState(false)
   const loadMore = async ()=>{
     const last  = blogs[blogs.length-1]
     const res = await  db.collection('blogs')
     .orderBy('createdAt','desc')
     .startAfter(new Date(last.createdAt))
     .limit(3)
     .get()
     const newblogs = res.docs.map(docSnap=>{
       return {
        ...docSnap.data(),
        createdAt:docSnap.data().createdAt.toMillis(),
        id:docSnap.id
      }
     })
     setblogs(blogs.concat(newblogs))

     if(newblogs.length < 3){
       setEnd(true)
     }
   }
  return (

    <div className="center template-one">
        {blogs.map(blog=>{
          return(
            <div className="card" key={blog.createdAt}>
            <div className="card-image">
              <img src={blog.imageUrl} />
              <span class="dateur"><h9> {new Date(blog.createdAt).toDateString()}</h9></span>
              
            </div>
            <div className='boldt'><Link href={`/blogs/${blog.id}`}><a><span className="card-title">{blog.title}</span></a></Link></div>

            <div className="card-content">
              <p>{blog.body}</p>
              
            </div>
            
          </div>
          )
        })}

        
        {end==false?
        <div classname="centre bg-center">
        <button className="btn #fb8c00 blue darken-1" onClick={()=>loadMore()}>Voir plus</button>
         </div>
         :<h3>FIN</h3>
         
        }
    
        <style jsx>
           {`
            .card{
              max-width:500px;
              margin:22px auto;
              
            }
            p{
              display: -webkit-box;
              overflow: hidden;
              font-bold;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
           `}
        </style>
        
    </div>
  )
}


export async function getServerSideProps(context) {
  const querySnap =await  db.collection('blogs').orderBy('createdAt',"desc")
  .limit(3)
  .get()
   const Allblogs =  querySnap.docs.map(docSnap=>{
    return {
      ...docSnap.data(),
      createdAt:docSnap.data().createdAt.toMillis(),
      id:docSnap.id
    }
  })


  return {
    props: {Allblogs},
  }
}