


const dateFormat: Intl.DateTimeFormatOptions = {
    "year": "numeric",
    "month": "long",
    "day": "2-digit"
};
const currentLocale = navigator ? ((navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language) : 'en-US';

export const Formatting = {
    Dates: new Intl.DateTimeFormat(currentLocale, { dateStyle: "short" }),
    Times: new Intl.DateTimeFormat(currentLocale, { timeStyle: "short" }),
    DateTimes: new Intl.DateTimeFormat(currentLocale, { dateStyle: "short", timeStyle: "short" })
}