import AppStateClass from './app.state'

export const AppState = AppStateClass

export default {
  AppState,
}

// 给服务端渲染用的
export const createStoreMap = () => {
  return {
    appState: new AppState(),
  }
}
