// Task Overview:
// Create a User Card component that:
//     Accepts a user details object (name, email, age, location, picture) as prop.
//     Displays user details in a card format.
//     Conditionally renders "Adult" or "Minor" based on age.
//     Adds a button to toggle email visibility.

const UserCard = ({ user }) => {

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <img
        style={{ borderRadius: "50%" }}
      />
      <h2>
        Name
      </h2>
      <p>
        Age: (Display age here) (Major/Minor based on age)
      </p>
      <p>
        Location: 
      </p>

      <p>Email: </p>

      <button>
        {/* Dynamic Button Text Here */}
      </button>
    </div>
  );
};

export default UserCard;