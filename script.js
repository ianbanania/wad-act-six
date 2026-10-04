
        // Part 1 - Live Name Preview

        const nameInput = document.querySelector("#nameInput");
        const welcomeMessage = document.querySelector("#welcomeMessage");

        nameInput.addEventListener("input", () => {
            welcomeMessage.textContent = nameInput.value;
        });


        // Part 2 - Handle Form Submission

        const studentForm = document.querySelector("#studentForm");
        const courseInput = document.querySelector("#courseInput");
        const registrationMessage =
            document.querySelector("#registrationMessage");

        studentForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = nameInput.value;
            const course = courseInput.value;

            registrationMessage.textContent =
                "Registration successful! " + name + " - " + course;

        });


        // Part 3 - Toggle the Theme

        const themeButton = document.querySelector("#themeButton");

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark");

        });


        // Part 4 - Keyboard Challenge

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                welcomeMessage.textContent = "";
            }

        });
