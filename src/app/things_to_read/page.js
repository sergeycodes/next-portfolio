// pages/things-to-read.js
"use client";

import NavBar from '../components/Navbar';
import Card from '../components/Card';
import styles from '../styles/ThingsToRead.module.css';

const thingsToRead = [
    {
        title: "Skiing",
        description: "A hobby that I enjoy during the winter months. I like to ski at Stevens Pass Resort.",
        image: "/stevens.jpg",
        link: "https://www.stevenspass.com/"
    },
    {
        title: "Basketball",
        description: "I enjoy watching and playing basketball. The NBA Finals are always exciting to watch",
        image: "/nba-finals.jpg",
        link: "https://www.nba.com/playoffs/2024/nba-finals"
    },
    {
        title: "Hiking",
        description: "I like to go on hikes. The last hike I went on was Mount Si in North Bend, WA.",
        image: "/mount-si.jpg",
        link: "https://www.alltrails.com/trail/us/washington/mount-si-trail"
    },
    {
        title: "Piano",
        description: "I recently started playing the piano again. The last song I learned was 'Tourniquet' by Zach Bryan.",
        image: "/piano.jpg",
        link: "https://www.musicnotes.com/sheetmusic/mtd.asp?ppn=MN0281584"
    },
    {
        title: "Computers",
        description: "I like to build computers and learn about new technologies. I recently built a new gaming PC for my brother.",
        image: "/computer.jpg",
        link: "https://www.pcmag.com/how-to/how-to-build-a-pc-the-ultimate-beginners-guide"
    },
    {
        title: "Gaming",
        description: "I enjoy playing video games in my free time. The last game I played was 'Baulder's Gate 3'.",
        image: "/baulders-gate.jpg",
        link: "https://bg3.wiki/"
    },
    {
        title: "Food",
        description: "I like to eat food. One of my favorite pizza places is 'Sparta's Pizza' in Bothell, WA.",
        image: "/spartas-pizza.png",
        link: "https://spartaspizza.com/"
    },
    {
        title: "Example 8",
        description: "I take care of my pet cat named 'Ovie'. She is a British Shorthair and is very playful.",
        image: "/ovie.jpeg",
        link: "https://www.purina.co.uk/find-a-pet/cat-breeds/british-shorthair#:~:text=The%20British%20Shorthair%20is%20a,expression%20and%20bags%20of%20character."
    },
    {
        title: "Algorithms",
        description: "This quarter I spent a lot of time studying algorithms. A recent algorithm I learned was a 'Greedy Algorithm' used to solve a 'Maximum Disjoint Paths' problem in networks.",
        image: "/algorithm.jpg",
        link: "https://docs.google.com/presentation/d/1yRuD0bCD1sZhHOxcnEyxBWypycNWO_bvZ6TgXMwG78M/edit#slide=id.p"
    },
    {
        title: "Work",
        description: "I worked Fabricating and Installing Granite and Quartz countertops. I learned how to use a CNC machine to cut and polish stone.",
        image: "/countertops.jpg",
        link: "https://www.archcitygranite.com/the-surefire-way-to-modify-granite-countertops-by-cutting/#:~:text=Granite%20can%20be%20cut%20wet,of%20dust%20for%20dry%20cutting."
    }
    // Add more objects for other links
];

export default function ThingsToRead() {
    return (
        <div className={styles.container}>
            <NavBar />
            <h1 className={styles.title}>Things to Read</h1>
            <div className={styles.cardContainer}>
                {thingsToRead.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}
