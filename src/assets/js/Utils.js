const Utils = {
  isLogin: function () {
    let logined = localStorage.getItem('login')
    if (logined) {
      return true
    } else {
      return false
    }
  }
}
export default Utils
