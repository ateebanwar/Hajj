import React, { createContext, useContext, useEffect, useState } from 'react';

const DEFAULT_CONFIG = {
    "general": {
        "appName": "Al-Qasim Tours & Travels",
        "contact": {
            "phone": "+1 (234) 567-890",
            "phoneLink": "tel:+1234567890",
            "email": "info@sacredjourneys.com",
            "emailLink": "mailto:info@sacredjourneys.com",
            "address": "123 Islamic Center Road\nNew York, NY 10001",
            "mapsLink": "https://maps.google.com/?q=40.7128,-74.0060"
        },
        "whatsapp": {
            "phoneNumber": "9860188215",
            "defaultMessage": "Hi, I would like to inquire about Hajj/Umrah packages."
        },
        "logo": {
            "text": "Al-Qasim",
            "subText": "Tours & Travels",
             "image": "/assets/Logo.png"
        },
        "buttons": {
            "bookNow": "Book Now"
        }
    },
    "navigation": [
        { "href": "#home", "label": "Home" },
        { "href": "#about", "label": "About" },
        { "href": "#services", "label": "Services" },
        { "href": "#packages", "label": "Packages" },
        { "href": "#gallery", "label": "Gallery" }
    ],
    "hero": {
        "slides": [
            {
                "image": "/assets/hero-kaaba.jpg",
                "bismillah": "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
                "headingPre": "Begin Your",
                "headingSpan": "Sacred Journey",
                "subheading": "Experience the spiritual pilgrimage of a lifetime with trusted guidance, premium services, and complete peace of mind."
            },
            {
                "image": "/assets/lucid-origin_A_serene_and_emotional_spiritual_view_of_Masjid_an-Nabawi_in_Madinah_during_suns-0.jpg",
                "bismillah": "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا",
                "headingPre": "Spiritual",
                "headingSpan": "Enlightenment",
                "subheading": "Join thousands of pilgrims in the most sacred journey, guided by experienced scholars and modern comfort."
            },
            {
                "image": "/assets/lucid-origin_A_majestic_cinematic_view_of_the_Abraj_Al-Bait_Clock_Tower_in_Makkah_at_dusk_tow-0.jpg",
                "bismillah": "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
                "headingPre": "Peace and",
                "headingSpan": "Serenity",
                "subheading": "Find inner peace through the rituals of Hajj and Umrah, with all arrangements handled professionally."
            },
            {
                "image": "/assets/lucid-origin_A_breathtaking_ultra-realistic_spiritual_scene_of_Masjid_al-Haram_in_Makkah_at_g-0.jpg",
                "bismillah": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
                "headingPre": "Your Journey",
                "headingSpan": "Starts Here",
                "subheading": "Comprehensive Hajj and Umrah services tailored to your needs, ensuring a memorable and blessed experience."
            }
        ],
        "trustBadges": [
            { "value": "15+", "label": "Years Experience" },
            { "value": "50K+", "label": "Happy Pilgrims" },
            { "value": "100%", "label": "Satisfaction" }
        ],
        "buttons": {
            "explore": "Explore Packages",
            "contact": "Contact Us"
        }
    },
    "about": {
        "image": "/assets/islamic-pattern.jpg",
        "yearsOfTrust": { "value": "15+", "label": "Years of Trust", "subLabel": "Guiding pilgrims on their sacred journey since 2009" },
        "sectionTitle": "About Us",
        "mainHeading": { "pre": "Your Trusted Partner for a", "highlight": "Blessed Pilgrimage" },
        "description": [
            "At Al-Qasim Tours & Travels, we understand that Hajj and Umrah are not just trips—they are profound spiritual experiences that every Muslim dreams of. We are dedicated to making your sacred journey as seamless and meaningful as possible.",
            "With over 15 years of experience, our team of devoted professionals provides personalized care, from visa assistance to premium accommodations near the Haram, ensuring you can focus entirely on your ibadah."
        ],
        "features": [
            { "icon": "CheckCircle", "title": "Licensed & Certified", "description": "Official travel partner" },
            { "icon": "Heart", "title": "Personal Care", "description": "Dedicated support" },
            { "icon": "DollarSign", "title": "Best Value", "description": "Transparent pricing" },
            { "icon": "BookOpen", "title": "Scholarly Guidance", "description": "Knowledgeable guides" }
        ]
    },
    "services": {
  "sectionTitle": "Our Services",
  "mainHeading": {
    "pre": "Everything You Need for a",
    "highlight": "Blessed Journey"
  },
  "description": "From the moment you decide to embark...",
  "items": [
    {
      "icon": "Plane",
      "title": "Hajj Packages",
      "description": "Complete Hajj packages with flights...",
      "image": "https://images.news18.com/ibnlive/uploads/2025/07/Hajj-2026-2025-07-8648c488762c4facc41fb011bb6496e4.jpg"
    },
    {
      "icon": "Building2",
      "title": "Umrah Packages",
      "description": "Year-round Umrah services...",
      "image": "/images/services/umrah.jpg"
    },
    {
      "icon": "FileCheck",
      "title": "Visa Assistance",
      "description": "Hassle-free visa processing...",
      "image": "/images/services/visa.jpg"
    }
  ]
}
,
    "packages": {
        "sectionTitle": "Our Packages",
        "mainHeading": { "pre": "Choose Your", "highlight": "Sacred Path" },
        "description": "Carefully curated packages aligned with official Hajj & Umrah programs.",
        "items": [
            {
                "name": "Deluxe Hajj – Shifting",
                "duration": "39 Days",
                "departure": "28 April 2026",
                "price": "₹7,50,000+",
                "zone": "Zone 3 · Category B (Premium)",
                "featured": false,
                "features": ["Direct Return Flights", "Shifting Accommodation (Azizia)", "Buffet Meals – 3 Times Daily", "AC Mina Tents", "Ziyarat Included", "Transportation Included", "Visa Assistance"],
                "whatsappMessage": "Hi, I would like to book the Deluxe Hajj – Shifting package (Departure: 28 April 2026)."
            },
            {
                "name": "Super Deluxe Hajj – Non Shifting",
                "duration": "19 Days",
                "departure": "17 May 2026",
                "price": "₹6,70,000+",
                "zone": "Zone 3 · Category B (Premium)",
                "featured": true,
                "features": ["Direct Return Flights (BOM–JED–BOM)", "Premium AC Mina Tents", "Buffet Meals – 3 Times Daily", "Hotel / Apartment Accommodation", "Ziyarat in Makkah & Madina", "Transportation Included", "Visa Assistance"],
                "whatsappMessage": "Hi, I would like to book the Super Deluxe Hajj – Non Shifting package (Departure: 17 May 2026)."
            },
            {
                "name": "Economy Umrah Package",
                "duration": "14 Days",
                "departure": "Flexible Dates",
                "price": "On Request",
                "zone": "Standard Category",
                "featured": false,
                "features": ["Return Flights", "Hotel Accommodation", "Daily Meals", "Ziyarat Tours", "Transportation", "Visa Assistance"],
                "whatsappMessage": "Hi, I would like to book the Economy Umrah Package (Departure: Flexible Dates)."
            }
        ],
        "customPackage": {
            "text": "Looking for something different?",
            "linkText": "Let's create your custom package"
        }
    },
    "gallery": {
        "sectionTitle": "Gallery",
        "mainHeading": { "pre": "Glimpses of the", "highlight": "Sacred Journey" },
        "description": "Experience the beauty and spirituality of the holy lands through the eyes of our pilgrims.",
        "images": [
            { "src": "/assets/hero-kaaba.jpg", "alt": "The Holy Kaaba in Masjid al-Haram", "title": "Masjid al-Haram", "span": "col-span-2 row-span-2" },
            { "src": "/assets/islamic-pattern.jpg", "alt": "Beautiful Islamic Architecture", "title": "Islamic Art", "span": "col-span-1 row-span-1" },
            { "src": "/assets/hotel-room.jpg", "alt": "Premium Hotel Accommodation", "title": "Luxury Stay", "span": "col-span-1 row-span-1" },
            { "src": "/assets/arafat-pilgrims.jpg", "alt": "Pilgrims at Mount Arafat", "title": "Day of Arafat", "span": "col-span-1 row-span-1" },
            { "src": "/assets/desert-sunset.jpg", "alt": "Beautiful Arabian Desert", "title": "Sacred Lands", "span": "col-span-1 row-span-1" }
        ]
    },
    "testimonials": {
        "sectionTitle": "Testimonials",
        "mainHeading": { "pre": "Words From Our", "highlight": "Blessed Pilgrims" },
        "description": "Hear from those who have entrusted us with their sacred journey.",
        "items": [
            {
                "name": "Ahmed Hassan",
                "location": "United Kingdom",
                "rating": 5,
                "text": "Alhamdulillah, Al-Qasim Tours & Travels made our first Hajj truly blessed. The attention to detail and spiritual guidance was exceptional. They truly care about the pilgrim experience.",
                "trip": "Hajj 2023"
            },
            {
                "name": "Fatima Ali",
                "location": "Canada",
                "rating": 5,
                "text": "The most seamless Umrah experience. From the moment we landed to our return, everything was perfectly organized. The proximity of our hotel to Haram was a blessing.",
                "trip": "Umrah 2024"
            },
            {
                "name": "Ibrahim Mohammed",
                "location": "United States",
                "rating": 5,
                "text": "After comparing many agencies, I'm grateful I chose Al-Qasim Tours & Travels. Their scholarly guide enhanced our understanding of every ritual. Truly a transformative experience.",
                "trip": "Hajj 2024"
            }
        ]
    },
    "contact": {
        "sectionTitle": "Contact Us",
        "mainHeading": { "pre": "Begin Your", "highlight": "Sacred Journey", "post": "Today" },
        "description": "Have questions about our packages or ready to book? Our team is here to guide you every step of the way.",
        "formTitle": "Send Us a Message"
    },
    "footer": {
        "description": "Your trusted partner for a blessed pilgrimage. Experience the journey of a lifetime with expert guidance and premium services.",
        "quickLinksTitle": "Quick Links",
        "servicesTitle": "Our Services",
        "contactTitle": "Contact Info",
        "copyright": "© 2024 Al-Qasim Tours & Travels. All rights reserved.",
        "links": {
            "quickLinks": [
                { "label": "Home", "href": "#home" },
                { "label": "About Us", "href": "#about" },
                { "label": "Services", "href": "#services" },
                { "label": "Packages", "href": "#packages" },
                { "label": "Gallery", "href": "#gallery" },
                { "label": "Contact", "href": "#contact" }
            ],
            "services": [
                { "label": "Hajj Packages", "href": "#packages" },
                { "label": "Umrah Packages", "href": "#packages" },
                { "label": "Visa Assistance", "href": "#services" },
                { "label": "Hotel Bookings", "href": "#services" },
                { "label": "Ziyarat Tours", "href": "#services" }
            ]
        }
    }
};

type ConfigType = typeof DEFAULT_CONFIG;

const ConfigContext = createContext<ConfigType | null>(null);

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
    const [config, setConfig] = useState<ConfigType>(DEFAULT_CONFIG);

    useEffect(() => {
        // Fetch external config on mount to support runtime updates
        const fetchConfig = async () => {
            try {
                const response = await fetch('/siteConfig.json');
                if (response.ok) {
                    const externalConfig = await response.json();
                    // Merge external config with default to ensure no missing keys crashing
                    // Note: Deep merge would be better, but simple override is efficient for now
                    // We assume structure matches.
                    setConfig(externalConfig);

                }
            } catch (error) {
                console.error("Failed to load siteConfig.json, using defaults", error);
            }
        };

        fetchConfig();
    }, []);

    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    const context = useContext(ConfigContext);

    if (!context) {
        throw new Error("useConfig must be used within a ConfigProvider");
    }
    return context;
};
