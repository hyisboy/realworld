/*
 * @Descripttion: 
 * @version: 
 * @Author: david
 * @Date: 2020-08-21 16:33:09
 * @LastEditors: david
 * @LastEditTime: 2020-08-22 12:55:06
 */
const cookieparser = process.server ? require('cookieparser') : null
export const state = () => ({
  userInfo: null,
  isLogin: false
})
export const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  }
}
export const actions = {
  nuxtServerInit(context, {
    req
  }) {
    let user = null;
    //服务器中取出cookie，存储到vuex 中存储
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
         user = JSON.stringify(parsed.user)
      }catch(e) {
      }
    }
    context.commit('setUserInfo', user);
  }
}
