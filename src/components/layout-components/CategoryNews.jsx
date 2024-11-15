import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";


const CategoryNews = () => {
    const {data:news} = useLoaderData();
    return (
        <div className="space-y-3">
              <p className="text-[20px] font-semibold text-[#403F3F]">Dragon News Home</p>

              <div className="space-y-6">
                {
                    news.map(singleNews=> <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
              </div>
        </div>
    );
};

export default CategoryNews;