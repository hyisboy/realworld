export function storeUserInfo(userInfo) {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

export function getUserInfo(key) {
  console.log(localStorage)
  const info = localStorage.getItem('userInfo');
  if (info) {
    info = JSON.parse(info);
    if (key) {
      return info[key];
    }
    return info;
  }
  return null;
}
