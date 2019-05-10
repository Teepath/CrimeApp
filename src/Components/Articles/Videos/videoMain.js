import React from 'react';

import VideoList from '../../widgets/VidoesList/videosList';


const VideoMain = () =>(
    <div>
        <VideoList
        type ="card"
        loadmore={true}
        start = {0}
        amount={7}
        title={false} />
    </div>
)


export default VideoMain;