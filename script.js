function toggleSkills(elementId) {
    const skills = document.getElementById(elementId);
    const currentDisplay = window.getComputedStyle(skills).display;

    if (currentDisplay === "none") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
}
