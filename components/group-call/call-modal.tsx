import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import React, { LegacyRef, forwardRef } from 'react';
import { users } from './constants';
import Avatar from './avatar';

type CallModalProps = {
  onClose: () => void;
  open: boolean;
};

const CallModal = forwardRef(
  ({ onClose, open }: CallModalProps, ref: LegacyRef<HTMLDivElement>) => {
    return (
      <motion.div
        ref={ref}
        layout
        layoutId='call'
        className='relative4 flex flex-col items-center overflow-hidden border border-solid border-gray-100 bg-white shadow-lg'
        style={{ borderRadius: '30px' }}
      >
        <AnimatePresence mode='popLayout'>
          <motion.div
            layout
            className='relative flex h-12 w-full items-center justify-center bg-gray-100 font-sans'
          >
            <motion.span layout className='font-mono text-sm text-gray-500'>
              Voice Call
            </motion.span>
            <motion.button
              layout
              className='absolute right-5 top-4'
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              <X size={18} className='text-gray-500' />
            </motion.button>
          </motion.div>
        </AnimatePresence>
        <motion.div layout className='p-4'>
          <motion.div layout className='grid grid-cols-4 gap-4'>
            {users?.map((person, index) => {
              return (
                <motion.div
                  layout
                  key={`person1-${person?.name}-${index}`}
                  className='flex flex-col items-center  justify-center gap-1'
                >
                  <Avatar person={person} open={open} className='h-20 w-20' />
                  <motion.span
                    layout
                    className='text-center font-mono text-xs text-gray-500'
                  >
                    {person?.initials}
                  </motion.span>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div className='mb-2 mt-4 flex flex-col items-center gap-2'>
            <button className='flex h-12 w-full items-center justify-center rounded-lg bg-black px-4 py-2 font-mono text-xs font-bold text-white'>
              JOIN NOW
            </button>
            <span className='font-mono text-xs text-gray-400'>
              Mic will be muted initially
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

CallModal.displayName = 'CallModal';

export default CallModal;
