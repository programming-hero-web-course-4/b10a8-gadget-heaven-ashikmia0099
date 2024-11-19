import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Helmet } from 'react-helmet';


const Statistics = () => {


    const data = [
        {
            "id": 1,
            "category": "Laptop",
            "title": "Dell Inspiron 15",
            "price": 750,
            "image": "https://i.ibb.co.com/B44NMNH/lalptop1.webp",
            "description": "Dell Inspiron 15 offers a sleek design with powerful performance. Its 15.6-inch Full HD display provides crystal-clear visuals, while the Intel Core i5 processor ensures smooth multitasking. With 8GB RAM and 512GB SSD, it delivers fast data access. Perfect for work, entertainment, and everyday use.",
            "specifications": [
                "15.6-inch Full HD display",
                "Intel Core i5 11th Gen",
                "8GB RAM",
                "512GB SSD",
                "Windows 11"
            ],
            "rating": 4.5
        },
        {
            "id": 2,
            "category": "Laptop",
            "title": "MSI Gaming Laptop",
            "price": 1400,
            "image": "https://i.ibb.co.com/vqcTGKG/laptop2.webp",
            "description": "Dell Inspiron 15 offers a sleek design with powerful performance. Its 15.6-inch Full HD display provides crystal-clear visuals, while the Intel Core i5 processor ensures smooth multitasking. With 8GB RAM and 512GB SSD, it delivers fast data access. Perfect for work, entertainment, and everyday use.",
            "specifications": [
                "13.3-inch Retina display",
                "Apple M2 chip",
                "8GB Unified Memory",
                "256GB SSD",
                "macOS Ventura"
            ],
            "rating": 4.8
        },
        {
            "id": 3,
            "category": "Laptop",
            "title": "HP 14' inch Laptop",
            "price": 1500,
            "image": "https://i.ibb.co.com/zhFLYXG/laptop3.webp",
            "description": "Dell Inspiron 15 offers a sleek design with powerful performance. Its 15.6-inch Full HD display provides crystal-clear visuals, while the Intel Core i5 processor ensures smooth multitasking. With 8GB RAM and 512GB SSD, it delivers fast data access. Perfect for work, entertainment, and everyday use.",
            "specifications": [
                "13.3-inch Retina display",
                "Apple M2 chip",
                "8GB Unified Memory",
                "256GB SSD",
                "macOS Ventura"
            ],
            "rating": 4.8
        },
        {
            "id": 4,
            "category": "Laptop",
            "title": "MacBook Pro M2 Max",
            "price": 2000,
            "image": "https://i.ibb.co.com/kq7jst4/laptop4.jpg",
            "description": "MacBook Air M2 redefines efficiency and elegance. Featuring the Apple M2 chip, it offers outstanding performance in a lightweight design. The 13.3-inch Retina display brings vivid colors, and its all-day battery life ensures productivity anywhere. Perfect for professionals and creatives on the go.",
            "specifications": [
                "13.3-inch Retina display",
                "Apple M2 chip",
                "8GB Unified Memory",
                "256GB SSD",
                "macOS Ventura"
            ],
            "rating": 4.8
        },
        {
            "id": 5,
            "category": "Mobile",
            "title": "Oppo F30 Pro",
            "price": 999,
            "image": "https://i.ibb.co.com/dWX7MFn/mobile1.png",
            "description": "Oppo F30 Pro combines cutting-edge technology with user-friendly features. The 6.1-inch Super Retina XDR display delivers stunning visuals, while the A15 Bionic chip ensures seamless performance. With its dual-camera system and advanced iOS features, it’s perfect for capturing life’s moments and staying connected.",
            "specifications": [
                "6.1-inch Super Retina XDR",
                "A15 Bionic Chip",
                "128GB Storage",
                "12MP Dual Cameras",
                "iOS 17"
            ],
            "rating": 4.7
        },
        {
            "id": 6,
            "category": "Mobile",
            "title": "Oppo Note 10",
            "price": 899,
            "image": "https://i.ibb.co.com/BfJLFg9/mobile2.png",
            "description": "Oppo Note 10 combines cutting-edge technology with user-friendly features. The 6.1-inch Super Retina XDR display delivers stunning visuals, while the A15 Bionic chip ensures seamless performance. With its dual-camera system and advanced iOS features, it’s perfect for capturing life’s moments and staying connected.",
            "specifications": [
                "6.2-inch Dynamic AMOLED",
                "Snapdragon 8 Gen 2",
                "256GB Storage",
                "50MP Triple Camera",
                "Android 13"
            ],
            "rating": 4.6
        },
        {
            "id": 7,
            "category": "Mobile",
            "title": "iPhone 16 Pro Max",
            "price": 999,
            "image": "https://i.ibb.co.com/6ngxPKb/mobile3.jpg",
            "description": "iPhone 16 pro max combines cutting-edge technology with user-friendly features. The 6.1-inch Super Retina XDR display delivers stunning visuals, while the A15 Bionic chip ensures seamless performance. With its dual-camera system and advanced iOS features, it’s perfect for capturing life’s moments and staying connected.",
            "specifications": [
                "6.1-inch Super Retina XDR",
                "A15 Bionic Chip",
                "128GB Storage",
                "12MP Dual Cameras",
                "iOS 17"
            ],
            "rating": 4.7
        },
        {
            "id": 8,
            "category": "Mobile",
            "title": "Samsung Galaxy S23 All",
            "price": 899,
            "image": "https://i.ibb.co.com/S041PrD/mobile4.jpg",
            "description": "Samsung S23 combines cutting-edge technology with user-friendly features. The 6.1-inch Super Retina XDR display delivers stunning visuals, while the A15 Bionic chip ensures seamless performance. With its dual-camera system and advanced iOS features, it’s perfect for capturing life’s moments and staying connected.",
            "specifications": [
                "6.2-inch Dynamic AMOLED",
                "Snapdragon 8 Gen 2",
                "256GB Storage",
                "50MP Triple Camera",
                "Android 13"
            ],
            "rating": 4.6
        },
        {
            "id": 9,
            "category": "Mobile",
            "title": "Huawei P60 Pro",
            "price": 999,
            "image": "https://i.ibb.co.com/vB3DbdV/1713519204klhxv.webp",
            "description": "Huawei P60 combines cutting-edge technology with user-friendly features. The 6.1-inch Super Retina XDR display delivers stunning visuals, while the A15 Bionic chip ensures seamless performance. With its dual-camera system and advanced iOS features, it’s perfect for capturing life’s moments and staying connected.",
            "specifications": [
                "6.1-inch Super Retina XDR",
                "A15 Bionic Chip",
                "128GB Storage",
                "12MP Dual Cameras",
                "iOS 17"
            ],
            "rating": 4.7
        },
        {
            "id": 10,
            "category": "Mobile",
            "title": "Huawei Tri Fold",
            "price": 899,
            "image": "https://i.ibb.co.com/jM4sw4F/huawei-unveils-triple-folding-phone.jpg",
            "description": "Huawei Tri Fold combines cutting-edge technology with user-friendly features. The 6.1-inch Super Retina XDR display delivers stunning visuals, while the A15 Bionic chip ensures seamless performance. With its dual-camera system and advanced iOS features, it’s perfect for capturing life’s moments and staying connected.",
            "specifications": [
                "6.2-inch Dynamic AMOLED",
                "Snapdragon 8 Gen 2",
                "256GB Storage",
                "50MP Triple Camera",
                "Android 13"
            ],
            "rating": 4.6
        },



    ]


    return (
        <div className='my-16'>
            <Helmet>
                <title>Statistics | InFinity</title>
                <meta name="description" content="Welcome to the Home page of My App." />
            </Helmet>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <XAxis dataKey="title" className='text-[10px]'></XAxis>
                        <YAxis dataKey='price'></YAxis>
                        <Bar dataKey="price" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
