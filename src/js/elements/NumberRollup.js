export default class NumberRollup extends HTMLElement {
  constructor() {
    super()
    this.displayNumber = this.displayNumber.bind(this)
  }

  connectedCallback() {
    const start = parseInt(this.getAttribute('start'))
    const end = parseInt(this.getAttribute('end'))
    const duration = parseInt(this.getAttribute('duration'))

    let current = start
    let increment = end > start? 1 : -1

    this.timer = setInterval(() => {
      current += increment
      this.displayNumber(current)
      if (current === end) {
        clearInterval(this.timer)
      }
    }, Math.abs(Math.floor(duration / (end - start))))

    this.displayNumber(start)
  }

  disconnectedCallback () {
    clearInterval(this.timer)
  }

  displayNumber(number) {
    this.innerText = number.toLocaleString()

    if (this.getAttribute('postfix')) {
      this.innerText += this.getAttribute('postfix')
    }
  }
}
