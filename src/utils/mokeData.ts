type Movie = {
    id: string;
    title: string;
    poster: string;
    genre: string;
    director: string;
    movie_description: string;
    director_description: string;
    director_image: string;
}[];
const getMoviesList: () => Promise<Movie> = () => {
    const movies: Movie = [
        {
            id: "1",
            title: "Interstellar",
            genre: "Space Movie",
            poster: "https://www.themoviedb.org/t/p/w154/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            director: "Christopher Nolan",
            movie_description:
                "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            director_description:
                "Christopher Edward Nolan, CBE (born 30 July 1970) is a British-American film director, screenwriter, and producer. He was born in Westminster, London, England and holds both British and American citizenship due to his American mother. He is known for writing and directing critically acclaimed films such as Memento (2000), The Prestige (2006), The Dark Knight Trilogy (2005-12), Inception (2010), Interstellar (2014) and Dunkirk (2017). Nolan is the founder of the production company Syncopy Films. He often collaborates with his wife, producer Emma Thomas, and his brother, screenwriter Jonathan Nolan. ",
            director_image: "https://variety.com/wp-content/uploads/2020/12/christopher-Nolan-2.jpg"
        },
        {
            id: "2",
            title: "The Godfather",
            genre: "Crime Drama",
            director: "Francis Ford Coppola",
            poster: "https://www.themoviedb.org/t/p/w154/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            movie_description:
                "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            director_description:
                "Francis Ford Coppola (born April 7, 1939) is an American film director, producer and screenwriter. He is widely acclaimed as one of Hollywoods most celebrated and influential film directors. He epitomized the group of filmmakers known as the New Hollywood, which included George Lucas, Martin Scorsese, Robert Altman, Woody Allen and William Friedkin, who emerged in the early 1970s with unconventional ideas that challenged contemporary filmmaking.",
            director_image: "https://static.dw.com/image/17541538_303.jpg"
        },
        {
            id: "3",
            title: "Parasite",
            genre: "Drama",
            director: "Bong Joon-Ho",
            poster: "https://www.themoviedb.org/t/p/w154/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            movie_description:
                "All unemployed, Ki-taek’s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            director_description:
                "Bong Joon-ho (Korean: 봉준호; born September 14, 1969) is a South Korean filmmaker of international prominence. His films feature social themes, genre-mixing, black humor, and sudden mood shifts. In 2017, Metacritic ranked Bong 13th on its list of the 25 best film directors of the 21st century.",
            director_image:
                "https://pyxis.nymag.com/v1/imgs/89a/79f/e6528444d74e227f8b998a81d61117efa7-10-oscars-kissing.w630.jpg"
        },
        {
            id: "4",
            title: "The Social Network",
            genre: "Drama",
            director: "David Fincher",
            poster: "https://www.themoviedb.org/t/p/w154/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
            movie_description:
                "On a fall night in 2003, Harvard undergrad and computer programming genius Mark Zuckerberg sits down at his computer and heatedly begins working on a new idea. In a fury of blogging and programming, what begins in his dorm room as a small site among friends soon becomes a global social network and a revolution in communication. A mere six years and 500 million friends later, Mark Zuckerberg is the youngest billionaire in history… but for this entrepreneur, success leads to both personal and legal complications. ",
            director_description:
                "David Andrew Leo Fincher (born August 28, 1962) is an American film director and music video director. Known for his dark and stylish thrillers, such as Seven (1995), The Game (1997), Fight Club (1999), Panic Room (2002), and Zodiac (2007), Fincher received Academy Award nominations for Best Director for his 2008 film The Curious Case of Benjamin Button and his 2010 film The Social Network, which also won him the Golden Globe and the BAFTA for best director.",
            director_image:
                "https://www.goldderby.com/wp-content/uploads/2021/03/david-fincher.jpg?w=620&h=360&crop=1"
        },
        {
            id: "5",
            title: "Coco",
            genre: "Family",
            director: "Lee Unkrich",
            poster: "https://www.themoviedb.org/t/p/w154/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
            movie_description:
                "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguels family history.",
            director_description:
                "Lee Unkrich is an American director and film editor. He is a longtime member of the creative team at Pixar, where he started in 1994 as a film editor. He later began directing, first as co-director of Toy Story 2. After co-directing Monsters, Inc., and Finding Nemo, Unkrich made his solo directorial debut with Toy Story 3.",
            director_image:
                "https://www.thewrap.com/wp-content/uploads/2019/01/GettyImages-877229078.jpg"
        },
        {
            id: "6",
            title: "Watchmen",
            genre: "Action",
            director: "Zack Snyder",
            poster: "https://www.themoviedb.org/t/p/w154/aZvOkdo203bm1kpcY0A0Tn074ER.jpg",
            movie_description:
                "In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered, an investigation into the killer is initiated. The reunited heroes set out to prevent their own destruction, but in doing so uncover a sinister plot that puts all of humanity in grave danger.",
            director_description:
                'Zachary Edward "Zack" Snyder (born March 1, 1966) is an American film director, producer, and screenwriter. He made his feature film debut in 2004 with a remake of the 1978 horror film Dawn of the Dead. Since then, he has directed or produced a number of comic book and superhero films, including 300 (2006) and Watchmen (2009).',
            director_image:
                "https://www.comingsoon.net/assets/uploads/2021/05/zack-snyder-interview.jpg"
        }
    ];
    return new Promise(function (resolve) {
        setTimeout(resolve, 2000, movies);
    });
};

export default getMoviesList;
