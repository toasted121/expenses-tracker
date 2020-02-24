import moment from 'moment';

const expenses = [
    {
        id: "89374edd-2b99-4974-a860-9215c211307f",
        description: "Water bill",
        note: "",
        amount: 4500,
        createdAt: 0
    },
    {
        id: "fba19938-552e-4ee6-a218-57eba1aea2d6",
        description: "Gas bill",
        note: "",
        amount: 0,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: "57be550b-4b83-4bb8-a36d-e3c87338a18b",
        description: "Rent",
        note: "",
        amount: 109500,
        createdAt: moment(0).add(4,'days').valueOf()
    }
];

export default expenses;

//const total = getExpensesTotal(expenses);
//console.log(total);