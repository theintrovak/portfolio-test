import React, { useState } from "react";
import Button from "../components/button";
import Contactus from "../components/Contactus";
export default function Portfolio() {


    return (

        <div className="font-sans text-gray-900 dark:text-gray-100 dark:bg-[#12101082] ">
            <section id="home" className="relative bg-gradient-to-b from-[#000000df]  to-[#ffffff00] text-white overflow-hidden">

                <div className="container mx-auto px-6 pt-5 pb-40 text-center relative  z-10">
                    <div className="relative mx-auto border-4 border-t-transparent border-l-transparent border-r-transparent  w-60 h-60 rounded-full overflow-hidden" >
                        <img
                            src="../../public/profile.png"
                            alt="Designer"
                            className="absolute -top-17 left-1/2 transform -translate-x-1/2 w-80 h-96 object-cover rounded-full  "
                        />
                    </div>
                    <h1 className="text-6xl font-extrabold mt-6 tracking-wide text-white ">
                        ANURAG KURMI
                    </h1>
                    <p className="text-xl mt-3">Front-End Designer & Developer</p>
                    <div className="flex justify-center gap-4 mt-6">
                        <Button variant="primary" onClick={() => (window.location.href = '#contact')} >Hire Me</Button>
                        <Button variant="secondary">Get CV</Button>
                    </div>
                </div>
            </section>
            <section id="about" className="  container my-10 py-20 grid md:grid-cols-2 gap-10 items-center ">
                <img
                    src="../../public/banner1.jpg"
                    alt="About"
                    className="rounded-2xl h-full w-full shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold mb-4">Let’s Introduce About Myself</h2>
                    <p className="text-lg mb-6">
                        I’m a passionate front-end designer with expertise in creating
                        visually appealing and user-friendly web interfaces. My goal is to
                        deliver smooth, modern, and engaging digital experiences.
                    </p>
                    <Button variant="primary">Download CV</Button>
                </div>
            </section>
            <section id="work" className="relative bg-[#0000006e] py-20 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Work Experience
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow hover:shadow-2xl transition">
                            <h3 className="font-bold text-xl">Front-End Developer</h3>
                            <p className="text-gray-600 dark:text-gray-300">Company XYZ (2021 - Present)</p>
                            <p className="mt-3">
                                Worked on responsive UI, animations, and performance
                                optimization.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow hover:shadow-2xl transition">
                            <h3 className="font-bold text-xl">UI Designer</h3>
                            <p className="text-gray-600 dark:text-gray-300">Design Studio (2019 - 2021)</p>
                            <p className="mt-3">
                                Designed modern layouts, branding assets, and interactive
                                prototypes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {["UI/UX Design", "Responsive Web Development", "Landing Pages"].map(
                        (service) => (
                            <div
                                key={service}
                                className="p-6 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-2xl shadow-lg text-center"
                            >
                                <h3 className="font-bold text-xl mb-2">{service}</h3>
                                <p>High-quality service with attention to detail and creativity.</p>
                            </div>
                        )
                    )}
                </div>
            </section>
            <section id="projects" className="  bg-[#0000006e] py-20  ">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Recently Done Projects
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((p) => (
                            <div
                                key={p}
                                className="bg-white dark:bg-gray-700 rounded-2xl shadow overflow-hidden">
                                <img
                                    src={`https://via.placeholder.com/400x250?text=Project+${p}`}
                                    alt={`Project ${p}`}
                                    className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg">Project {p}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Creative web design project.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="reviews" className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center mb-10">Reviews</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {["Great work!", "Loved the design!", "Highly recommend!"].map(
                        (review, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow text-center"
                            >
                                <p className="italic mb-2">“{review}”</p>
                                <h4 className="font-bold">Client {i + 1}</h4>
                            </div>
                        )
                    )}
                </div>
            </section>
            <section id="contact" className="relative bg-gradient-to-b from-[#00000000]  to-[#000000e9] py-20 text-white">
                <Contactus />
            </section>
        </div>
    );
}
