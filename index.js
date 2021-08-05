const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),  
}

refs.start.addEventListener('click', () => { colorChanging.start()});
refs.stop.addEventListener('click', () => { colorChanging.stop()});

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorChanging = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            document.body.style.backgroundColor = `${colors[randomIntegerFromInterval(1, colors.length)]}`;
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    },
};
