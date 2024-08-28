import { router, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
export const Membre = ({ selectCanal }) => {
  const [message, setMessage] = useState('');

  const { data, setData, post } = useForm({
    content: '',
    canal_id: selectCanal.id,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    setData('content', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('messages.store'), {
        onSuccess: () => {
            setMessage('');
        }
    });
  };

  return (
    <section className=' w-full'>
        <form onSubmit={handleSubmit} className='w-full'>
            <div className='border border-blue-800/30 rounded-md flex items-center'>
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    className='border-white block w-full placeholder:text-gray-400 active:bg-white px-4 py-2'
                    placeholder='Insérez votre message'
                />
                <button
                    type="submit"
                    className='bg-blue-900 px-4 py-2 rounded-md flex items-center'
                >
                    <IoSend
                        size={20}
                        style={{ color: 'white' }}
                    />
                </button>
            </div>
        </form>
    </section>
  );
}

