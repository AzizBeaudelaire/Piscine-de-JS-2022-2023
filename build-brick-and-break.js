// build function
function build(amount) {
    let id = 1
    const columns = document.querySelectorAll('.column')
  
    // create brick div and add to column at regular interval
    const interval = setInterval(() => {
        if (id > amount) {
            clearInterval(interval)
            return
        }
        const brick = document.createElement('div')
        brick.id = `brick-${id}`
        brick.classList.add('brick')
        if (id % 3 === 2) {
            brick.setAttribute('data-foundation', true)
        }
        columns[Math.floor(Math.random() * 3)].appendChild(brick)
        id++
    }, 100)
}
  
  // repair function
function repair(...ids) {
    ids.forEach(id => {
        const brick = document.getElementById(id)
        if (brick.parentNode.classList.contains('middle')) {
            brick.setAttribute('data-repaired', 'in progress')
        } else {
            brick.setAttribute('data-repaired', true)
        }
    })
}
  
  // destroy function
function destroy() {
    const bricks = document.querySelectorAll('.brick')
    if (bricks.length > 0) {
        const lastBrick = bricks[bricks.length - 1]
        lastBrick.parentNode.removeChild(lastBrick)
    }
}
  
  // click handlers
document.querySelector('.hammer').addEventListener('click', () => {
    const ids = document.querySelectorAll('.brick[data-repaired="false"], .brick[data-repaired="in progress"]')
    repair(...Array.from(ids).map(brick => brick.id))
})
  
document.querySelector('.bomb').addEventListener('click', () => {
    destroy()
})
  
  // build 10 bricks
build(10);
  
  