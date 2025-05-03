import React, { useState } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaStar, FaEye, FaShareAlt, FaRegStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        rating,
        total_view,
        thumbnail_url,
        details,
    } = news;

    const [expanded, setExpanded] = useState(false);

    const formattedDate = new Date(author.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const wordCount = details.trim().split(/\s+/).length;
    const shouldShowReadMore = wordCount > 100;

    const displayedText = expanded || !shouldShowReadMore
        ? details
        : details.split(/\s+/).slice(0, 100).join(' ') + '...';

    const renderStars = () => {
        const fullStars = Math.floor(rating.number);
        const stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(
                i < fullStars ? (
                    <FaStar key={i} className="text-orange-400" />
                ) : (
                    <FaRegStar key={i} className="text-orange-300" />
                )
            );
        }

        return stars;
    };

    return (
        <div className="card bg-base-100 shadow-xl rounded-xl">
            {/* Card Header */}
            <div className="flex justify-between items-center p-4 bg-base-300 rounded-t-xl">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={author.img} alt={author.name} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold">{author.name}</h2>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <button className='flex gap-1'>
                    <CiBookmark />
                    <FaShareAlt className="text-gray-400 cursor-pointer" />
                </button>
            </div>

            {/* Card Body */}
            <div className="card-body p-4">
                <h2 className="card-title text-lg">{title}</h2>
                <img
                    src={thumbnail_url}
                    alt="news"
                    className="w-full h-48 object-cover rounded-lg my-3"
                />
                <p className="text-sm text-gray-700">{displayedText}</p>
                {shouldShowReadMore && (
                    <button
                        className="text-blue-600 font-medium mt-1"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? 'Show Less' : 'Read More'}
                    </button>
                )}
            </div>

            {/* Card Footer */}
            <div className="flex justify-between items-center px-4 pb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                    {renderStars()}
                    <span className="ml-1 text-gray-500">({rating.number})</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
