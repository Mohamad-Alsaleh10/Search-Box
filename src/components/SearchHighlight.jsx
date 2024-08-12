import  { useState } from 'react';

const SearchHighlight = ({ articles }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const clearSearch = () => {
        setSearchTerm('');
    };

    const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} style={{ backgroundColor: 'yellow' }}>
                            {part}
                        </span>
                    ) : (
                        part
                    )
                )}
            </>
        );
    };

    const filteredArticles = articles.filter(
        article =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ marginTop: '20px' }}>
            <div className='search-container' style={{ position: 'relative', marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                    style={{
                        padding: '10px',
                        width: '100%',
                        fontSize: '16px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                    }}
                />
                {searchTerm && (
                    <button
                        onClick={clearSearch}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}
                    >
                        ✖
                    </button>
                )}
            </div>

            <div>
                <p>
                    {filteredArticles.length} {filteredArticles.length === 1 ? 'post' : 'posts'} found.
                </p>
                {filteredArticles.map(article => (
                    <div key={article.id} style={{ marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
                            {highlightText(article.title, searchTerm)}
                        </h2>
                        <p style={{ color: '#888', fontSize: '14px', marginBottom: '10px' }}>
                            Oct 09, 2018
                        </p>
                        <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
                            {highlightText(article.content, searchTerm)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchHighlight;
