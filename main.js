//定義遊戲狀態
const GAME_STATE ={
  ShowPrizeAwaits: "ShowPrizeAwaits", //等待秀獎品
  DrawLotsAwaits: "DrawLotsAwaits", //等待抽獎
  ShowWinner: "ShowWinner", //增加得獎清單
  GameFinished: "GameFinished", //完成抽獎
}
//獎品 & 參與者
 const prize = [
    {
      "name": "膠囊咖啡機",
      "pictureURL": "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/20431034_fpx.tif?op_sharpen=1&amp;wid=700&amp;hei=855&amp;fit=fit,1" 
    },
    {
      "name": "全套鍋具組",
      "pictureURL": "https://static.careerengine.us/api/aov2/https%3A_%7C__%7C_mmbiz.qpic.cn_%7C_mmbiz_gif_%7C_Fr2k3DYvg4cvChc1CjgvLtrmoYjhibAB42gmhAuUDiaVhfxAzZU7oiaACM2UuxuWOmqexJG49mTk1c8PFvsbBv27g_%7C_640%3Fwx_fmt%3Dgif" 
    }
  ]
const player = [
  {"id":0,"name":"小智"},
  {"id":1,"name":"Tank"},
  {"id":2,"name":"vanessa"},
  {"id":3,"name":"jason"},
  {"id":4,"name":"vivian"},
  {"id":5,"name":"edwin"}
]
const prizeBtn = document.querySelector('#prize-btn')
const drawBtn = document.querySelector('#draw-btn')
const decision = document.querySelector('.decision')
const prizeFig = document.querySelector('#fig')
const prizeName = document.querySelector('#prizeName')

//MVC架構

const view = {
  //和畫面有關的程式碼
  displayGift() {
    
    prizeName.innerHTML = prize[0].name
    prizeFig.src = prize[0].pictureURL
    model.winnerIs[0].prize = prize[0].name
    console.log(model.winnerIs[0])
  },
  drawLot() { 
    const winnerName = document.querySelector('#winnerName')
    let playerNumber = player.length
    const winnerNumber = Math.floor(Math.random()*playerNumber)
    model.removeId = winnerNumber
    let htmlContent = ''

    console.log(winnerNumber)
    winnerName.innerHTML = player[winnerNumber].name
    model.winnerIs[0].winner = player[winnerNumber].name
    model.winnerIs[0].id = player[winnerNumber].id
    console.log(model.winnerIs[0])
    htmlContent += `
      <button type="button" id="redraw" class="btn btn-dark m-2">重抽</button>
      <button type="button" id="confirm" class="btn btn-warning m-2">確認</button>
    `
    decision.innerHTML = htmlContent
  },
  addList() {
    console.log('confirm')
    const dataPanel = document.querySelector('#data-panel')
    let htmlContent = document.createElement('tr')
    htmlContent.innerHTML= `
      <td><i class="fas fa-gift"></i></td>
      <td>${model.winnerIs[0].prize}</td>
      <td>${model.winnerIs[0].winner}</td>
    `
    dataPanel.appendChild(htmlContent)
    decision.innerHTML =''

    console.log('要剪掉的是', model.removeId)
    player.splice(model.removeId,1)
    console.log('剪完後的名單', player)

    drawBtn.removeAttribute("disabled")
  }
}

const controller = {
  //和流程有關的程式碼
  currentState: GAME_STATE.ShowPrizeAwaits,
  dispatchEvent(){
  switch(this.currentState) {
    case GAME_STATE.ShowPrizeAwaits:
      prizeBtn.addEventListener('click', event => {view.displayGift()})
      this.currentState = GAME_STATE.DrawLotsAwaits
      break
    
    case GAME_STATE.DrawLotsAwaits:
      drawBtn.addEventListener('click', event => {
        drawBtn.setAttribute("disabled","disabled")
        view.drawLot()
        console.log('抽幾次?')
      })
      // console.log('有到這嗎?')
      this.currentState = GAME_STATE.ShowWinner
      break

    case GAME_STATE.ShowWinner:
      decision.addEventListener('click', event => {
        if(event.target.id === "redraw") {
          console.log('redraw')
          drawBtn.removeAttribute("disabled")
        } else {
          view.addList()
          model.winnerList.push(model.winnerIs[0])
          prize.shift()
          model.winnerIs = [{}]
          if (prize.length === 0){
            this.currentState = GAME_STATE.GameFinished
            console.log('抽完啦')
            console.log('清單', model.winnerList)
            return
          }
        this.currentState = GAME_STATE.ShowPrizeAwaits
        }
      
      })
  }},
}

const model ={
  //和資料有關的程式碼
  removePlayer: '', 
  winnerList: [],
  winnerIs:[{}]
}

// controller.dispatchEvent()

document.querySelector('#body').addEventListener('mouseover', event =>{
  controller.dispatchEvent()
})
