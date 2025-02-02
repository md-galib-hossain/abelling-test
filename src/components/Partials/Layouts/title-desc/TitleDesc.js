import React from 'react'
import './title-desc.css'

function TitleDesc({data}) {
    return (
        <section className='head_desc'>
            <div className="container">
                <h2 className='sc_title'>{data.title}</h2>
                <p className="text">{data.desc}</p>
            </div>
        </section>
    )
}

export default TitleDesc