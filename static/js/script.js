document.addEventListener("DOMContentLoaded", () => {
  // Filter buttons for news
  const filterButtons = document.querySelectorAll(".filter-button")
  const newsCards = document.querySelectorAll(".news-card")

  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter")

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")

        // Filter news cards
        if (filter === "all") {
          newsCards.forEach((card) => (card.style.display = "block"))
        } else {
          newsCards.forEach((card) => {
            const category = card.querySelector(".news-category").classList.contains(filter)
            card.style.display = category ? "block" : "none"
          })
        }
      })
    })
  }

  // Form validation
  const contactForm = document.querySelector(".contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const nameInput = document.getElementById("nombre")
      const emailInput = document.getElementById("email")
      const messageInput = document.getElementById("mensaje")

      let isValid = true

      // Simple validation
      if (!nameInput.value.trim()) {
        markInvalid(nameInput)
        isValid = false
      } else {
        markValid(nameInput)
      }

      if (!emailInput.value.trim()) {
        markInvalid(emailInput)
        isValid = false
      } else if (!isValidEmail(emailInput.value)) {
        markInvalid(emailInput)
        isValid = false
      } else {
        markValid(emailInput)
      }

      if (!messageInput.value.trim()) {
        markInvalid(messageInput)
        isValid = false
      } else {
        markValid(messageInput)
      }

      if (!isValid) {
        e.preventDefault()

        // Show error message
        const errorMessage = document.createElement("div")
        errorMessage.className = "error-message"
        errorMessage.textContent = "¡Por favor completa todos los campos correctamente!"
        errorMessage.style.color = "var(--red)"
        errorMessage.style.textAlign = "center"
        errorMessage.style.marginTop = "20px"
        errorMessage.style.fontWeight = "bold"

        // Remove existing error message if any
        const existingError = contactForm.querySelector(".error-message")
        if (existingError) {
          existingError.remove()
        }

        contactForm.appendChild(errorMessage)
      }
    })
  }

  function markInvalid(element) {
    element.style.borderColor = "var(--red)"
    element.style.backgroundColor = "rgba(255, 61, 51, 0.1)"
  }

  function markValid(element) {
    element.style.borderColor = "var(--green)"
    element.style.backgroundColor = "white"
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Add sound effects for buttons
  const buttons = document.querySelectorAll(
    "a.nav-button, a.big-button, a.service-button, a.news-button, button.submit-button",
  )

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Create a simple beep sound
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.type = "square"
      oscillator.frequency.value = 800
      gainNode.gain.value = 0.1

      oscillator.start()
      setTimeout(() => {
        oscillator.stop()
      }, 100)
    })
  })
})

