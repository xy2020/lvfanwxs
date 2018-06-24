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

    /**
     * 页面渲染事件
     
    onShow: function() {
        var item = this.data.item;
        item.key = app.globalData.hotapp.genPrimaryKey('item');
        this.setData({
            item: item
        });
    },
*/
    /**
     * 保存数据事件
     
    onSubmit: function(event) {
        console.log(event)
        var item = this.data.item;
        item.value.title = event.detail.value.title;
        item.value.author = event.detail.value.author;
        item.value.content = event.detail.value.content;
        this.setData({
            item: item
        });
        this.saveData();
    },
*/
    /**
     * 请求服务器保存数据
     
    saveData: function() {
        var item = this.data.item;
        var now = Date.parse(new Date()) / 1000;
        item.update_time = now;
        item.create_time = now;
        this.setData({
            item: item
        });
        app.store(this.data.item, function(res) {
            if (res) {
                wx.showToast({
                    title: "投稿成功"
                });
                //返回首页
                wx.navigateBack();
            } else {
                wx.showToast({
                    title: "投稿失败"
                });
            }
        });
    },*/




    onLoad: function () {


      that = this;

      wx.showShareMenu({
        withShareTicket: false //要求小程序返回分享目标信息
      })

     // var k = 'http://bmob-cdn-12917.b0.upaiyun.com/2017/07/18/d99d3bb7400cb1ed808f34896bff6fcc.jpg';

     // var newUrl = k.replace("http://bmob-cdn-12917.b0.upaiyun.com", "https://bmob-cdn-12917.bmobcloud.com")

      //console.log(newUrl);

      //批量更新数据
      // var query = new Bmob.Query('diary');
      // query.find().then(function (todos) {
      //   todos.forEach(function (todo) {
      //     todo.set('title', "无需后端编程");
      //   });
      //   return Bmob.Object.saveAll(todos);
      // }).then(function (todos) {
      //   // 更新成功
      // }, function (error) {
      //   // 异常处理
      // });


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
      var title = event.detail.value.title;
      var content = event.detail.value.content;
      var author = event.detail.value.author;
      var contact = event.detail.value.contact;
      var formId = event.detail.formId;
      console.log("event", event)
      if (!title) {
        common.showTip("标题不能为空", "loading");
      }
      else if (!content) {
        common.showTip("内容不能为空", "loading");
      } else if (!author) {
        common.showTip("署名不能为空", "loading");
      } else if (!contact) {
        common.showTip("联系方式不能为空", "loading");
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
        var Diary = Bmob.Object.extend("Submission");
        var diary = new Diary();
        diary.set("title", title);
        diary.set("formId", formId);//保存formId
        diary.set("author", author);
        diary.set("content", content);
        diary.set("contact", contact);
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
            common.showTip('投稿成功');
            that.setData({
              writeDiary: false,
              loading: false
            })

            var currentUser = Bmob.User.current();

            //成功后发送模板消息，这个只能在手机上测试，模拟器里面没有formid
            // var temp = {
            //   "touser": currentUser.get("openid"),
            //   "template_id": "B-2GcobfYnptevxY8G3SdA72YLYGZpOoJO_FEHlouWg",
            //   "page": "",
            //   "form_id": formId,
            //   "data": {
            //     "keyword1": {
            //       "value": "SDK测试内容",
            //       "color": "#173177"

            //     },
            //     "keyword2": {
            //       "value": "199.00"
            //     },
            //     "keyword3": {
            //       "value": "123456789"
            //     },
            //     "keyword4": {
            //       "value": "2015年01月05日 12:30"
            //     }
            //     ,
            //     "keyword5": {
            //       "value": "恭喜您支付成功，如有疑问请反馈与我"
            //     }
            //   }
            //   , "emphasis_keyword": "keyword1.DATA"
            // }
            // console.log(temp);
            // Bmob.sendMessage(temp).then(function (obj) {
            //   console.log('发送成功');


            // }, function (err) {

            //   common.showTip('失败' + err);
            // });


            // 成功后发送主人模板消息，这个只需把openid改正确即可接收到， Bmob后端云公众号回复openid 
            var temp = {
            
            }
            console.log(temp);
            Bmob.sendMasterMessage(temp).then(function (obj) {
              wx.navigateBack ({
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
    onShareAppMessage: function () {
      return this.data.shareData
    }
});