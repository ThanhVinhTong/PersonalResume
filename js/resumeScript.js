/** 
 * Scroll Animation for Experience Boxes
 */
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});

/**
 * Project Button Event Handlers
 * Manages interactions with project links
 * Purpose: 
 * 1. Handles click events to redirect to project URLs
 * 2. Creates hover animation effects for better user interaction
 */
document.querySelectorAll(".btn-project").forEach(button => {
    button.addEventListener("click", function () {
        // Redirect to the link stored in data-url attribute
        window.location.href = this.getAttribute("href");
    });

    button.addEventListener("mouseover", () => {
        button.style.scale = 1.2;
        
    })

    button.addEventListener("mouseleave", () => {
        button.style.scale = 1.0;
    })
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form elements
    const form = this;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    // Create template parameters from form
    const templateParams = {
        from_name: form.name.value,
        from_email: form.email.value,
        phone: form.tel.value,
        subject: form.subject.value,
        message: form.message.value,
        to_email: "vinhtongthanh57@gmail.com"
    };

    // Send email using EmailJS
    emailjs.send('service_7mlw6fg', 'template_rfe37df', templateParams, 'sTYUvCMWlrVtNgUpw')
        .then(function(response) {
            // Show success message
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            
            // Clear form
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        })
        .catch(function(error) {
            // Show error message
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            console.error('Email failed to send:', error);
        });
});

/**
 * AJAX Implementation for Dynamic Quote
 * Fetches a random quote from an API and displays it on the CV page
 */
async function fetchQuote() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'mVZg81VsOOVMwPSVR31kOw==2gMmgnMVwr1gwIyp',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const [data] = await response.json(); // API returns an array with one quote
        if (data && data.quote) {
            document.getElementById('quoteDisplay').innerText = `"${data.quote}" - ${data.author}`;
        } else {
            throw new Error('Invalid quote data received');
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quoteDisplay').innerText = 'Loading inspiration...';
    }
}

// Call function on page load and refresh quote every hour
document.addEventListener("DOMContentLoaded", () => {
    fetchQuote();
    setInterval(fetchQuote, 3600000); // Refresh every 1 hour (3600000 ms)
});