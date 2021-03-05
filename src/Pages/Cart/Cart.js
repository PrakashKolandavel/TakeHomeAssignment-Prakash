import React from 'react'
import './cart.scss'
import { connect } from 'react-redux'
import { Card, message } from 'antd'
import { cartAction } from '../../store/Cart/action'

class CartComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartData: []
        }
    }
    cartAddSub(data, value) {
        let newData = data
        if (value === "S")
            newData.count -= 1
        if (value === "A")
            newData.count += 1
        const wholedata = this.state.cartData
        let index = undefined;
        wholedata.map((data, i) => {
            if (data.id === newData.id) {
                if (newData.count === 0) {
                    index = i
                }
                else {
                    data = newData
                }
            }
        })
        if (index !== undefined)
            wholedata.splice(index, 1)
        this.setState({ cartData: wholedata })

    }

    componentWillUnmount() {
        this.props.storeData(this.state.cartData)
    }
    static getDerivedStateFromProps(props, state) {
        if (state.cartData.length < 1) {
            state.cartData = props.cartData
        }
        return { state }
    }
    render() {
        return (
            <div className="cart_container">
                <div className="cart">Cart  </div>
                <div className="card_container">
                    {this.state.cartData.map(data => (
                        <Card className="card_head" >
                            <div className="card">
                                <div>
                                    <img src={data.image_src[0]} alt="image" />
                                </div>
                                <div className="conent_sec">
                                    <div className="vendor">{data.vendor}</div>
                                    <div className="name">{data.name}</div>
                                    {/* <div className = "size_count"> */}
                                    <div className="size">Size : <span >{String(data.options.value).toUpperCase()}</span></div>
                                    <div className="item_count">
                                        <button onClick={() => { this.cartAddSub(data, 'S') }}>-</button>
                                        <span>{data.count}</span>
                                        <button onClick={() => { this.cartAddSub(data, 'A') }}>+</button>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </Card>
                    ))}
                </div>
                <button className="check_out" onClick={() => {
                    message.warning('Cannot Perform this Operation now!');
                }}>Check Out</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state.CartReducer
})
const mapDispatchToProps = ({
    sendCartData: cartAction.storeCartdata,
    storeData: cartAction.getFromCart

})

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent)