document.addEventListener('DOMContentLoaded', () => {
    const checkBox = document.getElementById('theme-checkbox')
    const body = document.body
    const yearSpan = document.getElementById('current-year')

    if (yearSpan) yearSpan.textContent = new Date().getFullYear()

    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
        body.classList.replace('dark-mode', 'light-mode')
        checkBox.checked = true
    } else {
        body.classList.replace('light-mode', 'dark-mode')
        checkBox.checked = false
    }

    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            body.classList.replace('dark-mode', 'light-mode')
            localStorage.setItem('theme', 'light')
        } else {
            body.classList.replace('light-mode', 'dark-mode')
            localStorage.setItem('theme', 'dark')
        }
    })

    const filterBtns = document.querySelectorAll('.filter-btn')
    const allCards = document.querySelectorAll('.project-card, .review-card-full')

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter

            btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
            btn.classList.add('active')

            allCards.forEach(card => {
                const categories = (card.dataset.category || '').split(' ')
                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden')
                } else {
                    card.classList.add('hidden')
                }
            })
        })
    })
})