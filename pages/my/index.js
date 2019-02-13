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

    }
})