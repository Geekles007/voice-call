import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { users } from './constants';
import Avatar from './avatar';
import { motion } from 'framer-motion';

type MinimizeProps = {
  onClick: () => void;
  open: boolean;
};

const Minimize = ({ onClick, open }: MinimizeProps) => {
  const list = [...users];
  const preview = list?.splice(0, 4);

  return (
    <motion.div
      layout
      className='relative flex cursor-pointer items-center gap-2 border border-solid border-gray-100 bg-white p-2 shadow-lg'
      layoutId='call'
      style={{ borderRadius: '50px' }}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        layout
        layoutId='speaking'
        className='absolute -left-2.5 -top-2.5 z-10 h-10 w-10 rounded-full border border-solid border-gray-100 bg-white p-2 shadow-lg'
      >
        <Image src='/sound.gif' height={25} width={25} alt='' />
      </motion.div>
      <motion.div layout className='flex'>
        {preview?.map((person, index) => {
          return (
            <Avatar
              key={`person-${person?.name}-${index}`}
              person={person}
              className=' -ml-4'
              open={open}
            />
          );
        })}
      </motion.div>
      <motion.div layout className='flex items-center gap-1'>
        <motion.span layout className='text-gray-400'>
          +{list?.length}
        </motion.span>
        <ChevronDown size={16} className='text-gray-500' />
      </motion.div>
    </motion.div>
  );
};

export default Minimize;
