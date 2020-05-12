import { ADD_ARTICLE } from "./action/index"

const initialState = {
  articles: []
};


/**
 * action 來自store
 * {
 *   type: ADD_ARTICLE,
 *   payload: {
      title: 'React Redux Tutorial',
      id: 1
    }
 * }
 */


function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE){ // 接回來的 action 如果他的type 是add_artical
    //state.articles.push(action.payload) -> 這樣做違反原則，正在直接改變initial state，state 物件是不能直接改動
    // 必須複製舊的state (用Object.assign(target, ...sources)複製，或用es6展開 
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  /**
   * use concat, slice, or the spread operator for arrays
   * use Object.assign or object spread of objects
   */


  return state;
};

export default rootReducer;