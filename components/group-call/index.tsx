'use client'

import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import CallModal from './call-modal';
import Minimize from './minimize';
import useOutsideClick from '@/hooks/useOutsideClick';

const GroupCall = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  return (
    <>
      <AnimatePresence>
        {open ? (
          <CallModal open={open} ref={ref} onClose={() => setOpen(false)} />
        ) : (
          <Minimize open={open} onClick={() => setOpen(true)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default GroupCall;
