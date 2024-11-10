import logo from './Images/CompanyLogo.svg'; // Adjust path as needed
import indexPageBanner from './Images/indexPageBanner.svg'; 
import './output.css';

function App() {
  return (
    <>
    <header className=" px-10">
        <nav className="flex items-center gap-44">
            <input type="checkbox" className="hidden" />
           
            <div>
                <ul className="flex items-center gap-7 font-medium">
                    <img src={logo} alt="Company Logo" />
                    <li><a href="" className="text-[#33A137]">BUY <i className="fa-solid fa-greater-than"></i></a></li>
                    <li><a href="" className="text-black">Homes</a></li>
                    <li><a href="">Commercial</a></li>
                    <li><a href="">Plots</a></li>
                    <li className="text-slate-200">|</li>
                    <li><a href="">Rent</a></li>
                    <li className="text-slate-200">|</li>
                    <li><a href="">New Projects</a></li>
                    <li className="text-slate-200">|</li>
                    <li><a href="">Agents</a></li>
                    <li className="text-slate-200">|</li>
                    <li><a href="">More <i className="fa-solid fa-greater-than rotate-90"></i></a></li>
                </ul>
            </div>
            <div className="flex gap-4">
                <button className="bg-[#ffffff] text-[#33A137] hover:bg-[#33A137] hover:text-[#FFFFFF] transition ease-in-out duration-500 font-medium border-[#33A137] border-2 px-6 py-3 rounded-[10px] h-12">Wanted</button>
                <button className="bg-[#33A137] text-[#FFFFFF] px-6 py-3 rounded-[10px] font-medium h-12">Sell</button>
            </div>
        </nav>
    </header>
    <main>
        <div>
            <div>
                <img src={indexPageBanner} alt="Company Logo" />
            </div>
        </div>
    </main>
   </>
  );
}

export default App;
