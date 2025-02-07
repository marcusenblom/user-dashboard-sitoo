import styles from './Pagination.module.scss';
import cn from 'classnames';

type PaginationProps = {
    pages: number[];
    currentPage: number;
    setPage: (page: number) => void;
};

export default function Pagination({ pages, currentPage, setPage }: PaginationProps) {
    return (
        <div className={styles.wrapper}>
            {pages?.length > 1 &&
                pages.map((p) => (
                    <div
                        key={p}
                        className={cn(styles.page, currentPage === p && styles.active)}
                        onClick={() => {
                            if (currentPage !== p) {
                                setPage(p);
                            }
                        }}
                    >
                        <p className={styles.number}>{p}</p>
                    </div>
                ))}
        </div>
    );
}