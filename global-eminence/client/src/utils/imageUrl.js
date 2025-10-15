// client/src/utils/imageUrl.js
export const getImageUrl = (imagePath) => {
    if (!imagePath) return null;

    // If it's already a full URL
    if (imagePath.startsWith('http')) {
        return imagePath;
    }

    // For production
    if (process.env.NODE_ENV === 'production') {
        return `https://eminence-advice.onrender.com${imagePath}`;
    }

    // For local development
    return `http://localhost:5000${imagePath}`;
};