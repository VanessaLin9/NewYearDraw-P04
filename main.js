//定義遊戲狀態
const GAME_STATE ={
  ShowPrizeAwaits: "ShowPrizeAwaits", //等待秀獎品
  DrawLotsAwaits: "DrawLotsAwaits", //等待抽獎
  ShowWinner: "ShowWinner", //增加得獎清單
  GameFinished: "GameFinished", //完成抽獎
}
//獎品 & 參與者
 const prize = [
  {"id":0,"name":"擠檸檬器","pictureURL":"https://i5.walmartimages.com/asr/b90ed4e5-d679-402c-ad70-771e0d13660a.e9a7becb3ab1ba138340d6a51148d57c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"},{"id":1,"name":"Amazon禮物卡$15","pictureURL":"https://gamecardsdirect.com/content/picture/23005/amazon-gift-card-15-dollar.jpg"},{"id":2,"name":"Amazon禮物卡$15","pictureURL":"https://gamecardsdirect.com/content/picture/23005/amazon-gift-card-15-dollar.jpg"},{"id":3,"name":"Amazon禮物卡$15","pictureURL":"https://gamecardsdirect.com/content/picture/23005/amazon-gift-card-15-dollar.jpg"},{"id":4,"name":"氣炸鍋","pictureURL":"https://slimages.macysassets.com/is/image/MCY/products/4/optimized/17998204_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp"},{"id":5,"name":"刀組","pictureURL":"https://slimages.macysassets.com/is/image/MCY/products/2/optimized/16146892_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp"},{"id":6,"name":"便當盒組","pictureURL":"https://m.media-amazon.com/images/I/81T0-lmYxPL._AC_SX522_.jpg"},{"id":7,"name":"果汁機","pictureURL":"https://slimages.macysassets.com/is/image/MCY/products/4/optimized/1786184_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp"},{"id":8,"name":"Brita水壺","pictureURL":"https://m.media-amazon.com/images/I/61glxd8kQ5L._AC_SX679_.jpg"},{"id":9,"name":"Chromecast","pictureURL":"https://m.media-amazon.com/images/I/81rOtfzI0QL._AC_SX679_.jpg"},{"id":10,"name":"鬆餅機1","pictureURL":"https://slimages.macysassets.com/is/image/MCY/products/1/optimized/18195521_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp"},{"id":11,"name":"鬆餅機2","pictureURL":"https://slimages.macysassets.com/is/image/MCY/products/8/optimized/19387718_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp"},{"id":12,"name":"加濕器","pictureURL":"https://m.media-amazon.com/images/I/910iTpyL4GL._AC_SX522_.jpg"},{"id":13,"name":"行車紀錄器","pictureURL":"https://m.media-amazon.com/images/I/712VvxKgVHL._AC_SL1500_.jpg"},{"id":14,"name":"Oral-B電動牙刷","pictureURL":"https://m.media-amazon.com/images/I/81NKdvBMbHL._AC_SX679_.jpg"},{"id":15,"name":"Chromecast w/ Google TV","pictureURL":"https://i5.walmartimages.com/asr/a4e2e013-1d85-4380-8ace-e9780b074d54.1151d7079111b6ad4d9ef4e334953193.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"},{"id":16,"name":"Insignia 32\" TV","pictureURL":"https://m.media-amazon.com/images/I/51IvQZbr4hL._AC_.jpg"}
]
const player = [
  {"id":0,"name":"UR_Father"},
  {"id":1,"name":"Tank"},
  {"id":2,"name":"BUF HOMBOY"},
  {"id":3,"name":"XfuIarNE"},
  {"id":4,"name":"vivian"},
  {"id":5,"name":"Hsuan"},
  {"id":6,"name":"Hs1uan"},
  {"id":7,"name":"Hsu3an"},
  {"id":8,"name":"Hs5u4an"},
  {"id":9,"name":"Hsu6an"},
  {"id":10,"name":"Hs7uan"},
  {"id":11,"name":"Hsdasuan"},
  {"id":13,"name":"Hs3dasuan"},
  {"id":14,"name":"H2sdasuan"},
  {"id":15,"name":"1suan"},
  {"id":16,"name":"999"},
  {"id":17,"name":"H99dasuan"},
]
const prizeBtn = document.querySelector('#prize-btn')
const drawBtn = document.querySelector('#draw-btn')
const decision = document.querySelector('.decision')
const prizeFig = document.querySelector('#fig')
const prizeName = document.querySelector('#prizeName')
const winnerName = document.querySelector('#winnerName')

//MVC架構

const view = {
  //和畫面有關的程式碼
  displayGift() {
    // 秀獎品
    prizeName.innerHTML = prize[0].name
    prizeFig.src = prize[0].pictureURL
    model.winnerIs[0].prize = prize[0].name
    console.log(model.winnerIs[0])
    drawBtn.removeAttribute("disabled")
  },
  drawLot() { 
    // 抽獎
    let playerNumber = player.length
    const winnerNumber = Math.floor(Math.random()*playerNumber)
    model.removeId = winnerNumber
    // 秀中獎者
    // console.log(winnerNumber)
    winnerName.innerHTML = player[winnerNumber].name
    model.winnerIs[0].winner = player[winnerNumber].name
    model.winnerIs[0].id = player[winnerNumber].id
    console.log(model.winnerIs[0])

    decision.style.display = 'flex'
  },
  addList() {
    console.log('confirm')  
  // 新增List
    const dataPanel = document.querySelector('#data-panel')
    let htmlContent = document.createElement('tr')
    htmlContent.innerHTML= `
      <td><i class="fas fa-gift"></i></td>
      <td>${model.winnerIs[0].prize}</td>
      <td>${model.winnerIs[0].winner}</td>
    `
    dataPanel.appendChild(htmlContent)
    
    
  
  // 移除抽過的人 
    // console.log('要剪掉的是', model.removeId)
    player.splice(model.removeId,1)
    // console.log('剪完後的名單', player)

  // 清除畫面
  decision.style.display = 'none'
  winnerName.innerHTML = "誰中獎!?"
  prizeName.innerHTML = ''
  prizeFig.src = "https://static.careerengine.us/api/aov2/https%3A_%7C__%7C_mmbiz.qpic.cn_%7C_mmbiz_gif_%7C_Fr2k3DYvg4cvChc1CjgvLtrmoYjhibAB42gmhAuUDiaVhfxAzZU7oiaACM2UuxuWOmqexJG49mTk1c8PFvsbBv27g_%7C_640%3Fwx_fmt%3Dgif"
  }
}

const controller = {
  //和流程有關的程式碼
  currentState: GAME_STATE.ShowPrizeAwaits,
  dispatchEvent(control){
  switch(this.currentState) {
    case GAME_STATE.ShowPrizeAwaits:
      if(control.id === "prize-btn") {
        view.displayGift()
      }

      this.currentState = GAME_STATE.DrawLotsAwaits
      break
    
    case GAME_STATE.DrawLotsAwaits:
      if (control.id === "draw-btn") {
        drawBtn.setAttribute("disabled","disabled")
        view.drawLot()
      }
      this.currentState = GAME_STATE.ShowWinner
      break

    case GAME_STATE.ShowWinner:
      if (control.id === "redraw") {
        console.log('redraw')
        drawBtn.removeAttribute("disabled")
        this.currentState = GAME_STATE.DrawLotsAwaits
        break
      } else if (control.id === "confirm") {
          view.addList()

        // 儲存清單
          model.winnerList.push(model.winnerIs[0])
          localStorage.setItem('winnerList',JSON.stringify(model.winnerList))
          
        // 移除已中獎人
          prize.shift()
          model.winnerIs = [{}]
          if (prize.length === 0){
            this.currentState = GAME_STATE.GameFinished
            console.log('抽完啦')
            console.log('清單', model.winnerList)
            return
          }
        this.currentState = GAME_STATE.ShowPrizeAwaits
        break
      }
      break
  }},
}

const model ={
  //和資料有關的程式碼
  removePlayer: '', 
  winnerList: [],
  winnerIs:[{}]
}

document.querySelectorAll('.control').forEach(control => {
  control.addEventListener('click', event => {
  controller.dispatchEvent(control)
  })
})

  
