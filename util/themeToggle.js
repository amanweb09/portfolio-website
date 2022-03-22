const themeToggle = theme => {
    
    if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        window.localStorage.setItem('theme', 'dark')
        return;
    }
    else if (theme === 'light') {
        document.documentElement.classList.remove('dark')
        window.localStorage.setItem('theme', 'light')
        return;
    }

    window.localStorage.setItem('theme', 'light')

}

export default themeToggle