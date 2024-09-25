// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Kochi from "./images/Kochi.jpeg";
// import Alappuzha from "./images/Alappuzha.jpeg";
// import Munnar from "./images/Munnar.jpeg";
// import TVM from "./images/TVM.jpeg";
// import Wayanad from "./images/Wayanad.jpeg";
// import Kovalam from "./images/Kovalam.jpeg";
// import Kozhikode from "./images/Kozhikode.jpeg";
// import Varkala from "./images/Varkala.jpeg";
// import { Col, Container, Row } from "react-bootstrap";
// import "./CardsKerala.css";
// import { Link } from "react-router-dom";

// function CardsKerala() {
//   // search state
//   let [search, setSearch] = useState("");

//   // search function
//   let searchFun = (event) => {
//     setSearch(event.target.value);
//   };

//   const data = [
//     {
//       id: 1,
//       title: "kochi",
//       description:
//         "Kochi, located in Kerala, India, is a vibrant port city known for its rich history and cultural diversity. It features a mix of colonial architecture, traditional spice markets, and modern infrastructure. Key attractions include Fort Kochi, Chinese fishing nets, and the serene backwaters of Kerala.",
//       imageUrl: Kochi,
//     },
//     {
//       id: 2,
//       title: "Alappuzha",
//       description:
//         "Alappuzha, also known as Alleppey, is a picturesque town in Kerala, India, renowned for its serene backwaters, houseboat cruises, and vast network of canals. Often called the Venice of the East, it is famous for the annual Nehru Trophy Boat Race, lush paddy fields, and beautiful beaches.",
//       imageUrl: Alappuzha,
//     },
//     {
//       id: 3,
//       title: "Munnar",
//       description:
//         " Munnar, a scenic hill station in Kerala, India, is famous for its lush tea plantations, rolling hills, and cool climate. Located in the Western Ghats, it offers stunning views, wildlife sanctuaries, and trekking opportunities. Key attractions include Eravikulam National Park etc.",
//       imageUrl: Munnar,
//     },
//     {
//       id: 4,
//       title: "Thiruvananthapuram",
//       description:
//         "Thiruvananthapuram, also known as Trivandrum, is the capital of Kerala, India. A coastal city, it's known for its historic landmarks like the Padmanabhaswamy Temple,beaches like Kovalam. Trivandrum is also a hub for art and culture, home to museums, and cultural festivals.",
//       imageUrl: TVM,
//     },
//     {
//       id: 5,
//       title: "Wayanad",
//       description:
//         "Wayanad, a serene district in Kerala, India, is known for its lush green landscapes, misty mountains, and rich wildlife. A popular eco-tourism destination, it offers attractions like Edakkal Caves, Banasura Sagar Dam, and Wayanad Wildlife Sanctuary. It's ideal for trekking, camping, and exploring ancient history and tribal culture.",
//       imageUrl: Wayanad,
//     },
//     {
//       id: 6,
//       title: "Kovalam",
//       description:
//         "Kovalam, a renowned beach town in Kerala, India, is famous for its crescent-shaped coastline, golden sands, and clear blue waters. Known for its iconic Lighthouse Beach, it attracts tourists for sunbathing, swimming, and Ayurvedic treatments. Kovalam is a perfect destination for relaxation, water sports, and scenic sunset views.",
//       imageUrl: Kovalam,
//     },
//     {
//       id: 7,
//       title: "Kozhikode",
//       description:
//         "Kozhikode, also known as Calicut, is a historic city in Kerala, India, known for its rich cultural heritage and trading history. Famous as the landing place of Vasco da Gama in 1498, it offers attractions like Kozhikode Beach, the centuries-old Mananchira Square, Famous as the landing place and delicious Malabar cuisine, including the iconic biryani.",
//       imageUrl: Kozhikode,
//     },
//     {
//       id: 8,
//       title: "Varkala",
//       description:
//         "Varkala, a coastal town in Kerala, India, is famous for its stunning cliffs overlooking the Arabian Sea and pristine beaches. The Papanasam Beach is popular for its natural spring with believed healing properties. Varkala is also a spiritual destination,Varkala is also destination, home to the ancient Janardanaswamy Temple and peaceful surroundings.",
//       imageUrl: Varkala,
//     },
//   ];

//   return (
//     <>
//       <Container className="mt-4">

//         {/* searchbox */}
//         <Row>
//           <Col>
//             <input
//               type="text"
//               placeholder="Search Here"
//               className="form-control mt-3"
//               onChange={searchFun}
//             />
//           </Col>
//         </Row>

//         {/* cards */}
//         <h1 className="text-center mb-4 mt-3 text-primary fw-bold">
//           The Beauty Of Gods Own Country
//         </h1>
//         <Row>
//           {data.length > 0 &&
//             data.filter((sear)=>{
//               return(sear.title.toLocaleLowerCase().match(search.toLocaleLowerCase()))
//             })
//             .map((list) => {
//                 return (
//                   <Col lg={3} className="mb-4 mt-2" key={list.id}>
//                     <Link to={`/PlaceView/${list.id}`} className="text-decoration-none">
//                       <Card
//                         style={{ width: "100%" }}
//                         className="border-1 border-info shadow"
//                         id="card"
//                       >
//                         <Card.Img variant="top" src={list.imageUrl} />
//                         <Card.Body align="center">
//                           <Card.Title className="text-primary fw-bold">
//                             {list.title}
//                           </Card.Title>
//                           <Card.Text>{list.description}</Card.Text>
//                           <Button variant="primary">Know More</Button>
//                         </Card.Body>
//                       </Card>
//                     </Link>
//                   </Col>
//                 );
//               })
//             }
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default CardsKerala;
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./CardsKerala.css";

// function CardsKerala() {
//   // Search state
//   let [search, setSearch] = useState("");

//   // Search function
//   let searchFun = (event) => {
//     setSearch(event.target.value);
//   };

//   const data = [
//     {
//       id: 1,
//       title: "Kochi",
//       description:
//         "Discover the charming port city of Kochi, where colonial heritage meets vibrant culture and bustling markets.",
//       imageUrl: "https://thetravelingca.com/wp-content/uploads/2020/07/2230515359_cc3f704ef1_k-1.jpg",
//     },
//     {
//       id: 2,
//       title: "Alappuzha",
//       description:
//         "Experience the tranquil backwaters of Alappuzha, known for its picturesque houseboat rides and lush landscapes.",
//       imageUrl: "https://th.bing.com/th/id/OIP.SsMbCQ217fC9nwj2ASXo3QHaE7?rs=1&pid=ImgDetMain",
//     },
//     {
//       id: 3,
//       title: "Munnar",
//       description:
//         "Breathe in the fresh mountain air and explore the lush tea plantations and breathtaking views of Munnar.",
//       imageUrl: "https://www.revv.co.in/blogs/wp-content/uploads/2021/02/Munnar-HD-Image.jpg",
//     },
//     {
//       id: 4,
//       title: "Thiruvananthapuram",
//       description:
//         "Explore the rich cultural heritage of Thiruvananthapuram, featuring historical landmarks and beautiful beaches.",
//       imageUrl: "https://keralatourism.travel/images/destinations/headers/trivandrum-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
//     },
//     {
//       id: 5,
//       title: "Wayanad",
//       description:
//         "Immerse yourself in nature at Wayanad, with its stunning waterfalls, wildlife, and rich tribal culture.",
//       imageUrl: "https://wayanadtourism.co.in/images/places-to-visit/headers/lakkidi-view-point-wayanad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
//     },
//     {
//       id: 6,
//       title: "Kovalam",
//       description:
//         "Relax on the golden beaches of Kovalam, famous for its scenic beauty and rejuvenating Ayurvedic treatments.",
//       imageUrl: "https://www.keralatourism.org/images/destination/large/lighthouse_beach_kovalam20131205103646_432_1.jpg",
//     },
//     {
//       id: 7,
//       title: "Kozhikode",
//       description:
//         "Taste the rich culinary heritage of Kozhikode, known for its delicious Malabar cuisine and historical significance.",
//       imageUrl: "https://i.ytimg.com/vi/8OQ1lwPtTuo/maxresdefault.jpg",
//     },
//     {
//       id: 8,
//       title: "Varkala",
//       description:
//         "Visit Varkala for its stunning cliffs and serene beaches, offering a perfect blend of relaxation and spirituality.",
//       imageUrl: "https://luxoticholidays.com/backend/web/destinations/varkala-beach-kerala-1483460469.jpg",
//     },
//   ];

//   return (
//     <>
//       <Container className="mt-4">
//         {/* Searchbox */}
//         <Row>
//           <Col>
//             <input
//               type="text"
//               placeholder="Search Here"
//               className="form-control mt-3"
//               onChange={searchFun}
//             />
//           </Col>
//         </Row>

//         {/* Cards */}
//         <h1 className="text-center mb-4 mt-3 text-primary fw-bold">
//           The Beauty Of God's Own Country
//         </h1>
//         <Row>
//           {data.length > 0 &&
//             data
//               .filter((sear) => {
//                 return sear.title
//                   .toLocaleLowerCase()
//                   .match(search.toLocaleLowerCase());
//               })
//               .map((list) => {
//                 return (
//                   <Col lg={3} className="mb-4 mt-2" key={list.id}>
//                     <Link
//                       to={`/PlaceView/${list.id}`}
//                       className="text-decoration-none"
//                     >
//                       <Card
//                         style={{ width: "100%" }}
//                         className="border-1 border-info shadow"
//                         id="card"
//                       >
//                         <Card.Img variant="top" src={list.imageUrl} />
//                         <Card.Body align="center">
//                           <Card.Title className="text-primary fw-bold">
//                             {list.title}
//                           </Card.Title>
//                           <Card.Text>{list.description}</Card.Text>
//                           <Button variant="primary">Know More</Button>
//                         </Card.Body>
//                       </Card>
//                     </Link>
//                   </Col>
//                 );
//               })}
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default CardsKerala;
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardsKerala.css";

function CardsKerala() {
  // Search state
  let [search, setSearch] = useState("");

  // Search function
  let searchFun = (event) => {
    setSearch(event.target.value);
  };

  const data = [
    {
      id: 1,
      title: "Kochi",
      description:
        "Kochi, a captivating port city, combines colonial charm with vibrant culture. Explore the bustling markets, stunning backwaters, and the iconic Chinese fishing nets.",
      imageUrl: "https://thetravelingca.com/wp-content/uploads/2020/07/2230515359_cc3f704ef1_k-1.jpg",
    },
    {
      id: 2,
      title: "Alappuzha",
      description:
        "Known as the 'Venice of the East,' Alappuzha offers serene backwaters and enchanting houseboat rides. Experience the lush landscapes and vibrant village life along the canals.",
      imageUrl: "https://th.bing.com/th/id/OIP.SsMbCQ217fC9nwj2ASXo3QHaE7?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      title: "Munnar",
      description:
        "Munnar is a breathtaking hill station famous for its sprawling tea plantations, misty mountains, and diverse wildlife. Enjoy trekking and savoring the cool climate amidst nature.",
      imageUrl: "https://www.revv.co.in/blogs/wp-content/uploads/2021/02/Munnar-HD-Image.jpg",
    },
    {
      id: 4,
      title: "Thiruvananthapuram",
      description:
        "The capital city of Kerala, Thiruvananthapuram is rich in history and culture. Visit ancient temples, explore lush gardens, and relax on stunning beaches that dot the coastline.",
      imageUrl: "https://keralatourism.travel/images/destinations/headers/trivandrum-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    },
    {
      id: 5,
      title: "Wayanad",
      description:
        "Wayanad is a nature lover's paradise, boasting lush forests, cascading waterfalls, and rich tribal heritage. Discover the unique flora and fauna while exploring its scenic trails.",
      imageUrl: "https://wayanadtourism.co.in/images/places-to-visit/headers/lakkidi-view-point-wayanad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    },
    {
      id: 6,
      title: "Kovalam",
      description:
        "Kovalam is renowned for its stunning beaches and vibrant nightlife. Relax on golden sands, indulge in Ayurvedic treatments, and savor fresh seafood at beachfront shacks.",
      imageUrl: "https://www.keralatourism.org/images/destination/large/lighthouse_beach_kovalam20131205103646_432_1.jpg",
    },
    {
      id: 7,
      title: "Kozhikode",
      description:
        "Kozhikode, famous for its rich culinary history, invites you to explore its bustling markets and savor traditional Malabar dishes. Dive into the culture of spices and flavors unique to this region.",
      imageUrl: "https://i.ytimg.com/vi/8OQ1lwPtTuo/maxresdefault.jpg",
    },
    {
      id: 8,
      title: "Varkala",
      description:
        "Varkala is a breathtaking coastal destination known for its dramatic cliffs and beautiful beaches. Enjoy stunning sunsets, explore ancient temples, and unwind in its tranquil atmosphere.",
      imageUrl: "https://luxoticholidays.com/backend/web/destinations/varkala-beach-kerala-1483460469.jpg",
    },
  ];

  return (
    <Container className="mt-5">
      {/* Searchbox */}
      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <input
            type="text"
            placeholder="Search Here"
            className="form-control mt-3"
            onChange={searchFun}
          />
        </Col>
      </Row>

      {/* Title */}
      <h1 className="text-center mb-4 text-primary fw-bold">
        The Beauty Of God's Own Country
      </h1>

      {/* Cards */}
      <Row>
        {data.length > 0 &&
          data
            .filter((sear) => {
              return sear.title
                .toLocaleLowerCase()
                .match(search.toLocaleLowerCase());
            })
            .map((list) => {
              return (
                <Col lg={4} md={6} className="mb-4" key={list.id}>
                  <Link
                    to={`/PlaceView/${list.id}`}
                    className="text-decoration-none"
                  >
                    <Card
                      className="border-0 shadow rounded-lg"
                      style={{ transition: "transform 0.2s" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <Card.Img variant="top" src={list.imageUrl} className="rounded-top" />
                      <Card.Body className="text-center">
                        <Card.Title className="text-primary fw-bold">
                          {list.title}
                        </Card.Title>
                        <Card.Text className="text-muted">
                          {list.description}
                        </Card.Text>
                        <Button variant="primary" className="mt-2">
                          Know More
                        </Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
      </Row>
    </Container>
  );
}

export default CardsKerala;
