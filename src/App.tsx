// import { useState } from 'react'
import Body from "./components/body/Body"
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

                <Body />

                <ContactForm />

                <Footer year={new Date().getFullYear()} />
            </div>
        </div>
    )
}

export default App
