
import React from 'react';

export default function Navbar() {
    return (
        <>
            <div className='container bg-orange-600 mx-auto'>
                <h1 className='text-center text-4xl text-white'>Website Name</h1>

                <div className='bg-red-200'>
                    <ul className='grid grid-cols-12 sm:grid-cols-4'>
                        <li><a>Home</a></li>
                        <li><a>Design</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Info</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                {/* section 2 */}
                <div className='grid grid-cols-12  '>
                <div className='col-span-12 sm:col-span-3 bg-red-900'>

                    {/* <div className='col-span-3  bg-red-900 sm:col-span-12'> */}
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Design</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Info</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div className='col-span-12 sm:col-span-6 bg-red-100'>
                        <h2 className='text-xl font-bold'>Sub Heading</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className='sm:col-span-3 col-span-12  bg-red-300'>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Design</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Info</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                     <div className='col-span-12 h-20'>
                        <h2>footer</h2>
                     </div>
                </div>
            </div>
        </>
    );
};
