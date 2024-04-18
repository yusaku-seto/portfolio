import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children }) => {
    const { ref, inView } = useInView({
        // Options
        rootMargin: '-50px', // Once the reference element is 50px past
        triggerOnce: true, // Execute only once initially
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0 translate-y-[50%]"} duration-[1s]`}
        >
            {children}
        </div>
    );
};

export default FadeIn;
