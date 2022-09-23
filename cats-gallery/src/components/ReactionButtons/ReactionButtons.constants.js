import styles from '../voting/voting.module.scss'
import currentReactionSmile from '../img/Vector(Stroke123).png'
import currentReactionLike from '../img/Vector 348 (Stroke)1.png'
import currentReactionSad from '../img/Vectorfvf (Stroke).png'
import smile from '../img/Vector (Stroke) (1242).png'
import heart from '../img/VectorStroke1232.png'
import sad from '../img/Vector (Stroke) (122).png'

const reactionsButtonsList=[
    [`${styles.currentReaction} ${styles.smile}`, 'smile', {currentReactionSmile},`${smile}`],
    [`${styles.currentReaction} ${styles.like}`,'like',{currentReactionLike},`${heart}`],
    [`${styles.currentReaction} ${styles.sad}`,'sad',{currentReactionSad},`${sad}`]
]

export default reactionsButtonsList