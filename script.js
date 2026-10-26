// Translation Dictionary
const translations = {
    en: {
        nav_home: "Home", nav_book: "Book a Turf", nav_branches: "Branches", nav_admin: "Admin",
        nav_book_btn: "BOOK NOW", hero_title: "YOUR GAME. YOUR GROUND.",
        hero_subtitle: "Find your slot. Bring your team. Make every match count.",
        hero_btn_book: "BOOK YOUR SLOT", hero_btn_explore: "EXPLORE JAFLY",
        hl_premium: "Premium Football Turf", hl_booking: "Easy Online Booking", hl_teams: "Built for Every Team",
        book_title: "Reserve Your Turf", label_branch: "Branch", label_court: "Facility",
        label_date: "Date", label_time: "Time Slot", label_name: "Full Name", label_phone: "Phone Number",
        total_price: "Total: ৳", btn_confirm: "Confirm Demo Booking", footer_tagline: "Your Game. Your Ground.",
        footer_links: "Quick Links"
    },
    bn: {
        nav_home: "হোম", nav_book: "টার্ফ বুক করুন", nav_branches: "শাখাসমূহ", nav_admin: "অ্যাডমিন",
        nav_book_btn: "বুক করুন", hero_title: "আপনার খেলা। আপনার মাঠ।",
        hero_subtitle: "স্লট খুঁজুন। দল নিয়ে আসুন। প্রতিটি ম্যাচ উপভোগ করুন।",
        hero_btn_book: "স্লট বুক করুন", hero_btn_explore: "জাফলি এক্সপ্লোর করুন",
        hl_premium: "প্রিমিয়াম ফুটবল টার্ফ", hl_booking: "সহজ অনলাইন বুকিং", hl_teams: "সব দলের জন্য",
        book_title: "টার্ফ রিজার্ভ করুন", label_branch: "শাখা", label_court: "সুবিধা",
        label_date: "তারিখ", label_time: "সময়", label_name: "পুরো নাম", label_phone: "ফোন নম্বর",
        total_price: "মোট: ৳", btn_confirm: "ডেমো বুকিং নিশ্চিত করুন", footer_tagline: "আপনার খেলা। আপনার মাঠ।",
        footer_links: "গুরুত্বপূর্ণ লিংক"
    }
};

// State
let currentLang = localStorage.getItem('jafly_lang') || 'en';

// DOM Elements
const langToggle = document.getElementById('langToggle');
const bookingForm = document.getElementById('bookingForm');
const priceAmount = document.getElementById('priceAmount');
const timeSelect = document.getElementById('timeSelect');
const bookingMessage = document.getElementById('bookingMessage');
const dateInput = document.getElementById('bookDate');

// Set minimum date to today
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
}

// Localization Logic
function applyLanguage(lang) {
    document.body.className = lang === 'bn' ? 'lang-bn' : '';
    langToggle.textContent = lang === 'en' ? 'বাংলা' : 'EN';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key === 'total_price') {
                el.innerHTML = `${translations[lang][key]}<span id="priceAmount">${priceAmount.innerText}</span>`;
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    localStorage.setItem('jafly_lang', lang);
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'bn' : 'en';
        applyLanguage(currentLang);
    });
    applyLanguage(currentLang);
}

// Dynamic Pricing Demo
if (timeSelect) {
    timeSelect.addEventListener('change', (e) => {
        const val = parseInt(e.target.value);
        const price = (val >= 18) ? 1500 : 1200; // Peak hours cost more
        document.getElementById('priceAmount').innerText = price;
    });
}

// Booking Submission Demo
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const booking = {
            id: 'BK-' + Math.random().toString(36).substr(2, 6).toUpperCase(),
            branch: document.getElementById('branchSelect').value,
            court: document.getElementById('courtSelect').value,
            date: document.getElementById('bookDate').value,
            time: document.getElementById('timeSelect').value,
            name: document.getElementById('custName').value,
            phone: document.getElementById('custPhone').value,
            price: document.getElementById('priceAmount').innerText,
            status: 'Confirmed (Demo)',
            timestamp: new Date().toISOString()
        };

        // Save to LocalStorage
        const bookings = JSON.parse(localStorage.getItem('jafly_bookings') || '[]');
        
        // Simple double-booking check
        const isConflict = bookings.some(b => b.date === booking.date && b.time === booking.time && b.court === booking.court);
        if (isConflict) {
            bookingMessage.className = 'alert';
            bookingMessage.style.backgroundColor = '#f8d7da';
            bookingMessage.style.color = '#721c24';
            bookingMessage.textContent = 'This slot is already booked. Please choose another time.';
            return;
        }

        bookings.push(booking);
        localStorage.setItem('jafly_bookings', JSON.stringify(bookings));

        // UI Feedback
        bookingMessage.className = 'alert success';
        bookingMessage.textContent = `Success! Ref: ${booking.id}. Please pay at the counter.`;
        bookingForm.reset();
        
        setTimeout(() => { bookingMessage.className = 'alert hidden'; }, 5000);
    });
}

// Admin Dashboard Logic (Runs only on admin.html)
if (document.getElementById('adminTableBody')) {
    const renderBookings = () => {
        const bookings = JSON.parse(localStorage.getItem('jafly_bookings') || '[]');
        const tbody = document.getElementById('adminTableBody');
        const revenueEl = document.getElementById('totalRevenue');
        
        let totalRev = 0;
        tbody.innerHTML = '';
        
        if (bookings.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">No bookings found.</td></tr>';
            revenueEl.innerText = '0';
            return;
        }

        bookings.reverse().forEach((b, index) => {
            totalRev += parseInt(b.price);
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${b.id}</td>
                <td>${b.name}<br><small>${b.phone}</small></td>
                <td>${b.date} | ${b.time}</td>
                <td>${b.court === 'turf1' ? '5v5 Turf' : '7v7 Turf'}</td>
                <td>৳${b.price}</td>
                <td><span style="background:var(--maroon);color:white;padding:3px 8px;border-radius:12px;font-size:0.8rem;">${b.status}</span></td>
                <td><button onclick="cancelBooking(${bookings.length - 1 - index})" class="btn-outline" style="color:var(--maroon);border-color:var(--maroon);padding:5px 10px;">Cancel</button></td>
            `;
            tbody.appendChild(tr);
        });
        revenueEl.innerText = totalRev;
    };

    window.cancelBooking = (index) => {
        const bookings = JSON.parse(localStorage.getItem('jafly_bookings') || '[]');
        bookings.splice(index, 1);
        localStorage.setItem('jafly_bookings', JSON.stringify(bookings));
        renderBookings();
    };

    renderBookings();
}