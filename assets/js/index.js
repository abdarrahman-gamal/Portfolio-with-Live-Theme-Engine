// ^ Write your JavaScript code here
const sideBar = document.querySelector("#settings-sidebar")
const settingsToggle = document.querySelector("#settings-toggle")
const closeSettings = document.querySelector("#close-settings")

const alexandria = document.querySelector("[data-font='alexandria']")
const tajawal = document.querySelector("[data-font='tajawal']")
const cairo = document.querySelector("[data-font='cairo']")


const blueCyan = document.querySelector('[title="Blue Cyan"]')
const greenEmerald = document.querySelector('[title="Green Emerald"]')
const pinkOrange = document.querySelector('[title="Pink Orange"]')
const purpleBlue = document.querySelector('[title="Purple Blue"]')

const tabs = document.querySelectorAll("div.nav-links a")

const activeClasses = ["active", "border-primary", "bg-slate-50", "dark:bg-slate-800"]
const inactiveClasses = ["border-slate-200", "dark:border-slate-700"]

const activeOnColor = ["ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900"]

const fonts = ["font-alexandria", "font-tajawal", "font-cairo"]


settingsToggle.style.right = "0rem"
document.documentElement.addEventListener("click", (e) => {
    if (e.target.closest("#theme-toggle-button")) {
        console.log("Theme toggle button clicked!");
        document.documentElement.classList.toggle("dark")
    }
    if (e.target.closest("#settings-toggle")) {
        console.log("settings-toggle button clicked!");
        sideBar.classList.toggle("translate-x-full")
        // settingsToggle.style.right = "20rem"
        console.log(settingsToggle.style.right)
        settingsToggle.style.right = settingsToggle.style.right === "0rem" ? "20rem" : "0rem"
    }
    if (e.target.closest("#close-settings")) {
        console.log("close-settings button clicked!");
        sideBar.classList.toggle("translate-x-full")
        settingsToggle.style.right = "0rem"
    }
    if (e.target.closest("[data-font='alexandria']")) {
        alexandria.classList.add(...activeClasses)
        alexandria.classList.remove(...inactiveClasses)

        tajawal.classList.remove(...activeClasses)
        tajawal.classList.add(...inactiveClasses)

        cairo.classList.remove(...activeClasses)
        cairo.classList.add(...inactiveClasses)

        document.body.classList.remove(...fonts)
        document.body.classList.add("font-alexandria")
    }

    if (e.target.closest("[data-font='tajawal']")) {
        alexandria.classList.remove(...activeClasses)
        alexandria.classList.add(...inactiveClasses)

        tajawal.classList.add(...activeClasses)
        tajawal.classList.remove(...inactiveClasses)

        cairo.classList.remove(...activeClasses)
        cairo.classList.add(...inactiveClasses)

        document.body.classList.remove(...fonts)
        document.body.classList.add("font-tajawal")
    }

    if (e.target.closest("[data-font='cairo']")) {
        alexandria.classList.remove(...activeClasses)
        alexandria.classList.add(...inactiveClasses)

        tajawal.classList.remove(...activeClasses)
        tajawal.classList.add(...inactiveClasses)

        cairo.classList.add(...activeClasses)
        cairo.classList.remove(...inactiveClasses)

        document.body.classList.remove(...fonts)
        document.body.classList.add("font-cairo")
    }

    if (e.target.closest('[title="Blue Cyan"]')) {
        blueCyan.classList.add(...activeOnColor)
        greenEmerald.classList.remove(...activeOnColor)
        pinkOrange.classList.remove(...activeOnColor)
        purpleBlue.classList.remove(...activeOnColor)

        document.documentElement.style = "--color-primary: #3b82f6; --color-secondary: #06b6d4; --color-accent: #22d3ee;"
    }

    if (e.target.closest('[title="Green Emerald"]')) {
        blueCyan.classList.remove(...activeOnColor)
        greenEmerald.classList.add(...activeOnColor)
        pinkOrange.classList.remove(...activeOnColor)
        purpleBlue.classList.remove(...activeOnColor)

        document.documentElement.style = "--color-primary: #10b981; --color-secondary: #059669; --color-accent: #34d399;"
    }

    if (e.target.closest('[title="Pink Orange"]')) {
        blueCyan.classList.remove(...activeOnColor)
        greenEmerald.classList.remove(...activeOnColor)
        pinkOrange.classList.add(...activeOnColor)
        purpleBlue.classList.remove(...activeOnColor)

        document.documentElement.style = "--color-primary: #ec4899; --color-secondary: #f97316; --color-accent: #fb923c;"
    }

    if (e.target.closest('[title="Purple Blue"]')) {
        blueCyan.classList.remove(...activeOnColor)
        greenEmerald.classList.remove(...activeOnColor)
        pinkOrange.classList.remove(...activeOnColor)
        purpleBlue.classList.add(...activeOnColor)

        document.documentElement.style = "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;"
    }
    if (e.target.closest("div.nav-links a")) {
        const ele = e.target.closest("div.nav-links a")
        tabsActive(ele)
    }
})


function tabsActive(ele) {
    const elements = tabs
    for (const element of elements) {
        element.classList.remove("active")
    }
    ele.classList.add("active")
}



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const tab = document.querySelector('[href="' + "#" + entry.target.id + '"]')
            console.log("#" + entry.target.id + " is in view")
            tabsActive(tab)
        }
    })
}, {
    threshold: 0.2
})

// Select your sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section)
})
