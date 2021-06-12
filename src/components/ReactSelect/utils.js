const colors = [
    {
        label: "Green",
        value: "green",
    },
    {
        label: "Blue",
        value: "blue",
    },
    {
        label: "Black",
        value: "black",
    },
    {
        label: "Red",
        value: "red",
    },
    {
        label: "White",
        value: "white",
    },
    {
        label: "Blue",
        value: "blue",
    },
    {
        label: "Yellow",
        value: "yellow",
    },
    {
        label: "Orange",
        value: "orange",
    },
    {
        label: "Orkid",
        value: "orkid",
    },
];

const filterColors = (inputValue) => {
    return colors.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
};

export const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterColors(inputValue));
        }, 1000);
    });

export const rulesArray = [
    {
        field: "color_1",
        method: (val) => val !== "",
        validWhen: true,
        message: "Color can't be empty.",
    },
    {
        field: "name",
        method: (val) => val !== "",
        validWhen: true,
        message: "Name can't be empty.",
    },
    {
        field: "email",
        method: (val) => val !== "",
        validWhen: true,
        message: "Email can't be empty.",
    },
    {
        field: "email",
        method: function validateEmail(email) {
            const re =
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        args: [],
        validWhen: true,
        message: "Invalid email format",
    },
];
