import { motion } from 'framer-motion';
import { getFooterSocials } from '../../../../data/api/common';
import { useDispatch, useSelector } from 'react-redux';
import { changeTitle } from '@/data/state/titleSlice';

const Footer = () => {
  const value = useSelector((state: any) => state.title.value);
  const socialList = getFooterSocials();
  const dispatch = useDispatch();

  const onStateClick = () => {
    dispatch(changeTitle('James Allen'));
  }
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: 'easeInOut'
        }
      }}
      className='fixed w-full flex-row justify-between bg-sidebar bottom-0 p-4 hidden md:flex'>
      <span className='text-xs text-link'>Created using React &#169; Copyright 2020 of James Allen All Rights Reserved.</span>
      <div className='hidden flex-row gap-2'>
        <span onClick={onStateClick} className='text-xs text-link'>State: {value}</span>
      </div>
      <div className='flex flex-row gap-6 items-center'>
        {
          socialList.map((social, index) => {
            return (
              <div key={index} className='flex flex-row gap-2'>
                <span className='text-link'>{social.icon}</span>
                <a href={social.href} className='text-xs text-link hover:underline'>{social.name}</a>
              </div>
            )
          })
        }
      </div>
    </motion.footer>
  )
}

export default Footer