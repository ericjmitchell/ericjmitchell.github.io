import imagesJson from './images.json'

export const state = {
  dimages: imagesJson.reverse() || '[]'
}

export const mutations = {
  toggleVisibility (state, { dimage }) {
    // let dimage = state.dimages.find(function (item) {return item.imageId === imageId});
    if (dimage) {
      dimage.visibility = !dimage.visibility
    }
  },

  toggleAll (state, { visibility }) {
    state.dimages.forEach((todo) => {
      todo.visibility = visibility
    })
  },

  getDImage (state, { imageId }) {
    return state.dimages.find(function (item) { return item.imageId === imageId })
  }
}
