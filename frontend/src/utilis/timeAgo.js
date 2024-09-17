function timeAgo (date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(date)) / 1000);
    let value = 0;
    let unit = '';
    if (diffInSeconds < 60) {
        value = diffInSeconds;
        unit = 'second';
    } else if (diffInSeconds < 3600) {
        value = Math.floor(diffInSeconds / 60);
        unit = 'minute';
    } else if (diffInSeconds < 86400) {
        value = Math.floor(diffInSeconds / 3600);
        unit = 'hour';
    } else if (diffInSeconds < 31536000) {
        value = Math.floor(diffInSeconds / 86400);
        unit = 'day';
    } else {
        value = Math.floor(diffInSeconds / 31536000);
        unit = 'year';
    }
    
    return `${value} ${unit}${value !== 1 ? 's' : ''} ago`;
}

export default timeAgo;