/**
 * Analytics utility for tracking user interactions
 */

/**
 * Track events with Google Analytics
 * @param {string} label - The event label to track
 */
export function trackEvent(label) {
  // Check if gtag is available (Google Analytics)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'CTA',
      event_label: label,
    });
  }
  
  // Also log to console for development
  console.log(`Analytics: Tracked event - ${label}`);
}

/**
 * Track page views
 * @param {string} page_title - The page title
 * @param {string} page_location - The page URL
 */
export function trackPageView(page_title, page_location) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_TRACKING_ID', {
      page_title,
      page_location,
    });
  }
  
  console.log(`Analytics: Page view - ${page_title} at ${page_location}`);
}