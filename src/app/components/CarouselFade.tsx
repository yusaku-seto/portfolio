import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import slideContents from "../../../public/json/hobby-main-images.json";

interface SlideProps {
    index: number;
    isActive: boolean;
    content: {
        text: string;
        path: string;
    };
}
// スライドコンポーネント(メイン表示)
const Slide: React.FC<SlideProps> = ({ index, isActive, content }) => {
    return (
        <div className={`carousel-list ${isActive ? 'active' : ''}`}>
            {/* ここに各スライドの内容を配置 */}
            <Image src={content.path} width={300} height={500} alt="img" />
        </div>
    );
};

// ページネーションコンポーネント
interface PaginationProps {
    activeIndex: number;
    onClick: (index: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ activeIndex, onClick }) => {
    return (
        <div className="pagination">
            {[...Array(3)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onClick(index)}
                    className={activeIndex === index ? 'active' : ''}
                >
                    {/* {index + 1} */}
                </button>
            ))}
        </div>
    );
};

// カルーセルコンポーネント
const Carousel: React.FC = () => {
    const [slideCurrent, setSlideCurrent] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideCurrent((prevSlide) =>
                prevSlide === 2 ? 0 : prevSlide + 1
            );
        }, 3000);
        setIntervalId(timer);
        return () => clearInterval(timer);
    }, []);


    const handlePrevButtonClick = () => {
        setSlideCurrent((prevSlide) =>
            prevSlide === 0 ? slideContents.HobbyMainImages.length - 1 : prevSlide - 1
        );
        resetInterval();
    };

    const handleNextButtonClick = () => {
        setSlideCurrent((prevSlide) =>
            prevSlide === slideContents.HobbyMainImages.length - 1 ? 0 : prevSlide + 1
        );
        resetInterval();
    };


    const handlePaginationClick = (index: number) => {
        setSlideCurrent(index);
        resetInterval();
    };

    const resetInterval = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        const timer = setInterval(() => {
            setSlideCurrent((prevSlide) =>
                prevSlide === slideContents.HobbyMainImages.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000);
        setIntervalId(timer);
    };



    return (
        <div className="carousel-container">
            <div className="carousel-area">
                {slideContents.HobbyMainImages.map((content, index) => (
                    <Slide
                        key={index}
                        index={index}
                        isActive={slideCurrent === index}
                        content={content}
                    />
                ))}
            </div>
            <button
                className="btn-back"
                onClick={() =>
                    handlePrevButtonClick()
                }
            >
                BACK
            </button>
            <button
                className="btn-next"
                onClick={() =>
                    handleNextButtonClick()
                }
            >
                NEXT
            </button>
            <Pagination
                activeIndex={slideCurrent}
                onClick={handlePaginationClick}
            />
        </div>
    );
};

export default Carousel;
