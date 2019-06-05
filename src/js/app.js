import { Toggle } from './toggle'

// Toggle buttons
const toggleBtns = new Toggle({
  onToggle: (btn, target, isToggled) => {
    btn.textContent = isToggled ? '➖' : '➕'
  },
})
