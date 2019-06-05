export class Toggle {
  // New toggle instance
  constructor (options) {
    // Configure component
    this.config = Object.assign({
      attr: 'data-toggle',
      toggleContainer: '.toggle',
      toggleClass: 'active',
      onToggle: (btn, target, isToggled) => {},
    }, options)

    // Initialize component
    this.init()

    return this
  }

  // Initialize component
  init () {
    // Click listener
    document.addEventListener('click', e => this.toggle(e))
  }

  /**
   * Toggle a target element
   * @param {MouseEvent} e - Click event
   */
  toggle (e) {
    // Not a toggle button
    if (!e.target.matches(`[${this.config.attr}], [${this.config.attr}] *`)) return

    // Prevent default click
    e.preventDefault()

    // Get the button
    const btn = e.target.closest(`[${this.config.attr}]`)

    // Get the toggle target
    const target = btn.closest(this.config.toggleContainer).querySelector(btn.getAttribute(this.config.attr))

    // Toggle the target
    target.classList.toggle(this.config.toggleClass)

    // Is toggled?
    const isToggled = target.classList.contains(this.config.toggleClass)

    // Fire onToggle event
    this.config.onToggle(btn, target, isToggled)
  }
}
