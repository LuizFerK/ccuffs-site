(function () {
  localStorage.getItem('@LuizFerK:theme') === 'dark_theme' ?
    setTheme('dark_theme') : setTheme('light_theme')

  setTimeout(() => {
    localStorage.getItem('@LuizFerK:lang') === 'en-US' ?
      setLang('en-US') : setLang('pr-BR')
  }, 1)
})()

function setTheme(themeName) {
  localStorage.setItem('@LuizFerK:theme', themeName)
  document.documentElement.className = themeName
  setTimeout(() => {
    document.getElementById('toggle').src = themeName === 'dark_theme' ?
      'public/sun.svg' : 'public/moon.svg'
  }, 1)
}

function toggleTheme() {
  localStorage.getItem('@LuizFerK:theme') === 'dark_theme' ?
    setTheme('light_theme') : setTheme('dark_theme')
}

function setLang(lang) {
  document.documentElement.setAttribute("lang", lang)
  localStorage.setItem('@LuizFerK:lang', lang)

  if (lang === 'en-US') {
    document.getElementById('lang_toggle').innerText = "pr-BR"
    document.getElementById('title').innerText = `Oi, meu nome é\nLuiz Fernando`
    document.getElementById('description').innerText = "Desenvolvedor Full-Stack. Estudando e me atualizando constantemente. Atualmente estudo Ciência da Computação na UFFS."
  } else {
    document.getElementById('lang_toggle').innerText = "en-US"
    document.getElementById('title').innerText = `Hi, my name is\nLuiz Fernando`
    document.getElementById('description').innerText = "Full-Stack developer. Studying and constantly updating myself. I'm currently studying Computer Science at UFFS."
  }
}

function toggleLang() {
  document.documentElement.lang === 'en-US' ? setLang('pr-BR') : setLang('en-US')
}