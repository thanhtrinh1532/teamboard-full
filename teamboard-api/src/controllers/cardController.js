/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import { StatusCodes } from 'http-status-codes'
import { cardService } from '~/services/cardSevice'

const createNew = async (req, res, next) => {
  try {
    const createdCard = await cardService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(createdCard)
  } catch (error) {next(error)}
}

export const cardController = {
  createNew
}