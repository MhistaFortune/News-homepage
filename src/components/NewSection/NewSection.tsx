import styles from './NewSection.module.css';

const articles = [
    {
        title: 'Hydrogen VS Electric Cars',
        desc: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        title: 'The Downsides of AI Artistry',
        desc: 'What are the possible shifts in the next year?'
    },
    {
        title: 'Is VC Funding Drying Up?',
        desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
];

const NewSection = () => {
    return (
        <aside className={styles.newContainer}>
            <h2 className={styles.sectionTitle}>New</h2>
            <div className={styles.articlesList}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.articleItem}>
                        <h3 className={styles.articleTitle}>{article.title}</h3>
                        <p className={styles.articleDesc}>{article.desc}</p>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default NewSection;
