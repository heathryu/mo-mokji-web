import React from 'react';

import Header from './components/Header';
import Action from './components/Action';
import OptionList from './components/OptionList';
import AddOption from './components/AddOption';
import DecisionModal from './components/DecisionModal';

const App = props => {
  return (
    <div>
      <Header />
      <Action />
      <OptionList />
      <AddOption />
      <DecisionModal />
    </div>
  );
};

export default App;
