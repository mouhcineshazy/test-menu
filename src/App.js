import data from './menu.json';
import { Menu } from './Components/Menu';
import { useState } from 'react';
import { usePrevious } from '@uidotdev/usehooks';

function App() {
  const [level, setLevel] = useState(1);
  const [currentItems, setCurrentItems] = useState(data);
  const previous = usePrevious(currentItems);


  const handlePrevClick = () => {
    const previousLevel = level - 1;
    // this condition is necessary to prevent wrong display of items , whenever we go back to the top level we should clean the the previous items state and assign an empty list
    if (previousLevel === 1) {
      setCurrentItems(data);
      setLevel(previousLevel);
    } else {
      if (previous) {
        setLevel(previousLevel);
        setCurrentItems(previous);
      }
    }
  };

  const navigateClick = (item) => {
    setLevel((level) => level + 1);
    item.submenu && setCurrentItems(item.submenu);
  };

  return (
    <>
      <Menu
        currentItems={currentItems}
        handlePrevClick={handlePrevClick}
        navigateClick={navigateClick}
        level={level}
      />
    </>
  );
}

export default App;
