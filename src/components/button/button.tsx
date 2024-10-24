
type HrefButton = {
    href: string
    title: string
}

function Button({href, title}: HrefButton) {
  return (
         <div className="relative hidden lg:flex justify-center items-center">
          <div className='absolute  bg-[#104771] -inset-0.5 blur-[7px] rounded-full'>
          </div>    
          <a
            href={href}
            className="relative bg-[#0072C7] py-2 px-9 z-10 rounded-full text-white font-bold hover:bg-[#008fc7]"
            target='_blank'
          >
            {title}
          </a>
        </div>
  )
}

export default Button

