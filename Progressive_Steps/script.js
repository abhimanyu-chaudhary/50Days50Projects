const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const numbers = document.querySelectorAll('.number');
let currentActive = 1;

function update() {
    numbers.forEach((circle, idx) => circle.classList.toggle('active', idx < currentActive));

    const progressPercentage = ((currentActive - 1) / (numbers.length - 1)) * 100;
    progress.style.width = `${progressPercentage}%`;

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === numbers.length;
}

next.addEventListener('click', () => {
    currentActive = Math.min(currentActive + 1, numbers.length);
    update();
});

prev.addEventListener('click', () => {
    currentActive = Math.max(currentActive - 1, 1);
    update();
});

update();
