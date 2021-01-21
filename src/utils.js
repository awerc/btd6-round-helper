export const getRound = rounds => round =>
    rounds.find(info => {
        const roundRange = info.round.split('-');
        const min = Number(roundRange[0]);
        const max = Number(roundRange[roundRange.length - 1]);

        return Number(round) >= min && Number(round) <= max;
    });
