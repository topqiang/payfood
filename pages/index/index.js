//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    bolist: [
      {
        "id": 1,
        "boardnum": 2,
        "mannum": 4,
        "status": 0
      },
      {
        "id": 1,
        "boardnum": 2,
        "mannum": 4,
        "status": 1
      },
      {
        "id": 1,
        "boardnum": 2,
        "mannum": 4,
        "status": 1
      },
      {
        "id": 1,
        "boardnum": 2,
        "mannum": 4,
        "status": 0
      }
    ]
  },
  onLoad: function () {
    
  },
  showme: function ( e ) {
    var status = e.currentTarget.dataset.status;
    if( status == 0 ){
      wx.navigateTo({
        url: '/pages/logs/logs'
      });
    }else{
      wx.showModal({
        title: '提醒',
        content: '该餐桌已被预订！',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
  }
})
