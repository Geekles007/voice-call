import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { users } from './constants';
import Image from 'next/image';
import { cn } from '@/utils';
import { ChevronDown } from 'lucide-react';
import CallModal from './call-modal';
import Minimize from './minimize';
import useOutsideClick from '../header/hooks/use-outside-click';

const GroupCall = () => {
  const [open, setOpen] = useState(false);
  const list = [...users];
  const preview = list?.splice(0, 4);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  return (
    <div className='flex h-screen w-screen items-center justify-center p-8'>
      <AnimatePresence>
        {open ? (
          <CallModal open={open} ref={ref} onClose={() => setOpen(false)} />
        ) : (
          <Minimize open={open} onClick={() => setOpen(true)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GroupCall;
