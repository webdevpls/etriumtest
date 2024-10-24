import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importa ícones de menu

function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre nós", href: "#about" },
    { label: "Serviços", href: "#service" },
    { label: "Planos", href: "#planos" },
    { label: "Contato", href: "#contact" }
  ];

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="fixed top-0 z-50 py-3 bg-[#F2E9E9] w-full shadow-md">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/">
              <img src="./src/assets/logoetrium.png" alt="logo" className='w-[130px]' />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 font-mono space-x-12 text-[17px]">
            {navItems.map((item, index) => (
              <li key={index} className='text-[#2A2A34] hover:text-[#0072C7]'>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="relative hidden lg:flex justify-center space-x-4 items-center">
            <a
              href="https://app-staging.etrium.com.br/#/"
              className="relative bg-[#0072C7] py-2 px-9 z-10 rounded-full text-white font-bold hover:bg-[#005bb5]"
              target='_blank'
              rel='noreferrer'
            >
              Acessar Sistema
            </a>
            <a
              href="https://app-staging.etrium.com.br/#/cadastro"
              className="relative py-2 px-9 z-10 rounded-full text-[#0072C7] font-bold hover:bg-[#0072C7] border border-[#0072C7] hover:text-white"
              target='_blank'
              rel='noreferrer'
            >
              Cadastrar
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="text-[#2A2A34] focus:outline-none">
              {mobileDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden bg-[#F2E9E9] w-full py-4">
            <ul className="flex flex-col items-center space-y-4 font-mono text-[17px]">
              {navItems.map((item, index) => (
                <li key={index} className='text-[#2A2A34] hover:text-[#0072C7]'>
                  <a href={item.href} onClick={toggleNavbar}>{item.label}</a>
                </li>
              ))}
              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-2 mt-4 w-full px-6">
                <a
                  href="https://app-staging.etrium.com.br/#/"
                  className="bg-[#0072C7] py-2 rounded-full text-white font-bold hover:bg-[#005bb5] text-center"
                  target='_blank'
                  rel='noreferrer'
                >
                  Acessar Sistema
                </a>
                <a
                  href="https://app-staging.etrium.com.br/#/cadastro"
                  className="py-2 rounded-full text-[#0072C7] font-bold hover:bg-[#0072C7] border border-[#0072C7] hover:text-white text-center"
                  target='_blank'
                  rel='noreferrer'
                >
                  Cadastrar
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
