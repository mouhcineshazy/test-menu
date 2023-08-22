import { useEffect, useMemo, useState } from 'react';

/**
 * this custom hook returns data containing the submenu and a boolean indicating whether the submenu has items or not.
 */
export const useSubmenu = (item, items) => {
  const [submenu, setSubmenu] = useState(undefined);
  const hasSubmenu = useMemo(() => !!submenu?.length, [submenu]);

  useEffect(() => {
    if (!items) return;
    const foundLink = items.find((m) => m.item === item);
    setSubmenu(foundLink?.submenu);
  }, [item, items]);

  return [submenu, hasSubmenu];
};
