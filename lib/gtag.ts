// lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

// PV測定
export const pageview = (url: string): void => {
    // GA_TRAKING_IDが設定されていない場合は処理を終了
    if (!GA_TRACKING_ID) return;
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};