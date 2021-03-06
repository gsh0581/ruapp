import {
  GET_CATEGORY_LIST,
  ADD_SELECT_ITEM,
  MINUS_SELECT_ITEM,
  CLEAR_CAR,
  DEAL_WITH_SHOP_CAR,
} from './../constants/list';
import { CHANGE_KEY } from '../constants/list';
import { Ifood } from './../pages/menu/menu';

export interface IproductList {
  name: string;
  type: number;
  spus: Ifood[];
}
export interface ShopCarInfo {
  totalPrice: number;
  chooseList: Ifood[];
}
interface State {
  productCategory: [];
  activeKey: number;
  shopCarData: IproductList[];
  totalCount: number;
  gussusLike: [];
  shopCarInfo: ShopCarInfo;
}
const INITIAL_STATE: State = {
  productCategory: [],
  activeKey: 0,
  totalCount: 0,
  shopCarData: [],
  gussusLike: [],
  shopCarInfo: {
    totalPrice: 0,
    chooseList: [],
  },
};
const dealWithSelectItem = (state: State, { id, outIndex }, type) => {
  const listData = state.shopCarData;
  const productId = id;
  const list = listData;
  const currentItem = list[outIndex];
  // 找到外层左边的list列表
  // 对当前点击的加一 或减一
  if (type === ADD_SELECT_ITEM) {
    currentItem['spus'][productId].chooseCount++;
  } else {
    if (currentItem['spus'][productId].chooseCount > 0)
      currentItem['spus'][productId].chooseCount--;
  }
  const _listData = JSON.parse(JSON.stringify(listData));
  return _listData;
};
const addListItem = (state, payload) => ({
  ...state,
  totalCount: ++state.totalCount,
  shopCarData: dealWithSelectItem(state, payload, ADD_SELECT_ITEM),
});

const minusListItem = (state, payload) => ({
  ...state,
  totalCount: --state.totalCount,
  shopCarData: dealWithSelectItem(state, payload, MINUS_SELECT_ITEM),
});
const clearCar = state => {
  const shopCarData = state.shopCarData;
  for (let i = 0; i < shopCarData.length; i++) {
    for (let j = 0; j < shopCarData[i].spus.length; j++) {
      shopCarData[i].spus[j].chooseCount = 0;
    }
  }
  return { ...state, shopCarData, totalCount: 0,shopCarInfo:INITIAL_STATE.shopCarInfo };
};
const dealWithShopCar = state => {
  const { shopCarData } = state;
  let totalPrice = 0;
  const chooseList: Ifood[] = [];
  for (let i = 0; i < shopCarData.length; i++) {
    const spus = shopCarData[i].spus || [];
    for (let j = 0; j < spus.length; j++) {
      const chooseCount = spus[j].chooseCount;
      if (chooseCount > 0) {
        chooseList.push(spus[j]);
        totalPrice += spus[j].price * chooseCount;
      }
    }
  }
  const shopCarInfo = { totalPrice, chooseList };
  return { ...state, shopCarInfo };
};
export default function product(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case CHANGE_KEY: {
      return {
        ...state,
        activeKey: payload,
      };
    }
    case GET_CATEGORY_LIST: {
      const { data } = payload;
      const productList = data.data;
      const productCategory = productList.map(item => {
        return { title: item.name };
      });
      const shopCarData = productList.map((item, idx) => {
        return {
          name: item.name,
          type: item.type,
          spus: item.foods.map((food, index) => {
            return { ...food, chooseCount: 0, index, outIndex: idx };
          }),
        };
      });
      return {
        ...state,
        productCategory,
        shopCarData,
        gussusLike: shopCarData[0].spus,
      };
    }
    case ADD_SELECT_ITEM:
      return addListItem(state, payload);
    case MINUS_SELECT_ITEM:
      return minusListItem(state, payload);
    case CLEAR_CAR:
      return clearCar(state);
    case DEAL_WITH_SHOP_CAR:
      return dealWithShopCar(state);
    default:
      return state;
  }
}
