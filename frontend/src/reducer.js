const initialStore = {
  startGame: false,
  video: {},
  player1: 0,
  player2: 0
}

export const reducer = (store = initialStore, action) => {
  switch(action.type){
    case 'PRESS_START':
      return {...store, startGame: action.payload}
    case 'SEND_VIDEO':
      return {...store, video: action.payload}
    case 'UPDATE_PLAYER1':
      return {...store, player1: store.player1 + action.payload}
    case 'UPDATE_PLAYER2':
      return {...store, player2: store.player2 + action.payload}
    default:
      return store
  }
}
