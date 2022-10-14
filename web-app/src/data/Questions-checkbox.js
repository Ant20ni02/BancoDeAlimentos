const QuestionsCheckbox = [
    {
        id: 1,
        question: "What is your favorite color?",
        options: [
            {
                id: 1,
                option: "Red",
                value: false,
                label: "Red",
                input: ""
            },
            {
                id: 2,
                option: "Blue",
                value: false,
                label: "Blue",
                input: ""
            },
            {
                id: 3,
                option: "Green",
                value: true,
                label: "Green",
                input: "Green"
            },
        ],
    },
    {
        id: 2,
        question: "What is your favorite animal?",
        options: [
            {
                id: 1,
                option: "Dog",
                value: true,
                label: "Dog",
                input: "Dog"
            },
            {
                id: 2,
                option: "Cat",
                value: false,
                label: "Cat",
                input: ""
            },
            {
                id: 3,
                option: "Bird",
                value: false,
                label: "Bird",
                input: ""
            },
        ],
    },
];

export default QuestionsCheckbox;
