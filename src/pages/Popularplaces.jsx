import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";

function PopularPlaces() {

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [places, setPlaces] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    latitude: "",
    longitude: "",
    rating: "",
    image: "",
    reference_image1: "",
    reference_image2: "",
    reference_image3: "",
    description: ""
  });

  // Fetch Data From Supabase
  const fetchPlaces = async () => {

  const { data, error } = await supabase
    .from("popular_places")
    .select("*")
    .order("created_at", { ascending: false });

  console.log("Fetched Places:", data);
  data?.forEach((place)=>{
  console.log("IMAGE URL:", place.image);
   console.log("Reference 1:", place.reference_image1);
});

  if (error) {
    console.log(error);
  } 
  else {
    setPlaces(data);
  }
};
 
  useEffect(() => {
    fetchPlaces();
  }, []);
  // Input Handle
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  // Add Place
  const createPlace = async () => {
    console.log("Button Clicked");
    console.log(formData);

    const { data, error } = await supabase
      .from("popular_places")
      .insert([
        {
          name: formData.name,
          location: formData.location,
          latitude: Number(formData.latitude),
          longitude: Number(formData.longitude),
          rating: formData.rating,
          image: formData.image,
          reference_image1: formData.reference_image1,
          reference_image2: formData.reference_image2,
          reference_image3: formData.reference_image3,
          description: formData.description,
        },
      ])
      .select();

    console.log("Data:", data);
    console.log("Error:", error);

    if (error) {
      alert(error.message);
      return;
    }
    alert("Data Inserted Successfully");
  }
  const filteredPlaces = places.filter((place) =>

    place.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );
  return (

    <div
      style={{
        padding: "30px",
        background: "#f4f7fb",
        minHeight: "100vh"
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <h1 style={{ color: "#093056" }}>
          Popular Places
        </h1>
        <button
          onClick={() => setShowModal(true)}
          style={{
            background: "#093056",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
          + Create Popular Place
        </button>
      </div>
      <input
        type="text"
        placeholder="Search Places..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "12px",
          margin: "25px 0",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          gap: "20px"
        }}>
        {
          places.map((place) => (
            <div
              key={place.id}
              style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,.1)"
              }}>

              <img
                src={place.image}
                alt={place.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover"
                }} />
                
              <div style={{ padding: "15px" }}>

                <h2 style={{ color: "#093056" }}>
                  {place.name}
                </h2>
                  {/* Reference Images */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "10px"
                  }}
                >
                  {place.reference_image1 && (
                    <img
                      src={place.reference_image1}
                      alt="Reference 1"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />
                  )}
                  {place.reference_image2 && (
                    <img
                      src={place.reference_image2}
                      alt="Reference 2"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />
                  )}

                  {place.reference_image3 && (
                    <img
                      src={place.reference_image3}
                      alt="Reference 3"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />
                  )}
                </div>
                <p>
                  📍 {place.location || place.city}
                </p>
                <p>
                  ⭐ {place.rating}
                </p>
                <p>
                  {place.description}
                </p>
              

              </div>

            </div>
          ))
        }
      </div>

      {/* MODAL */}
      {
        showModal &&
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <div
            style={{
              background: "white",
              width: "450px",
              padding: "25px",
              borderRadius: "12px"
            }}>
            <h2>
              Create Popular Place
            </h2>
            <input
              name="name"
              placeholder="Place Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0"
              }}
            />

            <input
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0"
              }}
            />

            <input
              name="latitude"
              placeholder="Latitude"
              value={formData.latitude}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0"
              }}
            />

            <input
              name="longitude"
              placeholder="Longitude"
              value={formData.longitude}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0"
              }}
            />

            <input
              name="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0"
              }}
            />

            <input
              name="image"
              placeholder="Main Image URL"
              value={formData.image}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0"
              }}
            />

            <input
              name="reference_image1"
              placeholder="Reference Image 1 URL"
              value={formData.reference_image1}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0"
              }}
            />

            <input
              name="reference_image2"
              placeholder="Reference Image 2 URL"
              value={formData.reference_image2}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0"
              }}
            />

            <input
              name="reference_image3"
              placeholder="Reference Image 3 URL"
              value={formData.reference_image3}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0"
              }}
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                height: "80px"
              }} />
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px"
              }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  flex: 1,
                  padding: "10px"
                }}>
                Cancel
              </button>
              <button
                onClick={createPlace}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: "#093056",
                  color: "white",
                  border: "none"
                }}>
                Create
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}


export default PopularPlaces;

