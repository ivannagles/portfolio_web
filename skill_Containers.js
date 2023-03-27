const skillsContainer = document.getElementById("skills-container");

for (let i = 1; i <= 12; i++) {
  const circularBar = document.createElement("div");
  circularBar.classList.add("my-Skills__Circular-Bar");

  const progressValue = document.createElement("span");
  progressValue.classList.add("my-Skills__Circular-Bar__Progress-value");
  progressValue.textContent = "0%";
  circularBar.appendChild(progressValue);

  const headerText = document.createElement("span");
  headerText.classList.add("my-Skills__Circular-Bar__Header-Text");
  headerText.textContent = "Skill " + i;
  circularBar.appendChild(headerText);

  skillsContainer.appendChild(circularBar);
}