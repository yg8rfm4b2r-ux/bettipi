new Vue({
    el: '#app',
    data: {
        matches: [
            { id: 1, time: '18:00', team1: 'تیم A', team2: 'تیم B' },
            { id: 2, time: '20:00', team1: 'تیم C', team2: 'تیم D' },
        ]
    },
    methods: {
        placeBet(matchId) {
            alert(`شرط‌بندی برای مسابقه با شناسه ${matchId} ثبت شد.`);
        }
    }
});
