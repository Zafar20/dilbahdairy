import s from './Loader.module.scss'
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className={s.loader}>
            <div className={s.loader__ball}></div>
        </div>
    )
}