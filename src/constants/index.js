export const routes1 = [
    // { day: '28.05.2024'},
    { tripFrom: 'ТУРОВ', tripTo: 'ГОМЕЛЬ', dateTrip:"23.04.2024", reservedSeats: 4, totalSeats: 10, timeTrips: '06 : 00', car: 'AM 2629-3 Volkswagen Crafter', id: '0',
        persons: [
            {fullName: 'Лида', tripFrom: 'ТУРОВ', wayStart: 'Остановка №1', tripTo: 'ГОМЕЛЬ', wayStop: 'Остановка №1', phoneNumber: '+375290000001', numberSeats: 1, cost: 20, id: 11},
            {fullName: 'Василий', tripFrom: 'ТУРОВ', wayStart: 'Остановка №3', tripTo: 'ГОМЕЛЬ', wayStop: 'Остановка №2', phoneNumber: '+375290000002', numberSeats: 2, cost: 40, id: 12},
            {fullName: 'Николай', tripFrom: 'МАЛЕШЕВ', wayStart: 'Остановка №1', tripTo: 'СТОРОЖОВЦЫ', wayStop: 'Остановка №1', phoneNumber: '+375290000003', numberSeats: 1, cost: 20, id: 13}
        ]
        
    },
    { tripFrom: 'ЖИТКОВИЧИ' , tripTo: 'ГОМЕЛЬ', dateTrip:"23.04.2024", reservedSeats: 7, totalSeats: 20, timeTrips: '08 : 00', car: 'AM 2629-3 Volkswagen Crafter', id: '1', 
        persons: [
            {fullName: 'Никита', tripFrom: 'ЖИТКОВИЧИ', wayStart: 'Остановка №1', tripTo: 'ГОМЕЛЬ', wayStop: 'Остановка №1', phoneNumber: '+375290000004', numberSeats: 3, cost: 60, id: 14},
            {fullName: 'Галина', tripFrom: 'ЖИТКОВИЧИ', wayStart: 'Остановка №2', tripTo: 'ГОМЕЛЬ', wayStop: 'Остановка №2', phoneNumber: '+375290000005', numberSeats: 1, cost: 20, id: 15},
            {fullName: 'Петр', tripFrom: 'ЗАПЕСОЧЬЕ', wayStart: 'Остановка №1', tripTo: 'МАЛЕШЕВ', wayStop: 'Остановка №1', phoneNumber: '+375290000006', numberSeats: 3, cost: 60, id: 16}
        ]
    },
    { tripFrom: 'МЕЛЕШЕВ' , tripTo: 'ТУРОВ', dateTrip:"24.04.2024", reservedSeats: 3, totalSeats: 10, timeTrips: '10 : 00', car: 'AM 2629-3 Volkswagen Crafter', id: '2',
        persons: [
            {fullName: 'Елена', tripFrom: 'МЕЛЕШЕВ', wayStart: 'Остановка №1', tripTo: 'ГОМЕЛЬ', wayStop: 'Остановка №1', phoneNumber: '+375290000007', numberSeats: 2, cost: 40, id: 17},
            {fullName: 'Ирина', tripFrom: 'ЖИТКОВИЧИ', wayStart: 'Остановка №3', tripTo: 'ЗАПЕСОЧЬЕ', wayStop: 'Остановка №2', phoneNumber: '+375290000008', numberSeats: 1, cost: 20, id: 18},
        ]
    },
]

export const routes2 = [
    // { day: '28.05.2024'},
    { way: 'ГОМЕЛЬ - ТУРОВ', reservedSeats: 5, totalSeats: 10, timeTrips: '06 : 30', car: 'AM 2629-3 Volkswagen Crafter', id: '4',
        persons: [
            {fullName: 'Вечеслав', tripFrom: 'ГОМЕЛЬ', wayStart: 'Остановка №1', tripTo: 'ТУРОВ', wayStop: 'Остановка №1', phoneNumber: '+375290000009', numberSeats: 1, cost: 20, id: 19},
            {fullName: 'Михаил', tripFrom: 'ЖИТКОВИЧИ', wayStart: 'Остановка №3', tripTo: 'ТУРОВ', wayStop: 'Остановка №1', phoneNumber: '+375290000010', numberSeats: 3, cost: 60},
            {fullName: 'Людмила', tripFrom: 'ЗАПЕСОЧЬЕ', wayStart: 'Остановка №1', tripTo: 'ТУРОВ', wayStop: 'Остановка №3', phoneNumber: '+375290000011', numberSeats: 1, cost: 20}
        ]
    },
    { way: 'ГОМЕЛЬ - ЖИТКОВИЧИ', reservedSeats: 5, totalSeats: 20, timeTrips: '09 : 00', car: 'AM 2629-3 Volkswagen Crafter', id: '5',
        persons: [
            {fullName: 'Вечеслав', tripFrom: 'ГОМЕЛЬ', wayStart: 'Остановка №2', tripTo: 'ЖИТКОВИЧИ', wayStop: 'Остановка №1', phoneNumber: '+375290000012', numberSeats: 1, cost: 20, id: 21},
            {fullName: 'Михаил', tripFrom: 'МЕЛЕШЕВ', wayStart: 'Остановка №1', tripTo: 'ЖИТКОВИЧИ', wayStop: 'Остановка №3', phoneNumber: '+375290000013', numberSeats: 3, cost: 60, id: 22},
            {fullName: 'Людмила', tripFrom: 'ЗАПЕСОЧЬЕ', wayStart: 'Остановка №1', tripTo: 'ЖИТКОВИЧИ', wayStop: 'Остановка №1', phoneNumber: '+375290000014', numberSeats: 1, cost: 20, id: 23}
        ]
    },
]