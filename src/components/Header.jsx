import { useState } from "react"

const Header = ({onSearch}) => {

    const [textSearch, setTextSearch] = useState('')

    return (
        <div className="p-4 bg-black flex 
        items-center justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-[25px] uppercase font-bold
                text-red-700">React-Movie</h1>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Contact</a>
                </nav>
            </div>

            <div className="flex items-center space-x-4">
                <input className="p-2 rounded-md" type="text" placeholder="Search" onChange={(e) => setTextSearch(e.target.value)} />
                <button className="py-2 px-3 bg-red-600 rounded-md text-white font-bold" onClick={() => onSearch(textSearch)}>Search</button>
            </div>
        </div>
    )
}

export default Header