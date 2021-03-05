import React,{useState} from 'react'
import {  Select } from 'antd'
const { Option } = Select;



export function TitleComponent({filterData,productsDispaly,sendFilteredData = ()=>{},sortBy = ()=>{}}) {
  const [colorChange,handleColorChange] = useState()
  const [initialFilterData,handleInitialData] = useState(0)
  const {title,count} = productsDispaly
  return (
    <div className="title_comp">
      <div className="anchor_tag">
        <a href="/" className="anchor" >Home /  </a>
        <a href="/" className="anchor">Clothing /</a>
        <a href="/" className="anchor">Mens Clothing / </a>
        <a href="/" className="anchor bold">All Mens Clothing</a>
      </div>
      <div class="products">{title[0].toUpperCase() + title.slice(1)}<span>({count} Products)</span> </div>
      <div class = "filter_sort_sec">
      <div className="filter_section">
        <div className="filter"> Filters:</div>
        {filterData.map((button,i)=>{
          const style = {
            color:'black',
            border:'0.5px solid black'
          }
          return(
        <div className="filter_buttons" >
          <button style = {colorChange === i||initialFilterData === i ? style : {}}
          onClick = {()=>{
            handleInitialData()
            sendFilteredData(button)
            handleColorChange(i)
            }}>{button[0].toUpperCase() + button.slice(1)}</button>
        </div>
        )})}
      </div>
      <div className = "sort_Sec_main">
      <div className = "sort_Sec">
        Sort By:
          <Select  defaultValue = "hign_to_low" className = "selcte_Sec"  onSelect = {value=>sortBy(value)}>
            {/* <Option value="popularity">Popularity</Option> */}
            <Option value="hign_to_low">Price High To Low</Option>
            <Option value="low_to_high" > Price Low To High</Option>
          </Select>
      </div>
      </div>
      </div>
    </div>
  )
}