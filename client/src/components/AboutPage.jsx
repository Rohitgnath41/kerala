// import React from "react";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import Accordion from "react-bootstrap/Accordion";

// function AboutPage() {
//   const nav = useNavigate();
//   let navFun = () => {
//     nav("/");
//   };
//   return (
//     <>
//       <h1 className="text-center my-4 text-primary">About Us</h1>
//       <Accordion defaultActiveKey="0">
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>
//             <h4>
//               <strong>Welcome to Kerala Tourism</strong>
//             </h4>
//           </Accordion.Header>
//           <Accordion.Body>
//             Kerala, often referred to as "God's Own Country," is one of the most
//             picturesque states in India, known for its stunning landscapes, rich
//             culture, and vibrant traditions. Kerala Tourism is dedicated to
//             offering travelers an unforgettable experience of exploring the
//             beauty and heritage of Kerala. From serene backwaters and pristine
//             beaches to lush hill stations and diverse wildlife, we showcase the
//             best of what Kerala has to offer.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="1">
//           <Accordion.Header>
//             <h4>
//               <strong>Our Mission</strong>
//             </h4>
//           </Accordion.Header>
//           <Accordion.Body>
//             At Kerala Tourism, our mission is to promote sustainable and
//             responsible tourism while providing travelers with unique and
//             authentic experiences. We believe in preserving the natural beauty
//             and cultural heritage of Kerala while creating opportunities for
//             local communities. Our goal is to create memorable journeys that
//             connect you with the heart and soul of this incredible state.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="2">
//           <Accordion.Header>
//             <h4>
//               <strong>Why Choose Us?</strong>
//             </h4>
//           </Accordion.Header>
//           <Accordion.Body>
//             <p>
//               • Personalized Travel Experiences: Whether you're an adventure
//               seeker, a nature lover, or someone who loves to relax and unwind,
//               we offer personalized travel experiences tailored to your
//               preferences.
//             </p>
//             <p>
//               • Local Expertise: Our team of local guides and experts ensures
//               that you get a deeper understanding of the places you visit, going
//               beyond the typical tourist spots to reveal hidden gems.
//             </p>
//             <p>
//               • Commitment to Sustainability: We are committed to promoting
//               eco-friendly practices and supporting local communities. Our tours
//               and activities are designed to have minimal environmental impact
//               while contributing to the growth of the region.
//             </p>
//             <p>
//               • Customer Satisfaction: Your satisfaction is our priority. We
//               strive to provide top-notch service from the moment you book your
//               trip until the time you leave, ensuring a seamless and enjoyable
//               experience.
//             </p>
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="3">
//           <Accordion.Header>
//             <h4>
//               <strong>What We Offer</strong>
//             </h4>
//           </Accordion.Header>
//           <Accordion.Body>
//             <p>
//               • Backwater Cruises: Experience the tranquility of Kerala's famous
//               backwaters in houseboats, and witness the scenic beauty of lush
//               greenery, paddy fields, and traditional village life.
//             </p>
//             <p>
//               • Hill Stations & Wildlife: Explore the misty hill stations like
//               Munnar and Wayanad, where you can enjoy trekking, wildlife
//               safaris, and tea plantation tours.
//             </p>
//             <p>
//               • Cultural Tours: Dive into Kerala's rich cultural heritage
//               through Kathakali performances, traditional martial arts
//               (Kalaripayattu), and visits to ancient temples and palaces.
//             </p>
//             <p>
//               • Ayurvedic Wellness: Rejuvenate your body and mind with authentic
//               Ayurvedic treatments, known for their healing properties, at some
//               of the best wellness resorts in Kerala.
//             </p>
//             <p>
//               • Beaches & Adventure: Unwind on Kerala’s golden beaches or get
//               your adrenaline pumping with water sports, trekking, and adventure
//               activities.
//             </p>
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="4">
//           <Accordion.Header>
//             <h4>
//               <strong>Our Values</strong>
//             </h4>
//           </Accordion.Header>
//           <Accordion.Body>
//             <p>
//               • Respect for Nature: We believe in protecting the natural
//               environment and its biodiversity for future generations.
//             </p>
//             <p>
//               • Cultural Integrity: We celebrate Kerala’s diverse culture and
//               traditions and promote responsible interactions with local
//               communities.
//             </p>
//             <p>
//               • Customer-Centric: Our focus is always on providing the highest
//               level of service to ensure an enriching and enjoyable travel
//               experience.
//             </p>
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="5">
//           <Accordion.Header>
//             <h4>
//               <strong>Get in Touch</strong>
//             </h4>
//           </Accordion.Header>
//           <Accordion.Body>
//             We'd love to hear from you! Whether you’re planning your next trip
//             to Kerala or have any questions, feel free to reach out to us. Our
//             friendly team is here to assist you in making your Kerala journey an
//             experience of a lifetime.
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//       <Button variant="danger" onClick={navFun} className="mt-4 ms-3">
//         Back
//       </Button>
//     </>
//   );
// }

// export default AboutPage;
// import React from "react";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import Accordion from "react-bootstrap/Accordion";

// function AboutPage() {
//   const nav = useNavigate();
//   const navFun = () => {
//     nav("/");
//   };

//   return (
//     <>
//       <h1 className="text-center my-4 text-primary">About Us</h1>
//       <Accordion defaultActiveKey="0" className="shadow-lg">
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>
//             <h4 className="fw-bold text-dark">Welcome to Kerala Tourism</h4>
//           </Accordion.Header>
//           <Accordion.Body className="bg-light text-muted">
//             Kerala, often hailed as “God’s Own Country,” offers a harmonious
//             blend of nature, culture, and tradition. Our mission at Kerala
//             Tourism is to bring you face-to-face with Kerala’s stunning
//             backwaters, majestic hill stations, and serene beaches—all while
//             preserving its rich heritage and natural beauty.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="1">
//           <Accordion.Header>
//             <h4 className="fw-bold text-dark">Our Mission</h4>
//           </Accordion.Header>
//           <Accordion.Body className="bg-light text-muted">
//             We’re committed to promoting sustainable tourism that enhances the
//             lives of local communities and preserves Kerala’s natural charm.
//             Whether you seek relaxation, adventure, or cultural immersion, we
//             strive to offer authentic experiences that reflect the true essence
//             of Kerala.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="2">
//           <Accordion.Header>
//             <h4 className="fw-bold text-dark">Why Choose Us?</h4>
//           </Accordion.Header>
//           <Accordion.Body className="bg-light text-muted">
//             <ul className="list-unstyled">
//               <li>
//                 <strong>Personalized Adventures:</strong> Our tours cater to all
//                 kinds of travelers—be it thrill-seekers or those seeking
//                 tranquility.
//               </li>
//               <li>
//                 <strong>Local Insights:</strong> Our experienced local guides
//                 unveil hidden gems and share stories that go beyond the guidebook.
//               </li>
//               <li>
//                 <strong>Eco-Friendly Approach:</strong> We prioritize eco-conscious
//                 practices, ensuring minimal impact on the environment while
//                 supporting local communities.
//               </li>
//               <li>
//                 <strong>Top-Tier Service:</strong> From the moment you arrive
//                 until you depart, we’re here to make sure every aspect of your
//                 journey exceeds your expectations.
//               </li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="3">
//           <Accordion.Header>
//             <h4 className="fw-bold text-dark">What We Offer</h4>
//           </Accordion.Header>
//           <Accordion.Body className="bg-light text-muted">
//             <ul className="list-unstyled">
//               <li>
//                 <strong>Backwater Cruises:</strong> Glide through Kerala’s
//                 iconic backwaters and take in the beauty of village life.
//               </li>
//               <li>
//                 <strong>Hill Stations & Wildlife:</strong> Trek through the
//                 misty mountains of Munnar or enjoy wildlife safaris in Wayanad.
//               </li>
//               <li>
//                 <strong>Cultural Immersion:</strong> Discover Kerala’s vibrant
//                 culture with Kathakali performances, traditional arts, and
//                 ancient architecture.
//               </li>
//               <li>
//                 <strong>Ayurvedic Wellness:</strong> Refresh your mind and body
//                 with therapeutic Ayurvedic treatments at world-class wellness
//                 resorts.
//               </li>
//               <li>
//                 <strong>Adventure & Beaches:</strong> Whether you prefer
//                 sunbathing on sandy shores or adrenaline-packed water sports, we
//                 have something for everyone.
//               </li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="4">
//           <Accordion.Header>
//             <h4 className="fw-bold text-dark">Our Values</h4>
//           </Accordion.Header>
//           <Accordion.Body className="bg-light text-muted">
//             <ul className="list-unstyled">
//               <li>
//                 <strong>Nature First:</strong> We emphasize the importance of
//                 protecting Kerala’s diverse ecosystems for future generations.
//               </li>
//               <li>
//                 <strong>Respect for Culture:</strong> We honor Kerala’s rich
//                 heritage by promoting respectful interactions with local
//                 traditions and communities.
//               </li>
//               <li>
//                 <strong>Customer-Centered:</strong> Your satisfaction is our top
//                 priority, ensuring that every journey is tailored to your
//                 preferences.
//               </li>
//             </ul>
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="5">
//           <Accordion.Header>
//             <h4 className="fw-bold text-dark">Get in Touch</h4>
//           </Accordion.Header>
//           <Accordion.Body className="bg-light text-muted">
//             Have questions or ready to plan your next adventure? Our team is
//             always here to help you design a personalized Kerala experience that
//             you’ll never forget. Contact us today!
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//       <Button
//         variant="outline-danger"
//         onClick={navFun}
//         className="mt-4 ms-3 shadow-sm"
//       >
//         Back to Home
//       </Button>
//     </>
//   );
// }

// export default AboutPage;
import React from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <>
      <h1 className="text-center my-4 text-primary">About Us</h1>
      <Accordion defaultActiveKey="0" className="shadow-lg">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4 className="fw-bold text-dark">Welcome to Kerala Tourism</h4>
          </Accordion.Header>
          <Accordion.Body className="bg-light text-muted">
            Discover the enchanting beauty of Kerala, known as “God’s Own Country.” We aim to showcase Kerala’s breathtaking landscapes, vibrant culture, and rich traditions, ensuring every visitor experiences the best this paradise has to offer.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4 className="fw-bold text-dark">Our Mission</h4>
          </Accordion.Header>
          <Accordion.Body className="bg-light text-muted">
            Our mission is to promote sustainable tourism that supports local communities and protects the environment. We strive to provide unforgettable experiences that highlight Kerala’s natural beauty and cultural heritage.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4 className="fw-bold text-dark">Why Choose Us?</h4>
          </Accordion.Header>
          <Accordion.Body className="bg-light text-muted">
            <Card>
              <Card.Body>
                <ul className="list-unstyled">
                  <li><strong>Customized Experiences:</strong> Tailored tours to suit every traveler’s needs.</li>
                  <li><strong>Expert Guidance:</strong> Knowledgeable guides reveal the best-kept secrets of Kerala.</li>
                  <li><strong>Eco-Friendly Practices:</strong> Commitment to preserving nature while supporting local communities.</li>
                  <li><strong>Exceptional Service:</strong> Dedicated to exceeding your expectations from start to finish.</li>
                </ul>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h4 className="fw-bold text-dark">What We Offer</h4>
          </Accordion.Header>
          <Accordion.Body className="bg-light text-muted">
            <Card>
              <Card.Body>
                <ul className="list-unstyled">
                  <li><strong>Backwater Cruises:</strong> Experience the tranquility of Kerala’s backwaters.</li>
                  <li><strong>Hill Stations & Wildlife:</strong> Explore Munnar's mountains or go on a wildlife safari in Wayanad.</li>
                  <li><strong>Cultural Experiences:</strong> Engage with Kerala's rich cultural heritage through performances and festivals.</li>
                  <li><strong>Wellness Retreats:</strong> Rejuvenate with Ayurvedic treatments at top resorts.</li>
                  <li><strong>Adventure Activities:</strong> Enjoy everything from serene beaches to thrilling water sports.</li>
                </ul>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h4 className="fw-bold text-dark">Our Values</h4>
          </Accordion.Header>
          <Accordion.Body className="bg-light text-muted">
            <Card>
              <Card.Body>
                <ul className="list-unstyled">
                  <li><strong>Environmental Stewardship:</strong> We prioritize the protection of Kerala’s diverse ecosystems.</li>
                  <li><strong>Cultural Respect:</strong> Promoting respectful interactions with local traditions and communities.</li>
                  <li><strong>Customer Focused:</strong> We tailor every experience to meet your expectations and needs.</li>
                </ul>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h4 className="fw-bold text-dark">Get in Touch</h4>
          </Accordion.Header>
          <Accordion.Body className="bg-light text-muted">
            Have questions or ready to plan your next adventure? Our dedicated team is here to help you create a memorable Kerala experience. Contact us today!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      <Button
        variant="outline-danger"
        onClick={handleNavigation}
        className="mt-4 ms-3 shadow-sm"
      >
        Back to Home
      </Button>
    </>
  );
}

export default AboutPage;
