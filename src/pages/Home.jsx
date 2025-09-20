import React, { useState } from "react";
import Button from "../components/button";
import Input from "../components/Input";
export default function Portfolio() {


    return (

        <div className="font-sans text-gray-900 dark:text-gray-100 dark:bg-gray-900">
            {/* Dark Mode Toggle */}

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white overflow-hidden">
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        className="fill-white dark:fill-gray-900"
                        d="M0,256L80,229.3C160,203,320,149,480,133.3C640,117,800,139,960,149.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>

                <div className="container mx-auto px-6 pt-5 pb-40 text-center relative z-10">
                    <div className="relative mx-auto border-4 w-60 h-60 rounded-full overflow-hidden" >

                        <img
                            src="../../public/profile.png"
                            alt="Designer"
                            className="absolute -top-17 left-1/2 transform -translate-x-1/2 w-80 h-96 object-cover rounded-full  "
                        />

                    </div>
                    <h1 className="text-6xl font-extrabold mt-6 tracking-wide">
                        ANURAG KURMI
                    </h1>
                    <p className="text-xl mt-3">Front-End Designer & Developer</p>
                    <div className="flex justify-center gap-4 mt-6">
                        <Button variant="primary" onClick={() => (window.location.href = '#contact')} >Hire Me</Button>
                        <Button variant="secondary">Get CV</Button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://via.placeholder.com/400"
                    alt="About"
                    className="rounded-2xl shadow-lg"
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

            {/* Work Experience */}
            <section className="bg-gray-100 dark:bg-gray-800 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Work Experience
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow hover:shadow-2xl">
                            <h3 className="font-bold text-xl">Front-End Developer</h3>
                            <p className="text-gray-600 dark:text-gray-300">Company XYZ (2021 - Present)</p>
                            <p className="mt-3">
                                Worked on responsive UI, animations, and performance
                                optimization.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow hover:shadow-2xl">
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

            {/* Services */}
            <section className="container mx-auto px-6 py-20">
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

            {/* Projects */}
            <section className="bg-gray-100 dark:bg-gray-800 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Recently Done Projects
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((p) => (
                            <div
                                key={p}
                                className="bg-white dark:bg-gray-700 rounded-2xl shadow overflow-hidden"
                            >
                                <img
                                    src={`https://via.placeholder.com/400x250?text=Project+${p}`}
                                    alt={`Project ${p}`}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg">Project {p}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Creative web design project.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="container mx-auto px-6 py-20">
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

            {/* Contact */}
            <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                    <form className="max-w-xl mx-auto space-y-4">
                        <Input type="text" placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 outline-none"
                            rows="4"
                        ></textarea>
                        <Button variant="secondary">Send Message</Button>
                    </form>
                </div>
            </section>
        </div>

    );
}
