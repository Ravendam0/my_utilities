document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');

    // Starting date for Gameweek 10 - Assuming upcoming Saturday from today
    function getNextSaturday(date) {
        const resultDate = new Date(date);
        resultDate.setDate(date.getDate() + ((6 - date.getDay() + 7) % 7));
        resultDate.setHours(19, 0, 0, 0); // Set time to 7 PM for reminder
        return resultDate;
    }

    function formatDateToICS(date) {
        // Format date to YYYYMMDDTHHmmssZ (UTC time)
        const pad = (num) => num.toString().padStart(2, '0');
        const yyyy = date.getUTCFullYear();
        const mm = pad(date.getUTCMonth() + 1);
        const dd = pad(date.getUTCDate());
        const hh = pad(date.getUTCHours());
        const min = pad(date.getUTCMinutes());
        const ss = pad(date.getUTCSeconds());
        return `${yyyy}${mm}${dd}T${hh}${min}${ss}Z`;
    }

    function generateICS() {
        const now = new Date();
        const startDate = getNextSaturday(now); // gameweek 10 start assumed

        let icsLines = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'CALSCALE:GREGORIAN',
            'PRODID:-//Seron//Gameweek Poster Reminder//EN'
        ];

        // Generate events for gameweeks 10 to 38
        for (let gw = 10; gw <= 38; gw++) {
            // Each gameweek assumed 7 days apart
            const gwStart = new Date(startDate.getTime() + (gw - 10) * 7 * 24 * 60 * 60 * 1000);
            // Reminder 1 day before at 7 PM local time
            const reminderDate = new Date(gwStart.getTime() - 24 * 60 * 60 * 1000);
            reminderDate.setHours(19, 0, 0, 0);

            const uid = `gameweek-${gw}@seron.dev`;
            const dtstamp = formatDateToICS(new Date());
            const dtstart = formatDateToICS(reminderDate);

            icsLines.push('BEGIN:VEVENT');
            icsLines.push(`UID:${uid}`);
            icsLines.push(`DTSTAMP:${dtstamp}`);
            icsLines.push(`DTSTART:${dtstart}`);
            icsLines.push(`SUMMARY:Reminder - Make Team Posters for Gameweek ${gw}`);
            icsLines.push('DESCRIPTION:Don\'t forget to create your team posters before the gameweek starts!');
            icsLines.push('STATUS:CONFIRMED');
            icsLines.push('TRANSP:OPAQUE');
            icsLines.push('END:VEVENT');
        }

        icsLines.push('END:VCALENDAR');
        return icsLines.join('\r\n');
    }

    generateBtn.addEventListener('click', () => {
        const icsContent = generateICS();
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'gameweek_poster_reminders.ics';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
