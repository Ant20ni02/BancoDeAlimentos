import emptyPage from "../styles/EmptyPage.module.css";

const EmptyPage = ({ header, image }) => {
    return (
        <div className={emptyPage.emptyPage}>
            <h1>{header}</h1>
			<img className={emptyPage.emptyImage} src={image} alt={image} />
        </div>
    );
}

export default EmptyPage;
