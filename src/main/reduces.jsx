import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashBoardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/template/tabs/tabReducer'
import PaymentCycleReducer from '../paymentCycle/paymentCycleReducer'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    tab: TabReducer,
    paymentCycle: PaymentCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer