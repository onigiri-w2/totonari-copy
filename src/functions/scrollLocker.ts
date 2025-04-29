export class HtmlBodyScrollLocker {
  private scrollY: number = 0;
  lock() {
    this.scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${this.scrollY}px`
    document.body.style.width = '100%'
  }

  unlock() {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    window.scrollTo(0, this.scrollY)
  }
}


