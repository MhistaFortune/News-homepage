import styles from './ArticleList.module.css';
import retroPc from '../../assets/images/image-retro-pcs.jpg';
import topLaptop from '../../assets/images/image-top-laptops.jpg';
import gamingGrowth from '../../assets/images/image-gaming-growth.jpg';

const articles = [
    {
        image: retroPc,
        number: '01',
        title: 'Reviving Retro PCs',
        desc: 'What happens when old PCs are given modern upgrades?'
    },
    {
        image: topLaptop,
        number: '02',
        title: 'Top 10 Laptops of 2022',
        desc: 'Our best picks for various needs and budgets.'
    },
    {
        image: gamingGrowth,
        number: '03',
        title: 'The Growth of Gaming',
        desc: 'How the pandemic has sparked fresh opportunities.'
    }
];

const ArticleList = () => {
    return (
        <section className={styles.listContainer}>
            {articles.map((article, index) => (
                <div key={index} className={styles.articleCard}>
                    <div className={styles.imageWrapper}>
                        <img src={article.image} alt={article.title} className={styles.articleImage} />
                    </div>
                    <div className={styles.content}>
                        <span className={styles.number}>{article.number}</span>
                        <h3 className={styles.title}>{article.title}</h3>
                        <p className={styles.description}>{article.desc}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ArticleList;
