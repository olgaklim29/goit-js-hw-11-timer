class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = targetDate;
        this.idInterval = null;
    }

    start() {
        this.idInterval = setInterval(() => {
            this.updateTimer(this.getRefs());
        }, 1000);
    }

    getRefs() {
        const container = document.querySelector("#timer-1");
        const daysRef = container.querySelector('[data-value="days"]');
        const hoursRef = container.querySelector('[data-value="hours"]');
        const minsRef = container.querySelector('[data-value="mins"]');
        const secsRef = container.querySelector('[data-value="secs"]');
        return { container, daysRef, hoursRef, minsRef, secsRef };
    }

    updateTimer({ container, daysRef, hoursRef, minsRef, secsRef }) {
        const time = this.targetDate - Date.now();
        if (time <= 0) {
            clearInterval(this.idInterval);
            container.innerHTML = '<h1> Time is over </h1>';
            return;
        }
        daysRef.textContent = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        hoursRef.textContent = Math.floor(
            (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
            .toString()
            .padStart(2, "0");
        minsRef.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
            .toString()
            .padStart(2, "0");
        secsRef.textContent = Math.floor((time % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, "0");
    }
}

const timer = new CountdownTimer(new Date("Aug 15, 2022 23:50:00"));

timer.start();