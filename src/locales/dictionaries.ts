export const dictionaries = {
    ar: {
        hero: {
            brand: "صالة العاب",
            title: "الاغأ",
            subtitle: "جرب المستوى التالي من الألعاب. أجهزة البلايستيشن عالية الأداء، بليارد ، وأجواء حماسية بانتظارك.",
            btnFindUs: "ابحث عنا",
            btnCommunity: "المجتمع"
        },
        location: {
            titleGlow: "ارتقِ بمستواك",
            titleNormal: "واقعياً",
            subtext: "العراق - كركوك - مجمع روان",
            description: "انضم إلى ساحة الألعاب المثالية في قلب مجمع روان. يتميز مركزنا الفاخر بأحدث المعدات ومقاعد مريحة ومجتمع من اللاعبين الشغوفين. تعال بمفردك أو أحضر فريقك!"
        },
        comments: {
            titleGlow: "صوت",
            titleNormal: "اللاعبين",
            subtitle: "شاهد ماذا يقول مجتمعنا وشارك لحظاتك الملحمية.",
            formTitle: "اترك رسالة",
            formSubtitle: "أخبرنا عن تجربتك في اللعب!",
            lblName: "اسم اللاعب",
            lblMessage: "تعليقك",
            plcName: "أدخل اسمك...",
            plcMessage: "ماذا لعبت اليوم؟",
            btnPost: "ارسل التعليق",
            btnSending: "جاري الإرسال...",
            loading: "جاري تحميل التعليقات...",
            empty: "لا توجد تعليقات بعد. كن أول من يترك تعليقاً!"
        },
        footer: {
            rights: "آغا لمركز الألعاب © {year}. جميع الحقوق محفوظة.",
            location: "الموقع: العراق - كركوك - مجمع روان",
            hours: "ساعات العمل: جميع أيام الأسبوع من 2 ظهراً إلى 1 صباحاً"
        }
    },
    en: {
        hero: {
            brand: "Game Lounge",
            title: "AGHA",
            subtitle: "Experience the next level of gaming. High-performance PlayStation consoles, billiards, and an electrifying atmosphere waiting just for you.",
            btnFindUs: "Find Us",
            btnCommunity: "Community"
        },
        location: {
            titleGlow: "Level Up",
            titleNormal: "Offline",
            subtext: "Iraq - Kirkuk - Rawan Complex",
            description: "Join the ultimate gaming arena right in the heart of Rawan Complex. Our premium lounge features top-tier equipment, comfortable seating, and a community of passionate gamers. Come solo, or bring your squad!"
        },
        comments: {
            titleGlow: "Gamer's",
            titleNormal: "Voice",
            subtitle: "See what our community is saying and share your own epic moments.",
            formTitle: "Leave a Message",
            formSubtitle: "Tell us about your gaming experience!",
            lblName: "Gamer Tag / Name",
            lblMessage: "Your Comment",
            plcName: "Enter your name...",
            plcMessage: "What did you play today?",
            btnPost: "Post Comment",
            btnSending: "Sending...",
            loading: "Loading Comments...",
            empty: "No comments yet. Be the first to leave one!"
        },
        footer: {
            rights: "AGHA Game Center © {year}. All rights reserved.",
            location: "Location: Iraq - Kirkuk - Rawan Complex",
            hours: "Working Hours: Every day from 2:00 PM to 1:00 AM"
        }
    }
};

export type Language = 'ar' | 'en';
export type Dictionary = typeof dictionaries['en'];
