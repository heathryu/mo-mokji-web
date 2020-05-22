import React, { useState } from 'react';

import Header from './components/Header';
import Action from './components/Action';
import OptionList from './components/OptionList';
import AddOption from './components/AddOption';
import DecisionModal from './components/DecisionModal';

const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | undefined>();

  const handlePick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex]);
  };

  const clearSelectedItem: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSelectedItem(undefined);
  };

  const addNewItem = (newItem: string) => {
    if (newItem && !items.includes(newItem)) {
      setItems(items.concat(newItem));
    }
  };

  const removeItem = (itemToRemove: string) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  const removeAllItems: React.MouseEventHandler<HTMLButtonElement> = () => {
    setItems([]);
  };

  return (
    <div>
      <Header />
      <Action hasOptions={items.length > 0} handlePick={handlePick} />
      <OptionList
        handleRemoveAllOptions={removeAllItems}
        handleRemoveOption={removeItem}
        items={items}
      />
      <AddOption addNewOption={addNewItem} />
      <DecisionModal
        selectedOption={selectedItem}
        handleClearSelectedItem={clearSelectedItem}
      />
    </div>
  );
};

export default App;
