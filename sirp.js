
 document.addEventListener("DOMContentLoaded", () => {
            const daysEl = document.getElementById("days");
            const hoursEl = document.getElementById("hours");
            const minutesEl = document.getElementById("minutes");
            const secondsEl = document.getElementById("seconds");
            const messageEl = document.getElementById("wishMessage");
            const welcomeMessageEl = document.getElementById("welcomeMessage");
            const fireworksEl = document.getElementById("fireworks");
            const fireworksSound = document.getElementById("fireworksSound");

            const targetDate = new Date("January 1, 2025 00:00:00").getTime();

            const messages = [
                "a prosperous new year!",
                "long life!",
                "more years to come!",
                "prosperity!",
                "peace of mind!",
                "boundless opportunities!",
                "new beginnings!",
                "a year of achievements!",
                "endless blessings!",
                "Unmerited favour!",
                "personal growth!",
                "dreams come true!",,
                "fulfillment in all areas of life!"
            ];

            let messageIndex = 0;

            function updateMessage() {
                messageEl.classList.remove("visible");
                setTimeout(() => {
                    messageEl.textContent = `As we step into the new year, I wish you ${messages[messageIndex]}`;
                    messageEl.classList.add("visible");
                    messageIndex = (messageIndex + 1) % messages.length;
                }, 1000);
            }

            setInterval(updateMessage, 3000);

            function updateCountdown() {
                const now = new Date().getTime();
                const distance = targetDate - now;

                if (distance <= 0) {
                    clearInterval(countdownInterval);
                    messageEl.style.display = "none";
                    welcomeMessageEl.style.display = "block";
                    fireworksEl.style.display = "block";
                    fireworksSound.play(); // Play fireworks sound
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                daysEl.textContent = days.toString().padStart(2, "0");
                hoursEl.textContent = hours.toString().padStart(2, "0");
                minutesEl.textContent = minutes.toString().padStart(2, "0");
                secondsEl.textContent = seconds.toString().padStart(2, "0");
            }

            const countdownInterval = setInterval(updateCountdown, 1000);
            updateCountdown();
        });
