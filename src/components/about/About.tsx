// import React, { useState } from "react"

export default function About() {
    // const [button, setButton] = useState<Boolean>(false)

    return (
        <div id="#about">
            <div className="container flex flex-col mx-auto my-8 bg-white md:flex-row h-[80vh]">
                <img src="/image.jpg" alt="" />
                <div className="w-full p-7">
                    <h1 className="font-semibold text-center font-syne">Bienvenidos al afuera</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque, in dicta quis unde, culpa ullam quam eligendi dolores libero nobis consequuntur. Aperiam asperiores rerum a ea perspiciatis fugit iure.
                    </p>

                    <div>

                    </div>

                </div>
            </div>

            <section className="container mx-auto mt-5 wow animate__animated animate__fadeInLeft h-3/5">
                <div className="flex flex-col text-center md:flex-row">
                    <div className="w-full text-white bg-primary p-7">
                        <h3 className="text-3xl font-semibold font-rubik">¿Tenes consultas?<br />Contactanos</h3>
                    </div>
                    <div className="flex items-center w-full bg-white text-primary p-7">
                        <h3 className="mx-auto text-3xl font-semibold w-fit font-rubik">0800-777-2024</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}