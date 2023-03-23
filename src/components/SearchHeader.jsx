import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { TfiSearch } from "react-icons/tfi";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header>
      <Link to="/">
        <FaYoutube />
        <ImYoutube2 />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <button>
        <TfiSearch />
      </button>
    </header>
  );
}
