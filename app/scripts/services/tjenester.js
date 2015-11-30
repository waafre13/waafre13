'use strict';

/**
 * @ngdoc service
 * @name lierKommuneApp.tjenester
 * @description
 * # tjenester
 * Factory in the lierKommuneApp.
 */
angular.module('lierKommuneApp')
  .factory('tjenester', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;
    
    var tjenesteDB = [
        {
            id      : 100,
            title   : 'Hovedbiblioteket',
            description : "Dette er hovedbiblioteket i Lier Kommune.",
            phoneNum: 32220260,
            faxNum  : 32220269,
            mail    : 'lier.bibliotek@lierkommune.no',
            address : {
                title   : "Fosskvartalet",
                number  : null,
                postalcode : 3401,
                city    : "Lier",
                post    : "Postboks 128",
                additionalInfo: "2.etg",
            },
            contacts: [
                {
                    id: 10001,
//                    position: "Biblioteksjef",
                    showOnCard: true,
                }
            ],
            openingHours: [ // null is closed
                { // Monday
                    from: 10,
                    to: 19
                },
                { // Tuesday
                    from: 10,
                    to: 19
                },
                { // Wednesday
                    from: 10,
                    to: 19
                },
                { // Thursday
                    from: 10,
                    to: 16
                },
                { // Friday
                    from: 10,
                    to: 16
                },
                { // Saturday
                    from: 10,
                    to: 14
                },
                { // Sunday
                    from: null,
                    to: null
                }
            ],  
        } // Hovedbibliotek
    ]

    // Public API here
    return {
      getTjeneste: function (id) {
        return meaningOfLife;
      }
    };
  });
