import React from 'react'
import './MainComponent.scss'
import { connect } from 'react-redux'
import { homePageAction } from '../../store/HomePage/action'
import { BodyComponent } from '../../Molecules/BodyComponent'
import { cartAction } from '../../store/Cart/action'
import { TitleComponent } from '../../Atoms/Title'
import {message} from 'antd'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartData: [],
            filterData: ["All Products"],
            shortlistData: 'All Products',
            tagItems: {},
        }
    }
    componentDidMount() {
        this.props.getData()

    }

    componentDidUpdate() {
        console.log(this.props.shopData, this.state.cartData, 'fvdfds')
        if (this.state.cartData.length < 1) {
            this.setState(prevState => {
                let newData = prevState.filterData
                let data = this.props.shopData
                let tagItems = { "All Products": data.length }
                data.map(datum => {
                    if (!newData.includes(datum.tag)) {
                        newData.push(datum.tag)
                        tagItems[datum.tag] = 0
                    }
                })
                data.map(datum => tagItems[datum.tag] += 1)
                data.sort((a, b) => b.price - a.price)
                return { filterData: newData, cartData: data, tagItems }
            })
        }
    }

    sortBy(value) {
        this.setState(prevState => {
            let data = prevState.cartData
            if (value === 'low_to_high')
                data.sort((a, b) => a.price - b.price)
            if (value === 'hign_to_low')
                data.sort((a, b) => b.price - a.price)
            return { cartData: data }
        })
    }

    render() {
        console.log(this.props.shopData,'ddsfdsfdsds')
        return (
            <div className="main_container">
                <TitleComponent filterData={this.state.filterData}
                    sendFilteredData={(data) => {
                        this.setState({ shortlistData: data })
                    }} sortBy={(value) => this.sortBy(value)}

                    productsDispaly={{ title: this.state.shortlistData, count: this.state.tagItems[this.state.shortlistData] }}

                />
                <BodyComponent state={this.state}
                    sendSelectedObjectToParent={(data) => {
                        this.props.sendCartData(data)
                        message.success('Item Added to Cart');
                        }}
                />

            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state.HomePageReducer,
    ...state.CartReducer
})
const mapDispatchToProps = ({
    getData: homePageAction.getData,
    sendCartData: cartAction.storeCartdata
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
