import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Button extends React.Component{
    render(){
        return(
            <div className="h-screen flex flex-col justify-start items-center">
                <div className="p-8 flex flex-wrap justify-between items-center w-full">
                    <div className="px-5 py-3 m-3 bg-indigo-700 text-gray-300">
                        Default
                    </div>
                    <div className="px-5 py-3 m-3 bg-indigo-700 text-gray-300">
                        <FontAwesomeIcon className="mr-2" icon={faEnvelope} size="md" color="white"/> Icons
                    </div>
                    <div className="px-5 py-3 m-3 rounded-md bg-indigo-700 text-gray-300 border-indigo-700">
                        Rounded
                    </div>
                    <div className="px-5 py-3 m-3 rounded-full bg-indigo-700 text-gray-300 border-indigo-700">
                        Pill shape
                    </div>
                    <div className="px-5 py-3 m-3 border-2 border-indigo-700 text-gray-700 hover:border-indigo-400 hover:bg-indigo-700 hover:text-gray-300">
                        Hover !
                    </div>
                    <div className="transition m-3 duration-500 ease-in-out px-5 py-3 rounded-md bg-indigo-700 text-gray-300 border-indigo-700 border-2 hover:border-indigo-400 hover:shadow-lg transform hover:scale-110">
                        Hover over
                    </div>
                    <div className="py-5 m-3 text-lg font-bold bg-indigo-700 text-gray-300 w-2/5 text-center rounded-md">
                        Bold Button
                    </div>
                    <div className="w-full m-3 font-semibold text-center py-3 rounded bg-indigo-700 text-gray-300">
                        Full length - Semi Bold
                    </div>
                </div>
                <div className="p-8 flex flex-wrap justify-between items-center bg-blue-700 w-full">
                    <div className="px-5 py-3 m-3 bg-gray-100 text-gray-700">
                        Default
                    </div>
                    <div className="px-5 py-3 m-3 bg-gray-100 text-gray-700">
                        <FontAwesomeIcon className="mr-2" icon={faEnvelope} size="md" color="#4c586a"/> Icons
                    </div>
                    <div className="px-5 py-3 m-3 rounded-md bg-gray-100 text-gray-700">
                        Rounded
                    </div>
                    <div className="px-5 py-3 m-3 rounded-full bg-gray-100 text-gray-700">
                        Pill shape
                    </div>
                    <div className="px-5 py-3 m-3 border-2 border-gray-300 text-gray-300 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-700">
                        Hover !
                    </div>
                    <div className="transition m-3 duration-500 ease-in-out px-5 py-3 rounded-md bg-gray-100 text-gray-700 border-2 border-gray-100 hover:border-gray-500 hover:shadow-lg transform hover:scale-110">
                        Hover over
                    </div>
                    <div className="py-5 m-3 text-lg font-bold text-gray-700 bg-gray-100 w-2/5 text-center rounded-md">
                        Bold Button
                    </div>
                    <div className="w-full m-3 font-semibold text-center py-3 rounded text-gray-700 bg-gray-100">
                        Full length - Semi Bold
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Button;