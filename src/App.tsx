// import { useState } from 'react'
import Footer from "./components/footer/Footer"
import ContactForm from "./components/form/ContactForm"
import Header from "./components/header/Header"
// import { Calendar } from "@/components/ui/calendar"

function App() {
    // const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="bg-gradient-to-r from-slate-800 to-slate-500 h-[100vh]">
            <div className='w-full'>
                <Header />

                <ContactForm />

                <Footer year={new Date().getFullYear()} />
            </div>
        </div>
    )
}

export default App
