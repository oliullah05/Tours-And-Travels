import express from "express"
import { userRoutes } from "./user.route"
import { tourRoutes } from "./tour.route"
import { reviewRoutes } from "./review.route"

const globalRoute = express.Router()



const routes = [
{
path:"/users",
route:userRoutes
},
{
path:"/tours",
route:tourRoutes
},
{
path:"/reviews",
route:reviewRoutes
}


]

routes.forEach((routeObject)=>globalRoute.use(routeObject.path,routeObject.route))





export default globalRoute;