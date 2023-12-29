import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [
    {
      id: "1",
      title: "A DAY IN NAGARRO",
      category: "Nagarro WorkLife",
      description: " A day well spent at Nagarro's office is a blend of innovation, collaboration, and personal growth. Morning kicks off with invigorating brainstorm sessions, fueled by fresh perspectives and technological advancements. Teams converge in vibrant workspaces, ideating over cutting-edge projects, fostering a culture of creativity and problem-solving. Lunch breaks become engaging discussions, sharing insights while relishing diverse cuisines in communal areas. Afternoons witness skill-building workshops, where learning is a continuous journey. The day concludes with accomplishments celebrated, as colleagues unwind in recreational zones, forging bonds beyond work. Each moment at Nagarro is a testament to productivity, camaraderie, and a shared commitment to excellence, defining a fulfilling day at the office. ",
    },
    {
      id: "2",
      title: "OPPENHEIMER",
      category: "Movie Review",
      description: " Oppenheimer is a mesmerizing cinematic masterpiece directed by Christopher Nolan, delving into the complex life of J. Robert Oppenheimer, the father of the atomic bomb. Nolan's meticulous storytelling intertwines history, ethics, and personal turmoil, portrayed brilliantly by Cillian Murphy in the lead role. The film navigates Oppenheimer's moral dilemma, balancing scientific achievement with the catastrophic implications of his creation. Nolan's signature nonlinear narrative, coupled with immersive visuals and a haunting score, creates an evocative experience. Despite occasional pacing issues, Oppenheimer captivates with its depth, raising profound questions about humanity and the consequences of scientific advancement, leaving a haunting and thought-provoking impact.",
    },
    {
      id: "3",
      title: "IPHONE 14",
      category: "Moblie Review",
      description: " The iPhone, renowned for its seamless integration of hardware and software, epitomizes innovation and reliability. With each iteration, Apple refines design, performance, and features, offering users a sleek and intuitive experience. Its ecosystem boasts a robust App Store, exceptional camera systems, and the powerful A-series chip, ensuring smooth functionality and optimal performance. The latest models often introduce advancements in photography, display technology, and battery life, while iOS updates continually enhance functionality and security. Despite premium pricing, the iPhone remains a benchmark in the smartphone industry, providing users with a harmonious blend of style, functionality, and performance."
    },
    {
      id: "4",
      title: "JALSA 2022",
      category: "Nagarro Annual Fest",
      description: "In March 2022, Gurgaon was abuzz with excitement as Nagarro, the global technology company, hosted its annual fest, A Dot by GNH. This vibrant celebration showcased a fusion of innovation, creativity, and cultural diversity. The event featured a medley of activities ranging from tech expos, hackathons, and product showcases to live performances, art exhibitions, and culinary delights. Employees, clients, and tech enthusiasts converged, fostering collaboration and networking in an electrifying atmosphere. A Dot by GNH highlighted Nagarro's ethos of embracing innovation while nurturing a community-driven culture. It was a testament to the company's commitment to fostering creativity and camaraderie among its stakeholders."
    },
    {
      id: "5",
      title: "A JOURNEY TO MOUNT ABU",
      category: "TRAVEL BLOG",
      description: "Journeying to Mount Abu, nestled in Rajasthan's Aravalli Range, is an enchanting experience steeped in natural beauty and cultural richness. The serene ascent unveils breathtaking vistas, with Nakki Lake's tranquility and Dilwara Jain Temples' intricate architecture captivating visitors. Trekking the rugged terrain to Guru Shikhar, the highest peak, rewards adventurers with panoramic views. The town's vibrant bazaars offer Rajasthani handicrafts and delectable local cuisine, enhancing the cultural immersion. The cool climate provides respite from Rajasthan's heat, making it a year-round destination. Mount Abu's amalgamation of spirituality, natural splendor, and vibrant culture ensures a memorable and soul-stirring journey for every traveler."
    },
    {
      id: "6",
      title: "A PSYCHOLOGY OF MONEY",
      category: "Book Review",
      description: "The Psychology of Money offers a compelling exploration into the intricate relationship between human behavior and financial decisions. Authored by Morgan Housel, this book delves beyond traditional finance, delving into the psychological underpinnings that influence our money-related choices. Housel skillfully weaves captivating anecdotes and behavioral insights, illuminating the complexities of our financial mindset, risk tolerance, and long-term wealth-building strategies. It navigates the irrationalities, biases, and emotions that often dictate our financial behaviors, offering invaluable wisdom on prudent money management and achieving financial well-being. With a blend of storytelling and practical advice, this book provides a thought-provoking perspective on money, making it a must-read for those seeking a deeper understanding of personal finance."
    },
  ]
}
const blogReducer = createSlice({
  name: "blogReducer",
  initialState,
  reducers: {
    postBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;
      const blogid = state.blogs.findIndex((blog) => blog.id === id);

      //Update value
      state.blogs[blogid].title = title;
      state.blogs[blogid].category = category;
      state.blogs[blogid].description = description;
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
  }
});


export const { postBlog, updateBlog, deleteBlog } = blogReducer.actions;
export default blogReducer.reducer;
