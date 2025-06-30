declare module '@/utils/analytics' {
  export function trackEvent(eventName: string, eventProperties: Record<string, any>): void;
} 