import eventBus from 'eventing-bus'

export default class Modal {
  static open (title, body) {
    eventBus.publish('consorcio.santander.openModal', {
      title,
      body
    })
  }

  static close (title, body) {
    eventBus.publish('consorcio.santander.closeModal', {
      title,
      body
    })
  }
}