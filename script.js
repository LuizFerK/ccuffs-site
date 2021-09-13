function setTheme(themeName) {
  localStorage.setItem('@LuizFerK:theme', themeName)
  document.documentElement.className = themeName
  document.getElementById('toggle').src = themeName === 'dark_theme' ? 'public/sun.svg' : 'public/moon.svg'
}

function toggleTheme() {
  localStorage.getItem('@LuizFerK:theme') === 'dark_theme' ?
    setTheme('light_theme') : setTheme('dark_theme')
}

(function () {
  localStorage.getItem('@LuizFerK:theme') === 'dark_theme' ?
    setTheme('dark_theme') : setTheme('light_theme')
})()