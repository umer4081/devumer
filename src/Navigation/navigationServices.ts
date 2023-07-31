import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
export const _navigator: any = createNavigationContainerRef();

function navigate(routeName: any, params: any) {
  _navigator.navigate(routeName, params);
  return;
}

function goBack() {
  _navigator.dispatch(StackActions.pop());
}
function resetNavigation() {
  const resetAction = StackActions.popToTop();
  _navigator.dispatch(resetAction);
}

export default {
  navigate,
  resetNavigation,
  goBack,
};
