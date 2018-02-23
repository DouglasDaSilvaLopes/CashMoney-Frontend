import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Input from '../common/template/form/input'
import { init } from './paymentCycleActions'
import ItemList from './itemList'
import Sumary from './sumary'

class PaymentCycleForm extends Component{

    calcularSumary(){
        const sum = (t, v) => t + v
        return{
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render(){
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calcularSumary()
        return(
            <form role='form' onSubmit={ handleSubmit }>
                <div className='box-body'>
                    <Field  name='month' component={Input} readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field  name='day' component={Input} readOnly={readOnly}
                        label='Dia' cols='12 4' placeholder='Informe o dia' />
                    <Field  name='year' component={Input} readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano'/>
                    <Sumary credits={sumOfCredits} debts={sumOfDebts} />    
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const paymentCycleForm = reduxForm({form:'PaymentCycleForm', destroyOnUnmount: false})(PaymentCycleForm)
const selector = formValueSelector('PaymentCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(paymentCycleForm)