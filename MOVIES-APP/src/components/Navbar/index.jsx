import {Link} from "react-router-dom"
import MovieLogo from "../../assets/MovieLogo.png"

const Navbar = () => {
  return (
    <div className='flex items-center border space-x-8 pl-4 py-2'>
      <Link to="/"><img src={MovieLogo} alt="Movie Logo" className='w-[50px]' /></Link>
      <Link to="/" className='text-blue-500 text-2xl font-semibold'>Home</Link>
      <Link to="/watch-list" className="text-blue-500 text-2xl font-semibold">Watch List</Link>
    </div>
  )
}

export default Navbar