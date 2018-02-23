import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './paymentCycleActions'

class PaymentCycleList extends Component {

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(pc => (
            <tr key={ pc._id }>
                <td>{ pc.month }</td>
                <td>{ pc.day }</td>
                <td>{ pc.year }</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(pc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(pc)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mês</th>
                            <th>Dia</th>
                            <th>Ano</th>
                            <th className='table-action'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderRows() }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.paymentCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate,showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PaymentCycleList)