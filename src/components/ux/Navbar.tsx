import { Code, Icon } from 'lucide-react'
import { menuOptions } from '../../constants'

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-black to-neutral-800">
        <div className="p-6 flex justify-between items-center m-auto flex-wrap">
            <div className='flex'>
                <Code color='white' className='mr-2' />
                <h1 className='text-green-400 font-bold'>Thomaz Szeckir</h1>
            </div>
            <ul className='flex gap-5'>
                {
                    menuOptions.map((element, index) => (
                        <a href="" key={index} className='hover:cursor-pointer'>
                            <li className='text-white hover:text-neutral-400 font-bold' >
                                <span className='text-green-400'># </span>
                                {element}
                            </li>
                        </a>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar
