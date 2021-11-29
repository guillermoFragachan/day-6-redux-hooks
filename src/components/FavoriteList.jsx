import React, { useState } from "react";
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

import Button from "react-bootstrap/Button";
// import { removeFromFavorite } from "../actions";



// const mapStateToProps = (state) => ({
//   favorites: state.favorites.content

// })

// const mapDispatchToProps = (dispatch) => ({
//   removeFavs: function (jobIndex) {
//     dispatch(removeFromFavorite(jobIndex))
//   }
// })



function FavoriteList(){

 
const favorites = useSelector(state=> state.favorites.content )

    return(
        <>
        { favorites.length > 0 &&
        favorites.map((e)=>{
           return <p>{e.e.company_name} 
           
           <Button
           onClick={(e)=>{

           }}
           >remove</Button> 
           </p>
            

          
        })
          
        }
        
        {
          favorites.length > 0 &&
          <p>{favorites[favorites.length-1].e.company_name}</p>
          // console.log(favorites[0].e.company_name)

        }
         
       
        </>
    )

}


// const connection = connect(mapStateToProps, mapDispatchToProps)
// export default connection(FavoriteList)
export default FavoriteList