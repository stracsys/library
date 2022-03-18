const theme = document.querySelectorAll(".theme");
for (let i = 0; i < theme.length; i++)
  theme[i].addEventListener("click", (event) => toggleTheme());

const toggleTheme = () => {
  if (localStorage.theme === "light") {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
};
