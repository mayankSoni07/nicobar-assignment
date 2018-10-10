/** All the action creators here. */

import * as constants from '../constants';
/** Below functions treated as a API call. */
import { ShopData, FirstVisitData } from '../../utilities/services.js';

/** Action to get Shop Data */
export const getShopData = () => {
    /** Call to get mock data for Shop component */
    const shopData = ShopData();
    return {
        type: constants.GET_SHOP_DATA,
        payload: { "shopData": shopData }
    }
}

/** Action to get First Visit Data */
export const getFirstVisitData = () => {
    /** Call to get mock data for First Visit component */
    const firstVisitData = FirstVisitData();
    return {
        type: constants.GET_FIRSTVISIT_DATA,
        payload: { "firstVisitData": firstVisitData.object[0] }
    }
}
