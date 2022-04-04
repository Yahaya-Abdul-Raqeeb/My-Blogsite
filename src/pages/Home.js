import React from 'react'
import withLayout from './withLayout'
import { useNavigate } from 'react-router-dom'

function Home() {
const navigate = useNavigate()


  return (
<div>
<div className='banner'>
   <h1>Welcome to my webpage</h1> 
<p>He has achieved success who has lived well, laughed often, and loved much;
Who has enjoyed the trust of pure women, the respect of intelligent men and the love of little children;
Who has filled his niche and accomplished his task;</p>
<div className='action-wrap'>
<button className='btn-outline' onClick={()=>navigate("./about")}>About Me</button>
<button className='btn-contain' onClick={()=>navigate("./blog")}>Read Blogs</button>

</div>
</div>
    
</div>
  )
}

export default withLayout(Home)