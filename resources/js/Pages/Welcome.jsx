import { Message } from '@/Components/Message';
import { Messagerie } from '@/Components/Messagerie';
import { ModalDiscu } from '@/Components/ModalDiscu';
import ModalMess from '@/Components/ModalMess';
import { router } from '@inertiajs/react';
import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const Welcome = ({ canaux, messages }) => {

    const [discu, setDiscu] = useState(false);

    const [selectCanal, setSelectCanal] = useState(null);

    const canalClick = (canal) => {
        setSelectCanal(canal);
    }

    const validDiscu = () => {
        setDiscu(!discu)
    }
    const closeModalDiscu = () => {
        setDiscu(false);
    };
    const filterMessages = selectCanal
        ? messages.filter(msg => msg.canal_id === selectCanal.id)
        : [];

    const deleteCanal = (id) => {
        router.delete(route('canal.delete', { id: id }))

    }
    return (
        <>
            <ModalMess />
            {discu && <ModalDiscu closeModalDiscu={closeModalDiscu} />}
            <section className='flex'>
                <div className='w-80 h-full'>
                    <div className='flex  justify-between p-9'>
                        <h2 className='text-blue-800 font-semibold text-2xl'>Messages</h2>
                        <FaRegEdit
                            onClick={validDiscu}
                            fontSize={20}
                            className='cursor-pointer'
                        />
                    </div>
                    {canaux.map(canal => (
                        <div key={canal.id}
                            onClick={() => canalClick(canal)}
                            className='p-3 flex gap-3 hover:bg-blue-100 w-full'>
                            <img src={canal.image ? `/storage/${canal.image}` : `/storage/image/logo.png`}
                                alt=""
                                className='rounded-full w-10 h-10'
                            />
                            <div>
                                <div className='flex justify-between'>
                                    <h2>{canal.name}</h2>
                                    <p className='text-xs'>Il y a 2 minutes</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-xs'>{canal.description}</p>

                                    <button type='delete' className='px-4 py-2 rounded-md font-semibold bg-red-400 hover:bg-red-600'
                                        onClick={() => deleteCanal(canal.id)}
                                    >
                                        <FaRegTrashAlt
                                            className='cursor-pointer'
                                        />

                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {selectCanal && <Messagerie messages={filterMessages} selectCanal={selectCanal} />}


            </section>

        </>
    )
}

export default Welcome