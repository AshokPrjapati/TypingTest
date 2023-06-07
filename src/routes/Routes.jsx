import { Routes as AllRoutes, Route } from 'react-router-dom'
import Typing from '../pages/Typing'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

const Routes = () => {
    return (
        <>
            <AllRoutes>
                <Route path="/" element={<Typing />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </AllRoutes>
        </>
    )
}

export default Routes