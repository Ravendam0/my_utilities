// RoyalFlags.js - Mini Library for Country Flags
(function (global) {
    const countries = [
        { name: "Afghanistan", code: "af" },
        { name: "Albania", code: "al" },
        { name: "Algeria", code: "dz" },
        { name: "Andorra", code: "ad" },
        { name: "Angola", code: "ao" },
        { name: "Antigua and Barbuda", code: "ag" },
        { name: "Argentina", code: "ar" },
        { name: "Armenia", code: "am" },
        { name: "Australia", code: "au" },
        { name: "Austria", code: "at" },
        { name: "Azerbaijan", code: "az" },
        { name: "Bahamas", code: "bs" },
        { name: "Bahrain", code: "bh" },
        { name: "Bangladesh", code: "bd" },
        { name: "Barbados", code: "bb" },
        { name: "Belarus", code: "by" },
        { name: "Belgium", code: "be" },
        { name: "Belize", code: "bz" },
        { name: "Benin", code: "bj" },
        { name: "Bhutan", code: "bt" },
        { name: "Bolivia", code: "bo" },
        { name: "Bosnia and Herzegovina", code: "ba" },
        { name: "Botswana", code: "bw" },
        { name: "Brazil", code: "br" },
        { name: "Brunei", code: "bn" },
        { name: "Bulgaria", code: "bg" },
        { name: "Burkina Faso", code: "bf" },
        { name: "Burundi", code: "bi" },
        { name: "Cabo Verde", code: "cv" },
        { name: "Cambodia", code: "kh" },
        { name: "Cameroon", code: "cm" },
        { name: "Canada", code: "ca" },
        { name: "Central African Republic", code: "cf" },
        { name: "Chad", code: "td" },
        { name: "Chile", code: "cl" },
        { name: "China", code: "cn" },
        { name: "Colombia", code: "co" },
        { name: "Comoros", code: "km" },
        { name: "Congo (Brazzaville)", code: "cg" },
        { name: "Congo (Kinshasa)", code: "cd" },
        { name: "Costa Rica", code: "cr" },
        { name: "Cote d'Ivoire", code: "ci" },
        { name: "Croatia", code: "hr" },
        { name: "Cuba", code: "cu" },
        { name: "Cyprus", code: "cy" },
        { name: "Czech Republic", code: "cz" },
        { name: "Denmark", code: "dk" },
        { name: "Djibouti", code: "dj" },
        { name: "Dominica", code: "dm" },
        { name: "Dominican Republic", code: "do" },
        { name: "Ecuador", code: "ec" },
        { name: "Egypt", code: "eg" },
        { name: "El Salvador", code: "sv" },
        { name: "Equatorial Guinea", code: "gq" },
        { name: "Eritrea", code: "er" },
        { name: "Estonia", code: "ee" },
        { name: "Eswatini", code: "sz" },
        { name: "Ethiopia", code: "et" },
        { name: "Fiji", code: "fj" },
        { name: "Finland", code: "fi" },
        { name: "France", code: "fr" },
        { name: "Gabon", code: "ga" },
        { name: "Gambia", code: "gm" },
        { name: "Georgia", code: "ge" },
        { name: "Germany", code: "de" },
        { name: "Ghana", code: "gh" },
        { name: "Greece", code: "gr" },
        { name: "Grenada", code: "gd" },
        { name: "Guatemala", code: "gt" },
        { name: "Guinea", code: "gn" },
        { name: "Guinea-Bissau", code: "gw" },
        { name: "Guyana", code: "gy" },
        { name: "Haiti", code: "ht" },
        { name: "Honduras", code: "hn" },
        { name: "Hungary", code: "hu" },
        { name: "Iceland", code: "is" },
        { name: "India", code: "in" },
        { name: "Indonesia", code: "id" },
        { name: "Iran", code: "ir" },
        { name: "Iraq", code: "iq" },
        { name: "Ireland", code: "ie" },
        { name: "Israel", code: "il" },
        { name: "Italy", code: "it" },
        { name: "Jamaica", code: "jm" },
        { name: "Japan", code: "jp" },
        { name: "Jordan", code: "jo" },
        { name: "Kazakhstan", code: "kz" },
        { name: "Kenya", code: "ke" },
        { name: "Kiribati", code: "ki" },
        { name: "Kosovo", code: "xk" },
        { name: "Kuwait", code: "kw" },
        { name: "Kyrgyzstan", code: "kg" },
        { name: "Laos", code: "la" },
        { name: "Latvia", code: "lv" },
        { name: "Lebanon", code: "lb" },
        { name: "Lesotho", code: "ls" },
        { name: "Liberia", code: "lr" },
        { name: "Libya", code: "ly" },
        { name: "Liechtenstein", code: "li" },
        { name: "Lithuania", code: "lt" },
        { name: "Luxembourg", code: "lu" },
        { name: "Madagascar", code: "mg" },
        { name: "Malawi", code: "mw" },
        { name: "Malaysia", code: "my" },
        { name: "Maldives", code: "mv" },
        { name: "Mali", code: "ml" },
        { name: "Malta", code: "mt" },
        { name: "Marshall Islands", code: "mh" },
        { name: "Mauritania", code: "mr" },
        { name: "Mauritius", code: "mu" },
        { name: "Mexico", code: "mx" },
        { name: "Micronesia", code: "fm" },
        { name: "Moldova", code: "md" },
        { name: "Monaco", code: "mc" },
        { name: "Mongolia", code: "mn" },
        { name: "Montenegro", code: "me" },
        { name: "Morocco", code: "ma" },
        { name: "Mozambique", code: "mz" },
        { name: "Myanmar", code: "mm" },
        { name: "Namibia", code: "na" },
        { name: "Nauru", code: "nr" },
        { name: "Nepal", code: "np" },
        { name: "Netherlands", code: "nl" },
        { name: "New Zealand", code: "nz" },
        { name: "Nicaragua", code: "ni" },
        { name: "Niger", code: "ne" },
        { name: "Nigeria", code: "ng" },
        { name: "North Korea", code: "kp" },
        { name: "North Macedonia", code: "mk" },
        { name: "Norway", code: "no" },
        { name: "Oman", code: "om" },
        { name: "Pakistan", code: "pk" },
        { name: "Palau", code: "pw" },
        { name: "Panama", code: "pa" },
        { name: "Papua New Guinea", code: "pg" },
        { name: "Paraguay", code: "py" },
        { name: "Peru", code: "pe" },
        { name: "Philippines", code: "ph" },
        { name: "Poland", code: "pl" },
        { name: "Portugal", code: "pt" },
        { name: "Qatar", code: "qa" },
        { name: "Romania", code: "ro" },
        { name: "Russia", code: "ru" },
        { name: "Rwanda", code: "rw" },
        { name: "Saint Kitts and Nevis", code: "kn" },
        { name: "Saint Lucia", code: "lc" },
        { name: "Saint Vincent and the Grenadines", code: "vc" },
        { name: "Samoa", code: "ws" },
        { name: "San Marino", code: "sm" },
        { name: "Sao Tome and Principe", code: "st" },
        { name: "Saudi Arabia", code: "sa" },
        { name: "Senegal", code: "sn" },
        { name: "Serbia", code: "rs" },
        { name: "Seychelles", code: "sc" },
        { name: "Sierra Leone", code: "sl" },
        { name: "Singapore", code: "sg" },
        { name: "Slovakia", code: "sk" },
        { name: "Slovenia", code: "si" },
        { name: "Solomon Islands", code: "sb" },
        { name: "Somalia", code: "so" },
        { name: "South Africa", code: "za" },
        { name: "South Korea", code: "kr" },
        { name: "South Sudan", code: "ss" },
        { name: "Spain", code: "es" },
        { name: "Sri Lanka", code: "lk" },
        { name: "Sudan", code: "sd" },
        { name: "Suriname", code: "sr" },
        { name: "Sweden", code: "se" },
        { name: "Switzerland", code: "ch" },
        { name: "Syria", code: "sy" },
        { name: "Taiwan", code: "tw" },
        { name: "Tajikistan", code: "tj" },
        { name: "Tanzania", code: "tz" },
        { name: "Thailand", code: "th" },
        { name: "Timor-Leste", code: "tl" },
        { name: "Togo", code: "tg" },
        { name: "Tonga", code: "to" },
        { name: "Trinidad and Tobago", code: "tt" },
        { name: "Tunisia", code: "tn" },
        { name: "Turkey", code: "tr" },
        { name: "Turkmenistan", code: "tm" },
        { name: "Tuvalu", code: "tv" },
        { name: "Uganda", code: "ug" },
        { name: "Ukraine", code: "ua" },
        { name: "United Arab Emirates", code: "ae" },
        { name: "United Kingdom", code: "gb" },
        { name: "United States", code: "us" },
        { name: "Uruguay", code: "uy" },
        { name: "Uzbekistan", code: "uz" },
        { name: "Vanuatu", code: "vu" },
        { name: "Vatican City", code: "va" },
        { name: "Venezuela", code: "ve" },
        { name: "Vietnam", code: "vn" },
        { name: "Yemen", code: "ye" },
        { name: "Zambia", code: "zm" },
        { name: "Zimbabwe", code: "zw" }
    ];

    // Generate flag URL
    function makeFlagUrl(code) {
        return `https://flagcdn.com/48x36/${code.toLowerCase()}.png`;
    }

    // Populate a <select> element with countries
    function populateSelect(selectElementId) {
        const select = document.getElementById(selectElementId);
        if (!select) return;

        countries.forEach(country => {
            const option = document.createElement("option");
            option.value = country.code;
            option.textContent = country.name;
            select.appendChild(option);
        });
    }

    // Attach a flag preview to a <select>
    function attachFlagPreview(selectElementId, imgElementId) {
        const select = document.getElementById(selectElementId);
        const img = document.getElementById(imgElementId);

        if (!select || !img) return;

        select.addEventListener("change", function () {
            const code = this.value;
            img.src = makeFlagUrl(code);
            img.alt = this.options[this.selectedIndex].text + " flag";
        });
    }

    // Functions to name the current and the next year
    // Functions to name the current and the next year

    function getYear() {
        return new Date().getFullYear();
    }

    function getNextYear() {
        return new Date().getFullYear() + 1;
    }

    function writeYear(elementId, next = false) {
        const el = document.getElementById(elementId);
        if (el) {
            el.textContent = next ? getNextYear() : getYear();
        }
    }



    // Expose library to global scope
    global.NextGen = {
        populateSelect,
        populateSelect,
        attachFlagPreview,
        makeFlagUrl,
        getYear,
        getNextYear,
        writeYear
    };
})(window);

// Fill year values
NextGen.writeYear("year");
NextGen.writeYear("nextYear", true);



// protectPage.js
function protectPage() {
    // Create toast container if not exists
    if (!document.getElementById("toast-container")) {
        const toastContainer = document.createElement("div");
        toastContainer.id = "toast-container";
        toastContainer.style.position = "fixed";
        toastContainer.style.bottom = "20px";
        toastContainer.style.right = "20px";
        toastContainer.style.zIndex = "9999";
        document.body.appendChild(toastContainer);
    }

    // Function to show toast
    function showToast(message) {
        const toast = document.createElement("div");
        toast.innerText = message;
        toast.style.background = "#168aad";
        toast.style.color = "#fff";
        toast.style.padding = "10px 20px";
        toast.style.marginTop = "10px";
        toast.style.borderRadius = "8px";
        toast.style.fontSize = "14px";
        toast.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.5s ease";

        document.getElementById("toast-container").appendChild(toast);

        setTimeout(() => { toast.style.opacity = "1"; }, 100);
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    // Disable right click
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        showToast("ðŸš« Right clicking is disabled by Admin!");
    });

    // Disable certain key combinations
    document.addEventListener("keydown", function (e) {
        // F12
        if (e.key === "F12") {
            e.preventDefault();
            showToast("ðŸš« Developer tools disabled by Admin!");
        }
        // Ctrl+Shift+I or Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) {
            e.preventDefault();
            showToast("ðŸš« Developer tools disabled by Admin!");
        }
        // Ctrl+U
        if (e.ctrlKey && e.key.toLowerCase() === "u") {
            e.preventDefault();
            showToast("ðŸš« View Source disabled by Admin!");
        }
        // Ctrl+S
        if (e.ctrlKey && e.key.toLowerCase() === "s") {
            e.preventDefault();
            showToast("ðŸš« Saving this page is disabled by Admin!");
        }
        // Ctrl+C, Ctrl+V, Ctrl+X
        if (e.ctrlKey && ["c", "v", "x"].includes(e.key.toLowerCase())) {
            e.preventDefault();
            showToast("ðŸš« Copy/Paste disabled by Admin!");
        }
    });
}

protectPage();

///To show today,s date
  function displayCurrentDate() {
        const now = new Date();
        document.getElementById("todaysDate").textContent = now.toString();
    }

    // Call the function when the page loads
    window.onload = displayCurrentDate;