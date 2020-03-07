import { combineReducers } from 'redux';

import options from './options';
import selectedOption from './selectedOption';

export default combineReducers({ options, selectedOption });
