let brickCount = 0;

function build(brickAmount) {
    const middleColumn = document.querySelector("#middle-column");
    for (let i = 1; i <= brickAmount; i++) {
        const div = document.createElement("div");
        div.id = `brick-${i}`;
        div.classList.add("brick");
        if (i === Math.floor(brickAmount / 2) + 1) {
            div.dataset.foundation = true;
        }
        const interval = setInterval(() => {
            middleColumn.appendChild(div);
            brickCount++;
            if (brickCount === brickAmount) {
                clearInterval(interval);
            }
        }, 100);
    }
}

function repair(...brickIds) {
    for (let brickId of brickIds) {
        const brick = document.querySelector(`#${brickId}`);
        if (brick.dataset.foundation) {
            brick.dataset.repaired = "in progress";
        } else {
            brick.dataset.repaired = true;
        }
    }
}

function destroy() {
    const lastBrick = document.querySelector(`#brick-${brickCount}`);
    if (lastBrick) {
        lastBrick.parentNode.removeChild(lastBrick);
        brickCount--;
    }
}

build(30);
