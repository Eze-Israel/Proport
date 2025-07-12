
type Product = {
    id: number;
    name: string;
    description: string;
    Details: string;
    image: string;
    TechStack: string[];
    Link:string;
    category: string;
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Computer Based Exam Site/App ',
        image: "/images/CBT-EXAM.jpg",
        Details: "React.js and CSS3 was used for the UX and funtionalities, Firebase was used for the Backend user Authentication",
        description:"Built a computer based exam web application, which allows users test their Javascript proficiency",
        TechStack: ['HTML5', 'CSS3', 'React.Js+Vite', 'FIREBASE'],
        category: "Web App",
        Link:"https://eze-israel.github.io/PGCBT/",
    },

    {
        id: 2,
        name: "CRUD APPLICATION",
        image: "/images/CRUD.jpg",
        Details: "React.js, TailwindCSS, HTML5 was used for the User Interface and funtionalities, Local Storage and Redux was used to ensure persistence",
        description: " CRUD: Create, Read, Update, Delete web application built to showcase my expertise on RestFul APIs using Axios",
        TechStack: ['HTML5',' CSS3', 'React.js+Vite' , 'TailwindCSS'],
        category: "Web App",
        Link: "https://eze-israel.github.io/CRUD/",
    },
    {
      id:3,
      name: "Emoil Logistics Company",
      image: "/images/logisticRep.jpg",
      Details: "HTML5, JavaScript, ReactJs, TailwindCss, CSS3, Other libraries was used to build the UX of from scratch to finish",
      description: "Participated in building from research gatherings to final production. A courier/Delivery website",
      TechStack: ['HTML5', 'CSS3', 'ReactJs', 'TailwindCSS', 'TypeScript', 'NextJs'],
      category:"Web site",
      Link:"https://www.emoil.com.ng/",
    },

    {
        id:4,
        name: "Book Library Application",
        image:"/images/bookList.jpg",
        Details: "Built with HTML5,CSS3,BOOTSTRAP-Loader, ReactJs, React Router-Dom, Redux-ToolKit and Firebase for userLogin Authentication ",
        description: "Its a web application that allows users to add books and keep track of books read and yet to be read",
        TechStack: ['HTML5', 'REACTJS', 'REACT-ROUTER', 'CSS3', 'FIREBASE', 'Redux-ToolKit'],
        category:"Web App",
        Link: "https://eze-israel.github.io/BooksLB/",
    },
    {
     id:5,
     name:"Next Imperial Limited",
     image: "/images/next1.png",
     Details: "Built Mainly with Nextjs Typscript and TailwindCss",
     description: "This is a Tech Training School Website.",
     TechStack: ['HTML5','NEXTJS', 'CSS3', 'JavaScript', 'TypeScript', "TAILWINDCSS", "FRAMER"],
     category:"Website",
     Link:"https://nextimperial.com",
    },
   
    {
     id:6,
     name:"My Current PortFolio Website",
     image: "/images/mylatestPortfolio.jpg",
     Details: "My latest portfolio website built with NextJs, TypeScript, Css3, Html5 and TailwindCSS Hosted on Vercel",
     description: "A website that showcases my expertise and list of projects i have done. ",
     TechStack: ['HTML5', 'NEXTJS', 'CSS3', 'TYPESCRIPT', 'TAILWINDCSS' ],
     category:"Web site",
     Link: "https://ezeisrael.vercel.app",
    },
    {
     id:7,
     name:"A PortFolio Website for UI/UX Designer",
     image: "/images/port1.jpg",
     Details: "A client's portfolio website built with NextJs, TypeScript, Css3, Html5 and TailwindCSS Hosted on Vercel",
     description: "This project showcases my expertise in building simple portfolio. ",
     TechStack: ['HTML5', 'NEXTJS', 'CSS3', 'TYPESCRIPT', 'TAILWINDCSS' ],
     category:"Web site",
     Link: "http://mumairy.vercel.app/",
    },
    {
     id:8,
     name:"An Idea Driven Project on Connecting Farmers with Buyers and Current Agricultural Trends",
     image: "/images/AGROCO.jpg",
     Details: "An Agro-Commerce website built with NextJs, TypeScript, Css3, Html5, TailwindCSS, Firebase, Framers and others Hosted on Vercel",
     description: "This project showcases my expertise in building Ecommerce Websites. ",
     TechStack: ['HTML5', 'NEXTJS', 'CSS3', 'TYPESCRIPT', 'TAILWINDCSS', 'REDUX-TOOLKIT', 'FIREBASE', 'GITHUB','VERCEL'  ],
     category:"Ecommerce",
     Link: "http://agrocom.vercel.app/",
    },
    {
     id:9,
     name:"A BASIC CRM WEBSITE",
     image: "/images/CRM.jpg",
     Details: "A CRM website built with NextJs, TypeScript, Css3, Html5 and TailwindCSS Hosted on Vercel",
     description: "This project showcases my expertise in building Dashboards. ",
     TechStack: ['HTML5', 'NEXTJS', 'CSS3', 'TYPESCRIPT', 'TAILWINDCSS' ],
     category:"Web site",
     Link: "http://crm-dashbord.vercel.app/",
    },
    {
     id:10,
     name:"User Location Pinner Website",
     image: "/images/map.jpg",
     Details: "A Map web app built with Leaflet, NextJs, TypeScript, Css3, Html5 and TailwindCSS Hosted on Vercel",
     description: "This Project shows my diversification on Map usage. ",
     TechStack: ['HTML5', 'NEXTJS', 'CSS3', 'JavaScript', 'TAILWINDCSS' , 'Leaflet'],
     category:"Web App",
     Link: "http://usermap.vercel.app/",
    },
]
export default Products;

