import { useEffect, useState } from "react"
import { IndexData, Skills } from "./data/common/types";
import { getIndexData } from "./data/api/common";
import { Button } from "./components/ui/button";
import { FiDownload } from "react-icons/fi";
import { getSkills } from "./data/api/skills";
import { Badge } from "./components/ui/badge";
import Profile from "./components/org/jallen/profile/Profile";
import Socials from "./components/org/jallen/socials/Socials";
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const App = () => {
  const [skills, setSkills] = useState<Skills[]>();
  const [isLoading, setLoading] = useState(true);
  const data: IndexData = getIndexData();

  useEffect(() => {
    getSkillData();
  })

  const getSkillData = async () => {
    const data: Skills[] = await getSkills();
    setSkills(data);
    setLoading(false);
  }

  return (
    <section className='h-[85vh]'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col pt-8 xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>{data.title}</span>
            <h1 className='h1 mb-6'>
              <span className='text-accent'>{data.first}</span><br />
              <span className='text-foreground'>{data.last}</span>
            </h1>

            <p className='font-karla max-w-[500px] mb-9'>{data.message}</p>

            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='hidden uppercase items-center gap-2 text-black'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl text-black' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials 
                  containerStyles='flex gap-6' 
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                  />
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Profile />
          </div>

        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { 
              delay: 1.0,
              duration: 0.4,
              ease: 'easeIn'
            }
          }}
          className='hidden xl:flex flex-row gap-2 w-full max-w-[1250px] flex-wrap'>
          { isLoading && <Skeleton containerClassName='w-full' count={3} /> }
          {
            skills?.map((item, index: number) => {
              return (
                <Badge key={index} className='bg-white text-black'>{item.name}</Badge>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default App
