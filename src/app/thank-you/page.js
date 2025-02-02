import Image from 'next/image'
import Link from 'next/link'

import './thanks.css'

function page() {
    return (
        <section className="thanks_page pmt-116"> 
            <div className="container">
                <div className="content">
                    <Image
                        src='/message-icon.svg'
                        alt='icon'
                        width={100}
                        height={100}
                    />
                    <h1><span>Thanks</span> For contacting us</h1>
                    <p>{"Your enquiry has been received. We'll get in touch with you ASAP."}</p>
                    <Link href='/'>Back to Home</Link>
                </div>
            </div>
        </section>
    )
}

export default page