import { Button } from "@/components/ui/button"
import { FaLongArrowAltRight } from "react-icons/fa"
import Navigation from "../navigation/Navigation"
import MobileNavigation from "../navigation/MobileNavigation"

const Header = () => {
  function handleChange() {
    const el: HTMLInputElement = document.getElementById('viewer') as HTMLInputElement;
    const val = el.value.toString();
    if (val === '2') window.location.href = 'https://jallen-next.vercel.app/';
  }

  return (
    <header className='py-8 xl:py-8 text-white bg-sidebar'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex flex-col'>
          <a href='/'>
            <h1 className='text-4xl font-semibold'>
              James Allen
            </h1>
          </a>
          <div>
            <select id='viewer' className='bg-sidebar font-karla text-sm' onChange={handleChange}>
              <option value='1'>React</option>
              <option value='2'>Next.js</option>
            </select>
          </div>
        </div>

        <div className='hidden lg:flex items-center gap-8'>
          <Navigation />
          <a href='https://www.linkedin.com/in/tjamesallen15/'>
            <Button className='gap-2 hover:bg-accent transition-all rounded-sm bg-white text-foreground hover:text-primary'>
              <span className='text-[14px] font-medium pt-[1px]'>Hire me</span>
              <FaLongArrowAltRight />
            </Button>
          </a>
        </div>

        <div className='lg:hidden flex flex-row items-center gap-4'>
          <MobileNavigation />
          <a href='https://www.linkedin.com/in/tjamesallen15/'>
            <Button className='gap-2 hover:bg-accent transition-all bg-white text-foreground hover:text-primary'>
              <span className='text-[14px] font-medium'>Hire me</span>
              <FaLongArrowAltRight />
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header