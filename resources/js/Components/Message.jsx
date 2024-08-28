import React, { useState } from 'react';
import { Membre } from './Membre';
import Discussion from './Discussion';

export const Message = ({ selectCanal, messages }) => {
    const [isMembre, setIsMembre] = useState(false);

    const rejoindre = () => {
        setIsMembre(true);
    };


    
    return (
        <>
            <section>
                <div className='text-center text-sm mt-9 text-blue-800'>
                    Aujourd'hui
                </div>
                <div className='flex flex-col flex-grow overflow-y-scroll h-80 mb-10'>
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender == "null" ? 'justify-end' : 'justify-end'} mb-2`}
                        >
                            <div
                                className={`px-3 py-2 rounded-md ${message.sender === 1 ? 'bg-blue-700 text-white' : 'bg-blue-200 text-black'}`}
                            >
                                <strong>{message.sender}</strong>: {message.content}
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    {isMembre ? <Membre selectCanal={selectCanal} /> : <Discussion rejoindre={rejoindre} />}
                </div>
            </section>
        </>
    );
};
