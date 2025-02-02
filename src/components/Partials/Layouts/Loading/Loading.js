import Lottie from 'react-lottie'
import LoadingJson from './Loading.json'

import './Loading.css'

function Loading() {

    const loadingOptions = {
        loop: true,
        autoplay: false,
        animationData: LoadingJson,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='loading_lottie_wrapper'>
            <div className="inner">
                <Lottie options={loadingOptions} />
            </div>
        </div>
    )
}

export default Loading