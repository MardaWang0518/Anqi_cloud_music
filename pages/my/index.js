var fav = require('../../utils/fav.js');

Page({
    data: {},
    onLoad: function() {
      console.log("fav", fav.getFavList());
    },
    onShow: function() {
        this.setData({
            favlist: fav.getFavList()
        })
    },
    playTap: function(e) {
        wx.showToast({
          title: '小哥正在努力开发ing',
          icon:'none'
        })
    }
})