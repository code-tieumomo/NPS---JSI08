let students = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game", "sleep", "learn"],
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game", "sick", "study"],
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game", "sick", "learn"],
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game", "sleep", "learn"],
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game", "sick", "study"],
    },
];

/**
 * 1, In ra tên những người có tuổi bằng 11
 */
const student11 = students.filter(function (element) {
    if (element.age == 11) {
        return true;
    } else {
        return false;
    }
});
// console.log(student11);

/**
 * 2, Tìm những ai thích video game
 */
const studentVideoGames = students.filter(function (element) {
    if (element.hobbies.includes("video game")) {
        return true;
    } else {
        return false;
    }
});
// console.log(studentVideoGames);

/**
 * 3, Thay đổi toàn bộ những ai có tuổi 11 thành 15
 */
const newStudents = students.map(function (element) {
    if (element.age == 11) {
        element.age = 15;
    }

    return element;
});
// console.log(newStudents);
