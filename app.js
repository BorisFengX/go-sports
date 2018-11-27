//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    sports: [
      {category: "running",
      title: "5km running in Renmin Park",
      description: "5km leisure running in renmin park, join us on 28th 9am! Free drinks and snacks provided.",
      price: 0,
      start_time: "2018-11-28 09:00:00 -0800",
      end_time: "2018-11-28 10:00:00 -0800",
      photo:"https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
      province: "shanghai",
      city: "shanghai",
      district: "jingan",
      address: "renmin square",
      capacity: 10,
      level: "junior"
      },
      {
        category: "tennis",
        title: "Fun & easy way to play more tennis",
        description: "If you love tennis, we’d love to have you! Also, if you’re looking to play more matches and you aren’t already in the PlayYourCourt Challenge League, you can go here to see what we’re all about and sign up.",
        price: 80,
        start_time: "2018-11-30 17:00:00 -0800",
        end_time: "2018-11-30 19:00:00 -0800",
        photo:"https://images.pexels.com/photos/1619860/pexels-photo-1619860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        province: "shanghai",
        city: "shanghai",
        district: "jingan",
        address: "city tennis court",
        capacity: 6,
        level: "middle"
      },
      {
        category: "fitness",
        title: "800 Fitness Group",
        description: "Anyone can join that is eager to get fit, we will be using kettlebells, medballs, jump ropes, and body weight exercises to challenge the body and mind and have fun while building a community together. Participants will be engaging each other and focus on their body mechanics to facilitate a meditative movement experience.",
        price: 55,
        start_time: "2018-11-30 19:00:00 -0800",
        end_time: "2018-11-30 20:30:00 -0800",
        photo:"https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        province: "shanghai",
        city: "shanghai",
        district: "jingan",
        address: "super monkey nanjing west road",
        capacity: 10,
        level: "middle"
      },
      {
        category: "basketball",
        title: "3v3 Game in Zhongxing Green Field basketball court",
        description: "Hosted by previous professional play, join us if you want challenge. No beginners please. Remember to bring extra cloth, free drinks provided.",
        price: 15,
        start_time: "2018-12-2 10:00:00 -0800",
        end_time: "2018-12-2 12:30:00 -0800",
        photo: "https://images.pexels.com/photos/860683/pexels-photo-860683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        province: "shanghai",
        city: "shanghai",
        district: "yangpu",
        address: "799 zhongxing road"
        capacity: 6,
        level: "senior"
      },
      {
        category: "hiking",
        title: "leisure hiking in sheshan",
        description: "Let's go hiking in sheshan! Just for leisure, fine to bring your kids, we can have nice dinner around after.",
        price: 0,
        start_time: "2018-12-4 15:00:00 -0800",
        end_time: "2018-12-4 18:00:00 -0800",
        photo: "https://files.slack.com/files-pri/T02NE0241-FEBU9KCG0/image.png",
        province: "shanghai",
        city: "shanghai",
        district: "songjiang",
        address: "sheshan north gate",
        capacity: 10,
        level: "junior"
      },
      {
        category: "football",
        title: "11 on 11 full court football match",
        description: "When was your last full court football game? Bring your friend and let's fight! Court has been reserved, just come!",
        price: 20,
        start_time: "2018-12-4 17:00:00 -0800",
        end_time: "2018-12-4 20:00:00 -0800",
        photo: "https://www.pressassociation.com/wp-content/uploads/2016/06/homepage-banner.jpg",
        province: "shanghai",
        city: "shanghai",
        district: "putuo",
        address: "qianshuiwan football court",
        capacity: 22,
        level: "middle"
      }

    ]

  }
})
