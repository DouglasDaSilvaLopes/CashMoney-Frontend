import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/template/tabs/tabActions'

const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList(){
    const request = axios.get(`${BASE_URL}/paymentCycle`)
    return {
        type: 'PAYMENT_CYCLE_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/paymentCycle/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            })
    }
}

export function showUpdate(paymentCycle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('PaymentCycleForm', paymentCycle)
    ]
}

export function showDelete(paymentCycle){
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('PaymentCycleForm', paymentCycle)
    ]
}

export function init(){
    return[
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('PaymentCycleForm', INITIAL_VALUES)
    ]
}