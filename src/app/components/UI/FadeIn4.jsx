import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children, direction = 'up' }) => {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    const getTranslateValue = () => {
        switch (direction) {
            case 'down':
                return 'translate-y-[50%]';
            case 'up':
                return 'translate-y-[-50%]';
            case 'left':
                return 'translate-x-[-50%]';
            case 'right':
                return 'translate-x-[50%]';
            default:
                return 'translate-y-[-50%]';
        }
    };

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0"} ${getTranslateValue()} duration-[1s]`}
        >
            {children}
        </div>
    );
};

export default FadeIn;
