import "../index.css";
import axios from "axios";

export const filterPaginationData = async ({ create_new_arr = false , arr,data,page,countRoute,data_to_send={ }}) =>{

    let obj;
    if(arr != null && !create_new_arr){
        obj={ ...state,results: [ ...state.results,...data],page : page }
    }else{

        let serverURL = "https://animimic-server-6.onrender.com"
        await axios.post(serverURL + countRoute, data_to_send)
        .then(({data : {totalDocs } }) => {

            obj= {results:data,page:1,totalDocs }
        })
        .catch(err => {
            console.log(err)
        })
    }
    return obj;
}
