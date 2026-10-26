// Translation Dictionary
const translations = {
    en: {
        nav_home: "Home", nav_3d: "3D Layout", nav_book: "Book a Turf", nav_pricing: "Pricing",
        nav_cafe: "Cafe & Menu", nav_facilities: "Facilities", nav_rules: "Rules", nav_admin: "Admin",
        nav_book_btn: "BOOK NOW", hero_title: "YOUR GAME. YOUR GROUND.",
        hero_subtitle: "Jaflong, Sylhet — 30 Decimal Premium Sports Complex.",
        hero_btn_book: "BOOK YOUR SLOT", hero_btn_3d: "VIEW 3D LAYOUT",
        sec_3d_title: "Interactive 3D Turf Preview", sec_3d_sub: "Experience the 30-decimal complex layout before booking your match.",
        book_title: "Reserve Your Turf", label_branch: "Branch", label_court: "Facility / Pitch",
        label_date: "Date", label_time: "Time Slot", label_name: "Full Name", label_phone: "Phone Number",
        total_price: "Total: ৳", btn_confirm: "Confirm Demo Booking",
        pricing_title: "Pricing & Packages", p_offpeak: "Off-Peak (Morning)", p_offpeak_desc: "Ideal for early morning practice & training sessions.",
        p_peak: "Peak Hour (Evening/Night)", p_peak_desc: "Full floodlight illumination for high-energy matches.",
        p_member: "Monthly Membership", p_member_desc: "Fixed weekly slots with priority booking and discounts.",
        p_tourney: "Tournament Package", p_tourney_desc: "Full complex access for corporate or local tournaments.",
        cafe_title: "Jafly Turf Café & Refreshments", cafe_sub: "Refuel after the whistle with snacks, cold drinks, and post-match combo packages.",
        fac_title: "Facilities & Amenities", f_flood: "High-Power Floodlights", f_dressing: "Dressing Rooms & Lockers",
        f_wash: "Clean Washrooms & Showers", f_parking: "Secure Parking Area", f_cafe: "On-Site Café Lounge", f_sec: "24/7 CCTV Security",
        rules_title: "Turf Rules & Guidelines", r_boot: "Footwear Policy:", r_boot_desc: "Metal studs and spikes are strictly prohibited. Only turf boots (TF) or molded rubber studs (AG/FG) are allowed.",
        r_time: "Arrival Time:", r_time_desc: "Teams must arrive at least 15 minutes before the booked slot to ensure smooth pitch handover.",
        r_smoke: "No Smoking/Vaping:", r_smoke_desc: "Smoking, food, and sugary drinks are strictly not allowed on the turf playing area.",
        r_cancel: "Cancellation Policy:", r_cancel_desc: "Free cancellation up to 24 hours prior to the slot. Late cancellations are subject to review.",
        footer_tagline: "Your Game. Your Ground.", footer_links: "Quick Links"
    },
    bn: {
        nav_home: "হোম", nav_3d: "থ্রি-ডি লেআউট", nav_book: "টার্ফ বুক করুন", nav_pricing: "মূল্যতালিকা",
        nav_cafe: "ক্যাফে ও মেনু", nav_facilities: "সুবিধাবৃন্দ", nav_rules: "নিয়মাবলী", nav_admin: "অ্যাডমিন",
        nav_book_btn: "বুক করুন", hero_title: "আপনার খেলা। আপনার মাঠ।",
        hero_subtitle: "জাফলং, সিলেট — ৩০ শতকের প্রিমিয়াম স্পোর্টস কমপ্লেক্স।",
        hero_btn_book: "স্লট বুক করুন", hero_btn_3d: "থ্রি-ডি লেআউট দেখুন",
        sec_3d_title: "ইন্টারেক্টিভ থ্রি-ডি টার্ফ প্রিভিউ", sec_3d_sub: "বুকিংয়ের আগেই ৩০ শতক জায়গার ওপর প্রতিষ্ঠিত কমপ্লেক্সের পরিবেশ দেখে নিন।",
        book_title: "টার্ফ রিজার্ভ করুন", label_branch: "শাখা", label_court: "সুবিধা / পিচ",
        label_date: "তারিখ", label_time: "সময়", label_name: "পুরো নাম", label_phone: "ফোন নম্বর",
        total_price: "মোট: ৳", btn_confirm: "ডেমো বুকিং নিশ্চিত করুন",
        pricing_title: "মূল্যতালিকা ও প্যাকেজ", p_offpeak: "অফ-পিক (সকাল)", p_offpeak_desc: "সকালের প্র্যাকটিস ও ট্রেনিং সেশনের জন্য আদর্শ।",
        p_peak: "পিক আওয়ার (সন্ধ্যা/রাত)", p_peak_desc: "ফ্লাডলাইটের আলোয় জমজমাট রাতের ম্যাচের জন্য।",
        p_member: "মাসিক মেম্বারশিপ", p_member_desc: "নির্দিষ্ট সাপ্তাহিক স্লট এবং বিশেষ ডিসকাউন্ট সুবিধা।",
        p_tourney: "টুর্নামেন্ট প্যাকেজ", p_tourney_desc: "করপোরেট বা স্থানীয় টুর্নামেন্টের জন্য পুরো কমপ্লেক্স বুকিং।",
        cafe_title: "জাফলি টার্ফ ক্যাফে ও রিফ্রেশমেন্ট", cafe_sub: "খেলার শেষে স্ন্যাক্স, কোল্ড ড্রিংকস এবং পোস্ট-ম্যাচ কম্বো প্যাকেজ।",
        fac_title: "সুবিধাসমূহ", f_flood: "উজ্জ্বল ফ্লাডলাইট", f_dressing: "ড্রেসিং রুম ও লকার",
        f_wash: "পরিচ্ছন্ন ওয়াশরুম ও শোয়ার", f_parking: "নিরাপদ পার্কিং এরিয়া", f_cafe: "অন-সাইট ক্যাফে লাউঞ্জ", f_sec: "২৪/৭ সিসিটিভি নিরাপত্তা",
        rules_title: "টার্ফ নিয়মাবলী ও নির্দেশিকা", r_boot: "জুতার নীতি:", r_boot_desc: "মেটাল স্টাড বা স্পাইক জুতো সম্পূর্ণ নিষিদ্ধ। শুধুমাত্র টার্ফ বুট (TF) বা রাবার স্টাড অনুমোদিত।",
        r_time: "আগমনের সময়:", r_time_desc: "ম্যাচ শুরুর অন্তত ১৫ মিনিট পূর্বে মাঠে উপস্থিত হতে হবে।",
        r_smoke: "ধূমপান নিষেধ:", r_smoke_desc: "টার্ফ প্লেয়িং এরিয়ায় ধূমপান, খাবার বা মিষ্টি পানীয় খাওয়া নিষেধ।",
        r_cancel: "বাতিলকরণ নীতি:", r_cancel_desc: "স্লটের ২৪ ঘণ্টা পূর্বে ফ্রি ক্যান্সেলেশন সুবিধা উপলব্ধ।",
        footer_tagline: "আপনার খেলা। আপনার মাঠ।", footer_links: "গুরুত্বপূর্ণ লিংক"
    }
};

let currentLang = localStorage.getItem('jafly_lang') || 'en';
const langToggle = document.getElementById('langToggle');
const bookingForm = document.getElementById('bookingForm');
const priceAmount = document.getElementById('priceAmount');
const timeSelect = document.getElementById('timeSelect');
const bookingMessage = document.getElementById('bookingMessage');
const dateInput = document.getElementById('bookDate');

if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
}

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

if (timeSelect) {
    timeSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        const price = (val === '18:00' || val === '19:00') ? 1500 : 1200;
        document.getElementById('priceAmount').innerText = price;
    });
}

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

        const bookings = JSON.parse(localStorage.getItem('jafly_bookings') || '[]');
        const isConflict = bookings.some(b => b.date === booking.date && b.time === booking.time && b.court === booking.court);
        if (isConflict) {
            bookingMessage.className = 'alert';
            bookingMessage.style.backgroundColor = '#f8d7da';
            bookingMessage.style.color = '#721c24';
            bookingMessage.textContent = currentLang === 'bn' ? 'এই স্লটটি ইতিমধ্যে বুক করা হয়েছে।' : 'This slot is already booked. Please choose another time.';
            return;
        }

        bookings.push(booking);
        localStorage.setItem('jafly_bookings', JSON.stringify(bookings));

        bookingMessage.className = 'alert success';
        booking
