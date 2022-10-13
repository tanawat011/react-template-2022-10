import type * as Firebase from 'helpers/firebase'

const firebase = jest.createMockFromModule<typeof Firebase>('helpers/firebase')

module.exports = firebase
