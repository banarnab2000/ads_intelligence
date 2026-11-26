'use client';

export function PublisherLogo({ id, size = 20 }: { id: string; size?: number }) {
  switch (id) {
    case 'claude':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Claude">
          <rect width="24" height="24" rx="6" fill="#D97757" />
          <path
            d="M12 4.5v15M5.5 8.25l13 7.5M18.5 8.25l-13 7.5"
            stroke="#fff"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'chatgpt':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="ChatGPT">
          <rect width="24" height="24" rx="6" fill="#10A37F" />
          <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="1.8" />
          <path
            d="M12 7v5l3.5 2M12 12l-3.5 2"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'gemini':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Gemini">
          <defs>
            <linearGradient id="gemLogoGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4285F4" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#gemLogoGrad)" />
          <path
            d="M12 4.5C12.4 9.2 14.8 11.6 19.5 12C14.8 12.4 12.4 14.8 12 19.5C11.6 14.8 9.2 12.4 4.5 12C9.2 11.6 11.6 9.2 12 4.5Z"
            fill="#fff"
          />
        </svg>
      );
    case 'perplexity':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Perplexity">
          <rect width="24" height="24" rx="6" fill="#0F766E" />
          <path
            d="M12 5v14M7 8.5L12 5l5 3.5v7L12 19l-5-3.5v-7zM7 12h10"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'metaai':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Meta AI">
          <defs>
            <linearGradient id="metaLogoGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0081FB" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#metaLogoGrad)" />
          <circle cx="12" cy="12" r="5.5" stroke="#fff" strokeWidth="2.3" />
        </svg>
      );
    case 'grok':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Grok">
          <rect width="24" height="24" rx="6" fill="#111827" />
          <path
            d="M7 17L17 7M8.5 7H17v8.5"
            stroke="#fff"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'copilot':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Microsoft Copilot">
          <defs>
            <linearGradient id="copLogoGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#copLogoGrad)" />
          <path
            d="M7.5 13.5C7.5 10.5 9.5 8 12 8s4.5 2.5 4.5 5.5c0 1.8-1 3-2.5 3-1 0-1.5-.7-2-1.5-.5.8-1 1.5-2 1.5-1.5 0-2.5-1.2-2.5-3z"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'mistral':
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Mistral">
          <rect width="24" height="24" rx="6" fill="#EA580C" />
          <path
            d="M6 7h3v3H6V7zm9 0h3v3h-3V7zM6 10.5h12v3H6v-3zM6 14h3v3H6v-3zm4.5 0h3v3h-3v-3zm4.5 0h3v3h-3v-3z"
            fill="#fff"
          />
        </svg>
      );
  }
}
