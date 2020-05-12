export const ADD_ARTICLE = "ADD_ARTICLE";

export function addArticle(payload) {
  return {
    type: ADD_ARTICLE, // 記錄這個 action 的名稱
    payload: {
      title: 'React Redux Tutorial',
      id: 1
    }
  }
};

