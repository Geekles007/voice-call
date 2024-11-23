import { cn } from '@/utils';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

export interface People {
  name: string;
  initials: string;
  avatar: string;
  color: string;
  speaking?: boolean;
}

type AvatarProps = {
  person: People;
  className?: string;
  open?: boolean;
};

const Avatar = ({ person, className, open }: AvatarProps) => {
  return (
    <motion.div
      layout
      layoutId={`person-${person?.name}`}
      style={{ backgroundColor: `${person?.color}` }}
      className={cn(
        'relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-solid border-white shadow-md first:ml-0',
        className
      )}
    >
      {person?.speaking && open && (
        <motion.div
          layout
          layoutId='speaking'
          className='absolute -right-2.5 -top-2.5 z-10 h-8 w-8 rounded-full border border-solid border-gray-100 bg-white p-2 shadow-lg'
        >
          <motion.img layout src='/sound.gif' height={20} width={20} alt='' />
        </motion.div>
      )}
      <Image alt={``} height={50} width={50} src={`${person?.avatar}`} />
    </motion.div>
  );
};

export default Avatar;
