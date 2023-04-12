let brickCount = 0;

function build(brickAmount) {
    const tower = document.querySelector('.tower');
    const middleColumn = document.querySelector('.column.middle');
  
    for (let i = 1; i <= brickAmount; i++) {
        const brick = document.createElement('div');
        brick.classList.add('brick');
        brick.id = `brick-${i}`;
        brickCount++;
        if (i % 3 === 2) {
            brick.dataset.foundation = true;
            middleColumn.appendChild(brick);
        } else {
            tower.appendChild(brick);
        }
    setTimeout(() => brick.classList.add('built'), i * 100);
    }
}

function repair(...ids) {
    for (const id of ids) {
        const brick = document.getElementById(id);
        if (brick.dataset.foundation === 'true') {
            brick.dataset.repaired = 'in progress';
        } else {
            brick.dataset.repaired = true;
        }
    }
}

function destroy() {
    const tower = document.querySelector('.tower');
    const lastBrick = tower.lastChild;
    if (lastBrick) {
        lastBrick.remove();
        brickCount--;
    }
}
