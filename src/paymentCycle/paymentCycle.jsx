import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/template/tabs/tabs'
import TabsHeader from '../common/template/tabs/tabsHeader'
import TabsContent from '../common/template/tabs/tabsContent'
import TabHeader from '../common/template/tabs/tabHeader'
import TabContent from '../common/template/tabs/tabContent'
import { selectTab, showTabs } from '../common/template/tabs/tabActions'
import { init, create, update, remove } from './paymentCycleActions'

import List from './paymentCycleList'
import Form from './paymentCycleForm'

class PaymentCycle extends Component {
    
    componentWillMount(){
        this.props.init()
    }

    render(){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar'  icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />                     
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} 
                                    submitClass='primary' submitLabel='Incluir'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} 
                                    submitClass='info' submitLabel='Atualizar'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true} 
                                    submitClass='danger' submitLabel='Excluir'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove }, dispatch) 
export default connect(null, mapDispatchToProps)(PaymentCycle)