import React from 'react';
import NewsList from '../../../widgets/newsList/newsList';
import NewSlider from '../../../widgets/newsSliders/slider';


const NewsMain = () => (
    <div>
    <NewSlider
    type="featured" 
    start={0}
    amount={3}
    dots={false}/>


    <NewsList 
           type='cardMain'
           loadmore={true}
           start={0}
           amount={3}
           />
    
    
    
    </div>
)


export default NewsMain