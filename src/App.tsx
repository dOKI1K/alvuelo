// import { useState } from 'react'
import Footer from "./components/footer/Footer"
import ContactForm from "./components/form/ContactForm"
import Header from "./components/header/Header"
// import { Calendar } from "@/components/ui/calendar"

function App() {
    // const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="bg-gradient-to-r from-slate-800 to-slate-500">
            <div className='w-full'>
                <Header />

                <div className="container h-screen px-4 py-10 mx-auto text-white lg:px-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita dolorum nesciunt ut, magnam eveniet quo vel et deserunt quis nam? Quaerat veritatis modi rerum beatae veniam odio quos debitis.
                </div>

                <div className="container h-screen px-4 py-10 mx-auto text-white bg-transparent lg:px-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita dolorum nesciunt ut, magnam eveniet quo vel et deserunt quis nam? Quaerat veritatis modi rerum beatae veniam odio quos debitis.
                </div>

                <ContactForm />

                <Footer year={new Date().getFullYear()} />
            </div>
        </div>
    )
}

export default App
