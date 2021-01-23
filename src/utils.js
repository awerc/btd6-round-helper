export const getRound = rounds => round =>
    rounds.find(info => {
        const roundRange = info.round.split('-');
        const min = Number(roundRange[0]);
        const max = Number(roundRange[roundRange.length - 1]);

        return Number(round) >= min && Number(round) <= max;
    });

export const capitalize = str => str.replace(/\b\w/g, l => l.toUpperCase());

export const prettifyNumber = num =>
    (typeof num === 'string' ? num : num.toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
