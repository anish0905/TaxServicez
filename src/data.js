// import{SiOpenaigym}from "react-icons/si"
import{FcMoneyTransfer}from "react-icons/fc";
import {GiPayMoney} from "react-icons/gi";
 import{GiReceiveMoney} from "react-icons/gi";
 import{GrMoney} from "react-icons/gr";
 import{RiWechatPayLine}from "react-icons/ri";
 import{FaFileSignature} from "react-icons/fa";

export const links = [
    {
        name:"Home",
        path:"/"
    },
    {
          name:"About",
           path:"/about"
    },
    {
        name:"Services",
        path:"/services"
    },

    {
        name:"Portal",
        path:"/selfservice"
    },
    {
        name:"Blogs",
        path:"/blogshome"
    },
    {
        name:"Contact",
        path:"/contact"
    }
]

export const programs=[
{
    id:1,
    icons:<FcMoneyTransfer/>,
    title:"ITR Filing ",
    info:"Fulfill Your Civic Duty: File Your Income Tax Like a Responsible Citizen of India..",
    path:"/itrservices"
},
{
    id:2,
    icons:<GiPayMoney/>,
    title:"GST Registration & Filing",
    info:"GST Compliance Made Easy: Timely Filing of Monthly, Quarterly, and Annual Returns for Registered Businesses. ",
    path:"/gstservices"
},
{
    id:3,
    icons:<GiReceiveMoney/>,
    title:"TDS/TCS Return Filing and Correction",
    info:"Stay Compliant with the Income Tax Act: Timely Filing of TDS/TCS Returns for Payers and Deductors",
    path:"/tds/tcs"
},
{
    id:4,
    icons:<GrMoney/>,
    title:"Form 16, 16A, 16B,27D and 27EQ",
    info:"Seamless TDS/TCS Certificate Generation: Effortlessly Obtain Your Certificates Online..",
    path:"/formgeneration"
},

{
    id:5,
    icons:<RiWechatPayLine/>,
    title:"PAN Application & Correction",
    info:"Crucial for Taxpayers: PAN Card as the Primary Identification for Income Tax Department.",
    path:"/pancard"
},
{
    id:6,
    icons:<RiWechatPayLine/>,
    title:"TDS/TCS, ADVANCE TAX, SELF ASSESSMENT TAX ",
    info:"Effortless Payment of Direct Taxes: Simplifying the Process for Taxpayers.",
    path:"/tdsself"
},


{
    id:7,
    icons:<GrMoney/>,
    title:"Form 26QB Filing and Correction",
    info:"Simplified TDS Payment: Understanding Form 26QB for Tax Deductions under Section 194-IA of Income Tax Act, 1961.",
    path:"/form26QB"
},
{
    id:8,
    icons:<RiWechatPayLine/>,
    title:"TAN Application",
    info:"Understanding TAN: Essential for TDS/TCS Deductors and Collectors to Obtain Tax Deduction and Collection Account Number.",
    path:"/tanapplication"
},
{
    id:9,
    icons:<FaFileSignature/>,
    title:"DSC-Digital Signature Certificate",
    info:"Secure Your Digital Transactions: Digital Signature Certificate (DSC) as an Encrypted Stamp to Verify Origin of Information.",
    path:"/digitalsignaturecertificate"
},

]

export const portal=[
{
    id:1,
    icons:<FcMoneyTransfer/>,
    title:"ITR Filing ",
    info:"Fulfill Your Civic Duty: File Your Income Tax Like a Responsible Citizen of India.",
    path:"https://eportal.incometax.gov.in/iec/foservices/#/login"
},
{
    id:2,
    icons:<GiPayMoney/>,
    title:"GST Registration & Filing",
    info:"GST Compliance Made Easy: Timely Filing of Monthly, Quarterly, and Annual Returns for Registered Businesses. ",
    path:"https://services.gst.gov.in/services/login"
},
{
    id:3,
    icons:<GiReceiveMoney/>,
    title:"TDS/TCS Return Filing and Correction",
    info:"Stay Compliant with the Income Tax Act: Timely Filing of TDS/TCS Returns for Payers and Deductors",
    path:"https://www.protean-tinpan.com/services/etds-etcs/etds-rpu.html"
},


{
    id:4,
    icons:<RiWechatPayLine/>,
    title:"PAN Application & Correction",
    info:"Crucial for Taxpayers: PAN Card as the Primary Identification for Income Tax Department.",
    path:"https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
},
{
    id:5,
    icons:<RiWechatPayLine/>,
    title:"TDS/TCS, ADVANCE TAX, SELF ASSESSMENT TAX ",
    info:"Effortless Payment of Direct Taxes: Simplifying the Process for Taxpayers.",
    path:"https://onlineservices.tin.egov-nsdl.com/etaxnew/tdsnontds.jsp"
},



{
    id:6,
    icons:<RiWechatPayLine/>,
    title:"TAN Application",
    info:"Understanding TAN: Essential for TDS/TCS Deductors and Collectors to Obtain Tax Deduction and Collection Account Number.",
    path:"https://tin.tin.nsdl.com/tan/form49B.html"
},


]


export const faqs=[
    {
        id:1,
        question:"What is GST ?",
        answer:"GST simply means Goods and Service Tax. It is a destination-based tax on the consumption of goods and services in India."
    },
    {
        id:2,
        question:"Who should file GST return ?",
        answer:"All business owners and dealers who have registered under the GST system must file GST returns according to the nature of their business or transactions. Regular Businesses. Businesses registered under the Composition Scheme. Other types of business owners and dealers."
    },
    {
        id:3,
        question:"What is the purpose of TDS return ?",
        answer:"The concept of TDS was introduced with an aim to collect tax from the very source of income. As per this concept, a person (deductor) who is liable to make payment of specified nature to any other person (deductee) shall deduct tax at source and remit the same into the account of the Central Government."
    },
    {
        id:4,
        question:"What is TDS and TDS return?",
        answer:" TDS Return is a quarterly statement submitted by the deductor to the Income Tax Department. The statement shows a summary of all the entries for TDS collected by the deductor and the TDS paid by the deductor to the Income Tax Authority"
    },
    {
        id:5,
        question:"Is it compulsory to file TDS return?",
        answer:" As per Section 206 of Income Tax Act all corporate and government deductors are compulsorily required to file their TDS return on electronic media (i.e. e-TDS returns). However, for other Deductors, filing of e-TDS return is optional."
    },
    {
        id:6,
        question:"What is self Assessment Tax payment?",
        answer:" Self Assessment Tax means the amount that an assessee pays on the requisite income after deducting Advance Tax and TDS for the given financial year. Individuals who are required to file their income tax returns are liable to pay their SAT beforehand."
    },
    {
        id:7,
        question:"What is the time limit for correction of 26QB?  ",
        answer:"The statement of returns of such TDS payment will have to be filed by the buyer to the Income Tax Department in Form 26 QB, within 30 days from the date on which such tax was deducted by the buyer"
    } ,  
    {
        id:8,
        question:"I am running a business. I wish to know what is advance tax and when do I need to pay it ?",
        answer:"The assessment of income of an year can be made only after year has passed, advance tax is pre payment of your tax liability in the year it is earned. If the tax liability is more than Rs 10,000 in a financial year then advance tax needs to be paid by assessee. The due dates are 15th June(15%)15th Sept(45%)15th December (75%)15th March (100%) Under our Business Tier-2 Plan, ClearTax experts will help you access your advance tax liability and assist you in its timely payment."
    }   
]


 export const testimonials=[
    {
        id:1,
        name:"Veer Abhimanyu kr Singh",
        quote:"I do recommend this company toI do recommend this company to anyone. Tax Servicez did an exceptional job at preparing my income tax return. I have recommended this company to my fellow employees. I was happy that I chose Tax Servicez",
        job:"Chief Manager,BOI",
        avatar : require ("./image/veer.JPG")
    },
    {
        id:2,
        name:"Kanchan Singh",
        quote: "I've been taking services from “Tax Servicez”  since 2021 and they've helped me focus on my work while they manage the heavy lifting with taxes and paperwork.",
        job:"PO,BOI",
        avatar:require("./image/kanchan.jpeg")
    },
    {
        id:3,
        name:"Abhishek Verma",
        quote: "I've been a customer for 2 years and I highly recommend Tax Servicez. It's simple, easy and saves my time and money. I wish I had this earlier, I strongly recommend everybody to use this portal. It's (the) one-point solution to all your tax queries. It's fantastic.... ",
        job:"Analytics",
        avatar:require("./image/abhishek.jpeg")
    },
    {
        id:4,
        name:"Anish Kumar",
        quote: "I hired the services of the Tax Servicez when I needed the experience of a well-versed tax professional. After a detailed 10-minute phone conversation, I decided that Tax Service Wings was the right company to manage my affairs ",
        job:"Developer",
        avatar:require("./image/anish.jpg")
    },
    {
        id:5,
        name:"Shaurya Kumar Singh",
        quote: "Tax Servicez has been tremendously valuable to me over the past few years. They are efficient, reliable, and extremely personable.. You will feel like you are the only client. Refreshing and a great value ",
        job:"Civil Engineer",
        avatar:require("./image/shaurya.jpeg")
    }
    
 ];


// =============================PLANS=============================================================

 
// ==========================GST SECTION=================================================================================

 export const gstSection =[
    {
        id:1,
        name:"GST Registration ",
        path:"/gstservices",
        desc:" ",
        price:2500,

        features:[
            {feature:'1. PAN card',available:true},
            {feature:'2. Proof of business registration',available:true},
            {feature:'3. Identity',available:true},
            {feature:'4.Photographs',available:true},
            {feature:'5. Address proof of person in charge',available:true},
            {feature:'6.Business address proof',available:true},
            {feature:'7.Bank account statement',available:true},
            {feature:'8. Aadhaar Card',available:true},
        ]
    },
    {
        id:2,
        name:"GST Registration for HUFs",
        path:"/gstservices",
        desc:"",
        price:2500,

        features:[
            {feature:'1.	HUF’s PAN card',available:true},
            {feature:'2.	Karta’s PAN card',available:true},
            {feature: '3.	Owners photograph',available:true},
            {feature:'4.	Bank detail',available:true},
            {feature:'5.	Business principal address proof',available:true},
            {feature:'.',available:false},
           
           
        ]
    },
    {
        id:3,
        name:"GST Registration for Partnership and LLPs",
        path:"/gstservices",
        desc:"",
        price:2500,

        features:[
            {feature:'1.	Partnership deed',available:true},
            {feature:'2. 	PAN card of partners involved.',available:true},
            {feature: '3.	Photographs of partners involved.',available:true},
            {feature:'4.	Address Proof of partners involved.',available:true},
            {feature:'5.	Aadhaar card of any authorised signatory',available:true},
            {feature:'6.	Signatory’s proof of appointment ',available:true},
            {feature:'7.	LLP proof of registration ',available:true},
             {feature:'8.	Bank details ',available:true},
            {feature:'9.	Business principal address proof ',available:true},
           
        ]
    },
    {
        id:4,
        name:"GST Registration for Companies",
        path:"/gstservices",
        desc:"",
        price:2500,

        features:[
            {feature:'1.	Company PAN card',available:true},
            {feature:'2.	The Ministry of Corporate Affairs incorporation certificate',available:true},
            {feature:'3.	Memorandum/Article of Association',available:true},
            {feature:'4.	Signatory’s appointment proof',available:true},
            {feature:'5.	Signatory’s PAN card',available:true},
            {feature:'6.	Signatory’s Aadhaar card',available:true},
            {feature:'7.	PAN card of all directors',available:true},
            {feature:'8.	Address proof of all directors ',available:true},
            {feature:'9.	Bank details',available:true},
            {feature:'10.	Business principal address proof',available:true},
           
        ]
    },
    {
        id:5,
        name:"GST Registration for Society or club",
        path:"/gstservices",
        desc:"",
        price:2500,

        features:[
            {feature:'1.	A copy of societies or club registration certificate',available:true},
            {feature:'2.	A copy of societies or club PAN card and the associated partners or promoters',available:true},
            {feature: '3.	Photographs of partners or promoters',available:true},
            {feature:'4.	A copy of bank account statement/ crossed cheque/ passbook’s first page',available:true},
            {feature:'5.	Proof of registered office’s address, including utility bills, document of legal ownership/ municipal account (bahi-khata) copies for premises owned by the society or club. In the case of rented premises, a rent agreement as well as NOC from the premise’s owner.',available:true},
            {feature:'6.	Authorization letter signed by authorized signatory/ signatories',available:true},
            {feature:'.',available:true},
          
           
        ]
    },
    {
        id:6,
        name:"GSTR1 Filing",
        path:"/gstservices",
        desc:"(Upto 100 Invoices)",
        price: 1200,
        

        features:[
            {feature:'1.	A copy of societies or club registration certificate',available:true},
            {feature:'2.	A copy of societies or club PAN card and the associated partners or promoters',available:true},
            {feature: '3.	Photographs of partners or promoters',available:true},
            {feature:'4.	A copy of bank account statement/ crossed cheque/ passbook’s first page',available:true},
            {feature:'5.	Proof of registered office’s address, including utility bills, document of legal ownership/ municipal account (bahi-khata) copies for premises owned by the society or club. In the case of rented premises, a rent agreement as well as NOC from the premise’s owner.',available:true},
            {feature:'6.	Authorization letter signed by authorized signatory/ signatories',available:true},
            {feature:'.',available:true},
          
           
        ]
    },
    {
        id:7,
        name:"GSTR1 Filing",
        path:"/gstservices",
        desc:"(More than 100 invoices-Upto 300 Invoices)",
        price: 2000,
        

        features:[
            {feature:'1.	A copy of societies or club registration certificate',available:true},
            {feature:'2.	A copy of societies or club PAN card and the associated partners or promoters',available:true},
            {feature: '3.	Photographs of partners or promoters',available:true},
            {feature:'4.	A copy of bank account statement/ crossed cheque/ passbook’s first page',available:true},
            {feature:'5.	Proof of registered office’s address, including utility bills, document of legal ownership/ municipal account (bahi-khata) copies for premises owned by the society or club. In the case of rented premises, a rent agreement as well as NOC from the premise’s owner.',available:true},
            {feature:'6.	Authorization letter signed by authorized signatory/ signatories',available:true},
            {feature:'.',available:true},
          
           
        ]
    },
    
]




// ============================ITR SECTION==========================================


export const itrSection =[

    {
        id:1,
        name:"ITR-1	",
        desc:"  ",
        price:499,

        features:[
            {feature:'1.	Form -16 issued by your employer.',available:true},
            {feature:'2.	Month wise salary slips/ Pension/Bonus (with all allowances)',available:true},
            {feature:'3. Bank Statements (for interest on saving bank) + (minor’s interest on saving bank).',available:true},
            {feature:'4.	House Property Income',available:true},
            {feature:'5.	Other Income ',available:true},
            {feature:'6.	All Investments Details (PPF/NSC/ ULIPS/LIC/Child Tuition fees etc',available:true},
            {feature:'7.	Home Loan Details (if any)',available:true},
            {feature:'8. Mediclaim',available:true},
            {feature:'9.	Agriculture income above 5000/-',available:true},
            {feature:'10.	FDR Interest Certificate Issued by Bank ',available:true},
        ]
    },
    {
        id:2,
        name:"ITR -2	",
        desc:"  ",
        price:699,

        features:[
            {feature:'1.Income From Salary/ Pension/ form 16',available:true},
            {feature:'2.	Income from House Property',available:true},
            {feature:'3.	Income From Capital Gains',available:true},
            {feature:'4.    Income From Other Sources (Interest on Saving Bank & Other Income)',available:true},
            {feature:'5.	All Investments Details (PPF/NSC/ULIP/LIC/Child Tuition Fees/etc.) ',available:true},
            {feature:'6.	Dividend ',available:true},
            {feature:'7.	Mediclaim',available:true},
            {feature:'8.	Agriculture Income above 5000/- ',available:true},
            {feature:'9.	Bank Statements',available:true},
            {feature:'10.	FDR Interest Certificate Issued by Bank  ',available:true},
        ]
    },
    {
        id:3,
        name:"	ITR-3",
        desc:"  ",
        price:999,

        features:[
            {feature:'1.	Form 16 issued by employer in case salary income is earned. ',available:true},
            {feature:'2.	Month wise salary slip where form 16 is not issued by the employer in case salary income is earned.',available:true},
            {feature:'3. 	Bank Statements (for interest on saving bank)',available:true},
            {feature:'4.	Income From House Property',available:true},
            {feature:'5.	Capital Gains or Losses Details  ',available:true},
            {feature:'6.	Profit & Loss Account details of Proprietorship Business ',available:true},
            {feature:'7.	All Investments Details (PPF/NSC/ULIP/LIC/Child Tuition Fees/etc.)',available:true},
            {feature:'8.	Mediclaim',available:true},
            {feature:'9.	Home Loan ',available:true},
            
        ]
    },
]

// ========================TCS/TDS==============================================================
export const tcsTds =[

    {
        id:1,
        name:"TDS/TCS Return Filing	",
        desc:"  ",
        price:399,

        features:[
            {feature:'1.	TDS/ TCS Challan Payment Details ',available:true},
            {feature:'2.	Deductor’s TAN Details',available:true},
            {feature:'3. PAN Details of Deductees- Whose TDS has Deducted by Deductor',available:true},
            {feature:'4. Summarize chart: - Section, Rate, Date, Gross Amount, TDS Amount ',available:true},
            {feature:'5.	Late Filing Fees and Interest on Late Challan Payment – If you have',available:true},
            {feature:'6.	 Final Submit with Aadhar OTP',available:true},
           
        ]
    },
]




// ================================Form 26QB:================================


export const formQb  =[

    {
        id:1,
        name:"Form 26QB Filing	",
        desc:" ",
        price:1500,

        features:[
            {feature:'1.	Sale Deed Required ',available:true},
            {feature:'2.	Seller Pan/ Adhar Details and Address ',available:true},
            {feature:'3. Purchaser Pan/ Adhar Details and address',available:true},
            {feature:'4.  Address Details of Property',available:true},
          
           
        ]
    },
    {
        id:2,
        name:"Form 26QB Correction	",
        desc:" ",
        price:500,

        features:[
            {feature:'1.	Sale Deed Required ',available:true},
            {feature:'2.	Seller Pan/ Adhar Details and Address ',available:true},
            {feature:'3. Purchaser Pan/ Adhar Details and address',available:true},
            {feature:'4.  Address Details of Property',available:true},
          
           
        ]
    },
]


// ================================PAN CARD==========================================
export const panCard =[

    {
        id:1,
        name:"	PAN Card Application / Correction",
        desc:"Anyone can apply for a PAN card as there is no age limit. ",
        price:149,

        features:[
            {feature:'1.	Aadhar Card ',available:true},
            {feature:' 2.	Passport Size Photo ',available:true},
            {feature:'3.	Voter ID Card',available:true},
            {feature:'4.	Passport',available:true},
            {feature:'5.	Ration card with the applicant’s photo.',available:true},
            {feature:'6.	Driving License',available:true},
            {feature:'7.	Arm’s License',available:true},
            {feature:'8.	Photo ID Card (issued by the Central Govt./ State Govt. / Underrating public sector).',available:true},
            {feature:'9.	Pensioner’s cards copy with the applicant’s photograph.',available:true},
            {feature:'10.	Bank Statement',available:true},
          
           
        ]
    },
]





//==========================================TAN Application ===============================================


export const tanApplication =[

    {
        id:1,
        name:"TAN Application	",
        desc:" ",
        price:199,

        features:[
            {feature:'1.	Pan Card ',available:true},
            {feature:'2.	Personal information of Deductor like Name, Address, Contact Details, etc. ',available:true},
            {feature:'3.	Digital Signature Certificate (DSC) of responsible person of company',available:true},
            {feature:'4.	Details of responsible person',available:true},
            {feature:'5.	Incorporation certificate of companies',available:true},
          
           
        ]
    },
]



//=====================================================DSC================================================================================

export const dsc=[

    {
        id:1,
        name:" Digital Signature Certificate 	",
        desc:"Only Signature- 1200 Signature + Encryption- 3500",
        price: 3500,

        features:[
            {feature:'1.	Aadhaar (eKYC Service) ',available:true},
            {feature:'2.	Electricity Bill ',available:true},
            {feature:'3.	Telephone Bill',available:true},
            {feature:'4.	Gas Connection',available:true},
            {feature:'5.	Water Bill',available:true},
            {feature:'6.	Service Tax/ Sales Tax/ VAT Tax registration certificate',available:true},
            {feature:'7.	Bank statement signed by the bank.',available:true},
            {feature:'8.	Driving License or Registration Certificate',available:true},
           
           
        ]
    },
]




//=========Form 16, 16A, 16B, 27D, 27EQ==============================================================================================================

export const form16=[

    {
        id:1,
        name:" Form 16, 16A, 16B, 27D, 27EQ ",
        desc:"",
        price: 250,

        features:[
            {feature:'1.	Traces Portal – Login ID/ Password ',available:true},
            {feature:'2.	Last TDS/ TCS/ 26QB – Filing Details ',available:true},
            {feature:'3.	TDS/ TCS/ 26QB – Filing Acknowledgement Receipt',available:true},
            
           
           
        ]
    },
]




//===============================TDS TCS/payment/directtax/selfassessment=================================================================================
export const tdsSelfassessment=[

    {
        id:1,
        name:" TDS/TCS, ADVANCE TAX, SELF ASSESSMENT TAX ",
        desc:"",
        price: 200,

        features:[
            {feature:'1.	PAN Card Number ',available:true},
            {feature:'2.	TAN	 ',available:true},
                 
        ]
    },
]



// ===========Blogs List================================================================================================================

export const blogList=[
    {
        id:1,
        title:"GST",
        category:'GST Registration',
        subCategory:["Gst","UI",'Design'],
      

        first:"tasbcvjkdnvk ivbtjnvb",
        second:"1. ioujifuuiojfgruig  ff bh ",
        third: "ifuhhug ujrfhud jhrtufhn urye",
        forth:"uyyuygtyyttttyyyyjjjfggghhhh",
        authorName:"jhone Doe",

        authorAvatar: require ("./image/veer.JPG"),
        createdAt:"Marchv 25,2023",
        covers : require ("./image/abhishek.jpeg")

    },
//     {
//         id:2,
//         title:"7 React",
//         category:'tax',
//         subCategory:["Gst","UI",'Design'],
//         discription:"lorem20 5fgg dddddd    sssss  rfreg        yy ssslorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss",

//         authorName:"jhone Doe",

//         authorAvatar: require ("./image/veer.JPG"),
//         createdAt:"Marchv 25,2023",
//         covers : require ("./image/abhishek.jpeg")

//     },
//     {
//         id:3,
//         title:"7 Reactjjjjjjjjj kkk oi8y   hughu  fyf yf uyyhg uif  fg  gkig bh f  gf t  v   hj y ty f",
//         category:'tax',
//         subCategory:["Gst","UI",'Design'],
//         discription:"lorem20 5fgg dddddd    sssss  rfreg        yy ssslorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss",

//         authorName:"jhone Doe",

//         authorAvatar: require ("./image/veer.JPG"),
//         createdAt:"Marchv 25,2023",
//         covers : require ("./image/abhishek.jpeg")

//     },
//     {
//         id:4,
//         title:"7 Reactjjjjjjjjj kkk oi8y   hughu  fyf yf uyyhg uif  fg  gkig bh f  gf t  v   hj y ty f",
//         category:'itr',
//         subCategory:["Gst","UI",'Design'],
//         discription:"lorem20 5fgg dddddd    sssss  rfreg        yy ssslorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss",

//         authorName:"jhone Doe",

//         authorAvatar: require ("./image/veer.JPG"),
//         createdAt:"Marchv 25,2023",
//         covers : require ("./image/abhishek.jpeg")

//     },
//     {
//         id:5,
//         title:"7 Reactjjjjjjjjj kkk oi8y   hughu  fyf yf uyyhg uif  fg  gkig bh f  gf t  v   hj y ty f",
//         category:'itr',
//         subCategory:["Gst","UI",'Design'],
//         discription:"lorem20 5fgg dddddd    sssss  rfreg        yy ssslorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss",

//         authorName:"jhone Doe",

//         authorAvatar: require ("./image/veer.JPG"),
//         createdAt:"Marchv 25,2023",
//         covers : require ("./image/abhishek.jpeg")

//     },
//     {
//         id:6,
//         title:"7 Reactjjjjjjjjj kkk oi8y   hughu  fyf yf uyyhg uif  fg  gkig bh f  gf t  v   hj y ty f",
//         category:'tax',
//         subCategory:["Gst","UI",'Design'],
//         discription:"lorem20 5fgg dddddd    sssss  rfreg        yy ssslorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss lorem20 5fgg dddddd    sssss  rfreg yy sss lorem20 5fgg dddddd    sssss  rfreg        yy sss",

//         authorName:"jhone Doe",

//         authorAvatar: require ("./image/veer.JPG"),
//         createdAt:"Marchv 25,2023",
//         covers : require ("./image/abhishek.jpeg")

//     },
    
]