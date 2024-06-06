const benefitsObj = [
    {
        title: 'Ask anything',
        description: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
        color : 'blue',
    },
    {
        title: 'Improve everyday',
        description: 'The app uses natural language processing to understand user queries and provide accurate and relevant responses.',
        color : 'orange',
    },
    {
        title: 'Connect everywhere',
        description: 'Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.',
        color : 'purple',
    },
    {
        title: 'Fast responding',
        description: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
        color : 'yellowGreen',
    },
    {
        title: 'Ask anything',
        description: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
        color : 'orangeRed',
    },
    {
        title: 'Improve everyday',
        description: 'The app uses natural language processing to understand user queries and provide accurate and relevant responses.',
        color : 'darkBlue',
    },

];

export default benefitsObj ;

export const paraObj = {
    col1: 'Seamless Integration',
    col2: 'Smart Automation',
    col3: 'Top-notch Security',
};

export const pricingPlan = [
    {
        id : 1 ,
        title : 'Basic' ,
        description : 'An AI chatbot, personalized recommendations',
        price : 0 ,
        paraObj : {
            col1 : 'An AI chatbot that can understand your queries',
            col2 : 'Personalized recommendations based on your preferences',
            col3 : 'Ability to explore the app and its features without any cost',
        }
    },

    {
        id : 2 ,
        title : 'Premium' ,
        description : 'Advanced AI chatbot, priority support, analytics dashboard',
        price : 9.99 ,
        paraObj : {
            col1 : 'An advanced AI chatbot that can understand complex queries',
            col2 : 'An analytics dashboard to track your conversations',
            col3 : 'Priority support to solve issues quickly',
        }
    },

    {
        id : 3 ,
        title : 'Enterprise' ,
        description : 'Custom AI chatbot, advanced analytics, dedicated account',
        price : 15.99 ,
        paraObj : {
            col1 : 'An AI chatbot that can understand your queries',
            col2 : 'Personalized recommendations based on your preferences',
            col3 : 'Ability to explore the app and its features without any cost',
        }
    },
];

export const roadMapObj = [
    {
        id: 1,
        title: 'Voice recognition',
        description: 'Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.',
        button : 'DONE',
        image: 'roadmap-1.png',
    },
    {
        id: 2,
        title: 'Gamification',
        description: 'Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.',
        button : 'IN PROGRESS',
        image: 'roadmap-2.png',
    },
    {
        id: 3,
        title: 'Chatbot customization',
        description: `Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with`,
        button : 'DONE',
        image: 'roadmap-3.png',
    },
    {
        id: 4,
        title: 'Integration with APIs',
        description: 'Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.',
        button : 'IN PROGRESS',
        image: 'roadmap-4.png',
    },
]
