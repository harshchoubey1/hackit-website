const fs = require('fs');

const css = `
/* =========================================
   RESPONSIVE DESIGN (MOBILE & TABLET)
   ========================================= */

@media screen and (max-width: 1024px) {
    body, html {
        overflow-x: hidden !important;
        width: 100vw;
        max-width: 100vw;
    }
    
    .site-background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }
    
    .main-container {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        width: 100% !important;
        max-width: 100vw !important;
        overflow-x: hidden !important;
        position: relative !important;
    }
    
    .problem-statement-btn,
    .what-is-section,
    .marquee-1,
    .marquee-section,
    .prizes-section,
    .venue-section,
    .roadmap-section,
    .memories-section,
    .faq-partners-section,
    .footer-section,
    .footer {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        transform: none !important;
        margin: 40px 0 !important;
        width: 100% !important;
        max-width: 100vw !important;
        padding-left: 20px !important;
        padding-right: 20px !important;
        box-sizing: border-box !important;
        height: auto !important;
        display: flex !important;
        flex-direction: column !important;
    }

    .memories-section {
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-top: 0 !important;
        width: 100vw !important;
    }
    .memories-gallery {
        width: 100% !important;
        position: relative !important;
    }
    
    .marquee-2, .circle, .bg-image, .bg-image-1, .bg-image-2, .bg-image-3 {
        display: none !important;
    }
    
    .hero-section {
        padding: 50px 20px 40px !important;
        min-height: auto !important;
    }
    .hero-title {
        font-size: 14vw !important; 
        line-height: 1.1 !important;
        margin-top: 20px !important;
        letter-spacing: 2px !important;
    }
    .hero-subtitle {
        font-size: 14px !important;
    }
    .tagline-text {
        font-size: 12px !important;
        margin-bottom: 30px !important;
    }
    .countdown-container {
        gap: 10px !important;
        flex-wrap: wrap !important;
    }
    .time-box {
        width: 75px !important;
        height: 85px !important;
    }
    .time-value {
        font-size: 28px !important;
    }
    .time-label {
        font-size: 10px !important;
    }
    
    .problem-statement-btn {
        width: 90% !important;
        margin: 20px auto !important;
        height: auto !important;
        min-height: 60px !important;
        padding: 10px !important;
        justify-content: center !important;
    }
    .problem-statement-btn span {
        font-size: 18px !important;
        text-align: center !important;
        word-wrap: break-word !important;
    }
    
    .what-is-section {
        align-items: center !important;
        text-align: center !important;
    }
    .what-is-content .section-heading {
        width: 100% !important;
        font-size: 28px !important;
    }
    .what-is-content .section-text {
        width: 100% !important;
        font-size: 16px !important;
        height: auto !important;
    }
    
    .prizes-section {
        gap: 40px !important;
        padding: 40px 20px !important;
    }
    .prizes-container {
        flex-direction: column !important;
        align-items: center !important;
        gap: 20px !important;
        width: 100% !important;
    }
    .prize-item {
        width: 100% !important;
        max-width: 90vw !important;
        box-sizing: border-box !important;
    }
    .registration-container {
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
        gap: 30px !important;
        width: 100% !important;
    }
    .deadline-label, .deadline-date {
        width: 100% !important;
        height: auto !important;
    }
    .registration-image {
        display: none !important;
    }
    
    .venue-title {
        font-size: 28px !important;
    }
    .venue-section {
        padding: 40px 20px !important;
    }
    
    .roadmap-section {
        padding: 40px 20px !important;
    }
    .roadmap-title {
        font-size: 28px !important;
        width: 100% !important;
    }
    .roadmap-container {
        flex-direction: column !important;
        align-items: center !important;
        gap: 20px !important;
        height: auto !important;
        width: 100% !important;
    }
    .roadmap-line {
        display: none !important;
    }
    .roadmap-item {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        width: 100% !important;
        max-width: 100% !important;
        text-align: center !important;
        opacity: 1 !important;
        transform: none !important;
        padding: 20px !important;
        box-sizing: border-box !important;
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(0,255,255,0.2) !important;
        border-radius: 12px;
    }
    .roadmap-dot {
        display: none !important;
    }
    
    .memories-title {
        position: relative !important;
        width: 100% !important;
        height: auto !important;
        left: auto !important;
        top: auto !important;
        text-align: center !important;
        justify-content: center !important;
    }
    .memories-title-part {
        font-size: 24px !important;
    }
    .memories-title-highlight {
        font-size: 30px !important;
    }
    .memories-title-highlight::before {
        display: none !important;
    }
    .memories-gallery {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        width: 100% !important;
        height: auto !important;
        margin-top: 20px !important;
        padding-bottom: 20px !important;
    }
    .memories-gallery-wrapper {
        align-items: center !important;
    }
    .memory-image {
        max-width: 85vw !important;
        height: auto !important;
        aspect-ratio: 16/9;
    }
    .memories-subtitle {
        position: relative !important;
        top: auto !important;
        width: 100% !important;
        margin-top: 20px !important;
        white-space: normal !important;
    }
    
    .faq-partners-section {
        gap: 40px !important;
        padding: 40px 20px !important;
    }
    .faq-image {
        display: none !important;
    }
    .faq-section {
        width: 100% !important;
        padding: 20px 10px !important;
        box-sizing: border-box !important;
    }
    .faq-title {
        font-size: 24px !important;
    }
    .partners-section {
        align-items: center !important;
        text-align: center !important;
        width: 100% !important;
    }
    .partners-title {
        text-align: center !important;
        width: 100% !important;
    }
    .partners-grid {
        justify-content: center !important;
        width: 100% !important;
    }
    
    .footer {
        padding: 40px 20px !important;
        margin-top: 40px !important;
        gap: 30px !important;
        display: flex !important;
        flex-direction: column !important;
    }
    .footer-container {
        display: flex !important;
        flex-direction: column !important;
        gap: 30px !important;
    }
    .footer-left, .footer-links, .footer-map {
        align-items: center !important;
        text-align: center !important;
    }
    .footer-links ul {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
    }
    .footer-section {
        margin-top: 0 !important;
        padding: 40px 20px 20px !important;
    }
}
`;

fs.appendFileSync('src/app/globals.css', css);
console.log("Restored safely!");
