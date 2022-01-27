//定義遊戲狀態
const GAME_STATE ={
  ShowPrizeAwaits: "ShowPrizeAwaits", //等待秀獎品
  DrawLotsAwaits: "DrawLotsAwaits", //等待抽獎
  ShowWinner: "ShowWinner", //增加得獎清單
  GameFinished: "GameFinished", //完成抽獎
}

//MVC架構

const view = {
  //和畫面有關的程式碼

}

const controller = {
  //和流程有關的程式碼
  currentState: GAME_STATE.ShowPrizeAwaits,
  generatePrize() {}
}

const model ={
  //和資料有關的程式碼

}