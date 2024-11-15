import logo from "./Images/CompanyLogo.svg"; // Adjust path as needed
import indexPageBanner from "./Images/indexPageBanner.svg";
import hamburger from "./Images/hamburger.svg";
import "./output.css";

function App() {
  return (
    <>
      <header className=" px-10">
        <nav className="flex items-center gap-35 xl:gap-44 ">
          <input type="checkbox" className="hidden" id="hamburger" />

          <div className="flex gap-2">
            <img src={logo} alt="Company Logo" />

            <ul className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-10 font-medium  ">
              <li>
                <a href="" className="text-[#33A137]">
                  BUY <i className="fa-solid fa-greater-than"></i>
                </a>
              </li>
              <li>
                <a href="" className="text-black">
                  Homes
                </a>
              </li>
              <li>
                <a href="">Commercial</a>
              </li>
              <li>
                <a href="">Plots</a>
              </li>
              <li className="text-slate-200">|</li>
              <li>
                <a href="">Rent</a>
              </li>
              <li className="text-slate-200">|</li>
              <li>
                <a href="">New Projects</a>
              </li>
              <li className="text-slate-200">|</li>
              <li>
                <a href="">Agents</a>
              </li>
              <li className="text-slate-200">|</li>
              <li>
                <a href="">
                  More <i className="fa-solid fa-greater-than rotate-90"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 ml-auto">
            <button className="bg-[#ffffff] text-[#33A137] hover:bg-[#33A137] hover:text-[#FFFFFF] transition ease-in-out duration-500 font-medium border-[#33A137] border-2 px-6 py-3 rounded-[10px] h-12">
              Wanted
            </button>
            <button className="bg-[#33A137] text-[#FFFFFF] px-6 py-3 rounded-[10px] font-medium h-12">
              Sell
            </button>
            <div
              className="lg:hidden block rounded-lg p-3 w-12 h-12  bg-[#F2FBF2]"
              for="hamburger"
            >
              <img src={hamburger} />
            </div>
          </div>
        </nav>
      </header>
      <main className='max-w-[1728px] flex flex-col mx-auto'>
        <div className='relative'>
          <div>
            <img src={indexPageBanner} alt="Company Logo" />
          </div>

          <div className='absolute top-0'>
            <h1>hello</h1>
          </div>

        </div>
      </main>
    </>
  );
}

export default App;
