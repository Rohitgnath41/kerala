// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import KochiPlace from "./images/KochiPlace.jpg";
// import AlappuzhaPlace from "./images/AlappuzhaPlace.jpg";
// import MunnarPlace from "./images/MunnarPlace.jpg";
// import ThiruvananthapuramPlace from "./images/ThiruvananthapuramPlace.jpg";
// import WayanadPlace from "./images/WayanadPlace.jpg";
// import KovalamPlace from "./images/KovalamPlace.jpg";
// import KozhikodePlace from "./images/KozhikodePlace.jpg";
// import VarkalaPlace from "./images/VarkalaPlace.jpg";

// function PlaceView() {

//   const params = useParams();
//   console.log(params);

//   const place = [
//     {
//       id: 1,
//       title: "Kochi",
//       details: "Kochi, also known as Cochin, is a vibrant city located in the southwestern part of India, within the state of Kerala. Renowned for its rich history, Kochi is often referred to as the Queen of the Arabian Sea due to its prominent position as a significant trading port for centuries. The city’s unique blend of cultures, influenced by its historical trade connections with various countries, is evident in its diverse architecture, cuisine, and traditions. The city boasts a stunning waterfront, where the iconic Chinese fishing nets line the shoreline, showcasing a traditional fishing method that dates back to the 14th century. Kochi’s historical significance is further highlighted by landmarks such as Fort Kochi, where one can explore colonial-era buildings, art galleries, and quaint cafes, reflecting the city’s artistic spirit. The Jewish Synagogue, built in 1568, is another notable site, featuring exquisite chandeliers and hand-painted blue tiles, making it a testament to Kochi’s historical Jewish community. Additionally, the Mattancherry Palace, also known as the Dutch Palace, displays intricate murals and artifacts that narrate the history of Kerala’s royal families. The bustling local markets, like the Spice Market, are a feast for the senses, offering a glimpse into the region's spice trade, which has been a vital part of Kochi’s economy. Culinary enthusiasts can indulge in the flavors of Kerala through its famous seafood dishes, coconut-infused curries, and unique street food. Kochi is also recognized for its vibrant festivals, including the annual Kochi Muziris Biennale, an international art exhibition that attracts artists and visitors from around the globe. This event has put Kochi on the global art map, transforming the city into a hub for contemporary art. Moreover, the serene backwaters of Kochi, with their picturesque houseboats, offer a tranquil escape for travelers seeking to experience the natural beauty of Kerala. As a thriving urban center, Kochi is well-connected by road, rail, and air, making it an accessible destination for tourists. The city's dynamic blend of history, culture, and natural beauty makes Kochi a must-visit destination in India, showcasing the essence of Kerala’s heritage while embracing modernity.",
//       image: KochiPlace,
//     },
//     {
//       id: 2,
//       title: "Alappuzha",
//       details: "Alappuzha, often referred to as Alleppey, is a picturesque town located in the southern Indian state of Kerala. Renowned for its stunning backwaters, lush green landscapes, and intricate network of canals, Alappuzha is a prominent destination for both domestic and international tourists. The town is often hailed as the Venice of the East due to its extensive waterways, which serve as vital transportation routes for locals and provide a unique means of exploring the region. Visitors can embark on serene houseboat cruises, allowing them to soak in the tranquil beauty of the backwaters, witness traditional fishing practices, and experience the vibrant local culture. The annual Nehru Trophy Boat Race, held on the Punnamada Lake, is a significant event that attracts tourists from all over, showcasing the rich heritage of boat racing in Kerala. Alappuzha is also home to several beautiful beaches, including the popular Alappuzha Beach, where visitors can relax on the sandy shores, enjoy water sports, and witness breathtaking sunsets. The town is dotted with historical landmarks, such as the Alappuzha Lighthouse and the ancient Krishnapuram Palace, which offer glimpses into its rich cultural heritage. Additionally, Alappuzha’s diverse culinary scene is a highlight, featuring an array of traditional Kerala dishes that reflect the region's agricultural bounty and coastal flavors. The local cuisine, often centered around rice, seafood, and coconut, is a must-try for any visitor. Alappuzha is also a significant center for coir production, where the fibers from coconut husks are processed into mats, ropes, and various handicrafts, contributing to the local economy. The vibrant markets and bustling streets offer a chance for visitors to engage with local artisans and shop for unique souvenirs. With its breathtaking natural beauty, rich cultural heritage, and warm hospitality, Alappuzha stands out as a quintessential destination in Kerala, inviting travelers to immerse themselves in its serene surroundings and experience the charm of traditional Kerala life. Whether it’s a leisurely cruise through the backwaters or savoring the local cuisine, Alappuzha promises a memorable experience for all who visit.",
//       image: AlappuzhaPlace,
//     },
//     {
//       id: 3,
//       title: "Munnar",
//       details: "Munnar is a picturesque hill station located in the Idukki district of Kerala, India. Known for its sprawling tea gardens, mist-covered hills, and pleasant climate, Munnar is a favorite destination for nature lovers and honeymooners alike. Situated at an altitude of approximately 1,600 meters (5,200 feet) above sea level, Munnar offers breathtaking views of lush green landscapes and the Western Ghats mountain range. One of the main attractions in Munnar is its extensive tea plantations, many of which date back to the British colonial era. Visitors can explore these plantations and learn about tea processing at various tea estates and museums. The Tata Tea Museum, for example, offers a glimpse into the history and significance of tea production in the region. The cool climate and fertile soil make Munnar an ideal location for growing high-quality tea, and the sight of neatly manicured tea gardens spread across the hills is truly captivating. Apart from tea, Munnar is also home to a variety of wildlife and exotic flora. The Eravikulam National Park, located nearby, is famous for the endangered Nilgiri Tahr, a mountain goat species found in the Western Ghats. The park is also home to the Anamudi Peak, the highest point in South India, standing at 2,695 meters (8,842 feet). The Neelakurinji flower, which blooms once every twelve years, transforms the landscape into a sea of blue, attracting visitors from around the world. Munnar offers numerous trekking and hiking opportunities, including trails through scenic forests, waterfalls, and hills. Popular spots include Echo Point, where sound echoes naturally, and Top Station, which provides panoramic views of the surrounding valleys. Additionally, visitors can explore Mattupetty Dam and Lake, where boating is a popular activity, or visit the nearby Kundala Lake for its serene beauty. The town’s cool and refreshing weather makes it a year-round destination, though the best time to visit is from September to March. Munnar’s blend of natural beauty, adventure, and tranquility ensures it remains one of Kerala's most cherished destinations.",
//       image: MunnarPlace,
//     },
//     {
//       id: 4,
//       title: "Thiruvananthapuram",
//       details: "Thiruvananthapuram, the capital city of Kerala, is located on the southwestern coast of India. Often referred to by its colonial name, Trivandrum, the city is known for its rich cultural heritage, historical significance, and natural beauty. Thiruvananthapuram has been a major center for political, academic, and scientific advancements in Kerala, housing several government offices, educational institutions, and research centers. The city is dotted with lush greenery, scenic beaches, and hillocks, making it a popular tourist destination. One of the most iconic landmarks is the Padmanabhaswamy Temple, a grand Hindu temple dedicated to Lord Vishnu, known for its intricate architecture and spiritual significance. This temple has attracted global attention due to its massive hidden wealth and historical treasures. Kovalam Beach, located a short drive from the city center, is one of the most popular tourist spots, drawing both locals and international visitors for its pristine shores and tranquil atmosphere. Thiruvananthapuram also serves as a hub for science and technology in Kerala. It is home to the Vikram Sarabhai Space Centre (VSSC), which is a part of the Indian Space Research Organization (ISRO), and several other premier institutions like the Technopark, India's first IT park, which has been instrumental in shaping Kerala’s IT landscape. Additionally, the city boasts several museums, galleries, and parks, including the Napier Museum, a showcase of Kerala’s art and history, and the Kanakakunnu Palace, a venue for cultural events and festivals. Despite its modern development, Thiruvananthapuram has preserved its traditional charm. The local cuisine, dominated by flavors of coconut, spices, and seafood, is a reflection of Kerala’s culinary diversity. The city experiences a tropical climate, with warm temperatures throughout the year and heavy monsoons during the rainy season. Thiruvananthapuram is well-connected by road, rail, and air, with an international airport facilitating global connectivity. Its blend of heritage, technology, education, and scenic beauty make it a unique and vibrant city that continues to thrive as a center of growth and culture in South India.",
//       image: ThiruvananthapuramPlace,
//     },
//     {
//       id: 5,
//       title: "Wayanad",
//       details: "Wayanad, a beautiful district located in the northeastern part of Kerala, India, is a lush green paradise nestled in the Western Ghats. Known for its scenic landscapes, rich history, and vibrant culture, Wayanad is a haven for nature lovers and adventure seekers. The district is blessed with dense forests, mist-covered mountains, cascading waterfalls, and vast stretches of spice plantations, making it one of the most picturesque destinations in South India. One of Wayanad's key attractions is its serene wildlife sanctuaries, such as the Wayanad Wildlife Sanctuary, which is home to a diverse range of flora and fauna, including elephants, tigers, leopards, and various bird species. The sanctuary offers visitors the opportunity to explore the natural beauty of the region through guided treks and safari rides. Another must-visit spot is the Edakkal Caves, which contain prehistoric rock engravings that date back thousands of years, offering a glimpse into the region's ancient civilization. The district is also famous for its waterfalls, with Meenmutty, Soochipara, and Kanthanpara Falls being among the most popular. These waterfalls cascade down rocky cliffs, surrounded by dense greenery, creating a tranquil environment that is perfect for relaxation and photography. Wayanad's hill stations, such as Lakkidi and Vythiri, offer breathtaking views of the surrounding valleys and are ideal spots for a peaceful retreat. Wayanad's cultural heritage is equally rich, with a blend of tribal traditions and influences from various settlers over the centuries. The indigenous tribal communities of Wayanad have a unique way of life, and their traditional art forms, rituals, and festivals add to the cultural charm of the region. The district is also known for its spice plantations, where cardamom, pepper, and coffee are grown in abundance, contributing to Wayanad's agricultural economy. In addition to its natural beauty and cultural significance, Wayanad offers numerous opportunities for adventure activities such as trekking, camping, and boating. The district's pleasant climate throughout the year makes it a year-round destination for tourists seeking an escape from the hustle and bustle of city life. Whether you're exploring the wildlife, delving into history, or simply enjoying the scenic landscapes, Wayanad promises an unforgettable experience.",
//       image: WayanadPlace,
//     },
//     {
//       id: 6,
//       title: "Kovalam",
//       details: "Kovalam, a renowned beach destination located in the southern state of Kerala, India, is a picturesque coastal town that has captivated travelers for decades. Known for its crescent-shaped beaches, Kovalam is a paradise for sunbathers, surfers, and those seeking tranquility amidst natural beauty. The town boasts three major beaches—Lighthouse Beach, Hawah Beach, and Samudra Beach—each offering its unique charm. Lighthouse Beach, the most popular, is named after the old Vizhinjam lighthouse situated on a rocky promontory, providing panoramic views of the Arabian Sea. The beach is lined with vibrant cafes, seafood restaurants, and shops selling local crafts, making it a lively spot for both tourists and locals. Hawah Beach, also known as Eve's Beach, is a haven for swimmers and offers a more serene experience compared to the bustling Lighthouse Beach. Samudra Beach, on the other hand, is quieter and less frequented, ideal for those looking for solitude. Kovalam's calm waters and shallow depths make it a popular spot for safe swimming, while its gentle waves attract surfers from around the world. Besides the beaches, Kovalam offers a range of Ayurvedic treatments and massages, which draw health and wellness enthusiasts to the area. The town's Ayurvedic centers are renowned for their authentic practices, adding a holistic element to the overall experience. Kovalam is also a cultural hub, with its traditional Kerala architecture and rich heritage reflected in the local temples and festivals. The town’s proximity to Kerala's capital, Thiruvananthapuram, makes it an accessible destination for travelers looking to explore both beachside relaxation and urban attractions. Kovalam is well-connected by road and offers accommodations ranging from luxury resorts to budget-friendly options, catering to a wide range of tourists. The best time to visit Kovalam is during the winter months, from October to February, when the weather is pleasant and ideal for beach activities. In essence, Kovalam is a perfect blend of scenic beauty, cultural richness, and wellness tourism, making it a must-visit destination for those looking to unwind by the sea while experiencing the unique charm of Kerala.",
//       image: KovalamPlace,
//     },
//     {
//       id: 7,
//       title: "Kozhikode",
//       details: "Kozhikode, also known as Calicut, is a prominent city in the southern state of Kerala, India. Historically significant as a major trading port, Kozhikode played a key role in India's spice trade, particularly in black pepper and cardamom. The city's fame grew exponentially in 1498 when Portuguese explorer Vasco da Gama landed on its shores, establishing direct trade links between Europe and the Malabar Coast. Over the centuries, Kozhikode became a melting pot of cultures, with influences from Arab, Chinese, and European traders. Today, it is known for its vibrant cultural heritage, diverse architecture, and scenic landscapes. The city is nestled between the Arabian Sea on the west and the lush Western Ghats on the east, offering a combination of serene beaches, rich backwaters, and green hill ranges. Kozhikode Beach is a popular destination, offering a peaceful retreat and an opportunity to witness beautiful sunsets. For those interested in history, the Kappad Beach nearby holds historical significance as the landing spot of Vasco da Gama. The city is also home to several architectural landmarks, including the Tali Shiva Temple, a testament to Kerala’s intricate temple architecture, and the Mishkal Mosque, an ancient structure reflecting Kozhikode’s Islamic heritage. In addition to its natural beauty and historic charm, Kozhikode is renowned for its food, particularly the famous Malabar cuisine. The city's street food culture, highlighted by dishes like Kozhikode biryani, pathiri, and banana chips, attracts food lovers from around the country. The sweet dish Kozhikodan Halwa is another specialty that has made its mark beyond regional boundaries. Kozhikode also holds a reputation for being a hub of education and healthcare, housing some of the best institutions in Kerala. The Indian Institute of Management Kozhikode (IIMK) is a prestigious institution that draws students from all over the country. The city is well-connected by road, rail, and air, with the Calicut International Airport offering flights to major domestic and international destinations. Kozhikode’s modern growth, combined with its deep historical roots and cultural diversity, makes it one of Kerala’s most fascinating cities, offering a unique blend of tradition and progress.",
//       image: KozhikodePlace,
//     },
//     {
//       id: 8,
//       title: "Varkala",
//       details: "Varkala, a stunning coastal town in the southern state of Kerala, India, is renowned for its breathtaking cliffs, pristine beaches, and vibrant culture. Nestled between the Arabian Sea and lush greenery, Varkala offers a serene escape from the bustling city life. The town is famous for its unique geological formations, characterized by the dramatic red cliffs that rise sharply from the coastline, providing spectacular views of the azure sea. Varkala Beach, also known as Papanasam Beach, is a major attraction, drawing visitors with its soft golden sands and gentle waves, ideal for sunbathing and swimming. The beach is culturally significant as it is believed that a dip in its waters can wash away sins, making it a popular pilgrimage site. Alongside the beach, the vibrant promenade is lined with cafes, shops, and Ayurvedic wellness centers, where tourists can indulge in traditional treatments and yoga sessions. One of the most iconic landmarks in Varkala is the Janardhana Swamy Temple, a 2,000-year-old temple dedicated to Lord Vishnu. This temple, nestled amidst coconut groves, attracts both devotees and tourists alike, showcasing the region's rich spiritual heritage. Varkala is also a hub for adventure enthusiasts, offering opportunities for water sports such as parasailing, surfing, and fishing. As the sun sets, the town comes alive with vibrant nightlife, featuring beach shacks and restaurants serving delectable seafood and local Kerala cuisine, including spicy curries and fresh fish. The surrounding area is dotted with charming villages, paddy fields, and tranquil backwaters, providing a glimpse into the traditional Keralan lifestyle. The best time to visit Varkala is between October and March when the weather is pleasant and ideal for outdoor activities. Overall, Varkala is a picturesque destination that seamlessly blends natural beauty, cultural richness, and adventure, making it a must-visit for anyone seeking a unique travel experience in India. Whether you’re looking to relax on the beach, explore ancient temples, or enjoy the local cuisine, Varkala offers something for every traveler.",
//       image: VarkalaPlace,
//     },
//   ];

//   return (
//     <>
//       <Container>
//         <Row className="mt-5">
//           {place
//             .filter((list) => list.id == params.id)
//             .map((listPlace) => (
//               <>
//                   <Col lg={6}>
//                     <img src={listPlace.image} alt="" style={{width:"500px",height:"700px"}}/>
//                   </Col>
//                   <Col lg={6}>
//                     <h1 className="text-primary fw-bold">{listPlace.title}</h1>
//                     <p>{listPlace.details}</p>
//                   </Col>
//               </>
//             ))}
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default PlaceView;
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function PlaceView() {
  const params = useParams();
  console.log(params);

  const place = [
    {
      id: 1,
      title: "Kochi",
      details: "Kochi, often called Cochin, is a bustling city located in the southwestern state of Kerala, India. Known for its rich history as a trading port, Kochi showcases a blend of cultures with its diverse architecture, delicious seafood, and vibrant local markets. Notable attractions include Fort Kochi, with its colonial-era buildings, the Chinese fishing nets along the waterfront, and the famous Jewish Synagogue. Kochi is also home to the annual Kochi Muziris Biennale, an international art exhibition that highlights the city's artistic spirit. The serene backwaters of Kochi provide a tranquil escape, making it a must-visit destination for travelers.",
      image: "https://thetravelingca.com/wp-content/uploads/2020/07/2230515359_cc3f704ef1_k-1.jpg",
    },
    {
      id: 2,
      title: "Alappuzha",
      details: "Alappuzha, also known as Alleppey, is a beautiful town in Kerala famous for its stunning backwaters and serene landscapes. Often referred to as the 'Venice of the East,' it features an extensive network of canals and is a popular destination for houseboat cruises. The town hosts the annual Nehru Trophy Boat Race and offers beautiful beaches like Alappuzha Beach, known for its breathtaking sunsets. Visitors can also explore historical sites like the Alappuzha Lighthouse and indulge in the local cuisine, making Alappuzha a captivating destination.",
      image: "https://th.bing.com/th/id/OIP.SsMbCQ217fC9nwj2ASXo3QHaE7?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      title: "Munnar",
      details: "Munnar is a stunning hill station in the Idukki district of Kerala, known for its lush tea plantations, misty hills, and cool climate. Situated at an altitude of approximately 1,600 meters, Munnar offers breathtaking views of the Western Ghats. Key attractions include the Tata Tea Museum, where visitors can learn about tea processing, and the Eravikulam National Park, home to the endangered Nilgiri Tahr. Munnar is also a popular destination for trekking, with scenic trails leading to picturesque spots like Mattupetty Dam and Echo Point.",
      image: "https://www.revv.co.in/blogs/wp-content/uploads/2021/02/Munnar-HD-Image.jpg",
    },
    {
      id: 4,
      title: "Thiruvananthapuram",
      details: "Thiruvananthapuram, the capital city of Kerala, is known for its rich cultural heritage and significant historical landmarks. Home to the famous Padmanabhaswamy Temple, the city is a blend of modernity and tradition. Kovalam Beach, a popular tourist destination nearby, offers stunning views and a relaxing atmosphere. Thiruvananthapuram is also a hub for education and technology, with institutions like the Vikram Sarabhai Space Centre and Technopark. The city's museums and galleries reflect its artistic spirit, making it a vibrant destination.",
      image: "https://keralatourism.travel/images/destinations/headers/trivandrum-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    },
    {
      id: 5,
      title: "Wayanad",
      details: "Wayanad, a district in northeastern Kerala, is renowned for its lush green landscapes, wildlife sanctuaries, and rich cultural heritage. The region is home to dense forests and scenic waterfalls, with popular spots like Meenmutty and Soochipara Falls attracting nature enthusiasts. Wayanad is also known for its ancient Edakkal Caves, featuring prehistoric rock carvings. Visitors can explore the Wayanad Wildlife Sanctuary and indulge in adventure activities like trekking and camping, making Wayanad a perfect getaway for nature lovers.",
      image: "https://wayanadtourism.co.in/images/places-to-visit/headers/lakkidi-view-point-wayanad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    },
    {
      id: 6,
      title: "Kovalam",
      details: "Kovalam is a famous beach destination in Kerala, celebrated for its crescent-shaped beaches and vibrant atmosphere. The three major beaches—Lighthouse Beach, Hawah Beach, and Samudra Beach—offer unique experiences, from lively beach activities to peaceful retreats. Kovalam is also known for its Ayurvedic wellness centers, attracting visitors seeking relaxation and rejuvenation. The town's seafood restaurants and local shops add to its charm, making Kovalam a perfect spot for beach lovers and wellness enthusiasts alike.",
      image: "https://www.keralatourism.org/images/destination/large/lighthouse_beach_kovalam20131205103646_432_1.jpg",
    },
    {
      id: 7,
      title: "Kozhikode",
      details: "Kozhikode, historically known as Calicut, is a city rich in heritage and culture. It was a major trading port, especially for spices, and played a significant role in the history of India. The city features beautiful beaches like Kozhikode Beach and historical sites such as the Tali Shiva Temple and Mishkal Mosque. Kozhikode is also renowned for its Malabar cuisine, including the famous Kozhikode biryani and Halwa. The city’s vibrant atmosphere and deep historical roots make it a fascinating destination for travelers.",
      image: "https://i.ytimg.com/vi/8OQ1lwPtTuo/maxresdefault.jpg",
    },
    {
      id: 8,
      title: "Varkala",
      details: "Varkala is a picturesque coastal town in Kerala, known for its stunning cliffs and serene beaches. The dramatic red cliffs overlooking the Arabian Sea create a beautiful backdrop for Varkala Beach, a popular spot for sunbathing and swimming. The Janardhana Swamy Temple, a 2,000-year-old shrine, adds a cultural touch to the town. Varkala is also a hub for adventure sports and wellness tourism, offering yoga sessions and Ayurvedic treatments, making it a unique destination for travelers seeking relaxation and adventure.",
      image: "https://luxoticholidays.com/backend/web/destinations/varkala-beach-kerala-1483460469.jpg",
    },
  ];

  return (
    <Container>
      <Row className="mt-5">
        {place
          .filter((list) => list.id == params.id)
          .map((listPlace) => (
            <React.Fragment key={listPlace.id}>
              <Col lg={6}>
                <img src={listPlace.image} alt="" style={{ width: "500px", height: "700px" }} />
              </Col>
              <Col lg={6}>
                <h1 className="text-primary fw-bold">{listPlace.title}</h1>
                <p>{listPlace.details}</p>
              </Col>
            </React.Fragment>
          ))}
      </Row>
    </Container>
  );
}

export default PlaceView;

