export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE'
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
export const GET_JOBS = 'GET_JOBS'



export const addToFavorite = (jobToAdd) => ({
  type: ADD_TO_FAVORITE,
  payload: jobToAdd, // this is going to be the book we intend to add to the FAVORITE
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
})

export const removeFromFavorite = (indexToRemove) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: indexToRemove,
})

/**
 * 
 *   const url = `https://strive-jobs-api.herokuapp.com/jobs?company=${q}&limit=10`
    const response = await fetch(url, {
        headers:{
            "Content-Type": "application/json"
        }
    })
    if(response.ok){
        const data = await response.json()
       

        setJobs(data.data)
        console.log(jobs)


    }
 * 
 * 
 */
export const getJobsAction = () => {
  return async (dispatch) => {
    
    try {
      const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10
      `)
      if (response.ok) {
        const data = await response.json()
        // now it's time do to the dispatch
        const array = data.data
        dispatch({
          type: GET_JOBS,
          payload: array,
        })
        console.log(array)

      }
        
        else {
        console.log('Houston, we got an error :(')
       
      }
    } catch (error) {
      console.log(error)
     
    }
  }
}