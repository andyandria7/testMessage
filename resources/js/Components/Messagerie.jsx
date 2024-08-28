import React, { useState } from 'react'
import { Message } from './Message'

export const Messagerie = ({selectCanal, messages}) => {
    

    return (
        <>
        <section className='flex w-full flex-col'>
            
            <div className='w-full p-6 flex gap-4 border border-b-gray-600 h-20'>

                <img src={selectCanal.image ? `/storage/${selectCanal.image}` : `/storage/image/logo.png`} 
                    alt=""
                    className='rounded-full w-10 h-10'
                />
                <div className=' '>
                <h2>{selectCanal.name}</h2>
                <p>{selectCanal.description}</p>

                </div>
            </div>
            <Message messages={messages}  selectCanal={selectCanal}/>
        </section>
        </>
    )
}
