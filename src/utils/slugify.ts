export function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .replace(/æ/g, 'ae')
        .replace(/ø/g, 'oe')
        .replace(/å/g, 'aa')
        .replace(/\s+/g, '-')           // Erstat mellemrum med bindestreger
        .replace(/[^\w\-]+/g, '')       // Fjern alle ikke-ord tegn
        .replace(/\-\-+/g, '-')         // Erstat flere bindestreger med én
        .replace(/^-+/, '')             // Fjern bindestreger fra start
        .replace(/-+$/, '');            // Fjern bindestreger fra slut
}
