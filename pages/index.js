Page({
  data: {
    list: [
      {
        id: 'lvfan',
        name: '绿帆',
        open: false,
        pages: [{ "page": "lvfanwxs", "name": "绿帆文学社" }, { "page": "draft", "name": "征文" }, { "page": "zhaoxin", "name": "招新" }, { "page": "past", "name": "往期绿帆" }]
      },
      {
        id: 'tougao',
        name: '投稿',
        open: false,
        pages: [{ "page": "picasa", "name": "图片投稿" }, { "page": "words", "name": "文字投稿" }]
      },
      {
        id: 'about',
        name: '关于',
        open: false,
        pages: [{ "page": "tips", "name": "使用说明" }, { "page": "about", "name": "关于" }]
      },
      {
        id: 'feedback',
        name: '反馈',
        open: false,
        pages: [{ "page": "feedback", "name": "反馈" }]
      }
    ],
    current: {
      poster: 'http://bmob-cdn-19461.b0.upaiyun.com/2018/06/23/bdbcaa2a40e6d47b80888af8d0927f87.jpg',
      name: '爱，因为在心中',
      author: '王力宏',
      src: 'http://bmob-cdn-19461.b0.upaiyun.com/2018/06/23/a540033b40d900ab80e12a95b0e2efa8.mp3',
    },
   audioAction: {
     method: 'pause'
  }
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
});
