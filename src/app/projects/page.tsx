import ImageSlider from "../../components/ImageSlider";

const project1 = [
  "/images/Screenshot (98).png",
  "/images/Screenshot (99).png",
  "/images/Screenshot (100).png",
  "/images/Screenshot (101).png",
  "/images/Screenshot (103).png",
];
const project2 = [
  "/images/Screenshot (89).png",
  "/images/Screenshot (90).png",
  "/images/Screenshot (91).png",

];
const project3 = [

  "/images/Screenshot (110).png",
  "/images/Screenshot (111).png",
  "/images/Screenshot (112).png",
  "/images/Screenshot (113).png",
];
const project4 = [
  "/images/Screenshot (104).png",
  "/images/Screenshot (105).png",
  "/images/Screenshot (106).png",
  "/images/Screenshot (107).png",
  "/images/Screenshot (108).png",
  "/images/Screenshot (109).png",
];
export default function Projects() {
  return (
    <main className="w-screen bg-bgdark flex flex-col items-center">
      <h1 className="text-2xl text-accentOrange font-bold my-10">Recents Projects</h1>
      <div className="flex items-center justify-center flex-col p-2 w-11/12 lg:w-2/4 bg-backgroundDark rounded-md shadow-md shadow-accentOrange my-4">
        <ImageSlider images={project1} />
        <h3 className="text-accentOrange text-xl font-bold py-4">E-Learning Website Using Next.js</h3>
      </div>
      <div className="flex items-center justify-center flex-col p-2 w-11/12  lg:w-2/4 bg-backgroundDark rounded-md shadow-md shadow-accentOrange my-4">
        <ImageSlider images={project2} />
        <h3 className="text-accentOrange text-xl font-bold py-4">Portfolio Using Next.js</h3>
      </div>
       <div className="flex items-center justify-center flex-col p-2 w-11/12  lg:w-2/4 bg-backgroundDark rounded-md shadow-md shadow-accentOrange my-4">
        <ImageSlider images={project3} />
        <h3 className="text-accentOrange text-xl font-bold py-4">Dynamic Resume Builder using HTML,CSS and Typescript</h3>
      </div>
      <div className="flex items-center justify-center flex-col p-2 w-11/12  lg:w-2/4 bg-backgroundDark rounded-md shadow-md shadow-accentOrange my-4">
        <ImageSlider images={project4} />
        <h3 className="text-accentOrange text-xl font-bold py-4">Porsche Website Using Nect.js and Sanity CMS.</h3>
      </div>
    </main>
  );
}
