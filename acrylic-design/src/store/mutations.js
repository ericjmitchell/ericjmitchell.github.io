import imagesJson from './images.json'

export const state = {
  dimages: imagesJson.reverse() || '[]',
  imageWidth: 720
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
  },

  setImageWidth (state, { width }) {
    state.imageWidth = width
  }
}
