
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getReadBook } from '../../utility/localstorage';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const books = useLoaderData(); // Load all books data
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getReadBook(); // Get read book IDs from local storage
        if (books?.length > 0) {
            // Filter books by matching IDs
            const readBooks = books.filter((book) => storedBookIds.includes(book.id));
            setFilteredBooks(readBooks);
        }
    }, [books]);

    return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={filteredBooks} // Pass filtered books as data
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {filteredBooks.map((book, index) => (
                        <Cell key={`cell-${book.id}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;