// DATABASE Configuration
// You can add as many students as you want here.
// Key = Registration Number (in uppercase)
// Value = Object containing Name and Image ID

const studentDatabase = {
    // Student 1: Bilal Awan
    "B24F0098CS010": {
        name: "Bilal Awan",
        image: "bilal.jpg",
        active: true, // Set to false to hide this card
        schedule: [
            { sn: "1", date: "12/15/2025", paper: "Data Structures and Algorithms (COMP-201)", venue: "A1-207\n(Seat#39)", time: "10:00:00" },
            { sn: "2", date: "12/16/2025", paper: "Probability and Statistics (MTH-210)", venue: "A2-207\n(Seat#39)", time: "10:00:00" },
            { sn: "3", date: "12/17/2025", paper: "Database Systems (COMP-231)", venue: "A1-304.1\n(Seat#16)", time: "10:00:00" },
            { sn: "4", date: "12/18/2025", paper: "Digital Logic Design", venue: "A2-Multipurpose Hall\n(Seat#42)", time: "10:00:00" },
            { sn: "5", date: "12/23/2025", paper: "Professional Ethics (SS-311)", venue: "B2-211\n(Seat#24)", time: "14:00:00" }
        ]
    },

    // Student 2: Abdul Raheem
    "B24F1336CS032": {
        name: "Abdul Raheem",
        image: "abdulraheem.jpg",
        active: false, // Set to false to hide this card
        schedule: [
            { sn: "1", date: "12/15/2025", paper: "Data Structures and Algorithms (COMP-201)", venue: "A1-304.3\n(Seat#24)", time: "10:00:00" },
            { sn: "2", date: "12/16/2025", paper: "Probability and Statistics (MTH-210)", venue: "A2-201\n(Seat#28)", time: "10:00:00" },
            { sn: "3", date: "12/17/2025", paper: "Database Systems (COMP-231)", venue: "A1-206\n(Seat#21)", time: "10:00:00" },
            // Note: S#4 logic design is missing for this student as per request
            { sn: "5", date: "12/23/2025", paper: "Professional Ethics (SS-311)", venue: "B2-211\n(Seat#58)", time: "14:00:00" }
        ]
    },

    // Student 3 (TEMPLATE)
    "B24FXXXXCSXXX": {
        name: "Student 3 Name",
        image: "student3.jpg",
        schedule: [
            { sn: "1", date: "MM/DD/YYYY", paper: "Subject Name", venue: "Room (Seat#00)", time: "10:00:00" },
            { sn: "2", date: "MM/DD/YYYY", paper: "Subject Name", venue: "Room (Seat#00)", time: "10:00:00" }
        ]
    },

    // Student 4 (TEMPLATE)
    "B24FYYYYCSYYY": {
        name: "Student 4 Name",
        image: "student4.jpg",
        schedule: [
            { sn: "1", date: "MM/DD/YYYY", paper: "Subject Name", venue: "Room (Seat#00)", time: "10:00:00" },
            { sn: "2", date: "MM/DD/YYYY", paper: "Subject Name", venue: "Room (Seat#00)", time: "10:00:00" }
        ]
    }
};
