export default function isMobileOS() {
    const mobileOs = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /Windows Phone/i,
        /BlackBerry/i,
    ];
    const webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator?.appVersion)[1], 10); // also matches AppleWebKit
    const isGoogle = webkitVer && navigator?.vendor.indexOf('Google') === 0;  // Also true for Opera Mobile and maybe others
    const isAndroid = isGoogle && navigator?.userAgent.indexOf('Android') > 0;  // Careful - Firefox and Windows Mobile also have Android in user agent
    const androidDesktopMode = !isAndroid && isGoogle && (navigator?.platform?.indexOf('Linux a') === 0) && 'ontouchstart' in document?.documentElement;
    return androidDesktopMode || (mobileOs.some((item) => {
        return navigator.userAgent.match(item);
    }));
}