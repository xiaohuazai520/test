// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      mycolor:"blue",
      msg:'记录你和我  小衡，我爱你',
      img:'/images/aa.jpg',
      arr:['a','b','c','d'],
      list:[{
        name:'小华仔',
        age:23
        },
        {
        name:'小衡仔',
        age:18
        }
      ],
      isLogin:false,
      count:0,
  },
  onTapHandler:function(){
    //this.data.count++;
    this.setData({
      count:this.data.count+1
    });
  },
  onTapBoxHandler:function(event){
    console.log('box 点击');
    console.log(event);
    console.log(event.target.dataset.id);
  },
  onTapChildHandler:function(){
    console.log('child 点击');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})