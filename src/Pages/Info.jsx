import React from 'react'
import Navbar from '../Components/Navbar'

import './Style/Info.css'

const Info = () => {
   return (
   <>
   <Navbar />
   <main>
      <h2>Il cinema</h2>
      <p>Ceva, Via Pio Bocca 10</p>
      <iframe className='mapFrame' id="gmap_canvas" title='Mappa cinema' src="https://maps.google.it/maps?q=Via%20Pio%20Bocca,%2010,%2012073%20Ceva%20CN&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
   </main>
   </>
   )
}

export default Info