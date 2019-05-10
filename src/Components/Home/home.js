import React from 'react';

import NewSlider from '../widgets/newsSliders/slider';
import NewsList from '../widgets/newsList/newsList';
import VideosList from '../widgets/VidoesList/videosList';





const Home = () =>{

    return(
        <div>
           
           <NewSlider
           type="featured" 
           start={0}
           amount={3}
           dots={false}
           />

         <NewsList 
           type='card'
           loadmore={true}
           start={0}
           amount={3}/>

        <VideosList 
           type ="card"
           loadmore={true}
           start = {0}
           amount={3}
           title={true}
        /> 
         
           </div>

    )
}

export default Home;