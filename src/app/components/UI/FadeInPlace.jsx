import { useInView } from 'react-intersection-observer';

const FadeInPlace = ({ children }) => {
    const { ref, inView } = useInView({
        // Options
        rootMargin: '-50px', // 50px過ぎたらトリガー
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0"} duration-[1s]`}
        >
            {children}
        </div>
    );
};

export default FadeInPlace;
