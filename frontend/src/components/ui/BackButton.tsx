import { useNavigate } from "react-router-dom";

// Back control for overlay-style pages. navigate(-1) returns wherever the user came from.
function BackButton({ label = "Back" }: { label?: string }) {
  const navigate = useNavigate();
  return (
    <button className="overlay-back" onClick={() => navigate(-1)}>
      <svg viewBox="0 0 24 24">
        <polyline points="15 18 9 12 15 6" />
      </svg>
      {label}
    </button>
  );
}

export default BackButton;
