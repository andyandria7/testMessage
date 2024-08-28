import { router, useForm } from '@inertiajs/react';
import React, { useEffect, useRef } from 'react'

export const ModalDiscu = ({ closeModalDiscu }) => {
    const modalRef = useRef();

    const { data, setData } = useForm({
        'name': '',
        'description': '',
        'image': null
    })
    const validCanal = (e) => {
        e.preventDefault();
        router.post(route('canal.create'), data);
        closeModalDiscu();
    }
    useEffect(() => {
        const clickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeModalDiscu();
            }
        };

        document.addEventListener('mousedown', clickOutside);

        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, [closeModalDiscu]);
    return (
        <>
            <div className='w-full h-full absolute bg-slate-800/70 flex justify-center items-center z-10'>
                <form onSubmit={validCanal} className='w-4/12 bg-white p-9 rounded-md flex flex-col' ref={modalRef}>
                    <h2 className='font-bold mb-4 text-xl'>Nouveau canal de discussion</h2>
                    <label htmlFor="canal">Nom du canal</label>
                    <input type="text" id='canal' name='canal'
                        onChange={(e) => setData('name', e.target.value)}
                        value={data.name}
                        className='rounded-md mb-5 placeholder:text-gray-500/55' placeholder='Ex: Laravel' />
                    <div className='flex justify-between'>
                        <label htmlFor="desc">Description</label>
                        <p><i>Facultatif</i></p>
                    </div>
                    <textarea className="resize-none mb-5 rounded-md placeholder:text-gray-500/55"
                        onChange={(e) => setData('description', e.target.value)}
                        placeholder='Entrez la description du canal ici.'></textarea>

                    <label htmlFor="canal">Image du canal</label>
                    <input type="file" id='image' name='image'
                        onChange={(e) => setData('image', e.target.files[0])}
                        className='rounded-md placeholder:text-gray-500/55'/>

                    <div className='flex justify-end mt-5'>
                        <button className='py-1 px-3 bg-blue-900 text-white rounded-md'>Suivant</button>
                    </div>
                </form>
            </div>
        </>
    )
}
