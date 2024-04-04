let transactions = [
    {
        id: 1,
        category: "food",
        total: 40000,
        time: "2024-04-02 08:34"
    },
    {
        id: 2,
        category: "car",
        total: 10000,
        time: "2024-04-02 10:20"
    },
]

transactions.forEach((time) => {
    let item = new Date(time.time)
    let elem = new Date()
    let hour = Math.floor((elem - item) / (1000 * 60 * 60))
    let minutes = Math.floor((elem - item) / (1000 * 60))

    let mt = minutes - (hour * 60)

    console.log(`(Время транзакции ${time.time}) ${hour} часов и ${mt} минут назад было транзакция`);
})