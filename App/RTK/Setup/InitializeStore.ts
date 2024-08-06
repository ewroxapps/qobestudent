import CreateStore from './CreateStore';
import RootReducers from './RootReducer';

function InitializeStore() {
  let { reduxStore, persistor } = CreateStore();

  // @ts-ignore
  if (__DEV__ && module.hot) {
    // @ts-ignore
    module.hot.accept(() => {
      const nextRootReducer = RootReducers;
      reduxStore.replaceReducer(nextRootReducer);
    });
  }
  return { reduxStore, persistor };
}
export default InitializeStore;
