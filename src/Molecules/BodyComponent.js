import React from 'react'
import { Row, Col } from 'antd'

export function BodyComponent({state={},sendSelectedObjectToParent=()=>{}}){
    const [sizeClicked,handleSizeClicked] = React.useState(undefined)
    const [objectSizeClicked,handleObject] = React.useState()
    const [storeSizeNew,handleStore] = React.useState()
    const [hideSize,handleHide] = React.useState()
    const style = {
        border:'0.5px solid black',
    }
return (
    <div className="body_container">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className = "row_data">
                        {state.cartData.map((newData,index) => {
                                let data = {}
                                if(state.shortlistData === 'All Products')
                                data = newData
                                else if(newData.tag === state.shortlistData)
                                data = newData

                                let storeSize = []
                                const sizeChart = {
                                    small :'S',
                                    medium:'M',
                                    large:'L',
                                    }
                            return (
                                data.name !== undefined ? 
                                <Col className="content_column" >
                                    {data.image_src.map(imgURL => (
                                        <div>
                                        <img src={imgURL} alt="Image" className="content_img" />
                                        <div className ="size" >
                                        <div style = { index === objectSizeClicked ? {display:'none'} : {}}>
                                            <div className = "select_size">Select Size</div>
                                            {data.options.map((size,i)=>{
                                                let value = sizeChart[size.value] !== undefined ?sizeChart[size.value]:size.value
                                                storeSize.push(value)

                                                if(value.includes('US'))
                                                    value = value.split('US')[1]
                                                return(
                                            <button className = "size_button" style = {i === sizeClicked&& index === objectSizeClicked ? style : {}} onClick = {()=>{
                                                handleSizeClicked(i)
                                                handleObject(index)
                                                const storeDataNew = {...data,options:size}
                                                handleStore(storeDataNew)
                                            }}>{value}</button>
                                                )
                                            })}
                                            </div>
                                             <div className = "add_to_cart" style = {{display:objectSizeClicked === index  ? "block" : 'none'}}>
                                            <button className = "cart_button" onClick = {()=>{
                                                handleObject()
                                                handleSizeClicked()
                                                sendSelectedObjectToParent(storeSizeNew)
                                            }}>ADD TO CART</button>
                                        </div>
                                            <div className = "size_chart">
                                                Sizes: {storeSize.map((si,i)=>(
                                                    <label>{si}{i+1 === storeSize.length ? "" : ","}</label>
                                                ))}
                                            </div>

                                            <div>
                                            <span className="content_bold">${data.price}</span>
                                            <del className="content_title margin_left">${data.compare_at_price}</del>
                                            <span className="discount">({(((data.compare_at_price - data.price) / data.compare_at_price) * 100).toFixed()}% OFF)</span>
                                        </div>

                                        </div>
                                       
                                        </div>
                                    ))}
                                    <div className="object_content_Sec">
                                        <div className="content_bold">{data.vendor}</div>
                                        <div className="content_title">{data.name}</div>
                                        <div>
                                            <span className="content_bold">${data.price}</span>
                                            <del className="content_title margin_left">${data.compare_at_price}</del>
                                            <span className="discount">({(((data.compare_at_price - data.price) / data.compare_at_price) * 100).toFixed()}% OFF)</span>
                                        </div>
                                    </div>
                                </Col> : null
                            )
                        })}

                    </Row>
                </div>

)}