import "./css/Categories.css"

export default function Categorie(){
    const categories = [
        "Action",
        "Comedy",
        "Drama",
        "Horror",
        "Science Fiction",
        "Documentary",
        "Animation",
        "Romance",
        "Fantasy",
        "Thriller",
    ];

    return (
        <div className="list_categ">
            <ul style={{listStyleType:'none'}}>
                {categories.map((category, index) => (
                    <li className='categ' style={{fontSize:'25px'}} key={index}>{category}</li>
                ))}
            </ul>
        </div>
    )
}