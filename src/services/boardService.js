import ApiError from "~/utils/ApiError"
import { slugify } from '~/utils/formatters'
import { boardModel } from "~/models/boardModel"
const createNew = async (reqBody) => {
    try {
        const newBoard = {
            ...reqBody,
            slug: slugify(reqBody.title)
        }
        const createBoard = await boardModel.createNew(newBoard)
        console.log(createBoard)
        return createBoard
    } catch (error) {
        throw error
    }

}
export const boardService = { createNew }