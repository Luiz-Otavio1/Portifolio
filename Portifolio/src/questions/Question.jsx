import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaInfoCircle, FaBook, FaLaptopCode } from 'react-icons/fa';
import './Question.css'

const questionAnswer = [
    {
        question: "Quem é Luiz Otávio?",
        answer: "Olá, meu nome é Luiz Otávio, tenho 16 anos e sou apaixonado por programação. Comecei a programar já faz 3 anos, lá na pandemia, porém desisti e decidi focar nela novamente há 2 meses. Meu foco atual é React.js, mas também estou me aprofundando em tecnologias como HTML, CSS, JavaScript, Git, GitHub e Tailwind CSS.",
        id: 1,
        icon: <FaInfoCircle size={30} color="#4CAF50" />
    },
    {
        question: "Como você começou a aprender programação?",
        answer: "Sempre fui apaixonado por tecnologia, então quando tinha 13 anos (2021), decidi começar a estudar programação. Vi vários vídeos de recomendações e comecei pelo front-end. Primeiro HTML, CSS e JavaScript, e logo depois me interessei por frameworks como React.js. Fui aprendendo com tutoriais online e cursos gratuitos, e estou sempre praticando criando projetos para colocar em prática o que aprendo.",
        id: 2,
        icon: <FaBook size={30} color="#F1C40F" />
    },
    {
        question: "Quais tecnologias você utiliza em seus projetos?",
        answer: [
            <FaHtml5 size={30} style={{ color: '#E34F26', transition: 'all 0.3s ease', cursor: 'pointer' }} className="tech-icon" />,
            <FaCss3Alt size={30} style={{ color: '#2965F1', transition: 'all 0.3s ease', cursor: 'pointer' }} className="tech-icon" />,
            <FaJs size={30} style={{ color: '#F7DF1E', transition: 'all 0.3s ease', cursor: 'pointer' }} className="tech-icon" />,
            <FaReact size={30} style={{ color: '#61DAFB', transition: 'all 0.3s ease', cursor: 'pointer' }} className="tech-icon" />,
            <FaGithub size={30} style={{ color: '#181717', transition: 'all 0.3s ease', cursor: 'pointer' }} className="tech-icon" />,
        ],
        id: 3,
        icon: <FaLaptopCode size={30} color="#3498DB" />
    }
];

export default questionAnswer;
