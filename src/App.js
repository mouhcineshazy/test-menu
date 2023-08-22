import data from './menu.json';
import { Menu } from './Components/Menu';
import { useState } from 'react';

function App() {
  const [level, setLevel] = useState(1);
  const [previousItems, setPreviousItems] = useState([]);
  const [currentItems, setCurrentItems] = useState(data);

  const handlePrevClick = () => {
    const previousLevel = level - 1;
    // this condition is necessary to prevent wrong display of items , whenever we go back to the top level we should clean the the previous items state and assign an empty list
    if (previousLevel === 1) {
      setPreviousItems([]);
      setCurrentItems(data);
      setLevel(previousLevel);
    } else {
      const prevItems = previousItems.find(
        (prev) => prev.level === previousLevel,
      );
      if (prevItems) {
        setLevel(previousLevel);
        setCurrentItems(prevItems.items);
      }
    }
  };

  const navigateClick = (item) => {
    setLevel((level) => level + 1);
    setPreviousItems((previousItems) => [
      ...previousItems,
      {
        level,
        items: currentItems,
      },
    ]);
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
