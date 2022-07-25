import {combineReducers} from 'redux';

import shop from './shop';
import cart from './cart';

const rootReducer = combineReducers ({

    cart,
    shop,
});
export default rootReducer;