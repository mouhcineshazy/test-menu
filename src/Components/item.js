import { useSubmenu } from '../hooks/useSubmenu';
export const Item = ({
  currentItems,
  item,
  navigateClick,
  handleDirection,
}) => {
  const [_, hasSubmenu] = useSubmenu(item.item, currentItems);

  const handleClick = () => {
    if (hasSubmenu) {
      handleDirection('right');
      navigateClick(item);
    }
  };

  return (
    <li
      key={item.id}
      className="flex cursor-pointer justify-between p-4 hover:bg-blue-100 hover:transition-all"
      onClick={handleClick}
    >
      <span>{item.name}</span>
      {hasSubmenu && (
        <span className="text-gray-400 hover:text-gray-800">{'\u2192'}</span>
      )}
    </li>
  );
};
