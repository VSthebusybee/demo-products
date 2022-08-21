import {useState,useEffect} from 'react'

function Products()
{
    let [items,setItems]=useState([]);

    useEffect(function(){
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response);
            setItems(response);
        })

    },[]);

    return(
        <div className='main-container'>
            {
                items.map((item,index)=>{
                    return(
                        <div className='item-container'>
                            <div className='items'>
                                <p>{item.id}</p>                   
                            </div>
                            <div className='items'>
                                <p>{item.title}</p>                   
                            </div>
                            <div className='items'>
                                <p>{item.price}</p>                   
                            </div>
                            <div className='items'>
                                <p>{item.description}</p>                   
                            </div>
                            <div className='items'>
                                <p>{item.category}</p>                   
                            </div>
                            <div className='items'>
                                <img src={item.image} alt={item.title}/>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default Products;