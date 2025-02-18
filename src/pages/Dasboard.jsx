import { useEffect, useState } from "react"
import { getprofile } from "../redux/UserSlice";


const Dasboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((root) => root?.user?.data);
    const {loading, setloading} = useState(true);
    useEffect(() => {
        let token = localStorage.getItem("token")(getprofile(token));
        console.log(token);
    })

    useEffect(() => {
        if(user.load && loading) return
        
    },[user])
    if(loading) return <h1>Loading...</h1>
  return (
    <div className="container">
        <div className="card">
            <div className="card-header7">
                <h1>Dasboard</h1>
            </div>
            <div className="card-body">
                <h1> </h1>
            </div>
        </div>
    </div>
  )
}

export default Dasboard
