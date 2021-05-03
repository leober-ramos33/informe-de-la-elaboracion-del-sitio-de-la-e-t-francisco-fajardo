document.addEventListener("DOMContentLoaded", () => {
    // Details of Steps
    const btn = document.getElementById("steps-btn");
    const btnView = document.getElementById("steps-btn-view");
    const btnClose = document.getElementById("steps-btn-close");
    const content = document.getElementById("steps-content");

    let btnState = false;
    btn.addEventListener("click", () => {
        if (btnState) {
            btnState = false;

            // Close content
            content.classList.add("hidden");

            // Remove the "Close details" from the button
            btnClose.classList.remove("inline-block");
            btnClose.classList.add("hidden");

            // View tthe "View details" in the button
            btnView.classList.remove("hidden");
            btnView.classList.add("block");
        } else {
            btnState = true;

            // Open content
            content.classList.remove("hidden");

            // Remove the "View Details" from the button
            btnView.classList.remove("inline-block");
            btnView.classList.add("hidden");

            // View the "Close details" in the button
            btnClose.classList.remove("hidden");
            btnClose.classList.add("inline-block");
        }
    });
});
