const initialStore = {
  startGame: false,
  
}

export const reducer = (store = initialStore, action) => {
  switch(action.type){
    case 'PRESS_START':
      return {...store, startGame: action.payload}
    default:
      return store
  }
}
