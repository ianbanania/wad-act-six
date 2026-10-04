
        // Part 1 - Live Name Preview

        const nameInput = document.querySelector("#nameInput");
        const welcomeMessage = document.querySelector("#welcomeMessage");

        nameInput.addEventListener("input", () => {
            welcomeMessage.textContent = nameInput.value;
        });
