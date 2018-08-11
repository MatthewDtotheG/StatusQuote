export const pressStartGame =  {
    type: 'PRESS_START',
    payload: true
  }

export const sendVideo = (video) => {
  return {
    type: 'SEND_VIDEO',
    payload: video
  }
}

export const updatePlayer1 = {
  type: 'UPDATE_PLAYER1',
  payload: 1
}

export const updatePlayer2 = {
  type: 'UPDATE_PLAYER2',
  payload: 1
}
