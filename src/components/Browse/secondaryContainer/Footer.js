import React from 'react'

const Footer = () => {
    return (
        <div className='text-white pl-16 py-10  md:py-16 md:px-44 md:mr-36'>

            <div className=" flex gap-6 mb-3 pl-3">

                <a className="social-link" href="https://www.linkedin.com/in/rohanrana33042" target="_blank" aria-label="twitter" rel="noreferrer">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9H7.1v11.45zM5.33 7.61c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.54V14.9c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.91v5.66h-3.54V9h3.4v1.56h.05c.47-.88 1.62-1.81 3.33-1.81 3.56 0 4.22 2.34 4.22 5.39v6.31z" />
                    </svg>
                </a>

                <a className="social-link" href="https://x.com/RohanRa20339734" target="_blank" aria-label="twitter" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="TwitterStandard" aria-hidden="true" className="svg-icon svg-icon-twitter-logo"><path fillRule="evenodd" clipRule="evenodd" d="M20.768 8.207C20.7914 11.5932 19.4565 14.8475 17.062 17.242C14.6675 19.6365 11.4132 20.9714 8.027 20.948C5.58923 20.9544 3.20152 20.2564 1.151 18.938C1.50998 18.9771 1.87091 18.9955 2.232 18.993C4.24768 18.9984 6.20639 18.3245 7.792 17.08C5.87438 17.0472 4.18971 15.799 3.6 13.974C3.87982 14.0187 4.16264 14.0421 4.446 14.044C4.84354 14.0428 5.23935 13.9914 5.624 13.891C3.53637 13.4667 2.0367 11.6303 2.038 9.5V9.441C2.65835 9.78765 3.3519 9.98262 4.062 10.01C2.08979 8.69332 1.48225 6.06954 2.675 4.02C4.94972 6.82016 8.30596 8.52336 11.909 8.706C11.8375 8.369 11.8009 8.02551 11.8 7.681C11.8014 5.84295 12.9248 4.19204 14.6341 3.51625C16.3434 2.84047 18.2921 3.2768 19.55 4.617C20.5522 4.42342 21.5131 4.05731 22.39 3.535C22.0556 4.56894 21.3555 5.44538 20.421 6C21.3102 5.89965 22.1795 5.66709 23 5.31C22.3866 6.20228 21.6273 6.98489 20.754 7.625C20.768 7.82 20.768 8.014 20.768 8.207Z" fill="currentColor"></path></svg>
                </a>

                <a className="social-link" href="https://medium.com/@rohanrana33042" target="_blank" aria-label="twitter" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                        <rect width="24" height="24" fill="white" rx="5" ry="5" />
                        <text x="4" y="20" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="black">M</text>
                    </svg>
                </a>
            </div>

            <div className='font-sans text-sm text-[#808080] mb-5 '>
                <ul className='grid grid-flow-col grid-cols-2 grid-rows-6  md:grid-cols-3 md:grid-rows-4  lg:grid-cols-4 lg:grid-rows-3'>
                    <li className='cursor-pointer w-fit py-[5px]  hover:underline'>Audio Description</li>
                    <li className='cursor-pointer w-fit py-[5px]  hover:underline'>Investor Relations</li>
                    <li className='cursor-pointer w-fit py-[5px]  hover:underline'>Legal Notices</li>
                
                    <li className='cursor-pointer w-fit py-[5px] hover:underline'>Help Centre</li>
                    <li className='cursor-pointer w-fit py-[5px] hover:underline'>Jobs</li>
                    <li className='cursor-pointer w-fit py-[5px] hover:underline'>Cookie Preferences</li>

           
                    <li className='cursor-pointer w-fit py-[5px] hover:underline'>Gift Cards</li>
                    <li className='cursor-pointer w-fit py-[5px] hover:underline'>Terms of Use</li>
                    <li className='cursor-pointer w-fit py-[5px] hover:underline'>Corporate Information</li>
           
                    <li className='cursor-pointer w-fit py-[5px] hover:underline'>Media Centre</li>
                    <li className='cursor-pointer w-fit py-[5px] hover:underline'>Privacy</li>
                    <li className='cursor-pointer w-fit py-[5px] hover:underline'>Contact Us</li>
                </ul>
                         
            </div>

            <div className='text-[#808080]'>
                <p className='border border-1 border-[#808080] w-fit text-[13px] p-[3px] px-[4px] mb-2 cursor-pointer hover:text-white'>Service Code</p>
                <p className='text-[12px]'>©1997-2024 Netflix, Inc.</p>
            </div>
        </div>
    )
}

export default Footer