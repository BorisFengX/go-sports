const app = getApp()
Page({


  data: {
    sports: [],
    inputShowed: false,
    inputVal: ""
    // sports: [
    //   {
    //     "id":1,
    //     "title":"Boxing basic",
    //     "rating_users":5,
    //     "photo":"/images/cover1.jpg"
    //   },
    //   {
    //     "id": 2,
    //     "title": "Tennismatch",
    //     "rating_users": 7,
    //     "photo":"/images/cover2.jpg"
    //   },
    //   {
    //     "id": 3,
    //     "title": "Balanceexercise",
    //     "rating_users": 5,
    //     "photo": "/images/cover3.jpeg"
    //   },
    //   {
    //     "id": 4,
    //     "name": "Running match",
    //     "rating_users": 10,
    //     "cover": "/images/cover4.png"
    //   },
    // ]

  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
     this.setData(app.globalData)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
  
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },
  showSport: function (e) {
    wx.navigateTo({
      url: `../show/show?id=${e.target.dataset.id}`,
    });
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})