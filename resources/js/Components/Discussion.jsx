import React from 'react'

const Discussion = ({rejoindre}) => {
    return (
        <div className='absolute bottom-9 w-9/12'>
            <h3 className='text-center text-blue-800'>Vous n'êtes pas membre de cette discussion.</h3>
            <div className='flex justify-center mt-3'>
                <button
                onClick={rejoindre}
                className='bg-blue-800 px-2 py-2 text-white rounded-md hover:bg-blue-600'>Rejoindre</button>

            </div>
        </div>
    )
}

export default Discussion