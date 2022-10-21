import dasboardCard from '../styles/DashboardCard.module.css';

const DasboardCard = ({ img, title, count, text }) => {
    return (
        <div className={dasboardCard.container}>
            <header className={dasboardCard.header}>
                <img src={img} alt={title} />
            </header>
            <hr/>
            <div className={dasboardCard.content}>
                <h3 className={dasboardCard.title}>{title}</h3>
                <span>{count}</span>
            </div>
        </div>
    );
}

export default DasboardCard;
