import electron from './electron'

/**
 * 拖拽函数
 * @param el {HTMLElement | string}
 */
export function __Dragable(el: HTMLElement | string): void {
  if (typeof el === 'string') {
    el = document.querySelector(el) as HTMLElement
  }
  try {
    const drag = require('electron-drag')
    if (drag.supported) {
      drag(el)
    } else {
      doDraggableFallback(el)
    }
  } catch (ex) {
    doDraggableFallback(el)
  }

  /**
   * 拖拽辅助函数
   * @param el {HTMLElement} HTML节点
   */
  function doDraggableFallback(el: HTMLElement): void {
    // 方案二
    let dragging = false
    let mouseX = 0
    let mouseY = 0
    el.addEventListener('mousedown', e => {
      dragging = true
      const { pageX, pageY } = e
      mouseX = pageX
      mouseY = pageY
    })
    window.addEventListener('mouseup', () => {
      dragging = false
    })
    window.addEventListener('mousemove', (e: MouseEvent) => {
      if (dragging) {
        const { pageX, pageY } = e
        const win = electron.remote.getCurrentWindow()
        const pos = win.getPosition()
        pos[0] = pos[0] + pageX - mouseX
        pos[1] = pos[1] + pageY - mouseY
        win.setPosition(pos[0], pos[1], true)
      }
    })
  }
}
