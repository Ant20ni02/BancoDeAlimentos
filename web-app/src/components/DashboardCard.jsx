const DasboardCard = ({ title, children }) => (
    <div className="dashboard-card">
        <h3 className="dashboard-card__title">{title}</h3>
        <div className="dashboard-card__content">{children}</div>
    </div>
);

export default DasboardCard;
