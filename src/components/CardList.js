import React from 'react'
import Card from './Card'

export default function CardList() {
    return (
        <div>
            <div className='row'>
                <div className='col-md-3'>
                    <Card title="The first card from seperate component" />
                </div>
            </div>
        </div>
    )
}
