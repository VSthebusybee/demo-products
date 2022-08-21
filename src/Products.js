import './Products.css';
import {useState,useEffect} from 'react';


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
        <div >
            <div className='items-header'>
                <h1 className='heading'>This is FakeStore Products </h1>
                <h3 className='heading'><a href='https://fakestoreapi.com/products'>From FakeStoreAPI</a></h3>
            </div>
            <div className='main-container'>
            {
                items.map((item,index)=>{
                    return(
                        <div className='item-container' key={index}>
                            {/* <div className='items'>
                                <p>{item.id}</p>                   
                            </div> */}
                            <div className='items'>
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div className='items'>
                                <p className='title'>{item.title}</p>                   
                            </div>
                            <div className='items'>
                                <p className='price'>{item.price+' Rs'}</p>                   
                            </div>
                            <div className='items'>
                                <p className='description'>{item.description}</p>                   
                            </div>
                            <hr/>
                            <div className='items'>
                                <p className='category'>{item.category}</p>                   
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>

        </div>
    )

}

export default Products;