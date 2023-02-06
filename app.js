//app.js
App({
  onLaunch: function () {
    if (wx.canIUse('getUpdateManager')) {
      var update = wx.getUpdateManager(), that = this;
      update.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          update.onUpdateReady(function () {
              update.applyUpdate();
          })
          update.onUpdateFailed(function () {
            wx.showModal({
              title: '更新小程序失败',
            })
          })
        }
      })
    };
  },
  globalData: {
    userInfo: null
  }
})