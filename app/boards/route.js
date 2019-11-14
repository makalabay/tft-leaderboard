import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            users: [
                {
                    summName: 'metalkarp',
                    stats: [
                        { title: 'lastPlace', value: 1 },
                        { title: 'avgPlace', value: 3.2 },
                        { title: 'dmgDealt', value: 420 },
                    ],
                },
                {
                    summName: 'Newspaper',
                    stats: [
                        { title: 'lastPlace', value: 2 },
                        { title: 'avgPlace', value: 2.6 },
                        { title: 'dmgDealt', value: 310 },
                    ],
                },
                {
                    summName: 'Bjergsen',
                    stats: [
                        { title: 'lastPlace', value: 8 },
                        { title: 'avgPlace', value: 6.9 },
                        { title: 'dmgDealt', value: 10 },
                    ],
                },
            ],
        };
    },
});
