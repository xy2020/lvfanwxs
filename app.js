
//app.js
//var hotapp = require('utils/hotapp.js');
const Bmob = require('utils/bmob.js');
Bmob.initialize("9c01dc08fb2d1befd97347ec3380f049", "0457d616a6724d2de10d51c78bdb9e0a");
App({

    /**
     * 启动事件
     */

    
    onLaunch: function () { 

      //调用API从本地缓存中获取数据
     //var logs = wx.getStorageSync('logs') || []
     // logs.unshift(Date.now())
     // wx.setStorageSync('logs', logs)


        //使用HotApp小程序统计，统计小程序新增，日活，留存，当日可查看统计结果
      //hotapp.init('hotapp420619039');

        // 输入debug错误日志, 建议生产环境不要开启
      //  hotapp.setDebug(false);  
    },
    
    /**
     * 全局变量
     
    globalData: {
        hotapp: hotapp // 这里作为一个全局变量, 方便其它页面调用
    }
    */

})