// import { Link } from 'react-router-dom'

// import RightArrow from '../../../common/icons/RightArrow'
// import RightArrow from '../../Elements/icons/RightArrow'

import './Tabs.css'
import ServicePreview from '../../../Screens/Home/what-we-do/ServicePreview/ServicePreview'

const Tabs = ({ service }) => {
    
        return (
        
                <ServicePreview
                    service={service}
                />
                
        )
    

}

export default Tabs