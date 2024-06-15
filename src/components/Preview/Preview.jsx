import { useContext } from 'react';

import { PreviewContext } from '../../store/preview-context.jsx';
import styles from './Preview.module.css';

export default function Preview() {
	const { image, title, description, statuses } = useContext(PreviewContext);

	return (
		<article className={styles.preview}>
			<div className={styles.image}>
				<div className={styles.inner}>
					<img src={image.src} alt={image.alt} />
				</div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.desc}>{description}</p>
				<ul className={styles.statuses}>
					{statuses.map((status) => (
						<li key={status.label}>
							<span className={styles.num}>{status.amount}</span>
							<span className={styles.label}>{status.label}</span>
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}
