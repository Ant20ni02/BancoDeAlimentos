import dasboardCard from '../styles/DashboardCard.module.css';

const DasboardCard = ({ img, title, count, text }) => (
    <div className={dasboardCard.container}>
        <header className={dasboardCard.header}>
            <img src={img} alt={title} />
            <h3 className={dasboardCard.title}>{title}</h3>
        </header>
        <div className={dasboardCard.content}>
            <span>{count}</span>
            <p>{text}</p>
        </div>
    </div>
);

export default DasboardCard;
