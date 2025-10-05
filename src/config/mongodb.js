import { MongoClient, ServerApiVersion } from "mongodb"
import { env } from '~/config/environment'
let Database_Instance = null
const Mongo_Client_Instance = new MongoClient(env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})
export const CONNECT_DB = async () => {
    await Mongo_Client_Instance.connect()
    Database_Instance = Mongo_Client_Instance.db(env.DATABASE_NAME)
}
export const GET_DB = () => {
    if (!Database_Instance) throw new Error('Must connect database first!')
    return Database_Instance
}