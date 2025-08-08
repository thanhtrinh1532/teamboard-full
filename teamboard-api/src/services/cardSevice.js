/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
import { cardModel } from '~/models/cardModel'
import { columnModel } from '~/models/columnModel'

const createNew = async (reqBody) =>{
  try {
    const newcard = {
      ...reqBody
    }
    const createdCard = await cardModel.createNew(newcard)
    const getNewCard = await cardModel.findOneById(createdCard.insertedId)

    if (getNewCard) {
      await columnModel.pushCardOrderIds(getNewCard)
    }
    return getNewCard
  } catch (error) {
    throw error
  }
}

export const cardService = {
  createNew
}