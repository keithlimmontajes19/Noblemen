import { combineReducers } from 'redux';
import authentication from './authentication/reducer';
import alert from './alert/reducer';
import onboarding from './onboarding/reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  onboarding
});

export default rootReducer;