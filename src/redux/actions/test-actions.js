import * as constants from '../constants';
import { ShopData, FirstVisitData } from '../../utilities/services.js';

/** Action to get Shop Data */
export const getShopData = () => {
    const shopData = ShopData();
    return {
        type: constants.GET_SHOP_DATA,
        payload: { "shopData": shopData }
    }
}

/** Action to get First Visit Data */
export const getFirstVisitData = () => {
    const firstVisitData = FirstVisitData();
    return {
        type: constants.GET_FIRSTVISIT_DATA,
        payload: { "firstVisitData": firstVisitData.object[0] }
    }
}
