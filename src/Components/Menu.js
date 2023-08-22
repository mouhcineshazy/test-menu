import React, { useState } from 'react';
import { Item } from './item';
import { motion, AnimatePresence } from 'framer-motion';

/**
 *
 * @param {currentItems}: the items to be displayed
 *  @param {level}: the depth level
 * @param {handlePrevClick}: callback function for the previous button click
 * @param {navigateClick}: callback fucntion for the navigate further action click
 */
export const Menu = ({
  currentItems,
  level,
  handlePrevClick,
  navigateClick,
}) => {
  const [navigationDirection, setNavigationDirection] = useState('right'); // at the level 0 we can only navigate further

  const handleNavigationDirection = (direction) => {
    setNavigationDirection(direction);
  };

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.ul
        className="w-60 bg-slate-50"
        key={level}
        initial={{
          opacity: 0,
          x: navigationDirection === 'left' ? -100 : 100,
          type: 'spring',
        }}
        animate={{ opacity: 1, x: 0, type: 'spring' }}
        exit={{
          opacity: 0,
          x: navigationDirection === 'left' ? 100 : -100,
          type: 'spring',
        }}
      >
        {level > 1 && (
          <span
            className="flex cursor-pointer p-4"
            onClick={() => {
              setNavigationDirection('left');
              handlePrevClick();
            }}
          >{`\u2190`}</span>
        )}
        {currentItems &&
          currentItems.map((item) => (
            <Item
              item={item}
              navigateClick={navigateClick}
              handleDirection={handleNavigationDirection}
              currentItems={currentItems}
            />
          ))}
      </motion.ul>
    </AnimatePresence>
  );
};
