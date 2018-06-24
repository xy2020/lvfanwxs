/*
**双后台
**1、hotapp
**2。bomb
*/
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var app = getApp();
var that;

Page({
  data: {
    writeDiary: false,
    loading: false,
    windowHeight: 0,
    windowWidth: 0,
    limit: 10,
    diaryList: [],

    modifyDiarys: false,

    isNew: false,
    focus: true
  },


  onLoad: function () {


    that = this;

    wx.showShareMenu({
      withShareTicket: false //要求小程序返回分享目标信息
    })

  },
  noneWindows: function () {
    that.setData({
      writeDiary: "",
      modifyDiarys: ""
    })
  },

  pullUpLoad: function (e) {
    var limit = that.data.limit + 2
    this.setData({
      limit: limit
    })
    this.onShow()
  },
  toAddDiary: function () {
    that.setData({
      writeDiary: true
    })
  },




  addDiary: function (event) {
    var feedback = event.detail.value.feedback;
    console.log("event", event)
    if (!feedback) {
      common.showTip("反馈内容不能为空", "loading");
    }
    else {
      that.setData({
        loading: true
      })
      var currentUser = Bmob.User.current();

      var User = Bmob.Object.extend("_User");
      var UserModel = new User();

      // var post = Bmob.Object.createWithoutData("_User", "594fdde53c");




      //增加日记
      var Diary = Bmob.Object.extend("feedback");
      var diary = new Diary();
      diary.set("feedback", feedback);
      var f = Bmob.File("a.jpg", [""]);
      diary.set("f", f);
      if (currentUser) {
        UserModel.id = currentUser.id;
        diary.set("own", UserModel);
      }
      //添加数据，第一个入口参数是null
      diary.save(null, {
        success: function (result) {
          // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
          common.showTip('提交成功');
          that.setData({
            writeDiary: false,
            loading: false
          })

          var currentUser = Bmob.User.current();

        


          // 成功后发送主人模板消息，这个只需把openid改正确即可接收到， Bmob后端云公众号回复openid 
          var temp = {

          }
          console.log(temp);
          Bmob.sendMasterMessage(temp).then(function (obj) {
            wx.navigateBack({
              url: '../index',
            })

          }, function (err) {
            wx.navigateBack({
              url: '../index',
            })

          });



          that.onShow()
        },
        error: function (result, error) {
          // 添加失败


        }
      });
    }

  },
  closeLayer: function () {
    that.setData({
      writeDiary: false
    })
  },

});