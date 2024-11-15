import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    // loading news categories
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(response => response.json())
            .then(data => setCategories(data.data.news_category));
    }, [])

    return (
        <div className="space-y-3">
            <p className="text-[20px] font-semibold text-[#403F3F]">Categories</p>
            {/* displaying all news categories */}
            <div className="flex flex-col gap-2 mt">
                {
                    categories.map(category=>
                        <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="btn">{category.category_name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;