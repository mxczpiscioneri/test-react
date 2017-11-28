import { times } from 'lodash'
import { name } from 'faker'

export const toDoMock = {
  fetching: false,
  received: true,
  content: {
    name: name.findName()
  }
}

export const toDosMock = {
  fetching: false,
  received: true,
  content: times(4, i => ({
    name: name.findName()
  }))
}