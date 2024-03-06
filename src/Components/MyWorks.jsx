import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from 'swiper';


const MyWorks = () => {
    return (
        <div id='works'>
            <div className='grid md:grid-cols-2 gap-7 justify-center justify-items-center md:my-20 my-10' data-aos="fade-up" data-aos-duration="1000">
                <div className='md:h-[220px] md:mx-0 mx-8 md:w-[400px]' data-aos="zoom-in-right" data-aos-duration="1000">
                    <h1 className='uppercase text-[#DC0DFE] dark:text-[#38D9A9] text-3xl md:text-4xl font-semibold'>My Latest Works</h1>
                    <p className='text-xl text-white py-2'>Here is a collection of innovative and creative projects showcasing my skills and action expertise.</p>
                    <a href="#allworks"><button type="button" className="styled-button py-2 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out">View all projects</button></a>
                </div>
                <div className='shadow-lg hover:shadow-none shadow-[#de0dfe53] dark:shadow-[#38d9a962] rounded button buttton border-2 h-[180px] md:h-[200px] md:w-[400px] w-[360px] relative'>
                    <img className='h-full object-cover rounded' src="https://i.ibb.co/ChbmZmc/p1.jpg" alt="" />
                    <div className="overlay flex-col rounded delay-150 ease-in-out absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-lg">
                        <span className='words font-extrabold text-2xl pb-2 text-transparent'>Easy Watch App</span>
                        <div className='flex gap-3 text-white' id='allworks'>
                            <button onClick={() => window.my_modal_1.showModal()} className='glass px-2 w-[80px]'>Details</button>
                            <a href="https://65e6a3e7e8313c4aa95a7ac5--curious-baklava-4a0db8.netlify.app/" target='_blank'><button className='glass px-2 w-26'>Live View</button></a>
                        </div>
                    </div>
                </div>
                <dialog id="my_modal_1" className="modal" style={{ overflow: "hidden" }}>
                    <form method="dialog" className="modal-box md:w-[800px] bg-[#320339] max-w-5xl">
                        <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper rounded-lg">
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/ChbmZmc/p1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/tLjn3Hj/p3.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/Bc4HgCg/p4.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:md:w-[700px] object-cover md:md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/7SxWdLW/p2.jpg" alt="" /></SwiperSlide>
                           
                        </Swiper>
                        <div className='mx-5'>
                            <h3 className="font-bold text-2xl pt-5">Easy Watch Shop</h3>
                            <h1 className='text-xl py-3 font-semibold'>Some key features and functionalities the project:</h1>
                            <div>
                                <ol>
                                    <li>1. User registration and authentication</li>
                                    <li>2. Class listing and details</li>
                                    <li>3. Class enrollment</li>
                                 
                               
                                    <li>6. Responsive design</li>
                                </ol>
                            </div>
                            <div>
                                <h1 className='text-xl py-3 font-semibold'>Technologies Used:</h1>
                                <p className='text-[#1ed2ff]'>HTML, CSS, JavaScript, React.js, Node.js,React Router, Tailwind, React Router DOM, Framer Motion, Fontawesome</p>
                                <div className='flex justify-evenly my-5'>
                                    <a target='_blank' href="https://65e6a3e7e8313c4aa95a7ac5--curious-baklava-4a0db8.netlify.app/"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Live</button></a>
                                    <a target='_blank' href="https://github.com/Badol-Hossain1/easy-buy-shop"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Client</button></a>
                                    <a target='_blank' href=""> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Server</button></a>
                                </div>
                            </div>
                            <p className="md:md:pt-10">Click the button below to close</p>
                        </div>
                        <div className="modal-action my-0">
                            {/* if there is a button, it will close the modal */}
                            <button className="py-2 px-3 rounded-md glass border-2">Close</button>
                        </div>
                    </form>
                </dialog>


                <div className=' shadow-lg hover:shadow-none shadow-[#de0dfe53] dark:shadow-[#38d9a962] rounded button buttton border-2 h-[180px] md:h-[200px] md:w-[400px] w-[360px] relative' data-aos="zoom-in-right" data-aos-duration="1000">
                    <img className='h-full object-cover rounded ' src="https://i.ibb.co/jGvk6mk/1.jpg" alt="" />
                    <div className="overlay flex-col rounded delay-150 ease-in-out absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-lg">
                        <span className=' font-extrabold text-2xl pb-2 '>My Mission in 2020</span>
                        <div className='flex gap-3 text-white'>
                            <button onClick={() => window.my_modal_2.showModal()} className='glass px-2 w-[80px]'>Details</button>
                            <a href="https://badol4.github.io/assessment/" target='_blank'><button className='glass px-2 w-26'>Live View</button></a>
                        </div>
                    </div>
                </div>
                <dialog id="my_modal_2" className="modal" style={{ overflow: "hidden" }}>
                    <form method="dialog" className="modal-box md:w-[800px] bg-[#320339] max-w-5xl">
                        <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper rounded-lg">
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/jGvk6mk/1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/BNjyhNL/2.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/QPbGf9w/3.jpg" alt="" /></SwiperSlide>

                        </Swiper>
                        <div className='mx-5'>
                            <h3 className="font-bold text-2xl pt-5">My Mission in 2020</h3>
                            <h1 className='text-xl  py-3 font-semibold'>I proudly present my newly crafted website, created with speed and efficiency.</h1>
                           
                            <div>
                                <h1 className='text-xl py-3 font-semibold'>Technologies Used:</h1>
                                <p className='text-[#1ed2ff]'>HTML, CSS, Fontawesome</p>
                                <div className='flex justify-evenly my-5'>
                                    <a target='_blank' href="https://badol4.github.io/assessment/"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Live</button></a>
                                    <a target='_blank' href="https://github.com/Badol4/assessment"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Client</button></a>
                                </div>
                            </div>
                            <p className="md:pt-10">Click the button below to close</p>
                        </div>
                        <div className="modal-action my-0">
                            {/* if there is a button, it will close the modal */}
                            <button className="py-2 px-3 rounded-md glass border-2">Close</button>
                        </div>
                    </form>
                </dialog>
           




           {/* another  */}


                <div className=' shadow-lg hover:shadow-none shadow-[#de0dfe53] dark:shadow-[#38d9a962] rounded button buttton border-2 h-[180px] md:h-[200px] md:w-[400px] w-[360px] relative' data-aos="zoom-in-right" data-aos-duration="1000">
                    <img className='h-full object-cover rounded ' src="https://i.ibb.co/DwdDtJN/row1.png" alt="" />
                    <div className="overlay flex-col rounded delay-150 ease-in-out absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-lg">
                        <span className=' font-extrabold text-2xl pb-2 '>Cinematic movie
                        </span>
                        <div className='flex gap-3 text-white'>
                            <button onClick={() => window.my_modal_5.showModal()} className='glass px-2 w-[80px]'>Details</button>
                            <a href="https://cinematic-movie-client.vercel.app/" target='_blank'><button className='glass px-2 w-26'>Live View</button></a>
                        </div>
                    </div>
                </div>
                <dialog id="my_modal_5" className="modal" style={{ overflow: "hidden" }}>
                    <form method="dialog" className="modal-box md:w-[800px] bg-[#320339] max-w-5xl">
                        <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper rounded-lg">
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/DwdDtJN/row1.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/d0xbRCL/row2.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/S7DGVNd/row3.png" alt="" /></SwiperSlide>
                              <SwiperSlide><img className='md:w-[700px] object-cover md:h-[350px] mx-auto rounded-lg' src="https://i.ibb.co/R3CvxDW/row4.png" alt="" /></SwiperSlide>

                        </Swiper>
                        <div className='mx-5'>
                            <h3 className="font-bold text-2xl pt-5">Cinematic movie</h3>
                            <h1 className='text-xl  py-3 font-semibold'>I proudly present my newly crafted website, created with speed and efficiency.</h1>
                           
                            <div>
                                <h1 className='text-xl py-3 font-semibold'>Technologies Used:</h1>
                                <p className='text-[#1ed2ff]'>Nextjs,Clerk,tailwind css ,node js,express</p>
                                <div className='flex justify-evenly my-5'>
                                    <a target='_blank' href="https://cinematic-movie-ki5amge4x-nayem-upo.vercel.app/"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Live</button></a>
                                    <a target='_blank' href="https://github.com/Badol-Hossain1/cinematic-movie-client"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Client</button></a>
                                      <a target='_blank' href="https://github.com/Badol-Hossain1/cinematic-movie"> <button type="button" className="md:py-1 md:text-base text-sm py-1 border-[#1ed2ff] hover:border-[#b3ff00] border-2 text-[#1effa9] duration-1000 px-3 md:px-4 font-semibold hover:text-white rounded-3xl bg-gradient-to-r from-[#ee00ff] to-blue-500 hover:via-[#e100ff] hover:from-[#00d0ff] hover:to-[#bf2eec] transition ease-in-out hover:scale-110 w-[84px]">Server</button></a>
                                </div>
                            </div>
                            <p className="md:pt-10">Click the button below to close</p>
                        </div>
                        <div className="modal-action my-0">
                            {/* if there is a button, it will close the modal */}
                            <button className="py-2 px-3 rounded-md glass border-2">Close</button>
                        </div>
                    </form>
                </dialog>
           





              
            

       

             
              
            </div>
        </div>
    );
};

export default MyWorks;