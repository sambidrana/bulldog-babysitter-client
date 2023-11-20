import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        console.log("User registered successfully!");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            className="border border-gray-200 p-2 rounded-md"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            className="border border-gray-200 p-2 rounded-md"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            className="border border-gray-200 p-2 rounded-md"
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <label>
        Address:
        <input
          className="border border-gray-200 p-2 rounded-md"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </label>
      <div>
        <button className="bg-blue-100 px-8 py-2 rounded-lg" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
