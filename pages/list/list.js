const app = getApp()
Page({


  data: {
    sports: [],
    inputShowed: false,
    inputVal: "",
    date: "Date",
    region: ["Prov.","City","Dist."],
    levels: ["All", "junior", "middle","expert"],
    categories: ['All', 'running', 'fitness', 'badminton', 'basketball', 'football', 'hiking', 'swimming', 'tennis'],
    customRegion: "All",
    customDate: "All",
  },
  setQuery: function () {
    const page = this;
    let title = page.data.inputVal || ''; 
    let category = page.data.category || '';
    if (page.data.category == "All") { category = '' };
    let level = page.data.levels[page.data.level] || '';
    if (page.data.levels[page.data.level] == "All") { level = "" };
    let start_time = page.data.date || ''; 
    if (page.data.date == "Date" || page.data.date == "ALL" ) {start_time = ""};
    let province = page.data.province || ''; 
    if (page.data.province == "All") { province = "" };
    let city = page.data.city || ''; 
    if (page.data.city == "All") { city = "" };
    let district = page.data.district || ''; 
    if (page.data.district == "All") { district = "" };
    let query = `query[title]=${title}&query[category]=${category}&query[level]=${level}&query[start_time]=${start_time}&query[province]=${province}&query[city]=${city}&query[district]=${district}`;
    page.setData({query})
  },

  getQuery: function () {
    let page = this;
    page.setQuery();
    wx.request({
      url: app.globalData.url + '/query?' + page.data.query,
      // url: 'http://localhost:3000/api/v1/query?' + page.data.query,
      success(res) {
        console.log(123, res)
        page.setData({ sports: res.data.sports.reverse() })
      }
    })
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });

  },
  hideInput: function () {
    let page = this;
    page.setData({
      inputVal: "",
      inputShowed: false
    });
    page.getQuery()
  },
  clearInput: function () {
    let page = this;
    page.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    let page = this
    page.setData({
      inputVal: e.detail.value
    });
    page.getQuery();
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    console.log(111,page)
    wx.request({
      url: app.globalData.url + '/sports',
    success(res){
      console.log(122,res)
      page.setData({sports: res.data.sports.reverse()});
      wx.stopPullDownRefresh()
    }
    })
  },

  showMap: function() {
      wx.navigateTo({
        url: '/pages/map/map'
      });
  },

  newSport: function(e) {
    wx.redirectTo({
      url: '/pages/create/create',
    })
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
      url: `../show/show?id=${e.currentTarget.dataset.id}`,
    });
  },

  bindDateChange: function (e) {
    let page = this;
    console.log('picker发送选择改变，携带值为', e.detail.value);
    page.setData({
      date: e.detail.value
    });
    page.getQuery();

  },
  bindRegionChange: function (e) {
    let page = this;
    console.log('picker发送选择改变，携带值为', e.detail.value);
    page.setData({
      region: e.detail.value,
      province: e.detail.value[0],
      city: e.detail.value[1],
      district: e.detail.value[2],
    });
    page.getQuery()
  },
  bindPickerChange: function (e) {
    let page = this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    page.setData({
      level: e.detail.value
    });
    page.getQuery()

  },
  bindPickerChange1: function (e) {
    let page = this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    page.setData({
      category: page.data.categories[e.detail.value]
    });
    page.getQuery()

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    this.onLoad();
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