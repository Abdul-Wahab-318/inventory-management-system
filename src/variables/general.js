// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";
import {
  useColorModeValue
} from "@chakra-ui/react";

export const dashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "Argon Dashboard Chakra Version",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    members: [avatar10, avatar4],
    budget: "Not set",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "Redesign New Online Shop",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const timelineData = [
  {
    logo: FaBell,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
];
export const rtlDashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "نسخة Argon Dashboard Chakra",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "إضافة مسار التقدم",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "إصلاح أخطاء النظام الأساسي",
    members: [avatar10, avatar4],
    budget: "غير مضبوط",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "إطلاق تطبيق الهاتف المحمول الخاص بنا",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "أضف صفحة التسعير الجديدة",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "إعادة تصميم متجر جديد على الإنترنت",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: "$2400, تغييرات في التصميم",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "طلب جديد #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "مدفوعات الخادم لشهر أبريل",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "تمت إضافة بطاقة جديدة للطلب #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "فتح الحزم من أجل التنمية",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "طلب جديد #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Esthera Jackson",
    email: "alexa@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Alexa Liras",
    email: "laurent@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "12/05/21",
  },
  {
    logo: avatar3,
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    subdomain: "Executive",
    domain: "Projects",
    status: "Online",
    date: "07/06/21",
  },
  {
    logo: avatar4,
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/11/21",
  },
  {
    logo: avatar5,
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "21/01/21",
  },
  {
    logo: avatar7,
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    subdomain: "Designer",
    domain: "UI/UX Design",
    status: "Offline",
    date: "04/09/20",
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "Chakra UI Version",
    budget: "$14,000",
    status: "Working",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2022, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2022, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2022, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2022, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2022, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2022, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];

export const pageVisits = [
  {
    pageName: "Shaharyar Raja",
    visitors: "shaharyar@gmail.com",
    uniqueUsers: "03115163419",
    bounceRate: "None",
    commission : "20%"
  },
  {
    pageName: "Abdul Wahab",
    visitors: "wahabmaliq@gmail.com",
    uniqueUsers: "03115163419",
    bounceRate: "Shaharyar",
    commission : "10%"
  },
  {
    pageName: "Umer Farooq",
    visitors: "umerFarooq@gmail.com",
    uniqueUsers: "03115163419",
    bounceRate: "None",
    commission : "15%"
  },
  {
    pageName: "Shanzae Khan",
    visitors: "shanzae@gmail.com",
    uniqueUsers: "03115163419",
    bounceRate: "None",
    commission : "20%"
  },
  {
    pageName: "Abdullah",
    visitors: "abdullah@gmail.com",
    uniqueUsers: "03115163419",
    bounceRate: "Javeria Script" ,
    commission : "10%"
  },
]

export const socialTraffic = [
  {
    referral: "Facebook",
    visitors: "1,480",
    percentage: 60,
    color: "orange",
  },
  {
    referral: "Facebook",
    visitors: "5,480",
    percentage: 70,
    color: "orange",
  },
  {
    referral: "Google",
    visitors: "4,807",
    percentage: 80,
    color: "cyan",
  },
  {
    referral: "Instagram",
    visitors: "3,678",
    percentage: 75,
    color: "cyan",
  },
  {
    referral: "Twitter",
    visitors: "2,645",
    percentage: 30,
    color: "orange",
  }
]

export const affiliatedummyData = [
  {
    "_id": "641c858e30d54c8400a8bb22",
    "id": "aff44",
    "accountStatus": "active",
    "name": "John Smith",
    "email": "john.smith@example.com",
    "password": "$2a$10$3eFu5b5zx9W5Q8ujZKtPsoo7pG/WtF5z8ZX0Jxt3qN3vUP9X5DW8G",
    "phoneNumber": "1234567890",
    "address": "123 Main St",
    "refferalID": "aff43",
    "bankAccountNo": "9876543210",
    "affiliateDeals": [],
    "sales": 500,
    "ordersPlaced": [
      "641d7906bf8fba129acd44d8",
      "641d881eb3b611d748c5960e"
    ],
    "revenue": 2000,
    "commission": 0.1,
    "amountPaid": 3000,
    "amountRemaining": 1000,
    "__v": 0
  } ,
  {
    "_id": "641c858e30d54c8400a8bb22",
    "id": "aff44",
    "accountStatus": "active",
    "name": "John Smith",
    "email": "john.smith@example.com",
    "password": "$2a$10$3eFu5b5zx9W5Q8ujZKtPsoo7pG/WtF5z8ZX0Jxt3qN3vUP9X5DW8G",
    "phoneNumber": "1234567890",
    "address": "123 Main St",
    "refferalID": "aff43",
    "bankAccountNo": "9876543210",
    "affiliateDeals": [],
    "sales": 500,
    "ordersPlaced": [
      "641d7906bf8fba129acd44d8",
      "641d881eb3b611d748c5960e"
    ],
    "revenue": 2000,
    "commission": 0.1,
    "amountPaid": 3000,
    "amountRemaining": 1000,
    "__v": 0
  }
  ,
  {
    "_id": "641c858e30d54c8400a8bb23",
    "id": "aff45",
    "accountStatus": "pending",
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "password": "$2a$10$eV5vGn1ji.Tz8.hiPCtRSez.bQ2MiVmUDWuztDg/u5Up5a5nt3IOK",
    "phoneNumber": "9876543210",
    "address": "456 Oak Ave",
    "refferalID": "aff43",
    "bankAccountNo": "1234567890",
    "affiliateDeals": [],
    "sales": 250,
    "ordersPlaced": [
      "641d7906bf8fba129acd44d7",
      "641d881eb3b611d748c5960f"
    ],
    "revenue": 1000,
    "commission": 0.05,
    "amountPaid": 1500,
    "amountRemaining": 500,
    "__v": 0
  }
  ,
  {
    "_id": "641c858e30d54c8400a8bb24",
    "id": "aff46",
    "accountStatus": "active",
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "password": "$2a$10$K1gCMY19RWKjDpxrW8zv7OJaK.zO1quFQKxW8AaA9Xc0KjytNRb5C",
    "phoneNumber": "5555555555",
    "address": "789 Elm St",
    "refferalID": "aff43",
    "bankAccountNo": "5555555555",
    "affiliateDeals": [],
    "sales": 1000,
    "ordersPlaced": [
      "641d7906bf8fba129acd44d6",
      "641d881eb3b611d748c5960c"
    ],
    "revenue": 400 ,
    "commission": 0.25,
    "amountPaid": 1500,
    "amountRemaining": 500,
    "__v": 0      
  }
  
]

export const orderDummyData = [
  {
    "statusDetails": {
        "orderStatus": "pending",
        "paymentStatus": "commission-paid",
        "amountPaid": 1000,
        "affiliatePendingAmount": true
    },
    "customerDetails": {
        "name": "customerName1",
        "email": "customer1@gmail.com",
        "phoneNumber": "03115163419",
        "city": "rawalpindi",
        "street": "bilal habshi road"
    },
    "_id": "6435e92b19a24e454ec583da",
    "dateSold": "2023-03-23T16:51:57.738Z",
    "cardType": "standard",
    "totalAmount": 1799,
    "saleBy": "641c858e30d54c8400a8bb21",
    "__v": 0
  }
  ,

  {
    "statusDetails": {
        "orderStatus": "completed",
        "paymentStatus": "commission-pending",
        "amountPaid": 0,
        "affiliatePendingAmount": false
    },
    "customerDetails": {
        "name": "customerName2",
        "email": "customer2@gmail.com",
        "phoneNumber": "0321567890",
        "city": "Lahore",
        "street": "Gulberg"
    },
    "_id": "6435e92b19a24e454ec583db",
    "dateSold": "2023-03-24T10:30:45.123Z",
    "cardType": "custom",
    "totalAmount": 2499,
    "saleBy": "641c858e30d54c8400a8bb21",
    "__v": 0
  } ,

  {
    "statusDetails": {
        "orderStatus": "cancelled",
        "paymentStatus": "commission-unpaid",
        "amountPaid": 500,
        "affiliatePendingAmount": true
    },
    "customerDetails": {
        "name": "customerName3",
        "email": "customer3@gmail.com",
        "phoneNumber": "0331478523",
        "city": "Karachi",
        "street": "Clifton"
    },
    "_id": "6435e92b19a24e454ec583dc",
    "dateSold": "2023-03-25T15:45:30.987Z",
    "cardType": "business",
    "totalAmount": 3799,
    "saleBy": "641c858e30d54c8400a8bb21",
    "__v": 0
  } ,

  {
    "statusDetails": {
        "orderStatus": "processing",
        "paymentStatus": "commission-pending",
        "amountPaid": 0,
        "affiliatePendingAmount": false
    },
    "customerDetails": {
        "name": "customerName4",
        "email": "customer4@gmail.com",
        "phoneNumber": "0341597532",
        "city": "Islamabad",
        "street": "F-8"
    },
    "_id": "6435e92b19a24e454ec583dd",
    "dateSold": "2023-03-26T09:15:20.567Z",
    "cardType": "standard",
    "totalAmount": 1799,
    "saleBy": "641c858e30d54c8400a8bb21",
    "__v": 0
  }

]