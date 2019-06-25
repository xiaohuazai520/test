// pages/cloud/cloud.js
const db=wx.cloud.database()//初始化数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[]
  },
  insert:function(){
    /*db.collection('user').add({
      data:{
        name:'小华仔',
        age:23
      },
      success:res =>{
        console.log(res);
      },
      fail:err =>{
        console.log(err);
      }
    })*/
    db.collection('user').add({
      data:{
        name:'小衡仔',
        age:18
      }
    }).then(res =>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  },
  update:function(){
    db.collection('user').doc('c0a3987b5ce3a1ca02bcc2cf39f4fdeb').update({
      data:{
        age:19,
      },
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  search:function(){
    db.collection('user').where({
      name:'小华仔',
    }).get().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  delete:function(){
    db.collection('user').doc('c0a3987b5ce3a1ca02bcc2cf39f4fdeb')
    .remove()
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  },
  sum:function(){
    wx.cloud.callFunction({
      name:'sum',
      data:{
        a:2,
        b:3
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  getOpenId:function(){
    wx.cloud.callFunction({
      name:'login'
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });
  },
  batchDelete:function(){
    wx.cloud.callFunction({
      name:'batchDelete'
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.error(err);
    })
  },
  upload:function(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        wx.cloud.uploadFile({
          // 指定上传到的云路径
          cloudPath: new Date().getTime()+'.png',
          // 指定要上传的文件的小程序临时文件路径
          filePath: tempFilePaths[0],
          // 成功回调
          success: res => {
            console.log('上传成功', res.fileID)
            db.collection('image').add({
              data:{
                fileID: res.fileID
              }
            }).then(res => {
              console.log(res);
            }).catch(err => {
              console.log(err);
            })
          },
          fail:console.error
        })
      }
    })
  },
  getFile:function(){
    wx.cloud.callFunction({
      name:'login'
    }).then(res=>{
      db.collection('image').where({
        _openid:res.result.openid
      }).get().then(res2=>{
        console.log(res2);
        this.setData({
          images:res2.data
        })
      })
    })
  },
  downloadFile:function(event){
    wx.cloud.downloadFile({
      fileID: event.target.dataset.fileid
    }).then(res => {
      // get temp file path
      console.log(res.tempFilePath)
      //保存图片到手机相册
      wx.saveImageToPhotosAlbum({
        filePath:res.tempFilePath,
        success(res) { 
          wx.showToast({
            title: '保存成功',
          })
        }
      })
    }).catch(error => {
      // handle error
      console.error
    })
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