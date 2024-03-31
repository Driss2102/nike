import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from "../contants/constants.index"
const Nav = () => {
  return (
    <header className="padding-x absolute py-8 z-10 w-full">
        <nav className="flex justify-between items-center max-container ">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={30}/>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
{navLinks.map((item)=>(
    <li key={item.label}>
        <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-600">
            {item.label}
        </a>
    </li>
))}
            </ul>
            <div className="md:hidden" >
                <img src={hamburger} alt="" width={30} height={30} />
            </div>
        </nav>
    </header>
  )
}

export default Nav