import NewsCard from "../components/NewsCard";

export default function News() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="px-20 grid grid-cols-3 gap-4 p-4">
        <NewsCard
          title="lorem inpuls"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut dignissimos pers"
          date="Пн, 18 жовтня"
          img="https://placehold.co/400x300/png"
        />
        <NewsCard
          title="lorem inpuls"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut dignissimos pers"
          date="Пн, 18 жовтня"
          img="https://placehold.co/400x300/png"
        />
        <NewsCard
          title="lorem inpuls"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut dignissimos pers"
          date="Пн, 18 жовтня"
          img="https://placehold.co/400x300/png"
        />
        
      </div>
    </div>
  );
}
