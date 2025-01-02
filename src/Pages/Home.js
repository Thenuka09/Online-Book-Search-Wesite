import React, { useState, useEffect } from 'react';
import './home.css';
import Card from '../Components/Card';
import axios from 'axios';
import Spinners from '../Components/Spinners';

export default function Home() {
    const [search, setSearch] = useState('');
    const [bookData, setData] = useState([]);
    const [randomBooks, setRandomBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch random books when the component loads
    useEffect(() => {
        setLoading(true)
        axios
            .get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=12&key=AIzaSyAG_mf3gkHFLKH7QJmVr5mtS3fJpzXwFtE')
            .then((res) => setRandomBooks(res.data.items))
            .catch((err) => console.log(err))
            .finally(()=>setLoading(false));
    }, []);

    // search the book by using book name and Enter key on the keybaord
    const searchBook = (evt) => {
        if (evt.key === 'Enter') {
            setLoading(true)
            axios
                .get(
                    'https://www.googleapis.com/books/v1/volumes?q='+search +'&key=AIzaSyAG_mf3gkHFLKH7QJmVr5mtS3fJpzXwFtE'+'&maxResults=40'
                )
                .then((res) => setData(res.data.items))
                .catch((err) => console.log(err))
                .finally(()=> setLoading(false));
        }
    };

    // search the book when the user click the search button
    const searchBtn = () => {
        setLoading(true)
        axios
            .get(
                'https://www.googleapis.com/books/v1/volumes?q=' +
                    search +
                    '&key=AIzaSyAG_mf3gkHFLKH7QJmVr5mtS3fJpzXwFtE' +
                    '&maxResults=40'
            )
            .then((res) => setData(res.data.items))
            .catch((err) => console.log(err))
            .finally(()=> setLoading(false));
    };

    return (
        <>
            <div>
                <img src="/Images/background.png" alt="" className="imgBackground" />
                <div className="searchBar">
                    <input
                        type="text"
                        placeholder="Search your Book..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={searchBook}
                    />
                    <button className="searchBtn" onClick={searchBtn}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <h1 className="heroSection">
                    Discover Your Next <br />
                    Favorite Book
                </h1>
            </div>

            {/* add the spinners */}
            {
                loading?(
                    <div className="spinnerContainer">
                    <Spinners />
                </div>
                ):(
                    <div className="container">
                        {/* If there are no search results, show random books */}
                        {bookData.length === 0 ? <Card bookData={randomBooks} /> : <Card bookData={bookData} />}
                    </div>
                )
            }

            
        </>
    );
}
