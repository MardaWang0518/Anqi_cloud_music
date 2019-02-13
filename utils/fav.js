module.exports = {
	getFavList: function() {
		var favList = [];
		var data = wx.getStorageSync('favlist');

<<<<<<< HEAD
    console.log("getFavList---",data);
=======
>>>>>>> eaf734405bc199f062d56a25c5fa8af89491bd9a
		Object.keys(data).forEach(function(key) {
			favList.push({
				picurl: data[key].picurl,
				name: key,
				count: data[key].list.length
			});
		});

		return favList;
	}
}