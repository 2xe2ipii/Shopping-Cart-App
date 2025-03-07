export interface Product {
    id: number;
    name: string;
    price: number;
    image: any;
    sold?: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: "DLSL Notebook",
        price: 45.00,
        image: require("../../assets/dlsl-notebook.jpg"),
        sold: 42
    },
    {
        id: 2,
        name: "DLSL ID Lace",
        price: 75.00,
        image: require("../../assets/id-lace.jpg"),
        sold: 28
    },
    {
        id: 3,
        name: "Green Ballpen Set",
        price: 65.00,
        image: require("../../assets/ballpen-set.jpg"),
        sold: 36
    },
    {
        id: 4,
        name: "DLSL Uniform Patch",
        price: 35.00,
        image: require("../../assets/unif-patch.jpg"),
        sold: 19
    },
    {
        id: 5,
        name: "Scientific Calculator",
        price: 550.00,
        image: require("../../assets/calc.jpg"),
        sold: 15
    },
    {
        id: 6,
        name: "Green Paper Folder",
        price: 25.00,
        image: require("../../assets/paper-folder.jpg"),
        sold: 47
    },
    {
        id: 7,
        name: "DLSL PE Shirt",
        price: 350.00,
        image: require("../../assets/pe.jpg"),
        sold: 21
    },
    {
        id: 8,
        name: "Green Lab Gown",
        price: 450.00,
        image: require("../../assets/lab-gown.jpg"),
        sold: 13
    },
    {
        id: 9,
        name: "Student Handbook",
        price: 120.00,
        image: require("../../assets/handbook.jpg"),
        sold: 38
    },
    {
        id: 10,
        name: "DLSL Sticker Pack",
        price: 50.00,
        image: require("../../assets/sticker.jpg"),
        sold: 52
    }
];