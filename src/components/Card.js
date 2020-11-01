import React from 'react';
import picture from '../allef-vinicius-C_1jjFJioWg-unsplash.jpg';
import shoe from '../joshua-koblin-t1zpIy-mfiU-unsplash.jpg'

class Card extends React.Component{
    constructor(){
        super()

    }
    render(){
        return(
        <div className="h-screen flex justify-evenly items-center">
            <div className="max-w-sm rounded shadow-lg">
                <img className="w-full rounded" src={picture} alt="Profile picture"></img>
                <div className="p-4 flex justify-start items-center flex-col">
                    <span className="font-normal text-xl text-gray-800">Jane Doe</span>
                    <span className="font-light text-sm text-gray-500">Web and Mobile Designer</span>
                </div>
            <div className="flex w-full ">
                <div className="flex flex-col border-2 border-gray-200 p-2 justify-center items-center flex-grow">
                    <span className="font-normal text-xl text-gray-800">90</span>
                    <span className="font-light text-sm text-gray-500">Projects</span>
                </div>
                <div className="flex flex-col border-t-2 border-b-2 border-gray-200 p-2 justify-center items-center flex-grow">
                    <span className="font-normal text-xl text-gray-800">20.1K</span>
                    <span className="font-light text-sm text-gray-500">Likes</span>
                </div>
                <div className="flex flex-col border-2 border-gray-200 p-2 justify-center items-center flex-grow">
                    <span className="font-normal text-xl text-gray-800">1.2K</span>
                    <span className="font-light text-sm text-gray-500">Followers</span>
                </div>
            </div>
            </div>
                <div className="max-w-lg rounded shadow-lg flex justify-between bg-black">
                    <div className="p-5 w-2/3">
                        <h1 className="text-gray-300 text-2xl mb-4 font-md">Keep it Sporty</h1>
                        <p className="text-gray-400 text-sm mb-4 font-light">Our mission is to change the world through sport. Browse Sportwear and shoes.</p>
                        <a className="text-pink-700" href="#">
                            View Collection 
                        </a>
                    </div>
                    <div style={{backgroundImage:"url(" + shoe + ")"}} className="rounded bg-cover bg-center bg-no-repeat w-1/2 border-l-2 border-pink-700">
                        
                    </div>
                </div>
                
            <div className="max-w-md rounded shadow-lg flex justify-between bg-gradient-to-r from-teal-400 to-teal-200">
                <div className="p-5 w-full">
                    <p className="text-gray-800 text-md mb-4 font-light">Gold Winner</p>
                    <h1 className="text-gray-800 text-2xl mb-4 font-semibold">Best Brand Identity Award</h1>
                    <p className="text-gray-200 text-sm font-light">London, UK</p>
                </div>
            </div>
        </div>
        )
    }
}
export default Card;