import { router, useForm } from '@inertiajs/react';
import React, { useState } from 'react'

const ModalMess = () => {

    const {data, setData} = useForm({
        'nom': ''
    });

    const [showModal, setShowModal] = useState(true);

    const validName = (e) => {
        e.preventDefault();
        router.post(route('createPseudo'),data,{
            onSuccess: () => {
                setShowModal(false);
            }
        })
        
    }
    if (!showModal) return null;
  return (
    <>
        <div className='w-full h-full absolute bg-slate-800/70 flex justify-center items-center z-10'>
        
            <form onSubmit={validName}>
            <div className='w-96 bg-white p-9 rounded-md flex flex-col'>
                    <h2 className='font-bold mb-4 text-xl'>Bienvenue</h2>
                    <p className='text-gray-400'>Quel est votre pseudo ?</p>
                    <input type="text" name='nom' className='rounded-md' placeholder='Ex: Warrior94'
                    onChange={(e)=> setData('nom', e.target.value)}
                    value={data.name}
                    />
                    <div className='flex justify-end mt-5'>
                        <button className='py-1 px-3 bg-blue-900 text-white rounded-md'>Suivant</button>
                    </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default ModalMess