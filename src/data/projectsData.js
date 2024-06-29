import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'RepoRover',
        projectDesc: 'This is a developer tool capable of helping users understand GitHub repositories with chat assistant built on top of GPT-3.5 Turbo.',
        tags: ['Python', 'Langchain', 'OpenAI', 'FAISS'],
        code: 'https://github.com/DevTechCollective/RepoRover',
        demo: 'https://reporover.streamlit.app/',
        image: one,
        tag: ['AI/ML'],
    },
    {
        id: 2,
        projectName: 'NLP Sentiment and Newsgroup Classifier',
        projectDesc: 'Full end-to-end NLP cliassification project, including data clearning, extraction, featurization, and model architecting',
        tags: ['Python', 'Pytorch', 'NLTK', 'Re'],
        code: '',
        demo: '',
        image: one,
        tag: ['AI/ML']
    },
    {
        id: 3,
        projectName: 'Algorithmic Pricing Tournament',
        projectDesc: 'Head-to-head game theory pricing tournament algorithm.',
        tags: ['Python', 'Sci-kit-Learn', 'XGBoost', ' NumPy', 'Pandas'],
        code: 'https://github.com/Marcozc19/Competitive-Pricing-Algorithm',
        demo: 'https://github.com/Marcozc19/Competitive-Pricing-Algorithm',
        image: two,
        tag: ['Data']
    },
    {
        id: 4,
        projectName: 'Minitorch',
        projectDesc: 'Re-implementation of the deep learning framework PyTorch',
        tags: ['Python', 'NumPy', 'Numba', 'CUDA'],
        code: 'https://github.com/Marcozc19/Minitorch',
        demo: 'https://minitorch.github.io/',
        image: three,
        tag: ['AI/ML']
    },
    {
        id: 5,
        projectName: 'CVRP Optimization Research',
        projectDesc: 'This project involves the development of an Android application for viewing and managing patient data.',
        tags: ['Python', 'Heuristic Algorithm', 'Gurobi'],
        code: 'https://github.com/Marcozc19/public.github.io/tree/main/Operations%20Research%20-%20CVRP%20Project',
        demo: 'https://github.com/Marcozc19/public.github.io/blob/main/Operations%20Research%20-%20CVRP%20Project/Final%20Thesis.pdf',
        image: four,
        tag: ['Data']
    },
    {
        id: 6,
        projectName: 'Wind Turbine Reliability Prediction',
        projectDesc: 'Machine learning model for predicting electric wind turbine maintenance requirement',
        tags: ['Python', 'TensorFlow', 'Keras', 'Sci-kit-Learn'],
        code: 'https://github.com/Marcozc19/public.github.io/tree/main/ML%20Wind%20Turbine%20Reliability%20Project',
        demo: 'https://github.com/Marcozc19/public.github.io/tree/main/ML%20Wind%20Turbine%20Reliability%20Project',
        image: five,
        tag: ['AI/ML']
    },
    {
        id: 7,
        projectName: 'OSS Hackathon - Cal.com',
        projectDesc: 'Contributed to Cal.com by integrating Sentry for performance tracking purposes',
        tags: ['Typescript'],
        code: 'https://github.com/calcom/cal.com/pull/12642',
        demo: 'https://github.com/calcom/cal.com/pull/12642',
        image: six,
        tag: ['Software']
    },
    {
        id: 8,
        projectName: 'McKinsey QuantumBlack Hackathon',
        projectDesc: 'Built solution models for manufacture scheduling optimization problems',
        tags: ['Python', 'Gurobi'],
        code: '',
        demo: '',
        image: seven,
        tag: ['Data']
    },
    {
        id: 9,
        projectName: 'CDC Heart Disease Indicator Analysis',
        projectDesc: 'Study of CDC heart disease indicator dataset using Python and R to identify key predictors and develop predictive models',
        tags: ['Python', 'R'],
        code: 'https://github.com/Marcozc19/public.github.io/tree/main/Data%20Analysis%20-%20CDC%20Heart%20Indicator',
        demo: 'https://github.com/Marcozc19/public.github.io/tree/main/Data%20Analysis%20-%20CDC%20Heart%20Indicator',
        image: eight,
        tag: ['Data']
    },
    {
        id: 10,
        projectName: 'Parkinsons Disease Indicator Analysis',
        projectDesc: "Study of Parkinson's disease data using R to explore relationships between vocal features and disease severity through regression analysis and ANOVA.",
        tags: ['R'],
        code: 'https://github.com/Marcozc19/public.github.io/tree/main/Design%20of%20Experiment%20-%20Parkinsons%20Disease%20Project',
        demo: 'https://github.com/Marcozc19/public.github.io/tree/main/Design%20of%20Experiment%20-%20Parkinsons%20Disease%20Project',
        image: eight,
        tag: ['Data']
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/