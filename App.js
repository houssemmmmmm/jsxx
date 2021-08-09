import React from 'react';

import './App.css';
import im1 from './imageInSrc.png'
import './style.css'

function App() {
  return (
    <div className='app'>
      
<span>
<h1 className="primary">Your name here</h1>
</span><br />

<span>
<img src={im1} alt=''/>

</span>
<br />

<span>
<img src="/imageInPublic.jpg" alt=''/>
</span>

<br />

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>

    
    </div>
  );

    
}

export default App;
