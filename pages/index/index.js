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
    ],
    imgUrls: [
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=265582129,1480240106&fm=21&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=569334953,1638673400&fm=21&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=680230261,3715142299&fm=21&gp=0.jpg"
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
